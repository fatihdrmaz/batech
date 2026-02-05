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
    <section className="space-y-4">
      {/* Ana görsel */}
      <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-batech-pearl border border-batech-pearl">
        <Image
          key={currentSrc}
          src={currentSrc}
          alt={`${productName} - ${selected?.label ?? "görsel"}`}
          fill
          className="object-contain transition-opacity duration-300"
          sizes="(max-width: 1024px) 100vw, 66vw"
          priority
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src = fallbackImage;
          }}
        />
      </div>

      {/* Renk seçici */}
      <div>
        <p className="text-sm font-medium text-batech-navy mb-3">Renk / görünüm</p>
        <div className="flex flex-wrap gap-2">
          {colorOptions.map((option, index) => (
            <button
              key={`${option.label}-${index}`}
              type="button"
              onClick={() => setSelectedIndex(index)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                selectedIndex === index
                  ? "bg-batech-ocean text-white ring-2 ring-batech-cyan ring-offset-2"
                  : "bg-batech-pearl text-batech-ocean hover:bg-batech-pearl/80 hover:ring-1 hover:ring-batech-cyan/50"
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
