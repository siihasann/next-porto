import type { Metadata } from "next";
import AboutPageContent from "@/components/about/AboutPageContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description:
    "Learn more about Hasan, a full-stack developer based in Indonesia with a focus on thoughtful product building, clean execution, and real-world impact.",
  path: "/about",
  keywords: ["about Hasan", "developer profile", "full-stack developer Indonesia"],
});

export default function About() {
  return <AboutPageContent />;
}
