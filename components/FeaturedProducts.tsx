"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const products = [
  { slug: "mosaic-model-havuz-kenar-izgarasi", name: "20 cm Mosaic Model Havuz Kenar Izgarası", category: "Havuz Kenar Ekipmanları", description: "Dayanıklı paslanmaz yapı, mosaic tasarım.", image: "/images/placeholder-product.svg" },
  { slug: "tek-led-mini-spot", name: "Tek Led Mini Spot (Parmak Mini Spot)", category: "Havuz Aydınlatma", description: "Enerji tasarruflu LED, uzun ömürlü.", image: "/images/placeholder-product.svg" },
  { slug: "paslanmaz-havuz-su-perdesi", name: "Paslanmaz Havuz Su Perdesi (Kobra Şelale)", category: "Süs Havuzu Ekipmanları", description: "Estetik su perdesi ve şelale efekti.", image: "/images/placeholder-product.svg" },
  { slug: "alti-yollu-vana", name: "Altı Yollu Vana", category: "Havuz Kenar ve İç Ekipmanları", description: "Çok yönlü akış kontrolü, güvenilir kullanım.", image: "/images/placeholder-product.svg" },
  { slug: "par56-paslanmaz-armatur-siva-alti", name: "PAR56 Paslanmaz Armatür (Sıva Altı)", category: "Havuz Aydınlatma", description: "Profesyonel havuz aydınlatma çözümü.", image: "/images/placeholder-product.svg" },
  { slug: "par38-ayakli-armatur", name: "PAR38 Ayaklı Armatür", category: "Havuz Aydınlatma", description: "9W LED, beyaz / güneş ışığı / RGB ve renk seçenekleri.", image: "/images/placeholder-product.svg" },
];

export default function FeaturedProducts() {
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
            Öne Çıkan Ürünler
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-batech-navy">
            Son Eklenen & Popüler Ürünler
          </h2>
          <p className="mt-4 text-batech-silver">
            Katalogumuzdan güncel ve çok tercih edilen havuz ekipmanları.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group rounded-2xl border border-batech-pearl bg-white overflow-hidden hover:border-batech-cyan/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="relative aspect-[4/3] w-full bg-batech-pearl">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-medium text-batech-cyan uppercase tracking-wider">
                  {product.category}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-batech-navy group-hover:text-batech-teal transition-colors line-clamp-2">
                <Link href={`/urun/${product.slug}`} className="hover:underline">
                  {product.name}
                </Link>
              </h3>
              <p className="mt-2 text-sm text-batech-silver line-clamp-2">
                {product.description}
              </p>
                <div className="mt-4 flex gap-3">
                  <Link
                    href={`/urun/${product.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-batech-teal hover:text-batech-cyan"
                  >
                    Ürün detayı
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link href="/#iletisim" className="text-sm font-medium text-batech-silver hover:text-batech-teal">
                    Teklif al
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <Link
            href="/urunler"
            className="inline-flex items-center gap-2 text-batech-teal font-semibold hover:text-batech-cyan transition-colors"
          >
            Tüm ürün kategorilerini inceleyin
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
