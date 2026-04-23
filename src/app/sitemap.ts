import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/about", "/work", "/contact"];
  const lastModified = new Date();

  return routes.map((route) => ({
    url: absoluteUrl(route),
    lastModified,
    changeFrequency: "weekly",
    priority: route === "/about" ? 1 : 0.8,
  }));
}
