"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

type FaqProps = { showSectionHeader?: boolean };

export default function Faq({ showSectionHeader = true }: FaqProps) {
  const t = useTranslations();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = t.raw("faq.items") as Array<{ question: string; answer: string }>;

  return (
    <section id="sss" className="py-20 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {showSectionHeader && (
          <div className="text-center mb-14">
            <span className="text-batech-teal font-medium text-sm uppercase tracking-wider">
              {t("nav.faq")}
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-batech-navy section-accent pb-6">
              {t("faq.title")}
            </h2>
            <p className="mt-4 text-batech-silver">
              {t("faq.subtitle")}
            </p>
          </div>
        )}

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-batech-pearl bg-batech-pearl/20 overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left font-semibold text-batech-navy hover:bg-batech-pearl/40 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-batech-ocean text-white transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 pt-0 text-batech-silver text-sm leading-relaxed border-t border-batech-pearl/50">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-batech-silver">
          {t("faq.notAnswered")}{" "}
          <Link href="/#iletisim" className="text-batech-teal font-medium hover:text-batech-cyan transition-colors">
            {t("faq.contact")}
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
