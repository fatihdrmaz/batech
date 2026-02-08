"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  technicalDrawing: string;
  productName: string;
};

export default function ProductTechnicalDrawing({ technicalDrawing, productName }: Props) {
  const t = useTranslations("product");
  const tCert = useTranslations("certificates");
  const [popupOpen, setPopupOpen] = useState(false);
  const imageSrc = technicalDrawing.includes(" ") ? technicalDrawing.replace(/ /g, "%20") : technicalDrawing;

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPopupOpen(false);
    };
    if (popupOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [popupOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setPopupOpen(true)}
        className="w-full p-6 rounded-2xl bg-white border border-batech-pearl shadow-lg shadow-batech-navy/5 hover:shadow-xl hover:border-batech-cyan/30 transition-all duration-300 text-left group"
      >
        <h3 className="font-semibold text-batech-navy mb-3">{t("technicalDrawing")}</h3>
        <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-batech-pearl/30 border border-batech-pearl/50 group-hover:ring-2 group-hover:ring-batech-cyan/20 transition-all">
          <Image
            src={technicalDrawing}
            alt={`${productName} - ${t("technicalDrawing")}`}
            fill
            className="object-contain p-2"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
        </div>
        <span className="mt-2 block text-xs text-batech-teal font-medium opacity-0 group-hover:opacity-100 transition-opacity">
          {t("technicalDrawingClick")}
        </span>
      </button>

      <AnimatePresence>
        {popupOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setPopupOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label={t("technicalDrawing")}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setPopupOpen(false)}
                className="absolute -top-12 right-0 z-10 p-2 rounded-full text-white hover:bg-white/20 transition-colors"
                aria-label={tCert("close")}
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="relative w-full max-h-[85vh] aspect-[4/3] bg-white rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={technicalDrawing}
                  alt={`${productName} - ${t("technicalDrawing")}`}
                  fill
                  className="object-contain p-4"
                  sizes="100vw"
                />
              </div>
              <p className="mt-3 text-white font-medium">{t("technicalDrawing")}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
