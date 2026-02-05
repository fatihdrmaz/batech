"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "İletişime Geçin",
    description: "Telefon, e-posta veya WhatsApp ile bize ulaşın. İhtiyacınızı kısaca belirtin.",
  },
  {
    step: "02",
    title: "İhtiyaç Analizi",
    description: "Havuz tipi, kullanım alanı ve bütçenize göre en uygun ürünleri belirliyoruz.",
  },
  {
    step: "03",
    title: "Teklif & Katalog",
    description: "Detaylı fiyat teklifi ve ürün kataloğu ile size özel çözüm sunuyoruz.",
  },
  {
    step: "04",
    title: "Sevkiyat & Destek",
    description: "Siparişiniz hızlıca hazırlanır; kurulum ve sonrasında teknik destek sağlarız.",
  },
];

export default function Process() {
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
            Çalışma Şeklimiz
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-batech-navy">
            Nasıl Çalışıyoruz?
          </h2>
          <p className="mt-4 text-batech-silver">
            Basit ve şeffaf süreçle ihtiyacınıza en uygun havuz ekipmanını birlikte belirliyoruz.
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
