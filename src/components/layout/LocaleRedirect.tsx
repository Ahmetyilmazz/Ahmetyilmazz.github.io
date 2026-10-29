import { defaultLocale } from "@/i18n/config";
import { localeRedirectScript } from "@/lib/preferences";

/**
 * Dil öneki olmayan adresler (kök ve eski /Certificates) için kendi <html> belgesini üretir;
 * kayıtlı ya da tarayıcı diline göre /tr veya /en altına yönlendirir.
 */
export default function LocaleRedirect({ path = "/" }: { path?: string }) {
  const fallback = `/${defaultLocale}${path}`;

  return (
    <html lang={defaultLocale}>
      <head>
        <meta name="robots" content="noindex" />
        <link rel="canonical" href={fallback} />
        <script dangerouslySetInnerHTML={{ __html: localeRedirectScript(path) }} />
        <noscript>
          <meta httpEquiv="refresh" content={`0;url=${fallback}`} />
        </noscript>
      </head>
      <body style={{ background: "#0d1118", color: "#eef2f7", fontFamily: "system-ui, sans-serif" }}>
        <p style={{ padding: 24 }}>
          <a href={fallback} style={{ color: "#54c5f8" }}>
            Ahmet YILMAZ
          </a>
        </p>
      </body>
    </html>
  );
}
