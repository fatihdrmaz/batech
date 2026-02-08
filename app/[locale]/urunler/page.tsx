import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { categories, getProductsByCategory, getCategoryImage } from "@/lib/products";
import { locales } from "@/i18n";
import { Link } from "@/i18n/navigation";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://batech.com.tr";

function getTranslatedCategoryName(t: (key: string) => string, categorySlug: string, fallback: string): string {
  const value = t(`categoryName.${categorySlug}`);
  return value && value !== `categoryName.${categorySlug}` ? value : fallback;
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
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  const canonicalUrl = `${SITE_URL}/${locale}/urunler`;
  const languages: Record<string, string> = { "x-default": `${SITE_URL}/tr/urunler` };
  for (const loc of locales) {
    languages[loc] = `${SITE_URL}/${loc}/urunler`;
  }
  return {
    title: `${t("productsPage.title")} | ${t("common.siteName")}`,
    description: t("productsPage.subtitle"),
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
    openGraph: {
      title: `${t("productsPage.title")} | ${t("common.siteName")}`,
      description: t("productsPage.subtitle"),
      url: canonicalUrl,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${t("productsPage.title")} | ${t("common.siteName")}`,
      description: t("productsPage.subtitle"),
    },
  };
}

export default async function UrunlerPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale });
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
            {t("productsPage.label")}
          </span>
          <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold section-accent pb-6">
            {t("productsPage.title")}
          </h1>
          <p className="mt-4 text-batech-silver max-w-2xl text-lg">
            {t("productsPage.subtitle")}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 stagger-grid">
          {categories.map((cat, index) => {
            const productCount = getProductsByCategory(cat.slug).length || cat.productCount;
            const categoryDisplayName = getTranslatedCategoryName(t, cat.slug, cat.name);
            const categoryDisplayDescription = getTranslatedDescription(
              t,
              "categoryDescription",
              cat.slug,
              cat.description
            );
            const isAboveFold = index < 3;
            return (
              <Link
                key={cat.slug}
                href={`/urunler/${cat.slug}`}
                className="group block rounded-2xl border border-batech-pearl bg-white overflow-hidden hover:border-batech-cyan/40 hover:shadow-xl hover:shadow-batech-cyan/5 transition-all duration-300 card-shine"
              >
                <div className="relative aspect-[16/10] w-full bg-batech-pearl overflow-hidden">
                  <Image
                    src={getCategoryImage(cat)}
                    alt={categoryDisplayName}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={isAboveFold}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-batech-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 lg:p-8">
                  <span className="text-xs font-semibold text-batech-cyan uppercase tracking-wider">
                    {productCount} {t("productsPage.productCount")}
                  </span>
                  <h2 className="mt-2 text-xl font-semibold text-batech-navy group-hover:text-batech-teal transition-colors">
                    {categoryDisplayName}
                  </h2>
                  {categoryDisplayDescription && (
                    <p className="mt-2 text-sm text-batech-silver line-clamp-2">
                      {categoryDisplayDescription}
                    </p>
                  )}
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-batech-teal group-hover:text-batech-cyan group-hover:gap-3 transition-all">
                    {t("productsPage.viewProducts")}
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
            {t("productsPage.contactText")}{" "}
            <Link
              href="/#iletisim"
              className="inline-flex items-center gap-1 text-batech-teal font-medium hover:text-batech-cyan transition-colors"
            >
              {t("productsPage.contact")}
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
