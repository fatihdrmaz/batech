import dynamic from "next/dynamic";
import { getTranslations } from "next-intl/server";
import { locales } from "@/i18n";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Values from "@/components/Values";
import FeaturedProducts from "@/components/FeaturedProducts";
import Products from "@/components/Products";
import Process from "@/components/Process";
import CtaStrip from "@/components/CtaStrip";

const Certificates = dynamic(() => import("@/components/Certificates"), {
  loading: () => <div className="min-h-[280px] flex items-center justify-center bg-batech-pearl/20" aria-hidden><div className="w-8 h-8 rounded-full border-2 border-batech-cyan border-t-transparent animate-spin" /></div>,
});
const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  loading: () => <div className="min-h-[320px] flex items-center justify-center bg-white" aria-hidden><div className="w-8 h-8 rounded-full border-2 border-batech-cyan border-t-transparent animate-spin" /></div>,
});
const Faq = dynamic(() => import("@/components/Faq"), {
  loading: () => <div className="min-h-[400px] flex items-center justify-center bg-white py-20" aria-hidden><div className="w-8 h-8 rounded-full border-2 border-batech-cyan border-t-transparent animate-spin" /></div>,
});
const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => <div className="min-h-[480px] flex items-center justify-center bg-batech-navy" aria-hidden><div className="w-8 h-8 rounded-full border-2 border-batech-cyan border-t-transparent animate-spin" /></div>,
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://batech.com.tr";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  const title = t("metadata.titleDefault");
  const description = t("metadata.description");
  const canonicalUrl = `${SITE_URL}/${locale}`;
  const languages: Record<string, string> = { "x-default": `${SITE_URL}/tr` };
  for (const loc of locales) {
    languages[loc] = `${SITE_URL}/${loc}`;
  }
  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
    openGraph: {
      title: t("metadata.openGraphTitle"),
      description: t("metadata.openGraphDescription"),
      url: canonicalUrl,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("metadata.twitterTitle"),
      description: t("metadata.twitterDescription"),
    },
  };
}

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Values />
      <FeaturedProducts />
      <Products />
      <Process />
      <Certificates />
      <Testimonials />
      <CtaStrip />
      <Faq />
      <Contact />
    </>
  );
}
