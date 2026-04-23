import type { Metadata } from "next";

const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  process.env.VERCEL_PROJECT_PRODUCTION_URL ||
  process.env.VERCEL_URL ||
  "http://localhost:3000";

export const siteUrl = rawSiteUrl.startsWith("http")
  ? rawSiteUrl
  : `https://${rawSiteUrl}`;

export const siteConfig = {
  name: "Hasan",
  siteName: "Hasan Portfolio",
  title: "Hasan | Full-Stack Developer",
  description:
    "Portfolio of Hasan, a full-stack developer based in Indonesia focused on building fast, polished, and scalable web experiences.",
  locale: "en_US",
  keywords: [
    "Hasan",
    "Hasan portfolio",
    "full-stack developer",
    "web developer Indonesia",
    "Next.js developer",
    "React developer",
    "frontend developer",
    "backend developer",
    "portfolio website",
  ],
  logoPath: "/logo-sanslabs-white.svg",
  ogImagePath: "/opengraph-image",
  twitterImagePath: "/twitter-image",
  socialLinks: [
    "https://instagram.com/siihasann",
    "https://linkedin.com/in/siihasann",
    "https://github.com/siihasann",
  ],
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
}: PageMetadataInput): Metadata {
  const fullTitle = `${title} | ${siteConfig.siteName}`;

  return {
    title,
    description,
    keywords: [...siteConfig.keywords, ...keywords],
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: siteConfig.siteName,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: siteConfig.ogImagePath,
          width: 1200,
          height: 630,
          alt: `${siteConfig.siteName} share image`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [siteConfig.twitterImagePath],
    },
  };
}

export const personStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: siteConfig.name,
      url: siteUrl,
      image: absoluteUrl("/assets/images/photo/my-photo.png"),
      jobTitle: "Full-Stack Developer",
      description: siteConfig.description,
      sameAs: [...siteConfig.socialLinks],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: siteConfig.siteName,
      url: siteUrl,
      description: siteConfig.description,
      inLanguage: "en",
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
    },
  ],
};
