import { promises as fs } from "node:fs";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

interface RegistryFile {
  path: string;
  type: string;
  target?: string;
  content?: string;
}

interface RegistryItem {
  name: string;
  type: string;
  title: string;
  description: string;
  registryDependencies?: string[];
  dependencies?: string[];
  files: RegistryFile[];
  categories?: string[];
}

interface Registry {
  $schema: string;
  name: string;
  homepage: string;
  items: RegistryItem[];
}

export const getPackage = async (packageName: string) => {
  const registryPath = join(process.cwd(), "registry.json");
  const registryContent = await readFile(registryPath, "utf-8");
  const registry = JSON.parse(registryContent) as Registry;

  const packageItem = registry.items.find(
    (item) => item.name === packageName
  );

  if (!packageItem) {
    throw new Error(`Package ${packageName} not found in registry`);
  }

  const filesWithContent = await Promise.all(
    packageItem.files.map(async (file) => {
      const filePath = join(process.cwd(), file.path);
      const content = await fs.readFile(filePath, "utf-8");
      return { ...file, content };
    })
  );

  return {
    $schema: "https://ui.shadcn.com/schema/registry-item.json",
    ...packageItem,
    files: filesWithContent,
  };
};

export const getAllPackageNames = async () => {
  const registryPath = join(process.cwd(), "registry.json");
  const registryContent = await readFile(registryPath, "utf-8");
  const registry = JSON.parse(registryContent) as Registry;

  return registry.items.map((item) => item.name);
};
