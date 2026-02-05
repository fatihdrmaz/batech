import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  getProductBySlug,
  getCategoryBySlug,
  getRelatedProducts,
  getProductImage,
  getAllProductSlugs,
} from "@/lib/products";
import ProductImageWithColorPicker from "@/components/ProductImageWithColorPicker";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Ürün | Batech" };
  return {
    title: `${product.name} | Batech Havuz Ekipmanları`,
    description: product.description?.slice(0, 160) || product.name,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const category = getCategoryBySlug(product.categorySlug);
  const related = getRelatedProducts(product);

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb & header */}
      <div className="bg-batech-navy text-white py-8 lg:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex flex-wrap items-center gap-2 text-sm text-batech-silver mb-4">
            <Link href="/" className="hover:text-white">Ana Sayfa</Link>
            <span>/</span>
            <Link href="/urunler" className="hover:text-white">Ürünler</Link>
            <span>/</span>
            {category && (
              <>
                <Link href={`/urunler/${product.categorySlug}`} className="hover:text-white">
                  {category.name}
                </Link>
                <span>/</span>
              </>
            )}
            <span className="text-white">{product.name}</span>
          </nav>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">{product.name}</h1>
          {category && (
            <p className="mt-2 text-batech-silver">
              Kategori: {category.name}
            </p>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Ana içerik */}
          <div className="lg:col-span-2 space-y-10">
            {/* Ürün görseli + renk seçici (varsa) */}
            {product.colorOptions && product.colorOptions.length > 0 ? (
              <ProductImageWithColorPicker
                productName={product.name}
                colorOptions={product.colorOptions}
                fallbackImage={getProductImage(product)}
              />
            ) : (
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-batech-pearl border border-batech-pearl">
                <Image
                  src={getProductImage(product)}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  priority
                />
              </div>
            )}
            {/* Varyant tablosu */}
            {product.variants && product.variants.length > 0 && (
              <section>
                <h2 className="text-lg font-semibold text-batech-navy mb-4">Ürün varyantları</h2>
                <div className="overflow-x-auto rounded-xl border border-batech-pearl">
                  <table className="w-full min-w-[400px] text-sm">
                    <thead>
                      <tr className="bg-batech-pearl/50 border-b border-batech-pearl">
                        <th className="text-left py-3 px-4 font-semibold text-batech-navy">Kod</th>
                        <th className="text-left py-3 px-4 font-semibold text-batech-navy">Ürün adı</th>
                        {product.variants.some((v) => v.note) && (
                          <th className="text-left py-3 px-4 font-semibold text-batech-navy">Not</th>
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {product.variants.map((v) => (
                        <tr
                          key={v.code}
                          className="border-b border-batech-pearl last:border-0 hover:bg-batech-pearl/30"
                        >
                          <td className="py-3 px-4 font-medium text-batech-ocean">{v.code}</td>
                          <td className="py-3 px-4 text-batech-silver">{v.name}</td>
                          {v.note && (
                            <td className="py-3 px-4 text-batech-silver">{v.note}</td>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {/* Açıklama */}
            {product.description && (
              <section>
                <h2 className="text-lg font-semibold text-batech-navy mb-4">Açıklama</h2>
                <div className="prose prose-sm max-w-none text-batech-silver">
                  {product.description.split("\n\n").map((para, i) => (
                    <p key={i} className="mb-3 last:mb-0">
                      {para.split("\n").map((line, j) => (
                        <span key={j}>
                          {line}
                          {j < para.split("\n").length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  ))}
                </div>
              </section>
            )}

            {/* Etiketler */}
            {product.tags && product.tags.length > 0 && (
              <section>
                <h2 className="text-lg font-semibold text-batech-navy mb-3">Etiketler</h2>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg bg-batech-pearl text-batech-ocean text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar: CTA + Kategoriler */}
          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-batech-pearl/50 border border-batech-pearl">
              <h3 className="font-semibold text-batech-navy mb-3">Fiyat ve katalog</h3>
              <p className="text-sm text-batech-silver mb-4">
                Bu ürün için fiyat teklifi, teknik bilgi veya toplu sipariş talebiniz için iletişime geçin.
              </p>
              <a
                href="/#iletisim"
                className="block w-full text-center py-3 rounded-xl bg-batech-ocean text-white font-medium hover:bg-batech-teal transition-colors"
              >
                Teklif alın
              </a>
              <a
                href="tel:+905462541454"
                className="mt-3 block w-full text-center py-3 rounded-xl border border-batech-ocean text-batech-ocean font-medium hover:bg-batech-ocean hover:text-white transition-colors"
              >
                +90 546 254 14 54
              </a>
              <a
                href="https://wa.me/905462541454"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-green-600 text-white font-medium hover:bg-green-700 transition-colors"
              >
                WhatsApp
              </a>
            </div>

            {/* İlgili ürünler */}
            {related.length > 0 && (
              <div>
                <h3 className="font-semibold text-batech-navy mb-4">İlgili ürünler</h3>
                <ul className="space-y-3">
                  {related.map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={`/urun/${p.slug}`}
                        className="flex items-center gap-3 rounded-xl p-2 -m-2 hover:bg-batech-pearl/50 transition-colors"
                      >
                        <div className="relative w-14 h-14 flex-shrink-0 rounded-lg overflow-hidden bg-batech-pearl">
                          <Image
                            src={getProductImage(p)}
                            alt={p.name}
                            fill
                            className="object-cover"
                            sizes="56px"
                          />
                        </div>
                        <span className="text-sm font-medium text-batech-navy hover:text-batech-teal line-clamp-2">
                          {p.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
