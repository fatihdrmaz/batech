import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { searchProductsAndCategories, getCategoryImage, getProductImage } from "@/lib/products";
import { Link } from "@/i18n/navigation";
import SearchForm from "@/components/SearchForm";

function getTranslatedCategoryName(t: (key: string) => string, slug: string, fallback: string): string {
  const value = t(`categoryName.${slug}`);
  return value && value !== `categoryName.${slug}` ? value : fallback;
}

function getTranslatedProductName(t: (key: string) => string, slug: string, fallback: string): string {
  const key = `productName.${slug}`;
  const value = t(key);
  return value && value !== key ? value : fallback;
}

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ q?: string }>;
};

export async function generateMetadata({ params, searchParams }: Props) {
  const { locale } = await params;
  const { q } = await searchParams;
  const t = await getTranslations({ locale });
  const title = q ? `${t("searchPage.resultsFor", { query: q })} | ${t("searchPage.title")}` : t("searchPage.title");
  return { title: `${title} | ${t("common.siteName")}` };
}

export default async function SearchPage({ params, searchParams }: Props) {
  const { locale } = await params;
  const { q = "" } = await searchParams;
  const t = await getTranslations({ locale });
  const { products: foundProducts, categories: foundCategories } = searchProductsAndCategories(q);
  const hasResults = foundProducts.length > 0 || foundCategories.length > 0;

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-batech-navy text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold section-accent pb-6">
            {t("searchPage.title")}
          </h1>
          <p className="mt-4 text-batech-silver max-w-2xl">
            {q
              ? t("searchPage.resultsFor", { query: q })
              : t("searchPage.placeholder")}
          </p>
          <div className="mt-6">
            <SearchForm />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {!q ? (
          <p className="text-batech-silver">{t("searchPage.placeholder")}</p>
        ) : !hasResults ? (
          <p className="text-batech-silver text-lg">{t("searchPage.noResults")}</p>
        ) : (
          <div className="space-y-12">
            {foundCategories.length > 0 && (
              <section>
                <h2 className="text-xl font-semibold text-batech-navy mb-4">{t("searchPage.categories")}</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {foundCategories.map((cat) => {
                    const displayName = getTranslatedCategoryName(t, cat.slug, cat.name);
                    return (
                      <li key={cat.slug}>
                        <Link
                          href={`/urunler/${cat.slug}`}
                          className="flex items-center gap-4 rounded-xl p-4 border border-batech-pearl hover:border-batech-cyan/40 hover:shadow-md transition-all"
                        >
                          <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-batech-pearl flex-shrink-0">
                            <Image
                              src={getCategoryImage(cat)}
                              alt=""
                              fill
                              className="object-cover"
                              sizes="64px"
                            />
                          </div>
                          <div className="min-w-0">
                            <p className="font-medium text-batech-navy truncate">{displayName}</p>
                            <p className="text-sm text-batech-silver">{t("searchPage.viewCategory")}</p>
                          </div>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </section>
            )}
            {foundProducts.length > 0 && (
              <section>
                <h2 className="text-xl font-semibold text-batech-navy mb-4">{t("searchPage.products")}</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {foundProducts.map((p) => {
                    const displayName = getTranslatedProductName(t, p.slug, p.name);
                    return (
                      <li key={p.slug}>
                        <Link
                          href={`/urun/${p.slug}`}
                          className="flex items-center gap-4 rounded-xl p-4 border border-batech-pearl hover:border-batech-cyan/40 hover:shadow-md transition-all"
                        >
                          <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-white border border-batech-pearl flex-shrink-0">
                            <Image
                              src={getProductImage(p)}
                              alt=""
                              fill
                              className="object-contain p-1"
                              sizes="64px"
                            />
                          </div>
                          <div className="min-w-0">
                            <p className="font-medium text-batech-navy line-clamp-2">{displayName}</p>
                            <p className="text-sm text-batech-silver">{t("searchPage.viewProduct")}</p>
                          </div>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </section>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
