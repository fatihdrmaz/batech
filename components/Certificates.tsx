"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Certificates() {
  const t = useTranslations();
  const items = t.raw("certificates.items") as Array<{ title: string; desc: string }>;

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
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, boxShadow: "0 20px 40px -12px rgba(6, 182, 212, 0.15)" }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center p-8 rounded-2xl border border-batech-pearl bg-batech-pearl/20 hover:border-batech-cyan/30 transition-all duration-300"
            >
              <motion.div
                className="w-20 h-20 rounded-2xl bg-water-gradient flex items-center justify-center text-white shadow-lg"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 00-4.438 0 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 00-4.438 0 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138z" />
                </svg>
              </motion.div>
              <h3 className="mt-4 text-lg font-semibold text-batech-navy">{item.title}</h3>
              <p className="mt-2 text-sm text-batech-silver">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center text-sm text-batech-silver"
        >
          Detaylı belge bilgisi ve katalog için{" "}
          <Link href="#iletisim" className="text-batech-teal font-medium hover:underline">
            {t("certificates.contact")}
          </Link>
          .
        </motion.p>
      </div>
    </section>
  );
}
