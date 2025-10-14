import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ahmet Yılmaz | Flutter Developer",
  description: "Ahmet Yılmaz Portfolio",
  openGraph: {
    title: "Ahmet | Flutter Developer",
    description: "Ahmet Portfolio",
    url: "https://ahmetyilmazz.github.io/",
    siteName: "Ahmet Portfolio",
    images: [
      {
        url: "https://ahmetyilmazz.github.io/open_graph_image.png",
        width: 1200,
        height: 630,
        alt: "Ahmet Portfolio",
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
