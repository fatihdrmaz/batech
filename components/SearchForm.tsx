"use client";

import { useRouter } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { useState } from "react";

type Props = { className?: string; compact?: boolean };

export default function SearchForm({ className = "", compact = false }: Props) {
  const t = useTranslations("searchPage");
  const router = useRouter();
  const [q, setQ] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const query = q.trim();
    if (query) router.push(`/ara?q=${encodeURIComponent(query)}`);
  }

  if (compact) {
    return (
      <form onSubmit={handleSubmit} className={`flex gap-2 ${className}`}>
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={t("placeholder")}
          className="flex-1 min-w-0 px-3 py-2 rounded-lg border border-batech-pearl text-batech-navy placeholder:text-batech-silver/70 text-sm focus:outline-none focus:ring-2 focus:ring-batech-cyan focus:border-transparent"
          aria-label={t("placeholder")}
        />
        <button
          type="submit"
          className="px-4 py-2 rounded-lg bg-batech-ocean text-white text-sm font-medium hover:bg-batech-teal transition-colors"
        >
          {t("title")}
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-3 max-w-2xl ${className}`}>
      <input
        type="search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder={t("placeholder")}
        className="flex-1 min-w-0 px-4 py-3 rounded-xl border border-batech-pearl text-batech-navy placeholder:text-batech-silver/70 focus:outline-none focus:ring-2 focus:ring-batech-cyan focus:border-transparent"
        aria-label={t("placeholder")}
      />
      <button
        type="submit"
        className="px-6 py-3 rounded-xl bg-batech-ocean text-white font-medium hover:bg-batech-teal transition-colors"
      >
        {t("title")}
      </button>
    </form>
  );
}
