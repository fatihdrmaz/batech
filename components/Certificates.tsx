"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const CERTIFICATE_IMAGES = ["/ISO_9001.png", "/CE_belgesi.png", "/marka_tescil_belgesi.png"] as const;

export default function Certificates() {
  const t = useTranslations();
  const items = t.raw("certificates.items") as Array<{ title: string; desc: string }>;
  const [popupImage, setPopupImage] = useState<string | null>(null);
  const [popupTitle, setPopupTitle] = useState<string>("");

  const openPopup = (src: string, title: string) => {
    setPopupImage(src);
    setPopupTitle(title);
  };

  const closePopup = () => {
    setPopupImage(null);
    setPopupTitle("");
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePopup();
    };
    if (popupImage) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [popupImage]);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-batech-teal font-medium text-sm uppercase tracking-wider">
            {t("certificates.label")}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-batech-navy section-accent pb-6">
            {t("certificates.title")}
          </h2>
          <p className="mt-4 text-batech-silver">
            {t("certificates.subtitle")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {items.map((item, i) => (
            <motion.button
              key={item.title}
              type="button"
              onClick={() => openPopup(CERTIFICATE_IMAGES[i] ?? "", item.title)}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, boxShadow: "0 20px 40px -12px rgba(6, 182, 212, 0.15)" }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl border border-batech-pearl bg-batech-pearl/20 hover:border-batech-cyan/30 transition-all duration-300 cursor-pointer group w-full text-left"
            >
              <div className="relative w-full aspect-[3/4] max-h-48 rounded-xl overflow-hidden bg-white border border-batech-pearl/50 group-hover:ring-2 group-hover:ring-batech-cyan/20 transition-all">
                <Image
                  src={CERTIFICATE_IMAGES[i] ?? "/images/placeholder-product.svg"}
                  alt={item.title}
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-batech-navy">{item.title}</h3>
              <p className="mt-2 text-sm text-batech-silver">{item.desc}</p>
              <span className="mt-2 text-xs text-batech-teal font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                {t("certificates.viewFull")}
              </span>
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence>
          {popupImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
              onClick={closePopup}
              role="dialog"
              aria-modal="true"
              aria-label={popupTitle}
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
                  onClick={closePopup}
                  className="absolute -top-12 right-0 z-10 p-2 rounded-full text-white hover:bg-white/20 transition-colors"
                  aria-label={t("certificates.close")}
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="relative w-full max-h-[85vh] aspect-[3/4] bg-white rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={popupImage}
                    alt={popupTitle}
                    fill
                    className="object-contain p-4"
                    sizes="100vw"
                  />
                </div>
                <p className="mt-3 text-white font-medium">{popupTitle}</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center text-sm text-batech-silver"
        >
          {t("certificates.viewFullHint")}{" "}
          <Link href="#iletisim" className="text-batech-teal font-medium hover:underline">
            {t("certificates.contact")}
          </Link>
          .
        </motion.p>
      </div>
    </section>
  );
}
