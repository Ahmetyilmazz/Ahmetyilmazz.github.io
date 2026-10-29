import { ImageResponse } from "next/og";
import { locales } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { resolveLocale, type LocaleParams } from "@/i18n/params";
import { site } from "@/content/site";
import { playApps } from "@/content/apps";
import { projects } from "@/content/projects";
import { loadGoogleFont, publicImageAsDataUrl } from "@/lib/og";
import { ogImageSize } from "@/lib/metadata";

/**
 * Paylaşım görseli: build sırasında /tr/og.png ve /en/og.png olarak üretilir.
 * Uzantılı statik dosya olduğu için GitHub Pages doğru içerik türüyle (image/png) sunar.
 */
export const dynamic = "force-static";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const colors = { bg: "#0d1118", fg: "#eef2f7", muted: "#95a0b3", accent: "#54c5f8", accent2: "#ffd166" };

export async function GET(_request: Request, { params }: LocaleParams) {
  const locale = resolveLocale((await params).locale);
  const { hero } = getDictionary(locale);
  const [display, body, avatar] = await Promise.all([
    loadGoogleFont("Unbounded", 800),
    loadGoogleFont("Figtree", 500),
    publicImageAsDataUrl(site.photo, 220),
  ]);

  const stats = [
    { value: projects.length, label: hero.stats.projects },
    { value: playApps.length, label: hero.stats.published },
  ];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          backgroundColor: colors.bg,
          backgroundImage: "radial-gradient(circle at 85% 10%, rgba(84,197,248,0.28), transparent 45%)",
          color: colors.fg,
          fontFamily: "Figtree",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <img
            src={avatar}
            width={110}
            height={110}
            style={{ borderRadius: 999, border: `4px solid ${colors.accent}` }}
            alt=""
          />
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span style={{ fontFamily: "Unbounded", fontSize: 40 }}>{site.name}</span>
            <span style={{ fontSize: 30, color: colors.muted }}>{site.role}</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", fontFamily: "Unbounded", fontSize: 76, lineHeight: 1.05 }}>
          <span>{hero.titleLead}</span>
          <span style={{ color: colors.accent }}>{hero.titleAccent}</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 28 }}>
          <div style={{ display: "flex", gap: 40 }}>
            {stats.map((stat) => (
              <div key={stat.label} style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
                <span style={{ fontFamily: "Unbounded", fontSize: 40, color: colors.accent2 }}>{stat.value}</span>
                <span style={{ color: colors.muted }}>{stat.label}</span>
              </div>
            ))}
          </div>
          <span style={{ color: colors.muted }}>{site.url.replace("https://", "")}</span>
        </div>
      </div>
    ),
    {
      ...ogImageSize,
      fonts: [
        { name: "Unbounded", data: display, weight: 800, style: "normal" },
        { name: "Figtree", data: body, weight: 500, style: "normal" },
      ],
    },
  );
}
