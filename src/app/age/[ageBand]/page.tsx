import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ResourceCard } from "@/components/ResourceCard";
import { JsonLd } from "@/components/JsonLd";
import { AGE_BANDS, CATEGORIES } from "@/data/types";
import { RESOURCES } from "@/data/resources";

const SITE_URL = "https://theyoungstage.org";

export function generateStaticParams() {
  return AGE_BANDS.map((b) => ({ ageBand: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ ageBand: string }>;
}): Promise<Metadata> {
  const { ageBand } = await params;
  const band = AGE_BANDS.find((b) => b.slug === ageBand);
  if (!band) return {};
  const count = RESOURCES.filter((r) => r.ageMin <= band.max && r.ageMax >= band.min).length;
  const title = `Theater Resources for ${band.name}`;
  const description = `${count} curated drama games, plays, Shakespeare adaptations, songs and warm-ups for theater directors and educators working with children ${band.name.replace(
    "Ages ",
    "ages ",
  )}. Free to browse, every resource links to its original publisher.`;
  const url = `${SITE_URL}/age/${band.slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "website" },
    twitter: { title, description, card: "summary_large_image" },
  };
}

export default async function AgeBandPage({ params }: { params: Promise<{ ageBand: string }> }) {
  const { ageBand } = await params;
  const band = AGE_BANDS.find((b) => b.slug === ageBand);
  if (!band) notFound();

  const matches = RESOURCES.filter((r) => r.ageMin <= band.max && r.ageMax >= band.min);
  const url = `${SITE_URL}/age/${band.slug}`;

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Theater resources for ${band.name}`,
    description: band.tagline,
    url,
    numberOfItems: matches.length,
    itemListElement: matches.map((r, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: r.url,
      name: r.title,
      description: r.description,
    })),
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "By Age", item: `${SITE_URL}/#age-bands` },
      { "@type": "ListItem", position: 3, name: band.name, item: url },
    ],
  };

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

      <JsonLd data={itemListJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
    </div>
  );
}
