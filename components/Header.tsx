"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/#hakkimizda", label: "Hakkımızda" },
  { href: "/urunler", label: "Ürünler" },
  { href: "/#degerler", label: "Değerlerimiz" },
  { href: "/#iletisim", label: "İletişim" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-batech-pearl/50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
            aria-label="Batech Ana Sayfa"
          >
            <span className="text-2xl font-bold tracking-tight text-batech-ocean group-hover:text-batech-teal transition-colors">
              Batech
            </span>
            <span className="text-xs font-medium text-batech-teal uppercase tracking-widest hidden sm:inline">
              Havuz Ekipmanları
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-batech-ocean hover:text-batech-teal transition-colors relative after:absolute after:left-0 after:bottom-[-2px] after:h-0.5 after:bg-batech-cyan after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-right"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+902126165520"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-batech-ocean text-white text-sm font-medium hover:bg-batech-teal transition-colors"
            >
              <span className="hidden sm:inline">0212 616 55 20</span>
              <span className="sm:hidden">Ara</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-lg text-batech-ocean hover:bg-batech-pearl"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label="Menü"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden overflow-hidden border-t border-batech-pearl"
            >
              <div className="py-4 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-3 text-batech-ocean font-medium hover:bg-batech-pearl rounded-lg"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href="tel:+902126165520"
                  className="block px-4 py-3 text-batech-teal font-semibold"
                  onClick={() => setMobileOpen(false)}
                >
                  0212 616 55 20
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
