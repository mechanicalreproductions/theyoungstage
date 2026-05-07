import Link from "next/link";
import { notFound } from "next/navigation";
import { ResourceCard } from "@/components/ResourceCard";
import { AGE_BANDS, CATEGORIES, type AgeBand } from "@/data/types";
import { RESOURCES } from "@/data/resources";

export function generateStaticParams() {
  return AGE_BANDS.map((b) => ({ ageBand: b.slug }));
}

export default async function AgeBandPage({ params }: { params: Promise<{ ageBand: string }> }) {
  const { ageBand } = await params;
  const band = AGE_BANDS.find((b) => b.slug === ageBand);
  if (!band) notFound();

  const matches = RESOURCES.filter((r) => r.ageMin <= band.max && r.ageMax >= band.min);

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <Link href="/" className="text-sm text-stone-500 hover:text-stone-900 dark:hover:text-stone-100">
        ← All ages
      </Link>
      <header className="mt-6 flex flex-col gap-4 border-b border-stone-200 pb-10 dark:border-stone-800">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-amber-700 dark:text-amber-400">
          Age band
        </span>
        <h1 className="font-serif text-5xl tracking-tight text-stone-900 dark:text-stone-50">{band.name}</h1>
        <p className="max-w-2xl text-lg text-stone-600 dark:text-stone-300">{band.tagline}</p>
        <p className="text-sm text-stone-500">{matches.length} resources</p>
      </header>

      {CATEGORIES.map((c) => {
        const items = matches.filter((r) => r.category === c.slug);
        if (!items.length) return null;
        return (
          <section key={c.slug} className="mt-14">
            <div className="mb-6 flex items-baseline justify-between">
              <h2 className="font-serif text-2xl text-stone-900 dark:text-stone-50">{c.name}</h2>
              <Link
                href={`/category/${c.slug}`}
                className="text-sm text-stone-500 hover:text-stone-900 dark:hover:text-stone-100"
              >
                See all in {c.name} →
              </Link>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {items.map((r) => (
                <ResourceCard key={r.id} r={r} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
