import Link from "next/link";
import Image from "next/image";
import { categories, getProductsByCategory, getCategoryImage } from "@/lib/products";

export const metadata = {
  title: "Ürün Kategorileri | Batech Havuz Ekipmanları",
  description: "Havuz aydınlatma, filtre, pompa, ısıtma ve tüm havuz ekipmanları kategorileri.",
};

export default function UrunlerPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative bg-batech-navy text-white py-20 lg:py-28 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-batech-cyan/10 via-transparent to-transparent pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-batech-cyan font-medium text-sm uppercase tracking-wider">
            Katalog
          </span>
          <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold section-accent pb-6">
            Ürün Kategorileri
          </h1>
          <p className="mt-4 text-batech-silver max-w-2xl text-lg">
            Havuz ekipmanları kataloğumuz. Kategori seçerek ürünlere göz atın.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 stagger-grid">
          {categories.map((cat) => {
            const productCount = getProductsByCategory(cat.slug).length || cat.productCount;
            return (
              <Link
                key={cat.slug}
                href={`/urunler/${cat.slug}`}
                className="group block rounded-2xl border border-batech-pearl bg-white overflow-hidden hover:border-batech-cyan/40 hover:shadow-xl hover:shadow-batech-cyan/5 transition-all duration-300 card-shine"
              >
                <div className="relative aspect-[16/10] w-full bg-batech-pearl overflow-hidden">
                  <Image
                    src={getCategoryImage(cat)}
                    alt={cat.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-batech-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 lg:p-8">
                  <span className="text-xs font-semibold text-batech-cyan uppercase tracking-wider">
                    {productCount} ürün
                  </span>
                  <h2 className="mt-2 text-xl font-semibold text-batech-navy group-hover:text-batech-teal transition-colors">
                    {cat.name}
                  </h2>
                  {cat.description && (
                    <p className="mt-2 text-sm text-batech-silver line-clamp-2">
                      {cat.description}
                    </p>
                  )}
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-batech-teal group-hover:text-batech-cyan group-hover:gap-3 transition-all">
                    Ürünleri görüntüle
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-batech-silver text-sm">
            Katalog ve fiyat teklifi için{" "}
            <Link
              href="/#iletisim"
              className="inline-flex items-center gap-1 text-batech-teal font-medium hover:text-batech-cyan transition-colors"
            >
              iletişime geçiniz
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
