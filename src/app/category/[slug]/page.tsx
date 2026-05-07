import Link from "next/link";
import { notFound } from "next/navigation";
import { ResourceCard } from "@/components/ResourceCard";
import { AGE_BANDS, CATEGORIES, type Category } from "@/data/types";
import { RESOURCES } from "@/data/resources";

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ slug: c.slug }));
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cat = CATEGORIES.find((c) => c.slug === slug);
  if (!cat) notFound();

  const matches = RESOURCES.filter((r) => r.category === cat.slug);

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <Link href="/" className="text-sm text-stone-500 hover:text-stone-900 dark:hover:text-stone-100">
        ← All categories
      </Link>
      <header className="mt-6 flex flex-col gap-4 border-b border-stone-200 pb-10 dark:border-stone-800">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-amber-700 dark:text-amber-400">
          Category
        </span>
        <h1 className="font-serif text-5xl tracking-tight text-stone-900 dark:text-stone-50">{cat.name}</h1>
        <p className="max-w-2xl text-lg text-stone-600 dark:text-stone-300">{cat.tagline}</p>
        <p className="text-sm text-stone-500">{matches.length} resources</p>
      </header>

      {AGE_BANDS.map((b) => {
        const items = matches.filter((r) => r.ageMin <= b.max && r.ageMax >= b.min);
        if (!items.length) return null;
        return (
          <section key={b.slug} className="mt-14">
            <div className="mb-6 flex items-baseline justify-between">
              <h2 className="font-serif text-2xl text-stone-900 dark:text-stone-50">{b.name}</h2>
              <Link
                href={`/age/${b.slug}`}
                className="text-sm text-stone-500 hover:text-stone-900 dark:hover:text-stone-100"
              >
                See all for {b.name} →
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
