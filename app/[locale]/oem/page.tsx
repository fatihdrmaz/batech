import { getTranslations, getMessages, setRequestLocale } from "next-intl/server";
import { locales } from "@/i18n";
import { Link } from "@/i18n/navigation";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://batech.com.tr";

type Props = { params: Promise<{ locale: string }> };

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  const canonicalUrl = `${SITE_URL}/${locale}/oem`;
  const languages: Record<string, string> = { "x-default": `${SITE_URL}/tr/oem` };
  for (const loc of locales) {
    languages[loc] = `${SITE_URL}/${loc}/oem`;
  }
  return {
    title: `${t("oemPage.title")} | ${t("common.siteName")}`,
    description: t("oemPage.intro"),
    alternates: { canonical: canonicalUrl, languages },
    openGraph: {
      title: `${t("oemPage.title")} | ${t("common.siteName")}`,
      description: t("oemPage.intro"),
      url: canonicalUrl,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${t("oemPage.title")} | ${t("common.siteName")}`,
      description: t("oemPage.intro"),
    },
  };
}

export default async function OemPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale });
  const messages = (await getMessages({ locale })) as Record<string, unknown>;
  const oem = messages?.oemPage as Record<string, unknown> | undefined;
  const whatWeOffer = (Array.isArray(oem?.whatWeOffer) ? oem.whatWeOffer : []) as string[];
  const whoIsItFor = (Array.isArray(oem?.whoIsItFor) ? oem.whoIsItFor : []) as string[];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-batech-navy via-batech-navy to-batech-ocean text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-80" aria-hidden />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-batech-cyan hover:text-white transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t("oemPage.back")}
          </Link>
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-batech-cyan text-sm font-medium mb-6">
            {t("about.years")} {t("about.yearsLabel")}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl">
            {t("oemPage.title")}
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-batech-silver max-w-2xl leading-relaxed">
            {t("oemPage.intro")}
          </p>
        </div>
      </div>

      {/* About Batech + Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="rounded-2xl lg:rounded-3xl bg-white shadow-xl border border-batech-pearl overflow-hidden">
          <div className="p-8 lg:p-12">
            <h2 className="text-2xl font-bold text-batech-navy mb-4">{t("oemPage.aboutTitle")}</h2>
            <p className="text-batech-ocean leading-relaxed max-w-3xl">
              {t("oemPage.aboutIntro")}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
              <div className="flex flex-col p-6 rounded-xl bg-batech-navy text-white">
                <span className="text-3xl sm:text-4xl font-bold text-batech-cyan">41</span>
                <span className="mt-1 text-sm font-medium text-batech-silver">{t("oemPage.statYears")}</span>
              </div>
              <div className="flex flex-col p-6 rounded-xl bg-batech-navy text-white">
                <span className="text-3xl sm:text-4xl font-bold text-batech-cyan">6</span>
                <span className="mt-1 text-sm font-medium text-batech-silver">{t("oemPage.statCategories")}</span>
              </div>
              <div className="flex flex-col p-6 rounded-xl bg-batech-navy text-white">
                <span className="text-2xl sm:text-3xl font-bold text-batech-cyan">B2B</span>
                <span className="mt-1 text-sm font-medium text-batech-silver">{t("oemPage.statMarkets")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 space-y-16">
        {/* What we offer - cards */}
        <section>
          <h2 className="text-2xl font-bold text-batech-navy mb-8">{t("oemPage.whatWeOfferTitle")}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whatWeOffer.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 rounded-xl border border-batech-pearl bg-white hover:border-batech-cyan/40 hover:shadow-md transition-all"
              >
                <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-batech-cyan/10 text-batech-cyan flex items-center justify-center font-bold text-lg">
                  {i + 1}
                </span>
                <span className="text-batech-ocean font-medium">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Who is it for - cards */}
        <section>
          <h2 className="text-2xl font-bold text-batech-navy mb-8">{t("oemPage.whoIsItForTitle")}</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {whoIsItFor.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-5 rounded-xl bg-batech-pearl/30 border border-batech-pearl"
              >
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-batech-cyan text-white flex items-center justify-center text-sm">✓</span>
                <span className="text-batech-ocean">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <div className="p-6 lg:p-8 rounded-2xl bg-batech-navy/5 border border-batech-pearl">
          <h3 className="text-lg font-semibold text-batech-navy mb-2">{t("oemPage.certificationsTitle")}</h3>
          <p className="text-batech-ocean">{t("oemPage.certificationsText")}</p>
        </div>

        {/* Selective message - quote */}
        <div className="relative pl-6 border-l-4 border-batech-cyan py-4">
          <p className="text-lg text-batech-ocean font-medium italic">{t("oemPage.selectiveMessage")}</p>
        </div>

        {/* Exclusive */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-batech-cyan/10 to-batech-teal/10 border border-batech-cyan/20">
          <p className="text-batech-ocean font-medium">{t("oemPage.exclusiveNote")}</p>
        </div>

        {/* MOQ */}
        <section className="p-6 rounded-2xl border border-batech-pearl bg-white">
          <h2 className="text-xl font-bold text-batech-navy mb-3">{t("oemPage.moqTitle")}</h2>
          <p className="text-batech-ocean mb-3">{t("oemPage.moqText")}</p>
          <ul className="text-sm text-batech-silver space-y-1">
            <li>• {t("oemPage.moqNoteStandard")}</li>
            <li>• {t("oemPage.moqNoteOem")}</li>
          </ul>
        </section>

        {/* CTA block */}
        <div className="rounded-2xl lg:rounded-3xl bg-batech-navy text-white p-8 lg:p-12 text-center">
          <h2 className="text-2xl font-bold mb-3">{t("oemPage.cta")}</h2>
          <p className="text-batech-silver max-w-xl mx-auto mb-8">
            {t("contact.description")}
          </p>
          <Link
            href="/#iletisim"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-batech-cyan text-batech-navy font-semibold hover:bg-batech-aqua transition-colors shadow-lg"
          >
            {t("oemPage.cta")}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
