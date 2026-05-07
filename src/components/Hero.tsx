import Link from "next/link";
import { Logo } from "@/components/Logo";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-stone-200/70 dark:border-stone-800/70">
      <div className="absolute inset-0 -z-10 opacity-[0.05] dark:opacity-[0.08]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, #d97706 0, transparent 40%), radial-gradient(circle at 80% 60%, #be123c 0, transparent 45%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-stone-300/60 bg-white/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-stone-600 dark:border-stone-700 dark:bg-stone-900/60 dark:text-stone-400">
          <Logo className="h-3.5 w-3.5" /> A resource library for directors of young actors
        </p>
        <h1 className="max-w-3xl font-serif text-4xl leading-[1.05] tracking-tight text-stone-900 md:text-6xl dark:text-stone-50">
          Stagecraft for the under-fourteens.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600 md:text-xl dark:text-stone-300">
          Hand-picked games, scripts, Shakespeare adaptations, songs and warm-ups — organized by age band and category,
          linked straight back to the educators and publishers who made them.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="#age-bands"
            className="rounded-full bg-stone-900 px-5 py-2.5 text-sm font-medium text-stone-50 transition hover:bg-stone-700 dark:bg-stone-50 dark:text-stone-900 dark:hover:bg-stone-200"
          >
            Browse by age
          </Link>
          <Link
            href="#categories"
            className="rounded-full border border-stone-300 bg-white/60 px-5 py-2.5 text-sm font-medium text-stone-800 transition hover:bg-white dark:border-stone-700 dark:bg-stone-900/60 dark:text-stone-100 dark:hover:bg-stone-900"
          >
            Browse by category
          </Link>
        </div>
      </div>
    </section>
  );
}
