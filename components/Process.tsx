"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const DEFAULT_STEPS: Array<{ step: string; title: string; description: string }> = [
  { step: "01", title: "Contact", description: "Reach us by phone, email or WhatsApp." },
  { step: "02", title: "Analysis", description: "We identify the most suitable products." },
  { step: "03", title: "Quote & Catalog", description: "We offer a tailored solution." },
  { step: "04", title: "Shipping & Support", description: "Your order is prepared; we provide support." },
];

export default function Process() {
  const t = useTranslations();
  const rawSteps = t.raw("workProcess.steps");
  const steps = Array.isArray(rawSteps) ? (rawSteps as Array<{ step: string; title: string; description: string }>) : DEFAULT_STEPS;

  return (
    <section className="py-20 lg:py-28 bg-water-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-batech-teal font-medium text-sm uppercase tracking-wider">
            {t("workProcess.label")}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-batech-navy section-accent pb-6">
            {t("workProcess.title")}
          </h2>
          <p className="mt-4 text-batech-silver">
            {t("workProcess.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-batech-cyan/30" />
              )}
              <div className="relative bg-white rounded-2xl p-6 lg:p-8 border border-batech-pearl shadow-sm hover:shadow-md hover:border-batech-cyan/30 transition-all">
                <span className="text-3xl font-bold text-batech-cyan/30">{item.step}</span>
                <h3 className="mt-4 text-lg font-semibold text-batech-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-batech-silver leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
