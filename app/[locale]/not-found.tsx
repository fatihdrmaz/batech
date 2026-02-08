import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function LocaleNotFound() {
  const t = await getTranslations("notFound");
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-12">
      <h1 className="text-4xl font-bold text-batech-navy">{t("title")}</h1>
      <p className="mt-3 text-batech-silver text-center max-w-md">
        {t("description")}
      </p>
      <p className="mt-8 text-sm font-medium text-batech-ocean">{t("suggestedPages")}</p>
      <div className="mt-4 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="px-6 py-3 rounded-xl bg-batech-ocean text-white font-medium hover:bg-batech-teal transition-colors"
        >
          {t("home")}
        </Link>
        <Link
          href="/urunler"
          className="px-6 py-3 rounded-xl border border-batech-ocean text-batech-ocean font-medium hover:bg-batech-pearl transition-colors"
        >
          {t("products")}
        </Link>
        <Link
          href="/sss"
          className="px-6 py-3 rounded-xl border border-batech-pearl text-batech-silver font-medium hover:bg-batech-pearl/50 transition-colors"
        >
          {t("faq")}
        </Link>
      </div>
    </div>
  );
}
