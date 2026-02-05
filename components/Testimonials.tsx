"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Hem ürün kalitesi hem fiyat-performance açısından memnun kaldık. Projemizde Batech ekipmanları kullandık, sorunsuz teslimat ve sonrasında da destek aldık.",
    role: "Havuz İnşaat Firması",
  },
  {
    quote: "Havuz aydınlatma ürünlerinde uzun süredir Batech ile çalışıyoruz. Geniş ürün yelpazesi ve hızlı sevkiyat işimizi kolaylaştırıyor.",
    role: "Bayi / Uygulayıcı",
  },
  {
    quote: "Villa havuzumuz için tek noktadan tüm ekipmanı temin ettik. Teknik ekibin önerileri ve uygun fiyat politikası tercih sebebimiz oldu.",
    role: "Bireysel Müşteri",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-batech-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-batech-cyan font-medium text-sm uppercase tracking-wider">
            Referanslar
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold section-accent pb-6">
            Müşterilerimiz Ne Diyor?
          </h2>
          <p className="mt-4 text-batech-silver">
            Binlerce projede güvenilir iş ortağı olarak yer aldık.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl bg-white/5 border border-white/10 p-6 lg:p-8 hover:bg-white/10 transition-colors"
            >
              <svg className="w-10 h-10 text-batech-cyan/60 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4.998v10h-9.981zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.998 3.638-3.998 5.849h3.998v10h-9.996z" />
              </svg>
              <p className="text-batech-silver leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <p className="mt-4 text-sm font-medium text-batech-cyan">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
