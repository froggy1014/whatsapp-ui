import registry from "@/registry.json";

export interface RegistryItem {
  name: string;
  type: string;
  title: string;
  description?: string;
  dependencies?: string[];
  registryDependencies?: string[];
  files?: { path: string; type: string; target: string }[];
}

export function getRegistryItems(): RegistryItem[] {
  return registry.items as RegistryItem[];
}

export function getRegistryItem(name: string): RegistryItem | undefined {
  return getRegistryItems().find((item) => item.name === name);
}
