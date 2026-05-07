import Link from "next/link";
import { Hero } from "@/components/Hero";
import { ResourceCard } from "@/components/ResourceCard";
import { AGE_BANDS, CATEGORIES } from "@/data/types";
import { RESOURCES } from "@/data/resources";

export default function Home() {
  const featured = [
    "folger-kids",
    "dn-drama-games",
    "freedrama-children",
    "aaron-shepard-rt",
    "mtr-200",
    "geffen-warmups",
  ]
    .map((id) => RESOURCES.find((r) => r.id === id))
    .filter((r): r is NonNullable<typeof r> => Boolean(r));

  return (
    <>
      <Hero />

      <section id="age-bands" className="mx-auto max-w-6xl px-6 py-20">
        <SectionHead
          eyebrow="Browse"
          title="By age band"
          subtitle="Three working bands that map to most school and community programs."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {AGE_BANDS.map((b) => {
            const count = RESOURCES.filter((r) => r.ageMin <= b.max && r.ageMax >= b.min).length;
            return (
              <Link
                key={b.slug}
                href={`/age/${b.slug}`}
                className="group flex flex-col gap-3 rounded-2xl border border-stone-200 bg-white p-7 transition hover:-translate-y-0.5 hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.15)] dark:border-stone-800 dark:bg-stone-900"
              >
                <span className="font-serif text-xs uppercase tracking-[0.2em] text-amber-700 dark:text-amber-400">
                  {b.slug.replace("-", "–")}
                </span>
                <span className="font-serif text-3xl text-stone-900 dark:text-stone-50">{b.name}</span>
                <span className="text-sm text-stone-600 dark:text-stone-300">{b.tagline}</span>
                <span className="mt-2 text-xs text-stone-400">{count} resources →</span>
              </Link>
            );
          })}
        </div>
      </section>

      <section
        id="categories"
        className="border-y border-stone-200/70 bg-stone-100/60 py-20 dark:border-stone-800/70 dark:bg-stone-900/30"
      >
        <div className="mx-auto max-w-6xl px-6">
          <SectionHead eyebrow="Browse" title="By category" subtitle="Seven categories spanning warm-up to performance." />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((c) => {
              const count = RESOURCES.filter((r) => r.category === c.slug).length;
              return (
                <Link
                  key={c.slug}
                  href={`/category/${c.slug}`}
                  className="group flex items-start justify-between gap-4 rounded-xl border border-stone-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-stone-300 hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.12)] dark:border-stone-800 dark:bg-stone-900 dark:hover:border-stone-700"
                >
                  <div>
                    <div className="font-serif text-xl text-stone-900 dark:text-stone-50">{c.name}</div>
                    <div className="mt-1 text-sm text-stone-600 dark:text-stone-300">{c.tagline}</div>
                  </div>
                  <div className="shrink-0 text-right text-xs text-stone-400">
                    <div>{count}</div>
                    <div className="text-stone-300 transition group-hover:text-stone-700 dark:group-hover:text-stone-200">
                      →
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionHead
          eyebrow="Featured"
          title="Six places to start"
          subtitle="A short list of the most reliably useful resources, across categories."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((r) => (
            <ResourceCard key={r.id} r={r} showCategory />
          ))}
        </div>
      </section>
    </>
  );
}

function SectionHead({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-xs font-medium uppercase tracking-[0.2em] text-amber-700 dark:text-amber-400">
        {eyebrow}
      </span>
      <h2 className="font-serif text-3xl tracking-tight text-stone-900 md:text-4xl dark:text-stone-50">{title}</h2>
      <p className="max-w-2xl text-stone-600 dark:text-stone-300">{subtitle}</p>
    </div>
  );
}
