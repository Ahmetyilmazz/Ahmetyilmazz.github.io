import "./globals.css";
import { fontVariables } from "./fonts";
import { locales } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { routes } from "@/lib/routes";
import { themeInitScript } from "@/lib/preferences";

/** Dil bilinmediği için iki dilde birden gösterilir. */
export default function NotFound() {
  return (
    <html lang="tr" className={fontVariables} suppressHydrationWarning>
      <head>
        <title>404 | Ahmet YILMAZ</title>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="grid min-h-dvh place-items-center px-5">
        <main className="grid max-w-xl gap-10 text-center">
          <p className="font-display text-7xl font-extrabold text-accent">404</p>
          {locales.map((locale) => {
            const { notFound } = getDictionary(locale);
            return (
              <section key={locale} lang={locale} className="grid gap-2">
                <h1 className="font-display text-xl font-bold">{notFound.title}</h1>
                <p className="text-muted">{notFound.text}</p>
                <a href={routes.home(locale)} className="font-semibold text-accent hover:underline">
                  {notFound.home}
                </a>
              </section>
            );
          })}
        </main>
      </body>
    </html>
  );
}
