import Link from "next/link";
import { CATEGORIES, AGE_BANDS } from "@/data/types";
import { Logo } from "@/components/Logo";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-stone-200/70 bg-stone-50/80 backdrop-blur-md dark:border-stone-800/70 dark:bg-stone-950/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="group flex items-center gap-2.5 text-stone-900 dark:text-stone-50">
          <Logo className="h-6 w-6 transition-transform group-hover:translate-x-[1px]" />
          <span className="font-serif text-base tracking-tight">The Young Stage</span>
        </Link>
        <nav className="hidden items-center gap-1 text-sm md:flex">
          <DropdownNav label="By Age" items={AGE_BANDS.map((b) => ({ href: `/age/${b.slug}`, label: b.name }))} />
          <DropdownNav
            label="By Category"
            items={CATEGORIES.map((c) => ({ href: `/category/${c.slug}`, label: c.name }))}
          />
          <Link
            href="/about"
            className="rounded-full px-3 py-1.5 text-stone-700 hover:bg-stone-100 dark:text-stone-300 dark:hover:bg-stone-800"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}

function DropdownNav({ label, items }: { label: string; items: { href: string; label: string }[] }) {
  return (
    <div className="group relative">
      <button className="rounded-full px-3 py-1.5 text-stone-700 hover:bg-stone-100 dark:text-stone-300 dark:hover:bg-stone-800">
        {label}
        <span className="ml-1 text-stone-400">▾</span>
      </button>
      <div className="invisible absolute right-0 top-full z-40 mt-1 w-56 origin-top-right rounded-xl border border-stone-200 bg-white p-1.5 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100 dark:border-stone-800 dark:bg-stone-900">
        {items.map((it) => (
          <Link
            key={it.href}
            href={it.href}
            className="block rounded-lg px-3 py-2 text-sm text-stone-700 hover:bg-stone-100 dark:text-stone-200 dark:hover:bg-stone-800"
          >
            {it.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
