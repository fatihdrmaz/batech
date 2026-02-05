"use client";

import { usePathname } from "@/i18n/navigation";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { locales, type Locale } from "@/i18n";

const languageNames: Record<Locale, string> = {
  tr: "Türkçe",
  en: "English",
  es: "Español",
  fr: "Français",
  ar: "العربية",
};

const languageFlags: Record<Locale, string> = {
  tr: "🇹🇷",
  en: "🇬🇧",
  es: "🇪🇸",
  fr: "🇫🇷",
  ar: "🇸🇦",
};

export default function LanguageSwitcher() {
  const t = useTranslations("common");
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const switchLocale = (newLocale: Locale) => {
    // pathname from next-intl is already without locale (e.g. "/" or "/urunler").
    // Use Next.js router so we push the full path and avoid /es/tr style URLs.
    const path = pathname === "/" ? `/${newLocale}` : `/${newLocale}${pathname}`;
    router.push(path);
    setOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2 rounded-xl border border-batech-pearl/60 bg-white hover:border-batech-cyan/50 hover:bg-batech-pearl/30 transition-all shadow-sm"
        aria-label={t("selectLanguage")}
      >
        <span className="text-xl leading-none" aria-hidden>
          {languageFlags[locale]}
        </span>
        <span className="text-sm font-medium text-batech-ocean hidden sm:inline">
          {languageNames[locale]}
        </span>
        <span className="sm:hidden text-sm font-medium text-batech-ocean">
          {locale.toUpperCase()}
        </span>
        <svg
          className={`w-4 h-4 text-batech-ocean transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} aria-hidden />
          <div className="absolute top-full right-0 mt-2 w-44 rounded-xl bg-white border border-batech-pearl shadow-xl z-50 overflow-hidden">
            {locales.map((loc) => (
              <button
                key={loc}
                type="button"
                onClick={() => switchLocale(loc)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors ${
                  locale === loc
                    ? "bg-batech-ocean text-white"
                    : "text-batech-navy hover:bg-batech-pearl"
                }`}
              >
                <span className="text-xl leading-none">{languageFlags[loc]}</span>
                {languageNames[loc]}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
