"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { readPreference, savePreference } from "@/lib/preferences";
import { switchLocalePath } from "@/lib/routes";

/** Kayıtlı dil tercihi mevcut sayfanın dilinden farklıysa o dili döner. */
const otherPreferredLocale = (current: Locale): Locale | null => {
  const preferred = readPreference("locale");
  return preferred && isLocale(preferred) && preferred !== current ? preferred : null;
};

/**
 * Dil parametresi değişince Next.js layout'u yeniden kurar; "belge ilk kez açıldı" bilgisi bu yüzden
 * bileşende değil modülde tutulur ve tam sayfa yüklemesine kadar korunur.
 */
let documentInitialized = false;

const isHistoryNavigation = () => {
  const [entry] = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[];
  return entry?.type === "back_forward";
};

/**
 * Seçilen dili gezinme boyunca korur.
 * - Sayfa doğrudan açıldığında (paylaşılan link vb.) adresteki dil tercih olarak kaydedilir.
 * - Geri/ileri ile başka dildeki bir sayfaya dönülürse, tercih edilen dildeki karşılığına geçilir.
 */
export default function LocaleSync({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const goToPreferred = () => {
      const preferred = otherPreferredLocale(locale);
      if (preferred) router.replace(switchLocalePath(window.location.pathname, preferred) + window.location.hash);
      return preferred !== null;
    };

    if (!documentInitialized) {
      documentInitialized = true;
      if (!(isHistoryNavigation() && goToPreferred())) savePreference("locale", locale);
    } else {
      // Site içi bağlantılar dili korur; buraya farklı dille gelinmesi yalnızca geri/ileri ile olur.
      goToPreferred();
    }

    const onPageShow = (event: PageTransitionEvent) => event.persisted && goToPreferred();
    window.addEventListener("pageshow", onPageShow);
    return () => window.removeEventListener("pageshow", onPageShow);
  }, [locale, pathname, router]);

  return null;
}
