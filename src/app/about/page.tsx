import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-20 text-stone-700 dark:text-stone-300">
      <span className="text-xs font-medium uppercase tracking-[0.2em] text-amber-700 dark:text-amber-400">About</span>
      <h1 className="mt-4 font-serif text-5xl tracking-tight text-stone-900 dark:text-stone-50">
        A practical library for the rehearsal room.
      </h1>
      <div className="mt-8 space-y-5 text-lg leading-relaxed">
        <p>
          The Young Stage is a curated index of resources for directors and educators working with child performers
          under fourteen. Every link points to the original publisher — the people who actually wrote the games,
          adapted the scripts, or recorded the warm-ups.
        </p>
        <p>
          Resources are filtered into three working age bands (5–7, 8–10, 11–13) and seven categories — drama games,
          improv, short plays, reader&apos;s theater, Shakespeare, songs, and voice &amp; movement — so you can find
          something usable in under a minute.
        </p>
        <p>
          We don&apos;t host third-party content. We don&apos;t claim authorship. We just point you to the best of
          what&apos;s out there, the way a thoughtful colleague would.
        </p>
      </div>

      <Section eyebrow="Philosophy" title="Open by default.">
        <p>
          We believe information about how to teach, rehearse and direct young performers should be{" "}
          <em>open</em> — discoverable, citable, and free at the point of use. Theater education is already
          under-resourced; the last thing a volunteer director or first-year drama teacher needs is a paywall between
          them and a warm-up that works.
        </p>
        <p>
          So this site indexes openly published material and credits its authors clearly. We&apos;d rather send you
          straight to a teacher&apos;s blog or a library&apos;s lesson plan than rewrite their work and stamp our name
          on it.
        </p>
      </Section>

      <Section eyebrow="Our promise" title="This will always be free.">
        <p>
          Browsing The Young Stage will never cost anything. No accounts to read, no rate limits, no &quot;unlock the
          full library&quot; nag — the whole index, forever, free.
        </p>
        <p>
          That&apos;s a commitment, not a marketing line. If we ever can&apos;t keep that promise, we&apos;ll say so
          plainly and explain why.
        </p>
      </Section>

      <Section eyebrow="How we&apos;ll keep the lights on" title="Memberships, donations, and (maybe) ads.">
        <p>
          Curating, hosting, and growing a library like this still has costs. To cover them — and to fund the work of
          adding more resources, more languages, and more depth — we&apos;re planning a few optional support paths:
        </p>
        <ul className="space-y-3 pl-5 [&>li]:relative [&>li]:before:absolute [&>li]:before:-left-5 [&>li]:before:top-[0.7em] [&>li]:before:h-px [&>li]:before:w-3 [&>li]:before:bg-stone-400 dark:[&>li]:before:bg-stone-600">
            <li>
              <strong className="text-stone-900 dark:text-stone-100">Memberships</strong> — a paid tier for educators
              and programs who want extras like printable lesson packs, curated thematic playlists, and early access to
              new sections. The free index stays untouched.
            </li>
            <li>
              <strong className="text-stone-900 dark:text-stone-100">Donations</strong> — one-off support from
              individuals, schools, and theaters who want to keep the project running. Every dollar goes to research,
              hosting, and paying contributors.
            </li>
            <li>
              <strong className="text-stone-900 dark:text-stone-100">Ads — under consideration.</strong>{" "}
              We&apos;re weighing whether tasteful, education-aligned advertising could help keep the site free and
              independent.
              If we ever introduce ads, they&apos;ll be clearly labeled, never tracked across the web, and never aimed
              at children.
            </li>
          </ul>
        <p>
          The bar is simple: any way we make money has to keep the resource itself free, the experience uncluttered,
          and the trust of the educators using it intact. If something doesn&apos;t clear that bar, we won&apos;t do
          it.
        </p>
      </Section>

      <section className="mt-16 border-t border-stone-200 pt-10 dark:border-stone-800">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-amber-700 dark:text-amber-400">
          Founder
        </span>
        <h2 className="mt-3 font-serif text-3xl tracking-tight text-stone-900 dark:text-stone-50">
          Aidan Yates.
        </h2>
        <div className="mt-8 flex flex-col gap-8 sm:flex-row sm:gap-10">
          <figure className="shrink-0 sm:w-56">
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-stone-200 dark:bg-stone-800">
              <Image
                src="/aidan-yates.png"
                alt="Aidan Yates, founder of The Young Stage"
                fill
                sizes="(min-width: 640px) 224px, 100vw"
                className="object-cover"
                priority
              />
            </div>
            <figcaption className="mt-3 text-xs text-stone-500 dark:text-stone-400">
              Aidan Yates · New York, NY
            </figcaption>
          </figure>
          <div className="text-lg leading-relaxed">
            <p>
              Aidan is a B.F.A. candidate in Drama at The New School, with earlier training at Temple University and
              the University of the Arts in acting, directing, and playwriting. He has spent the past few years
              working with young performers — mentoring teens through new-musical devising at Yes! And… Collaborative
              Arts in Philadelphia, and running drama, music, and mindfulness programs as a counselor at Camp Tuku
              and Camp Chief Ouray — and holds a certificate in Social, Emotional, and Ethical Learning from Emory
              University. He started The Young Stage because the resources he kept reaching for in rehearsal were
              scattered, paywalled, or just hard to find.
            </p>
          </div>
        </div>
      </section>

      <Section eyebrow="Get in touch" title="Tell us what we&apos;re missing.">
        <p>
          If you&apos;re a director, teacher, or publisher with a resource we should know about — or a correction to
          something we&apos;ve indexed — we want to hear from you. A contributor portal is in the works; in the
          meantime, head back to the{" "}
          <Link href="/" className="underline decoration-amber-700/40 underline-offset-4 hover:decoration-amber-700 dark:decoration-amber-400/40 dark:hover:decoration-amber-400">
            home page
          </Link>{" "}
          and start exploring.
        </p>
      </Section>
    </article>
  );
}

function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-16 border-t border-stone-200 pt-10 dark:border-stone-800">
      <span className="text-xs font-medium uppercase tracking-[0.2em] text-amber-700 dark:text-amber-400">
        {eyebrow}
      </span>
      <h2
        className="mt-3 font-serif text-3xl tracking-tight text-stone-900 dark:text-stone-50"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <div className="mt-6 space-y-5 text-lg leading-relaxed">{children}</div>
    </section>
  );
}
