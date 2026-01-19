import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";
import PageTransition from "@/components/PageTransition";

const sora = Sora({
  variable: "--font-display",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hanif Portfolio",
  description: "Visual designer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${manrope.variable} antialiased`}>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
