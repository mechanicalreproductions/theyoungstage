import type { Resource } from "@/data/types";
import { ageBandsForResource, categoryName } from "@/data/types";

const FORMAT_LABEL: Record<NonNullable<Resource["format"]>, string> = {
  article: "Article",
  scripts: "Scripts",
  "lesson-plans": "Lesson plans",
  videos: "Videos",
  ebook: "eBook",
  pdf: "PDF",
  directory: "Directory",
};

export function ResourceCard({ r, showCategory = false }: { r: Resource; showCategory?: boolean }) {
  const bands = ageBandsForResource(r);
  return (
    <a
      href={r.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col gap-3 rounded-xl border border-stone-200/80 bg-white/60 p-6 transition hover:-translate-y-0.5 hover:border-stone-300 hover:bg-white hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.15)] dark:border-stone-800 dark:bg-stone-900/40 dark:hover:border-stone-700 dark:hover:bg-stone-900"
    >
      <div className="flex flex-wrap items-center gap-2 text-[11px] font-medium uppercase tracking-[0.12em] text-stone-500 dark:text-stone-400">
        {showCategory && (
          <>
            <span className="text-stone-700 dark:text-stone-300">{categoryName(r.category)}</span>
            <span className="opacity-40">·</span>
          </>
        )}
        <span>{r.source}</span>
        {r.format && (
          <>
            <span className="opacity-40">·</span>
            <span>{FORMAT_LABEL[r.format]}</span>
          </>
        )}
        {r.free && (
          <span className="ml-auto rounded-full border border-emerald-600/20 bg-emerald-50 px-2 py-0.5 text-[10px] tracking-wider text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-500/10 dark:text-emerald-300">
            FREE
          </span>
        )}
      </div>
      <h3 className="font-serif text-xl leading-snug text-stone-900 dark:text-stone-50">
        {r.title}
      </h3>
      <p className="text-sm leading-relaxed text-stone-600 dark:text-stone-300">{r.description}</p>
      <div className="mt-auto flex flex-wrap items-center gap-2 pt-2">
        {bands.map((b) => (
          <span
            key={b}
            className="rounded-full bg-stone-100 px-2.5 py-0.5 text-[11px] font-medium text-stone-600 dark:bg-stone-800 dark:text-stone-300"
          >
            Ages {b}
          </span>
        ))}
        <span className="ml-auto text-[12px] text-stone-400 transition group-hover:text-stone-700 dark:group-hover:text-stone-200">
          Open ↗
        </span>
      </div>
    </a>
  );
}
