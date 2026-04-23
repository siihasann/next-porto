import { createShareImageResponse } from "@/lib/share-image";

export const runtime = "nodejs";
export const alt = "Hasan Portfolio Twitter share image";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function TwitterImage() {
  return createShareImageResponse({
    title: "Performance-focused web development.",
    description:
      "Explore Hasan's selected work, developer profile, and collaboration details.",
  });
}
