"use client";

import { motion } from "framer-motion";

export default function About() {
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
              Hakkımızda
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-batech-navy section-accent pb-6">
              41 yıldır havuz ekipmanlarında
              <br />
              <span className="text-batech-teal">güvenilir çözüm ortağınız</span>
            </h2>
            <p className="mt-6 text-batech-silver leading-relaxed">
              Batech olarak havuz projelerinin imalatından tasarımına, kullanım sonrası
              bakım aşamasına kadar tüm süreçlerde kaliteli ekipman ve güvenilir hizmet
              sunuyoruz. Havuz aydınlatma ekipmanları, elektrik panoları, filtreler,
              pompalar, ısıtma ekipmanları ve havuz kimyasalları ile tek adresiniziz.
            </p>
            <p className="mt-4 text-batech-silver leading-relaxed">
              Özellikle havuz lambaları ve aydınlatma sistemlerinde 41 yılı aşkın üretim
              tecrübemizle sektörde öncü konumdayız. Konut havuzlarından otel ve spor tesislerine,
              süs havuzlarından olimpik yüzme havuzlarına kadar her ölçekte projeye uygun
              ürün çeşitliliği sunuyoruz. Müşteri memnuniyeti ve uzun ömürlü ürünler
              önceliğimizdir.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Havuz Aydınlatma Ekipmanları",
                "Elektrik Panoları",
                "Filtreler ve Ekipmanları",
                "Pompalar ve Isıtma Ekipmanları",
                "Havuz Temizlik ve Kenar Ekipmanları",
                "Yüzme Havuzu Kimyasalları",
              ].map((item, i) => (
                <li key={item} className="flex items-center gap-3 text-batech-ocean">
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
                  <span className="text-6xl sm:text-7xl font-bold">41</span>
                  <p className="text-lg font-medium mt-2">Yıllık Tecrübe</p>
                  <p className="text-sm mt-1 opacity-80">Havuz ekipmanlarında 1 numara</p>
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
