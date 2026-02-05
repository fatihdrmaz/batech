"use client";

import { motion } from "framer-motion";

const items = [
  { title: "Kalite Belgeleri", desc: "Ürün ve üretim standartları" },
  { title: "CE Belgesi", desc: "Avrupa uyumluluğu" },
  { title: "TSE Uygunluk", desc: "Yerli standartlar" },
];

export default function Certificates() {
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
            Güven
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-batech-navy">
            Belgelerimiz
          </h2>
          <p className="mt-4 text-batech-silver">
            Kalite ve uyumluluk belgelerimizle güvenilir ürün ve hizmet sunuyoruz.
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
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center p-8 rounded-2xl border border-batech-pearl bg-batech-pearl/20 hover:border-batech-cyan/30 transition-all"
            >
              <div className="w-20 h-20 rounded-2xl bg-water-gradient flex items-center justify-center text-white shadow-lg">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 00-4.438 0 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 00-4.438 0 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138z" />
                </svg>
              </div>
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
          <a href="#iletisim" className="text-batech-teal font-medium hover:underline">
            iletişime geçiniz
          </a>
          .
        </motion.p>
      </div>
    </section>
  );
}
