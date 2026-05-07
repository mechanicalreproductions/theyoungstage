import type { MetadataRoute } from "next";
import { CATEGORIES, AGE_BANDS } from "@/data/types";

const SITE_URL = "https://theyoungstage.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: `${SITE_URL}/`, lastModified, priority: 1, changeFrequency: "weekly" },
    { url: `${SITE_URL}/about`, lastModified, priority: 0.7, changeFrequency: "monthly" },
    ...AGE_BANDS.map((b) => ({
      url: `${SITE_URL}/age/${b.slug}`,
      lastModified,
      priority: 0.8,
      changeFrequency: "weekly" as const,
    })),
    ...CATEGORIES.map((c) => ({
      url: `${SITE_URL}/category/${c.slug}`,
      lastModified,
      priority: 0.8,
      changeFrequency: "weekly" as const,
    })),
  ];
}
