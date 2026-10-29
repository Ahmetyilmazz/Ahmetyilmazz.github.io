import type { Localized } from "@/i18n/config";

export type AppCategory = "game" | "education";

/** Google Play'de yayında olan uygulamalar. Metinler mağaza sayfasındaki kısa açıklamalardır. */
export interface PlayApp {
  packageId: string;
  name: Localized;
  tagline: Localized;
  category: AppCategory;
  icon: string;
}

export const playStoreUrl = (packageId: string) => `https://play.google.com/store/apps/details?id=${packageId}`;

export const playApps: PlayApp[] = [
  {
    packageId: "app.ahmetylmzzz.words",
    name: { tr: "Learn English | OXFORD 4000+", en: "Learn English | OXFORD 4000+" },
    tagline: {
      tr: "Kelimeleri kartlarla öğren! Sesli dinleme, testler ve detaylı sonuç analizi.",
      en: "Learn words with flashcards! Audio listening, tests and detailed result analysis.",
    },
    category: "education",
    icon: "/images/apps/oxford-4000.png",
  },
  {
    packageId: "com.ahmetylmzzz.learnWord",
    name: { tr: "11 Dilde Kelime Öğren", en: "Learn Words in 11 Languages" },
    tagline: {
      tr: "Sesli telaffuz ve eşleştirme oyunlarıyla yabancı dil öğrenmek artık çok kolay.",
      en: "Learn a foreign language with audio pronunciation and matching games.",
    },
    category: "education",
    icon: "/images/apps/learn-words.png",
  },
  {
    packageId: "app.ahmetylmzzz.matematik",
    name: { tr: "Temel Matematik", en: "Basic Math: Fun Adventure" },
    tagline: {
      tr: "Matematiği sevdiren eğlenceli macera! Topla, çıkar ve rekorlar kır.",
      en: "A fun math adventure that makes you love math! Add, subtract and break records.",
    },
    category: "education",
    icon: "/images/apps/temel-matematik.png",
  },
  {
    packageId: "app.ahmetylmzzz.solo_test",
    name: { tr: "Solo Test", en: "Solo Test" },
    tagline: {
      tr: "Zekanı test etmeye hazır mısın? Stratejini kur, en az piyonu bırak.",
      en: "Test your intelligence. Plan your strategy and leave the fewest pegs.",
    },
    category: "game",
    icon: "/images/apps/solo-test.png",
  },
];
