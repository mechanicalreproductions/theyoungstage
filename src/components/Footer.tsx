export function Footer() {
  return (
    <footer className="mt-24 border-t border-stone-200/70 bg-stone-50 dark:border-stone-800/70 dark:bg-stone-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-10 text-sm text-stone-500 md:flex-row md:items-center md:justify-between dark:text-stone-400">
        <p>
          <span className="font-serif text-stone-700 dark:text-stone-200">The Young Stage</span> — a curated index of
          theater resources for directors and educators working with young performers.
        </p>
        <p className="text-xs">
          All resources link to their original publishers. We don&apos;t host third-party content.
        </p>
      </div>
    </footer>
  );
}
