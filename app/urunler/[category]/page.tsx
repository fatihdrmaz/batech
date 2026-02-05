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
      <div className="relative bg-batech-ocean text-white py-12 lg:py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src={getCategoryImage(category)} alt="" fill className="object-cover" sizes="100vw" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/urunler"
            className="inline-flex items-center gap-1 text-sm text-batech-cyan hover:text-batech-aqua mb-4"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Tüm kategoriler
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold">{category.name}</h1>
          {category.description && (
            <p className="mt-3 text-batech-silver max-w-2xl">{category.description}</p>
          )}
          <p className="mt-2 text-sm text-batech-silver">
            {categoryProducts.length} ürün listeleniyor.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {categoryProducts.length === 0 ? (
          <div className="text-center py-16 rounded-2xl bg-batech-pearl/50 border border-batech-pearl">
            <p className="text-batech-silver">Bu kategoride henüz ürün bulunmuyor.</p>
            <p className="mt-2 text-sm text-batech-silver">
              Katalog ve fiyat için{" "}
              <Link href="/#iletisim" className="text-batech-teal font-medium hover:underline">
                iletişime geçiniz
              </Link>
              .
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryProducts.map((product) => (
              <Link
                key={product.slug}
                href={`/urun/${product.slug}`}
                className="group block rounded-2xl border border-batech-pearl bg-white overflow-hidden hover:border-batech-cyan/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="relative aspect-[4/3] w-full bg-batech-pearl">
                  <Image
                    src={getProductImage(product)}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-lg font-semibold text-batech-navy group-hover:text-batech-teal transition-colors">
                    {product.name}
                  </h2>
                {product.description && (
                  <p className="mt-2 text-sm text-batech-silver line-clamp-2">
                    {product.description}
                  </p>
                )}
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-batech-teal group-hover:text-batech-cyan">
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

        <div className="mt-12 flex justify-center">
          <Link
            href="/#iletisim"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-batech-ocean text-white font-medium hover:bg-batech-teal transition-colors"
          >
            Fiyat teklifi alın
          </Link>
        </div>
      </div>
    </div>
  );
}
