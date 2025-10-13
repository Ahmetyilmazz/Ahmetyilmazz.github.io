import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ahmet Yılmaz | Flutter Developer",
  description: "Ahmet Yılmaz Portfolio",
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
