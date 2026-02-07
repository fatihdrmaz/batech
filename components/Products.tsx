"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const CATEGORY_HREFS = [
  "/urunler/havuz-aydinlatma-ekipmanlari",
  "/urunler/elektrik-panolari",
  "/urunler/filtreler-ve-ekipmanlari",
  "/urunler/havuz-kenar-ve-ic-ekipmanlari",
  "/urunler/havuz-temizlik-ekipmanlari",
  "/urunler/sus-havuzu-ekipmanlari",
];
const CATEGORY_IMAGE = "/images/placeholder-category.svg";

export default function Products() {
  const t = useTranslations();
  const categoriesRaw = t.raw("products.categories") as Array<{ name: string; count: string; description: string }>;
  const categories = Array.isArray(categoriesRaw)
    ? categoriesRaw.map((cat, i) => ({ ...cat, href: CATEGORY_HREFS[i] ?? "/urunler", image: CATEGORY_IMAGE }))
    : [];

  return (
    <section id="urunler" className="py-20 lg:py-28 bg-water-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-batech-teal font-medium text-sm uppercase tracking-wider">
            {t("products.all.label")}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-batech-navy">
            {t("products.all.title")}
          </h2>
          <p className="mt-4 text-batech-silver">
            {t("products.all.subtitle")}
          </p>
          <Link href="/urunler" className="mt-4 inline-block text-batech-teal font-medium hover:text-batech-cyan">
            {t("products.all.viewAll")} →
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group block rounded-2xl bg-white border border-batech-pearl shadow-sm overflow-hidden hover:shadow-xl hover:border-batech-cyan/30 transition-all duration-300"
            >
              <Link href={cat.href} className="block">
                <div className="relative aspect-[16/10] w-full bg-batech-pearl">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6 lg:p-8 flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-medium text-batech-cyan uppercase tracking-wider">
                      {cat.count}
                    </span>
                    <h3 className="mt-2 text-lg font-semibold text-batech-navy group-hover:text-batech-teal transition-colors">
                      {cat.name}
                    </h3>
                    <p className="mt-2 text-sm text-batech-silver">
                      {cat.description}
                    </p>
                  </div>
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-batech-pearl flex items-center justify-center group-hover:bg-batech-cyan group-hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Alt kategori örneği: Aydınlatma ürünleri */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-6 lg:p-8 rounded-2xl bg-white border border-batech-pearl"
        >
          <h3 className="text-lg font-semibold text-batech-navy mb-4">
            {t("products.lightExampleTitle")}
          </h3>
          <p className="text-sm text-batech-silver mb-4">
            {t("products.lightExampleSubtitle")}
          </p>
          <div className="flex flex-wrap gap-2">
            {(t.raw("products.lightProductNames") as string[]).map((name: string) => (
              <span
                key={name}
                className="px-3 py-1.5 rounded-lg bg-batech-pearl text-batech-ocean text-sm font-medium"
              >
                {name}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-batech-silver text-sm">
            {t("products.contactForCatalog")}{" "}
            <a href="#iletisim" className="text-batech-teal font-medium hover:underline">
              {t("products.contactForCatalogLink")}
            </a>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}
