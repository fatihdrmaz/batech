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
      <div className="bg-batech-navy text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold">Ürün Kategorileri</h1>
          <p className="mt-3 text-batech-silver max-w-2xl">
            Havuz ekipmanları kataloğumuz. Kategori seçerek ürünlere göz atın.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const productCount = getProductsByCategory(cat.slug).length || cat.productCount;
            return (
              <Link
                key={cat.slug}
                href={`/urunler/${cat.slug}`}
                className="group block rounded-2xl border border-batech-pearl bg-white overflow-hidden hover:border-batech-cyan/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="relative aspect-[16/10] w-full bg-batech-pearl">
                  <Image
                    src={getCategoryImage(cat)}
                    alt={cat.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6 lg:p-8">
                  <span className="text-xs font-medium text-batech-cyan uppercase tracking-wider">
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
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-batech-teal group-hover:text-batech-cyan">
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

        <p className="mt-12 text-center text-batech-silver text-sm">
          Katalog ve fiyat teklifi için{" "}
          <Link href="/#iletisim" className="text-batech-teal font-medium hover:underline">
            iletişime geçiniz
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
