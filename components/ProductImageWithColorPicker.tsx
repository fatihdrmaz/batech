"use client";

import { useState } from "react";
import Image from "next/image";
import type { ProductColorOption } from "@/types/product";

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

  if (!colorOptions?.length) return null;

  return (
    <section className="space-y-6">
      {/* Ana görsel */}
      <div className="relative w-full rounded-2xl overflow-hidden bg-white border border-batech-pearl shadow-lg shadow-batech-navy/5">
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

      {/* Renk seçici */}
      <div className="bg-white rounded-2xl border border-batech-pearl p-6 shadow-sm">
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
