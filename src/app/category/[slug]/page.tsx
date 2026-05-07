import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ResourceCard } from "@/components/ResourceCard";
import { JsonLd } from "@/components/JsonLd";
import { AGE_BANDS, CATEGORIES } from "@/data/types";
import { RESOURCES } from "@/data/resources";

const SITE_URL = "https://theyoungstage.org";

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cat = CATEGORIES.find((c) => c.slug === slug);
  if (!cat) return {};
  const count = RESOURCES.filter((r) => r.category === cat.slug).length;
  const title = `${cat.name} for Young Performers`;
  const description = `${count} curated ${cat.name.toLowerCase()} resources for theater directors and educators working with children under fourteen — ${cat.tagline.toLowerCase()}. Free to browse, every resource links to its original publisher.`;
  const url = `${SITE_URL}/category/${cat.slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "website" },
    twitter: { title, description, card: "summary_large_image" },
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cat = CATEGORIES.find((c) => c.slug === slug);
  if (!cat) notFound();

  const matches = RESOURCES.filter((r) => r.category === cat.slug);
  const url = `${SITE_URL}/category/${cat.slug}`;

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${cat.name} resources for young performers`,
    description: cat.tagline,
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
      { "@type": "ListItem", position: 2, name: "By Category", item: `${SITE_URL}/#categories` },
      { "@type": "ListItem", position: 3, name: cat.name, item: url },
    ],
  };

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

      <JsonLd data={itemListJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
    </div>
  );
}
