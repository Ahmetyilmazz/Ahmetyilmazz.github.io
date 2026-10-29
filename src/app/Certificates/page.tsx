import LocaleRedirect from "@/components/layout/LocaleRedirect";

/** Eski /Certificates bağlantıları paylaşılmış olabilir; yeni dil önekli sayfaya yönlendirir. */
export default function LegacyCertificatesPage() {
  return <LocaleRedirect path="/certificates/" />;
}
