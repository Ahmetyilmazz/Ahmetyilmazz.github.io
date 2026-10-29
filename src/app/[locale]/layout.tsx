import type { Metadata, Viewport } from "next";
import "../globals.css";
import { fontVariables } from "../fonts";
import { htmlLang, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { resolveLocale, type LocaleParams } from "@/i18n/params";
import { site } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";
import { themeInitScript } from "@/lib/preferences";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LocaleSync from "@/components/layout/LocaleSync";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  themeColor: "#0d1118",
};

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = resolveLocale((await params).locale);
  const { meta } = getDictionary(locale);

  return {
    metadataBase: new URL(site.url),
    ...buildMetadata({ locale, title: meta.title, description: meta.description }),
    title: { default: meta.title, template: `%s | ${site.name}` },
  };
}

export default async function LocaleLayout({ children, params }: LocaleParams & { children: React.ReactNode }) {
  const locale = resolveLocale((await params).locale);
  const dict = getDictionary(locale);

  return (
    <html lang={htmlLang[locale]} className={fontVariables} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-dvh">
        <LocaleSync locale={locale} />
        <Header locale={locale} nav={dict.nav} />
        <main id="main">{children}</main>
        <Footer locale={locale} footer={dict.footer} nav={dict.nav} />
      </body>
    </html>
  );
}
