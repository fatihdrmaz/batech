"use client";

import { motion } from "framer-motion";

const values = [
  {
    title: "36 Yıllık Tecrübe",
    description: "Güçlü ürün portföyümüz ve tecrübeli kadromuzla güvenilir bir iş ortağıyız.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 00-4.438 0 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 00-4.438 0 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138z" />
      </svg>
    ),
  },
  {
    title: "Kaliteli Ürün",
    description: "Her zaman kusursuz ürünü yaratmaya çalışıyoruz.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: "Güvenilir Hizmet",
    description: "Sizi sizden daha fazla düşünüyoruz.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Uygun Fiyat",
    description: "En kaliteli ürünler için en adil fiyat politikasını uyguluyoruz.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Müşteri Memnuniyeti",
    description: "Müşterilerimizi dinliyor; kullanım alanına en uygun ürünü temin ediyoruz.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Hızlı Sevkiyat",
    description: "Üretilen ürünü en kısa zamanda size ulaştırmak için çalışıyoruz.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Values() {
  return (
    <section id="degerler" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-batech-teal font-medium text-sm uppercase tracking-wider">
            Değerlerimiz
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-batech-navy">
            Neden Batech?
          </h2>
          <p className="mt-4 text-batech-silver">
            Kalite, güven ve müşteri memnuniyeti odaklı çalışma anlayışımız.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {values.map((v) => (
            <motion.div
              key={v.title}
              variants={item}
              className="group relative p-8 rounded-2xl bg-batech-pearl/50 border border-transparent hover:border-batech-cyan/30 hover:shadow-xl hover:shadow-batech-cyan/5 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="flex items-center justify-center w-14 h-14 rounded-xl bg-batech-ocean text-batech-cyan group-hover:bg-batech-teal group-hover:text-white transition-colors">
                  {v.icon}
                </span>
                <h3 className="text-lg font-semibold text-batech-navy">
                  {v.title}
                </h3>
              </div>
              <p className="text-batech-silver text-sm leading-relaxed">
                {v.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
