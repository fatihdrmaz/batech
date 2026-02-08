import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import {
  getCategoryBySlug,
  getProductsByCategory,
  getCategoryImage,
  getProductImage,
  categories,
} from "@/lib/products";
import { locales } from "@/i18n";
import { Link } from "@/i18n/navigation";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://batech.com.tr";

function getTranslatedCategoryName(t: (key: string) => string, categorySlug: string, fallback: string): string {
  const value = t(`categoryName.${categorySlug}`);
  return value && value !== `categoryName.${categorySlug}` ? value : fallback;
}

function getTranslatedProductName(t: (key: string) => string, slug: string, fallback: string): string {
  const key = `productName.${slug}`;
  const value = t(key);
  return value && value !== key ? value : fallback;
}

function getTranslatedDescription(
  t: (key: string) => string,
  keyPrefix: string,
  slug: string,
  fallback: string | undefined
): string | undefined {
  if (!fallback) return undefined;
  const key = `${keyPrefix}.${slug}`;
  const value = t(key);
  return value && value !== key ? value : fallback;
}

type Props = {
  params: Promise<{ category: string; locale: string }>;
};

export async function generateStaticParams() {
  return locales.flatMap((locale) =>
    categories.map((c) => ({ locale, category: c.slug }))
  );
}

export async function generateMetadata({ params }: Props) {
  const { category: slug, locale } = await params;
  const t = await getTranslations({ locale });
  const category = getCategoryBySlug(slug);
  if (!category) return { title: `${t("product.category")} | Batech` };
  const siteName = t("common.siteName");
  const categoryDisplayName = getTranslatedCategoryName(t, slug, category.name);
  const categoryDesc = getTranslatedDescription(t, "categoryDescription", slug, category.description);
  const metaDesc = t("categoryPage.metaDescription", {
    categoryName: categoryDisplayName,
    productCount: t("productsPage.productCount"),
  });
  const canonicalUrl = `${SITE_URL}/${locale}/urunler/${slug}`;
  const languages: Record<string, string> = { "x-default": `${SITE_URL}/tr/urunler/${slug}` };
  for (const loc of locales) {
    languages[loc] = `${SITE_URL}/${loc}/urunler/${slug}`;
  }
  const categoryImage = getCategoryImage(category);
  const ogImage = categoryImage?.startsWith("http") ? categoryImage : `${SITE_URL}${categoryImage}`;
  return {
    title: `${categoryDisplayName} | ${siteName}`,
    description: categoryDesc || metaDesc,
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
    openGraph: {
      title: `${categoryDisplayName} | ${siteName}`,
      description: categoryDesc || metaDesc,
      url: canonicalUrl,
      type: "website",
      images: ogImage ? [{ url: ogImage, alt: categoryDisplayName }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${categoryDisplayName} | ${siteName}`,
      description: categoryDesc || metaDesc,
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category: slug, locale } = await params;
  const t = await getTranslations({ locale });
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const categoryProducts = getProductsByCategory(slug);
  const categoryDisplayName = getTranslatedCategoryName(t, slug, category.name);
  const categoryDisplayDescription = getTranslatedDescription(
    t,
    "categoryDescription",
    slug,
    category.description
  );

  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: t("product.breadcrumb.home"), item: `${SITE_URL}/${locale}` },
      { "@type": "ListItem", position: 2, name: t("product.breadcrumb.products"), item: `${SITE_URL}/${locale}/urunler` },
      { "@type": "ListItem", position: 3, name: categoryDisplayName },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
      />
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
            {t("categoryPage.back")}
          </Link>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold section-accent pb-6">
            {categoryDisplayName}
          </h1>
          {categoryDisplayDescription && (
            <p className="mt-4 text-batech-silver max-w-2xl text-lg">{categoryDisplayDescription}</p>
          )}
          <p className="mt-3 text-sm text-batech-cyan/90">
            {categoryProducts.length} {t("categoryPage.products")}
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
            <p className="text-batech-navy font-medium">{t("categoryPage.empty")}</p>
            <p className="mt-2 text-sm text-batech-silver">
              {t("categoryPage.emptyContactText")}{" "}
              <Link href="/#iletisim" className="text-batech-teal font-medium hover:text-batech-cyan transition-colors">
                {t("categoryPage.emptyContact")}
              </Link>
              .
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 stagger-grid">
            {categoryProducts.map((product, index) => {
              const productDisplayName = getTranslatedProductName(t, product.slug, product.name);
              const productShortDesc = getTranslatedDescription(
                t,
                "productDescription",
                product.slug,
                product.description
              );
              const isAboveFold = index < 6;
              return (
              <Link
                key={product.slug}
                href={`/urun/${product.slug}`}
                className="group block rounded-2xl border border-batech-pearl bg-white overflow-hidden hover:border-batech-cyan/40 hover:shadow-xl hover:shadow-batech-cyan/5 transition-all duration-300 card-shine"
              >
                <div className="relative aspect-[4/3] w-full bg-white overflow-hidden">
                  <div className="absolute inset-0 bg-white z-0" />
                  <Image
                    src={getProductImage(product)}
                    alt={productDisplayName}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500 relative z-10"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={isAboveFold}
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-lg font-semibold text-batech-navy group-hover:text-batech-teal transition-colors line-clamp-2">
                    {productDisplayName}
                  </h2>
                  {productShortDesc && (
                    <p className="mt-2 text-sm text-batech-silver line-clamp-2">
                      {productShortDesc.split("\n\n")[0]}
                    </p>
                  )}
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-batech-teal group-hover:text-batech-cyan group-hover:gap-3 transition-all">
                    {t("categoryPage.detail")}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            );
            })}
          </div>
        )}

        <div className="mt-14 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/#iletisim"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-batech-ocean text-white font-medium hover:bg-batech-teal transition-colors shadow-lg hover:shadow-xl"
          >
            {t("categoryPage.quote")}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="/urunler"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-batech-pearl text-batech-ocean font-medium hover:border-batech-cyan hover:text-batech-teal transition-colors"
          >
            {t("categoryPage.allCategories")}
          </Link>
        </div>
      </div>
    </div>
  );
}
