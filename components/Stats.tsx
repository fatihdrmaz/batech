"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "36+", label: "Yıllık Tecrübe", sub: "1988'den bu yana" },
  { value: "50+", label: "Ürün Kategorisi", sub: "Havuz ekipmanları" },
  { value: "1000+", label: "Tamamlanan Proje", sub: "Türkiye genelinde" },
  { value: "%100", label: "Müşteri Odaklı", sub: "İhtiyaca özel çözüm" },
];

export default function Stats() {
  return (
    <section className="py-16 lg:py-20 bg-batech-ocean text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-batech-cyan/10 via-transparent to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-batech-cyan">
                {stat.value}
              </div>
              <div className="mt-2 text-lg font-semibold text-white">
                {stat.label}
              </div>
              <div className="mt-1 text-sm text-batech-silver">{stat.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
