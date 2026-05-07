# The Young Stage

A curated library of theater resources for directors and educators working with child performers under fourteen.

🌐 [theyoungstage.org](https://theyoungstage.org)

## What it is

A free, open index of drama games, short plays, Shakespeare adaptations, songs, and warm-ups, organized by **age band** (5–7, 8–10, 11–13) and **category** (drama games, improv, short plays, reader's theater, Shakespeare, songs, voice & movement). Every link points back to the original publisher — we don't host third-party content.

## Tech

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- [Tailwind CSS v4](https://tailwindcss.com)
- TypeScript
- Fonts: Fraunces (serif) + Geist (sans)
- Deployed on [Vercel](https://vercel.com)

## Local dev

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding resources

Resource data lives in [`src/data/resources.ts`](src/data/resources.ts). Append a new object — pages regenerate automatically.

```ts
{
  id: "unique-id",
  title: "Resource Title",
  source: "Publisher Name",
  description: "One- or two-sentence description.",
  url: "https://...",
  category: "drama-games", // see types.ts for valid slugs
  ageMin: 6,
  ageMax: 12,
  free: true,
  format: "article", // article | scripts | lesson-plans | videos | ebook | pdf | directory
}
```

## License

The site code is MIT-licensed. Resources linked from the site retain their original copyright and licensing — please respect each publisher's terms.
