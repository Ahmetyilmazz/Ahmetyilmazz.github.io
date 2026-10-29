import { Figtree, Unbounded } from "next/font/google";

export const figtree = Figtree({
  subsets: ["latin", "latin-ext"],
  variable: "--font-figtree",
  display: "swap",
});

export const unbounded = Unbounded({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "700", "800"],
  variable: "--font-unbounded",
  display: "swap",
});

export const fontVariables = `${figtree.variable} ${unbounded.variable}`;
