import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://batech.com.tr";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const t = (key: string) => (messages as any)[key] || key;

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: "Batech Havuz Ekipmanları | 41 Yıllık Tecrübe",
      template: "%s | Batech Havuz Ekipmanları",
    },
    description:
      "Havuz aydınlatma, filtre, pompa ve tüm havuz ekipmanlarında Türkiye'nin güvenilir markası. Kaliteli ürün, uygun fiyat, hızlı sevkiyat.",
    keywords: "havuz ekipmanları, havuz lambası, havuz filtresi, Batech, İstanbul, Gaziosmanpaşa",
    icons: { icon: "/favicon.svg" },
    openGraph: {
      type: "website",
      locale: locale === "tr" ? "tr_TR" : locale === "en" ? "en_US" : locale === "es" ? "es_ES" : locale === "fr" ? "fr_FR" : "ar_SA",
      url: SITE_URL,
      siteName: "Batech Havuz Ekipmanları",
      title: "Batech Havuz Ekipmanları | 41 Yıllık Tecrübe",
      description: "41 yıllık tecrübe ile havuz ekipmanlarında 1 numara. Havuz aydınlatma, filtre, pompa.",
    },
    twitter: {
      card: "summary_large_image",
      title: "Batech Havuz Ekipmanları",
      description: "41 yıllık tecrübe ile havuz ekipmanlarında 1 numara.",
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
  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider messages={messages}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Batech Havuz Ekipmanları",
            url: SITE_URL,
            logo: `${SITE_URL}/favicon.svg`,
            description: "41 yıllık tecrübe ile havuz ekipmanlarında 1 numara.",
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
