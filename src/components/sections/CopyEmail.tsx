"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CopyEmailProps {
  email: string;
  labels: { copy: string; copied: string };
}

export default function CopyEmail({ email, labels }: CopyEmailProps) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Pano izni yoksa adres zaten seçilebilir metin olarak görünüyor.
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-xs font-semibold text-muted transition hover:border-accent hover:text-accent"
    >
      {copied ? <Check size={14} /> : <Copy size={14} />}
      <span aria-live="polite">{copied ? labels.copied : labels.copy}</span>
    </button>
  );
}
