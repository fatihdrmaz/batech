import Faq from "@/components/Faq";
import { getTranslations, getMessages } from "next-intl/server";
import { locales } from "@/i18n";
import { Link } from "@/i18n/navigation";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://batech.com.tr";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  const canonicalUrl = `${SITE_URL}/${locale}/sss`;
  const languages: Record<string, string> = { "x-default": `${SITE_URL}/tr/sss` };
  for (const loc of locales) {
    languages[loc] = `${SITE_URL}/${loc}/sss`;
  }
  return {
    title: `${t("sssPage.title")} | ${t("common.siteName")}`,
    description: t("sssPage.subtitle"),
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
    openGraph: {
      title: `${t("sssPage.title")} | ${t("common.siteName")}`,
      description: t("sssPage.subtitle"),
      url: canonicalUrl,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${t("sssPage.title")} | ${t("common.siteName")}`,
      description: t("sssPage.subtitle"),
    },
  };
}

export default async function SssPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  const messages = (await getMessages({ locale })) as Record<string, unknown>;
  const faqData = messages?.faq as { items?: Array<{ question: string; answer: string }> } | undefined;
  const faqItems = Array.isArray(faqData?.items) ? faqData.items : [];
  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />
      <div className="bg-batech-navy text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-batech-cyan hover:text-white transition-colors mb-6"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t("sssPage.back")}
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold section-accent pb-6">
            {t("sssPage.title")}
          </h1>
          <p className="mt-4 text-batech-silver max-w-2xl">
            {t("sssPage.subtitle")}
          </p>
        </div>
      </div>
      <div className="mt-0">
        <Faq showSectionHeader={false} />
      </div>
    </div>
  );
}
