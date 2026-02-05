"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations();

  return (
    <section id="hakkimizda" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-batech-teal font-medium text-sm uppercase tracking-wider">
              {t("about.label")}
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-batech-navy section-accent pb-6">
              {t("about.title1")}
              <br />
              <span className="text-batech-teal">{t("about.title2")}</span>
            </h2>
            <p className="mt-6 text-batech-silver leading-relaxed">
              {t("about.description1")}
            </p>
            <p className="mt-4 text-batech-silver leading-relaxed">
              {t("about.description2")}
            </p>
            <ul className="mt-8 space-y-3">
              {(t.raw("about.items") as string[]).map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-batech-ocean">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-batech-cyan/20 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-batech-teal" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl bg-water-gradient overflow-hidden shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white/90 p-8">
                  <span className="text-6xl sm:text-7xl font-bold">{t("about.years")}</span>
                  <p className="text-lg font-medium mt-2">{t("about.yearsLabel")}</p>
                  <p className="text-sm mt-1 opacity-80">{t("about.yearsSub")}</p>
                </div>
              </div>
              {/* Decorative grid overlay */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
                  backgroundSize: "40px 40px",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
