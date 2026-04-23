import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import PageTransition from "@/components/PageTransition";
import { personStructuredData, siteConfig, siteUrl } from "@/lib/seo";

const sora = Sora({
  variable: "--font-display",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.siteName}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.siteName,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name, url: siteUrl }],
  creator: siteConfig.name,
  publisher: siteConfig.siteName,
  category: "technology",
  referrer: "origin-when-cross-origin",
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
  icons: {
    icon: [
      {
        url: siteConfig.logoPath,
        type: "image/svg+xml",
      },
    ],
    shortcut: [siteConfig.logoPath],
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteUrl,
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
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.twitterImagePath],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${manrope.variable} antialiased`}>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personStructuredData),
          }}
        />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
