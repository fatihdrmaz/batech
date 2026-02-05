import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  getCategoryBySlug,
  getProductsByCategory,
  getCategoryImage,
  getProductImage,
  categories,
} from "@/lib/products";

type Props = {
  params: Promise<{ category: string }>;
};

export async function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return { title: "Kategori | Batech" };
  return {
    title: `${category.name} | Batech Havuz Ekipmanları`,
    description: category.description || `${category.name} ürün kataloğu.`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const categoryProducts = getProductsByCategory(slug);

  return (
    <div className="min-h-screen bg-white">
      <div className="relative bg-batech-ocean text-white py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={getCategoryImage(category)} alt="" fill className="object-cover opacity-25" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-batech-navy/80 via-batech-ocean/90 to-batech-ocean" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/urunler"
            className="inline-flex items-center gap-2 text-sm text-batech-cyan hover:text-white transition-colors mb-6"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Tüm kategoriler
          </Link>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold section-accent pb-6">
            {category.name}
          </h1>
          {category.description && (
            <p className="mt-4 text-batech-silver max-w-2xl text-lg">{category.description}</p>
          )}
          <p className="mt-3 text-sm text-batech-cyan/90">
            {categoryProducts.length} ürün listeleniyor
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        {categoryProducts.length === 0 ? (
          <div className="text-center py-20 rounded-2xl bg-batech-pearl/40 border border-batech-pearl">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-batech-pearl flex items-center justify-center text-batech-ocean mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8 4-8-4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <p className="text-batech-navy font-medium">Bu kategoride henüz ürün bulunmuyor.</p>
            <p className="mt-2 text-sm text-batech-silver">
              Katalog ve fiyat için{" "}
              <Link href="/#iletisim" className="text-batech-teal font-medium hover:text-batech-cyan transition-colors">
                iletişime geçiniz
              </Link>
              .
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 stagger-grid">
            {categoryProducts.map((product) => (
              <Link
                key={product.slug}
                href={`/urun/${product.slug}`}
                className="group block rounded-2xl border border-batech-pearl bg-white overflow-hidden hover:border-batech-cyan/40 hover:shadow-xl hover:shadow-batech-cyan/5 transition-all duration-300 card-shine"
              >
                <div className="relative aspect-[4/3] w-full bg-batech-pearl overflow-hidden">
                  <Image
                    src={getProductImage(product)}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-batech-navy/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h2 className="text-lg font-semibold text-batech-navy group-hover:text-batech-teal transition-colors line-clamp-2">
                    {product.name}
                  </h2>
                  {product.description && (
                    <p className="mt-2 text-sm text-batech-silver line-clamp-2">
                      {product.description}
                    </p>
                  )}
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-batech-teal group-hover:text-batech-cyan group-hover:gap-3 transition-all">
                    Detay
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}

        <div className="mt-14 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/#iletisim"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-batech-ocean text-white font-medium hover:bg-batech-teal transition-colors shadow-lg hover:shadow-xl"
          >
            Fiyat teklifi alın
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="/urunler"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-batech-pearl text-batech-ocean font-medium hover:border-batech-cyan hover:text-batech-teal transition-colors"
          >
            Tüm kategoriler
          </Link>
        </div>
      </div>
    </div>
  );
}
