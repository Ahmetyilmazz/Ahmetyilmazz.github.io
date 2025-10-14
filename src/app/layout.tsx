import "./globals.css";
import type { Metadata } from "next";

// GitHub Pages URL'sini doğru alalım
const baseUrl = "https://ahmetyilmazz.github.io";
const ogImageUrl = `${baseUrl}/open_graph_image.png`;

export const metadata: Metadata = {
  title: "Ahmet YILMAZ | Flutter Developer",
  description: "Ahmet YILMAZ Portfolio",
  metadataBase: new URL(baseUrl),
  openGraph: {
    title: "Ahmet YILMAZ | Flutter Developer",
    description: "Ahmet YILMAZ Portfolio",
    url: baseUrl,
    siteName: "Ahmet Portfolio",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "Ahmet - Flutter Developer Portfolio",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
