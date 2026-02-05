"use client";

import { useState } from "react";
import Image from "next/image";
import type { ProductColorOption } from "@/types/product";

/** Renk etiketine göre container vurgu rengi (border + glow) */
const LABEL_TO_ACCENT: Record<string, string> = {
  İşıksız: "#94a3b8",
  Beyaz: "#e2e8f0",
  "Gün Işığı": "#fbbf24",
  Kırmızı: "#ef4444",
  Mavi: "#3b82f6",
  Macenta: "#d946ef",
  Turkuaz: "#06b6d4",
  Yeşil: "#22c55e",
  Amber: "#f59e0b",
};

/** RGB seçildiğinde kullanılan renkli geçiş (border + üst çizgi) */
const RGB_GRADIENT =
  "linear-gradient(90deg, #ef4444 0%, #f59e0b 20%, #22c55e 40%, #06b6d4 60%, #3b82f6 80%, #d946ef 100%)";

/** RGB glow: kırmızı, yeşil, mavi gölgeler */
const RGB_GLOW =
  "0 10px 40px -10px rgba(239,68,68,0.35), 0 10px 50px -15px rgba(34,197,94,0.3), 0 10px 60px -20px rgba(59,130,246,0.35)";

function getAccentForLabel(label: string): string | null {
  const normalized = label.trim();
  if (normalized === "RGB") return null; // RGB özel gradient ile
  return LABEL_TO_ACCENT[normalized] ?? null;
}

function isRgbLabel(label: string | undefined): boolean {
  return label?.trim() === "RGB";
}

type Props = {
  productName: string;
  colorOptions: ProductColorOption[];
  fallbackImage: string;
};

export default function ProductImageWithColorPicker({
  productName,
  colorOptions,
  fallbackImage,
}: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = colorOptions[selectedIndex];
  const rawSrc = selected?.image ?? fallbackImage;
  const currentSrc = rawSrc.includes(" ") ? rawSrc.replace(/ /g, "%20") : rawSrc;
  const accentColor = selected?.label ? getAccentForLabel(selected.label) : null;
  const useRgbGradient = isRgbLabel(selected?.label);

  if (!colorOptions?.length) return null;

  return (
    <section className="space-y-6">
      {/* Ana görsel - seçilen renge göre border + glow; RGB'de gradient border + renkli glow */}
      {useRgbGradient ? (
        <div
          className="relative w-full rounded-2xl p-[3px] transition-all duration-300"
          style={{
            background: RGB_GRADIENT,
            boxShadow: RGB_GLOW,
          }}
        >
          <div className="relative w-full rounded-[14px] overflow-hidden bg-white">
            <div className="relative aspect-square max-w-2xl mx-auto p-8 sm:p-12 lg:p-16 bg-white">
              {/* Beyaz arka plan katmanı */}
              <div className="absolute inset-0 bg-white z-0" />
              <Image
                key={currentSrc}
                src={currentSrc}
                alt={`${productName} - ${selected?.label ?? "görsel"}`}
                fill
                className="object-contain transition-opacity duration-300 relative z-10"
                sizes="(max-width: 1024px) 100vw, 66vw"
                priority
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = fallbackImage;
                }}
              />
            </div>
          </div>
        </div>
      ) : (
        <div
          className="relative w-full rounded-2xl overflow-hidden bg-white border-2 shadow-lg transition-all duration-300"
          style={{
            borderColor: accentColor ?? "var(--batech-pearl, #e2e8f0)",
            boxShadow: accentColor
              ? `0 10px 40px -10px ${accentColor}40, 0 0 0 1px ${accentColor}30`
              : "0 10px 40px -10px rgba(6, 182, 212, 0.08)",
          }}
        >
          <div className="relative aspect-square max-w-2xl mx-auto p-8 sm:p-12 lg:p-16 bg-white">
          {/* Beyaz arka plan katmanı - görselin şeffaf kısımlarını beyaz yapar */}
          <div className="absolute inset-0 bg-white z-0" />
          <Image
            key={currentSrc}
            src={currentSrc}
            alt={`${productName} - ${selected?.label ?? "görsel"}`}
            fill
            className="object-contain transition-opacity duration-300 relative z-10"
            sizes="(max-width: 1024px) 100vw, 66vw"
            priority
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = fallbackImage;
            }}
          />
        </div>
      </div>
      )}

      {/* Renk seçici - seçilen renge göre üst çizgi; RGB'de gradient */}
      <div className="bg-white rounded-2xl border border-batech-pearl p-6 shadow-sm transition-all duration-300 overflow-hidden">
        {useRgbGradient ? (
          <div
            className="h-1 w-full rounded-t-2xl -mt-6 -mx-6 mb-5"
            style={{ background: RGB_GRADIENT }}
          />
        ) : accentColor ? (
          <div
            className="h-[3px] w-full -mt-6 -mx-6 mb-5"
            style={{ backgroundColor: accentColor }}
          />
        ) : null}
        <p className="text-sm font-semibold text-batech-navy mb-4">Renk / görünüm</p>
        <div className="flex flex-wrap gap-2.5">
          {colorOptions.map((option, index) => (
            <button
              key={`${option.label}-${index}`}
              type="button"
              onClick={() => setSelectedIndex(index)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                selectedIndex === index
                  ? "bg-batech-ocean text-white shadow-md ring-2 ring-batech-cyan ring-offset-2 scale-105"
                  : "bg-batech-pearl text-batech-ocean hover:bg-batech-pearl/80 hover:ring-1 hover:ring-batech-cyan/50 hover:shadow-sm"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
