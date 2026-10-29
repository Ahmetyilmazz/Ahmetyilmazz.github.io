export type Theme = "dark" | "light";

export const storageKeys = {
  theme: "theme",
  locale: "locale",
} as const;

/** Sayfa boyanmadan önce kayıtlı temayı uygular; açık temada beyaz-koyu titremesini önler. */
export const themeInitScript = `try{if(localStorage.getItem("${storageKeys.theme}")==="light")document.documentElement.dataset.theme="light"}catch(e){}`;

/** Kök adresten kayıtlı ya da tarayıcı diline göre doğru dile yönlendirir. */
export const localeRedirectScript = (path: string) =>
  `var l;try{l=localStorage.getItem("${storageKeys.locale}")}catch(e){}if(l!=="tr"&&l!=="en"){l=(navigator.language||"").toLowerCase().indexOf("tr")===0?"tr":"en"}location.replace("/"+l+${JSON.stringify(path)})`;

export const savePreference = (key: keyof typeof storageKeys, value: string) => {
  try {
    localStorage.setItem(storageKeys[key], value);
  } catch {
    // Gizli sekme veya engellenmiş depolama: tercih yalnızca bu oturumda geçerli kalır.
  }
};
