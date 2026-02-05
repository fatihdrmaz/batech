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

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://batech.com.tr";

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Ürün | Batech" };
  const title = `${product.name} | Batech Havuz Ekipmanları`;
  const description = product.description?.slice(0, 160) || product.name;
  const image = product.image ? `${SITE_URL}${product.image}` : undefined;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/urun/${slug}`,
      type: "website",
      images: image ? [{ url: image, alt: product.name }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const category = getCategoryBySlug(product.categorySlug);
  const related = getRelatedProducts(product);

  const imgPath = getProductImage(product);
  const productImageUrl = imgPath.startsWith("http") ? imgPath : `${SITE_URL}${imgPath}`;

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            description: product.description?.slice(0, 200) || product.name,
            image: productImageUrl,
            brand: { "@type": "Brand", name: "Batech" },
            category: category?.name,
          }),
        }}
      />
      {/* Breadcrumb & header */}
      <div className="relative bg-batech-navy text-white py-10 lg:py-14 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex flex-wrap items-center gap-1.5 text-sm text-batech-silver mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-batech-cyan transition-colors">Ana Sayfa</Link>
            <span className="text-white/40" aria-hidden>/</span>
            <Link href="/urunler" className="hover:text-batech-cyan transition-colors">Ürünler</Link>
            {category && (
              <>
                <span className="text-white/40" aria-hidden>/</span>
                <Link href={`/urunler/${product.categorySlug}`} className="hover:text-batech-cyan transition-colors">
                  {category.name}
                </Link>
              </>
            )}
            <span className="text-white/40" aria-hidden>/</span>
            <span className="text-white font-medium truncate max-w-[200px] sm:max-w-none">{product.name}</span>
          </nav>
          {category && (
            <span className="inline-block px-3 py-1 rounded-lg bg-white/10 text-batech-cyan text-xs font-medium uppercase tracking-wider mb-4">
              {category.name}
            </span>
          )}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold section-accent pb-6">
            {product.name}
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Ana içerik */}
          <div className="lg:col-span-2 space-y-12">
            {/* Ürün görseli + renk seçici (varsa) */}
            {product.colorOptions && product.colorOptions.length > 0 ? (
              <ProductImageWithColorPicker
                productName={product.name}
                colorOptions={product.colorOptions}
                fallbackImage={getProductImage(product)}
              />
            ) : (
              <div className="relative w-full rounded-2xl overflow-hidden bg-white border border-batech-pearl shadow-lg shadow-batech-navy/5">
                <div className="relative aspect-square max-w-2xl mx-auto p-8 sm:p-12 lg:p-16 bg-white">
                  {/* Beyaz arka plan katmanı - görselin şeffaf kısımlarını beyaz yapar */}
                  <div className="absolute inset-0 bg-white z-0" />
                  <Image
                    src={getProductImage(product)}
                    alt={product.name}
                    fill
                    className="object-contain relative z-10"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    priority
                  />
                </div>
              </div>
            )}
            {/* Varyant tablosu */}
            {product.variants && product.variants.length > 0 && (
              <section className="rounded-2xl border border-batech-pearl overflow-hidden bg-white shadow-sm">
                <h2 className="text-lg font-semibold text-batech-navy px-6 py-4 border-b border-batech-pearl bg-batech-pearl/30">
                  Ürün varyantları
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[400px] text-sm">
                    <thead>
                      <tr className="bg-batech-pearl/50 border-b border-batech-pearl">
                        <th className="text-left py-4 px-6 font-semibold text-batech-navy">Kod</th>
                        <th className="text-left py-4 px-6 font-semibold text-batech-navy">Ürün adı</th>
                        {product.variants.some((v) => v.note) && (
                          <th className="text-left py-4 px-6 font-semibold text-batech-navy">Not</th>
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {product.variants.map((v) => (
                        <tr
                          key={v.code}
                          className="border-b border-batech-pearl/50 last:border-0 hover:bg-batech-cyan/5 transition-colors"
                        >
                          <td className="py-3.5 px-6 font-medium text-batech-ocean">{v.code}</td>
                          <td className="py-3.5 px-6 text-batech-silver">{v.name}</td>
                          {v.note && (
                            <td className="py-3.5 px-6 text-batech-silver">{v.note}</td>
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
              <section className="rounded-2xl border border-batech-pearl bg-batech-pearl/20 p-6 lg:p-8">
                <h2 className="text-lg font-semibold text-batech-navy mb-4 pb-2 border-b border-batech-pearl">
                  Açıklama
                </h2>
                <div className="prose prose-sm max-w-none text-batech-silver leading-relaxed">
                  {product.description.split("\n\n").map((para, i) => (
                    <p key={i} className="mb-4 last:mb-0">
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
                      className="px-4 py-2 rounded-xl bg-batech-pearl text-batech-ocean text-sm font-medium hover:bg-batech-cyan/10 hover:text-batech-teal transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar: CTA + İlgili ürünler */}
          <div className="space-y-8">
            <div className="sticky top-24 p-6 rounded-2xl bg-white border border-batech-pearl shadow-lg shadow-batech-navy/5 hover:shadow-xl transition-shadow">
              <h3 className="font-semibold text-batech-navy mb-3">Fiyat ve katalog</h3>
              <p className="text-sm text-batech-silver mb-6 leading-relaxed">
                Bu ürün için fiyat teklifi, teknik bilgi veya toplu sipariş talebiniz için iletişime geçin.
              </p>
              <div className="space-y-3">
                <a
                  href="/#iletisim"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-batech-ocean text-white font-medium hover:bg-batech-teal transition-colors shadow-md"
                >
                  Teklif alın
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="tel:+902126165520"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl border-2 border-batech-ocean text-batech-ocean font-medium hover:bg-batech-ocean hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  0212 616 55 20
                </a>
                <a
                  href="tel:+905462541454"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl border-2 border-batech-teal text-batech-teal font-medium hover:bg-batech-teal hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  0546 254 14 54
                </a>
                <a
                  href="https://wa.me/905462541454"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-[#25D366] text-white font-medium hover:bg-[#20BD5A] transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>

            {/* İlgili ürünler */}
            {related.length > 0 && (
              <div className="rounded-2xl border border-batech-pearl bg-batech-pearl/20 p-6">
                <h3 className="font-semibold text-batech-navy mb-4">İlgili ürünler</h3>
                <ul className="space-y-3">
                  {related.map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={`/urun/${p.slug}`}
                        className="flex items-center gap-4 rounded-xl p-3 -m-1 hover:bg-white hover:shadow-md transition-all duration-200 group"
                      >
                        <div className="relative w-16 h-16 flex-shrink-0 rounded-xl overflow-hidden bg-batech-pearl group-hover:ring-2 group-hover:ring-batech-cyan/30 transition-all">
                          <Image
                            src={getProductImage(p)}
                            alt={p.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="64px"
                          />
                        </div>
                        <span className="text-sm font-medium text-batech-navy group-hover:text-batech-teal line-clamp-2 flex-1 min-w-0">
                          {p.name}
                        </span>
                        <svg className="w-4 h-4 flex-shrink-0 text-batech-cyan opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
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
