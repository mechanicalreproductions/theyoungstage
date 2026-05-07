export type Category =
  | "drama-games"
  | "improv"
  | "short-plays"
  | "readers-theater"
  | "shakespeare"
  | "songs"
  | "voice-movement";

export type AgeBand = "5-7" | "8-10" | "11-13";

export type Resource = {
  id: string;
  title: string;
  source: string;
  description: string;
  url: string;
  category: Category;
  ageMin: number;
  ageMax: number;
  free?: boolean;
  format?: "article" | "scripts" | "lesson-plans" | "videos" | "ebook" | "pdf" | "directory";
};

export const CATEGORIES: { slug: Category; name: string; tagline: string }[] = [
  { slug: "drama-games", name: "Drama Games", tagline: "Warm-ups, focus games, ensemble builders" },
  { slug: "improv", name: "Improv", tagline: "Yes-and, scene work, story games" },
  { slug: "short-plays", name: "Short Plays", tagline: "Royalty-free scripts for young casts" },
  { slug: "readers-theater", name: "Reader's Theater", tagline: "Minimal-staging script work" },
  { slug: "shakespeare", name: "Shakespeare", tagline: "Adapted scripts and teaching tools" },
  { slug: "songs", name: "Songs", tagline: "Audition repertoire and musical theater picks" },
  { slug: "voice-movement", name: "Voice & Movement", tagline: "Vocal warm-ups, physical exercises" },
];

export const AGE_BANDS: { slug: AgeBand; name: string; tagline: string; min: number; max: number }[] = [
  { slug: "5-7", name: "Ages 5–7", tagline: "Early elementary — play-led, short attention spans", min: 5, max: 7 },
  { slug: "8-10", name: "Ages 8–10", tagline: "Upper elementary — story-ready, growing focus", min: 8, max: 10 },
  { slug: "11-13", name: "Ages 11–13", tagline: "Middle school — text work, scene-building, vocal range", min: 11, max: 13 },
];

export function ageBandsForResource(r: Resource): AgeBand[] {
  return AGE_BANDS.filter((b) => r.ageMin <= b.max && r.ageMax >= b.min).map((b) => b.slug);
}

export function categoryName(slug: Category): string {
  return CATEGORIES.find((c) => c.slug === slug)?.name ?? slug;
}
