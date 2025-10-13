"use client";
import { useEffect, useState } from "react";

export default function AnimatedText() {
  const texts = [
    "Ahmet YILMAZ",
    "Matematik - Bilgisayar, Lisans",
    "Flutter Developer",
    "Firebase",
    "SQLite",
    "JSON",
    "REST API",
    "React",
    "Next.js",
  ];
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = 1500;

    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayedText.length < currentText.length) {
      // Yazma animasyonu
      timeout = setTimeout(() => {
        setDisplayedText(currentText.substring(0, displayedText.length + 1));
      }, typingSpeed);
    } else if (isDeleting && displayedText.length > 0) {
      // Silme animasyonu
      timeout = setTimeout(() => {
        setDisplayedText(currentText.substring(0, displayedText.length - 1));
      }, typingSpeed);
    } else if (!isDeleting && displayedText.length === currentText.length) {
      // Yazma tamamlandı → bekle
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && displayedText.length === 0) {
      // Silme tamamlandı → sıradaki metne geç
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, textIndex]);

  return (
    <span className="relative font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00C4FF] via-[#00FFB0] to-[#00C4FF] text-lg md:text-xl tracking-wide">
      {displayedText}
      <span className="animate-blink text-[#00FFB0]">|</span>
      <style jsx>{`
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
        .animate-blink {
          animation: blink 0.8s infinite;
        }
      `}</style>
    </span>
  );
}
