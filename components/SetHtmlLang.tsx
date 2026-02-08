"use client";

import { useEffect } from "react";

const LOCALE_TO_LANG: Record<string, string> = {
  tr: "tr",
  en: "en",
  ar: "ar",
  es: "es",
  fr: "fr",
};

export default function SetHtmlLang({ locale }: { locale: string }) {
  useEffect(() => {
    document.documentElement.lang = LOCALE_TO_LANG[locale] ?? locale;
  }, [locale]);
  return null;
}
