import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { siteConfig } from "./seo";

async function getLogoDataUrl() {
  const filePath = path.join(process.cwd(), "public", "logo-sanslabs-white.svg");
  const svg = await readFile(filePath, "utf8");

  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
}

type ShareImageOptions = {
  title?: string;
  description?: string;
  eyebrow?: string;
  badge?: string;
};

export async function createShareImageResponse({
  title = "Builds fast, polished web experiences.",
  description = "Selected work, contact details, and a performance-focused portfolio by Hasan.",
  eyebrow = siteConfig.siteName,
  badge = "Based in Indonesia",
}: ShareImageOptions = {}) {
  const logoSrc = await getLogoDataUrl();

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
          overflow: "hidden",
          background: "#05070b",
          color: "#ffffff",
          padding: "56px 64px",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at top right, rgba(76, 115, 255, 0.22), transparent 34%), radial-gradient(circle at bottom left, rgba(255, 255, 255, 0.08), transparent 28%)",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 84,
                height: 84,
                borderRadius: 24,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <img src={logoSrc} alt="Sanslabs logo" width={54} height={54} />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 6,
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontSize: 22,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.58)",
                }}
              >
                {eyebrow}
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: 34,
                  fontWeight: 600,
                }}
              >
                Hasan | Full-Stack Developer
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "14px 20px",
              borderRadius: 9999,
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.04)",
              fontSize: 22,
              color: "rgba(255,255,255,0.88)",
            }}
          >
            {badge}
          </div>
        </div>

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            maxWidth: 930,
            gap: 22,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 84,
              lineHeight: 1.02,
              fontWeight: 700,
              letterSpacing: "-0.05em",
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              lineHeight: 1.4,
              color: "rgba(255,255,255,0.72)",
            }}
          >
            {description}
          </div>
        </div>

        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 14,
            }}
          >
            {["About", "Work", "Contact"].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px 18px",
                  borderRadius: 9999,
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(255,255,255,0.03)",
                  fontSize: 20,
                  color: "rgba(255,255,255,0.74)",
                }}
              >
                {item}
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 22,
              color: "rgba(255,255,255,0.58)",
            }}
          >
            siihasann
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
