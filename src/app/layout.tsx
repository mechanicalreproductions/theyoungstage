import type { Metadata, Viewport } from "next";
import { Geist, Fraunces } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT"],
});

const SITE_URL = "https://theyoungstage.org";
const SITE_NAME = "The Young Stage";
const SITE_DESCRIPTION =
  "A free, curated library of theater resources for directors and educators working with child performers under fourteen. Drama games, short plays, Shakespeare adaptations, songs, reader's theater and warm-ups — organized by age band (5–7, 8–10, 11–13) and category, linked back to the original publishers.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Theater Resources for Directors of Young Actors`,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: "Aidan Yates" }],
  creator: "Aidan Yates",
  publisher: SITE_NAME,
  category: "education",
  keywords: [
    "children's theater",
    "youth theater",
    "drama games for kids",
    "theater education",
    "drama curriculum",
    "kids drama games",
    "Shakespeare for kids",
    "plays for children",
    "musical theater audition songs for kids",
    "reader's theater scripts",
    "drama warm-ups",
    "improv games for kids",
    "elementary drama",
    "middle school theater",
    "theater for ages 5-7",
    "theater for ages 8-10",
    "theater for ages 11-13",
    "theater director resources",
    "drama teacher resources",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Theater Resources for Directors of Young Actors`,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Theater Resources for Directors of Young Actors`,
    description: SITE_DESCRIPTION,
    creator: "@theyoungstage",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {},
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf9" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0a09" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/icon.svg`,
        founder: {
          "@type": "Person",
          name: "Aidan Yates",
          jobTitle: "Founder",
          alumniOf: [
            { "@type": "CollegeOrUniversity", name: "The New School" },
            { "@type": "CollegeOrUniversity", name: "Temple University" },
            { "@type": "CollegeOrUniversity", name: "University of the Arts" },
          ],
        },
        sameAs: ["https://github.com/mechanicalreproductions/theyoungstage"],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "en-US",
      },
    ],
  };
  return (
    <html lang="en" className={`${geistSans.variable} ${fraunces.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-stone-50 text-stone-900 dark:bg-stone-950 dark:text-stone-100">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </body>
    </html>
  );
}
