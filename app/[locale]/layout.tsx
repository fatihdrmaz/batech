import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import SetHtmlLang from "@/components/SetHtmlLang";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://batech.com.tr";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const messages = (await getMessages({ locale })) as Record<string, unknown>;
  const meta = messages.metadata as Record<string, string> | undefined;

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: meta?.titleDefault ?? "Batech Havuz Ekipmanları | 41 Yıllık Tecrübe",
      template: meta?.titleTemplate ?? "%s | Batech Havuz Ekipmanları",
    },
    description: meta?.description ?? "Havuz aydınlatma, filtre, pompa ve tüm havuz ekipmanlarında Türkiye'nin güvenilir markası.",
    keywords: meta?.keywords,
    icons: { icon: "/favicon-e1563147291832.png" },
    openGraph: {
      type: "website",
      locale: locale === "tr" ? "tr_TR" : locale === "en" ? "en_US" : locale === "es" ? "es_ES" : locale === "fr" ? "fr_FR" : "ar_SA",
      url: SITE_URL,
      siteName: meta?.siteName ?? "Batech Havuz Ekipmanları",
      title: meta?.openGraphTitle ?? meta?.titleDefault,
      description: meta?.openGraphDescription ?? meta?.description,
    },
    twitter: {
      card: "summary_large_image",
      title: meta?.twitterTitle ?? meta?.siteName,
      description: meta?.twitterDescription ?? meta?.description,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages({ locale });
  const meta = (messages as Record<string, Record<string, string>>)?.metadata;
  const orgName = meta?.siteName ?? "Batech Havuz Ekipmanları";
  const orgDesc = meta?.twitterDescription ?? "41 yıllık tecrübe ile havuz ekipmanlarında 1 numara.";

  return (
    <NextIntlClientProvider messages={messages}>
      <SetHtmlLang locale={locale} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: orgName,
            url: SITE_URL,
            logo: `${SITE_URL}/logo_batech-300x138-300x138.png`,
            description: orgDesc,
            address: {
              "@type": "PostalAddress",
              streetAddress: "Karlıtepe Mah. Gülserenler Sok. No:23/A",
              addressLocality: "Gaziosmanpaşa",
              addressRegion: "İstanbul",
              addressCountry: "TR",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+90-212-616-55-20",
              contactType: "customer service",
              areaServed: "TR",
              availableLanguage: ["Turkish", "English", "Spanish", "French", "Arabic"],
            },
          }),
        }}
      />
      <Header />
      <main className="flex-1 pt-16 lg:pt-20">{children}</main>
      <Footer />
      <FloatingActions />
    </NextIntlClientProvider>
  );
}
