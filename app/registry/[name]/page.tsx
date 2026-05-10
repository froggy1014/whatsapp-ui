import Link from "next/link";
import { notFound } from "next/navigation";
import { getRegistryItem, getRegistryItems } from "@/lib/registry";
import { CopyButton } from "@/components/copy-button";

const BASE_URL =
  process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://whatsapp-ui.vercel.app";

export async function generateStaticParams() {
  return getRegistryItems().map(({ name }) => ({ name }));
}

export default async function RegistryItemPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const item = getRegistryItem(name);
  if (!item) notFound();

  const registryUrl = `${BASE_URL}/r/${item.name}.json`;
  const npxCmd = `npx shadcn@latest add ${registryUrl}`;

  return (
    <div className="min-h-screen bg-white dark:bg-[#111b21]">
      {/* Header */}
      <header className="border-b border-[#e9edef] dark:border-[rgba(233,237,239,0.12)] px-6 py-4">
        <div className="mx-auto max-w-4xl flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-1 text-[13px] text-[#667781] hover:text-[#111b21] dark:hover:text-[#e9edef] transition-colors"
          >
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back
          </Link>
          <span className="text-[#e9edef] dark:text-[rgba(233,237,239,0.2)]">/</span>
          <span className="text-[13px] font-medium text-[#111b21] dark:text-[#e9edef]">
            {item.title}
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-8">
        {/* Title row */}
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h1 className="text-[24px] font-bold text-[#111b21] dark:text-[#e9edef]">
                {item.title}
              </h1>
              {item.dependencies?.includes("@base-ui/react") && (
                <span className="rounded-full bg-[#d9fdd3] dark:bg-[#005c4b] px-2 py-0.5 text-[12px] font-medium text-[#1daa61] dark:text-[#25d366]">
                  base-ui
                </span>
              )}
            </div>
            <p className="text-[14px] text-[#667781] max-w-xl">{item.description}</p>
          </div>
          <CopyButton text={npxCmd} />
        </div>

        {/* Install */}
        <section className="mb-8 rounded-xl border border-[#e9edef] dark:border-[rgba(233,237,239,0.12)] p-5">
          <h2 className="text-[13px] font-semibold uppercase tracking-wide text-[#667781] mb-3">
            Installation
          </h2>
          <div className="flex items-center justify-between rounded-lg bg-[#f0f2f5] dark:bg-[rgba(233,237,239,0.06)] px-4 py-3">
            <code className="text-[13px] font-mono text-[#111b21] dark:text-[#e9edef] break-all">
              {npxCmd}
            </code>
            <CopyButton text={npxCmd} />
          </div>
        </section>

        {/* Dependencies */}
        {(item.dependencies?.length || item.registryDependencies?.length) ? (
          <section className="mb-8 rounded-xl border border-[#e9edef] dark:border-[rgba(233,237,239,0.12)] p-5">
            <h2 className="text-[13px] font-semibold uppercase tracking-wide text-[#667781] mb-3">
              Dependencies
            </h2>
            <div className="flex flex-wrap gap-2">
              {item.dependencies?.map((dep) => (
                <span key={dep} className="rounded-md bg-[#f0f2f5] dark:bg-[rgba(233,237,239,0.06)] px-2.5 py-1 text-[12px] font-mono text-[#111b21] dark:text-[#e9edef]">
                  {dep}
                </span>
              ))}
              {item.registryDependencies?.map((dep) => (
                <Link key={dep} href={`/registry/${dep}`} className="rounded-md bg-[#d9fdd3] dark:bg-[#005c4b] px-2.5 py-1 text-[12px] font-mono text-[#1daa61] dark:text-[#25d366] hover:opacity-80 transition-opacity">
                  {dep}
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        {/* Files */}
        <section className="rounded-xl border border-[#e9edef] dark:border-[rgba(233,237,239,0.12)] p-5">
          <h2 className="text-[13px] font-semibold uppercase tracking-wide text-[#667781] mb-3">
            Files
          </h2>
          <ul className="space-y-2">
            {item.files?.map((file) => (
              <li key={file.path} className="flex items-center gap-2 text-[13px]">
                <span className="text-[#667781]">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                    <polyline points="14 2 14 8 20 8"/>
                  </svg>
                </span>
                <code className="font-mono text-[#111b21] dark:text-[#e9edef]">{file.path}</code>
                <span className="ml-auto rounded bg-[#f0f2f5] dark:bg-[rgba(233,237,239,0.06)] px-1.5 py-0.5 text-[11px] text-[#667781]">
                  {file.type.replace("registry:", "")}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
