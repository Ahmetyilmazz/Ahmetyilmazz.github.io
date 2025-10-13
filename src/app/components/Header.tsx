"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import AnimatedText from "./AnimatedText";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter(); // ✅
  const pathname = usePathname(); // ✅

  const navLinks = [
    { name: "Ana Sayfa", href: "#home" },
    { name: "Hakkımda", href: "#about" },
    { name: "Projeler", href: "#projects" },
    { name: "Sertifikalar", href: "/Certificates" },
    { name: "Yetenekler", href: "#skills" },
    { name: "İletişim", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);

    if (href.startsWith("/")) {
      // ✅ Route ise doğrudan git
      router.push(href);
    } else if (pathname !== "/") {
      // ✅ Eğer şu an /Certificates sayfasındaysan önce ana sayfaya git
      router.push(`/${href}`);
    } else {
      // ✅ Aynı sayfadaysa normal scroll
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-b from-[#0a1a2f] to-[#112244] backdrop-blur-md border-b border-[#1b2c4f]/40">
      <div className="container mx-auto flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <AnimatedText />
        </div>

        {/* Masaüstü Menü */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-medium text-gray-300 hover:text-[#00C4FF] transition-colors duration-300"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Mobil Menü Butonu */}
        <button
          className="md:hidden text-gray-300 hover:text-[#00C4FF] transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menüyü Aç/Kapat"
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobil Menü */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="absolute top-full left-0 w-full bg-[#0a1a2f] border-t border-[#1b2c4f]/40 md:hidden"
          >
            <div className="flex flex-col items-center py-6 space-y-5">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm font-medium text-gray-300 hover:text-[#00C4FF] transition-colors duration-300"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
