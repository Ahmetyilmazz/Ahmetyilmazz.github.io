"use client";

import { useLayoutEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { readPreference, savePreference, type Theme } from "@/lib/preferences";

interface ThemeToggleProps {
  labels: { light: string; dark: string };
}

const applyTheme = (theme: Theme) => {
  const root = document.documentElement;
  if (theme === "light") root.dataset.theme = "light";
  else delete root.dataset.theme;
};

export default function ThemeToggle({ labels }: ThemeToggleProps) {
  const [theme, setTheme] = useState<Theme>("dark");

  // Dil değişince Next.js <html> etiketini yeniden kurar ve data-theme silinir;
  // bileşen her kurulduğunda kayıtlı tema ekran çizilmeden yeniden uygulanır.
  useLayoutEffect(() => {
    const saved: Theme = readPreference("theme") === "light" ? "light" : "dark";
    applyTheme(saved);
    setTheme(saved);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    applyTheme(next);
    savePreference("theme", next);
    setTheme(next);
  };

  const label = theme === "dark" ? labels.light : labels.dark;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="grid size-10 place-items-center rounded-full border border-line text-muted transition hover:border-accent hover:text-accent"
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
