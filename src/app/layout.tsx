/**
 * <html> etiketi dile göre değiştiği için [locale]/layout.tsx içinde üretilir.
 * Dil öneki olmayan sayfalar (kök yönlendirme, 404) kendi belgesini oluşturur.
 */
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
