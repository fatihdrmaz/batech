import Faq from "@/components/Faq";
import Link from "next/link";

export const metadata = {
  title: "Sıkça Sorulan Sorular",
  description:
    "Havuz ekipmanları, sipariş süreci, fiyat teklifi ve teknik bilgi hakkında sıkça sorulan sorular ve yanıtları.",
};

export default function SssPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-batech-navy text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-batech-cyan hover:text-white transition-colors mb-6"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Ana Sayfa
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold section-accent pb-6">
            Sıkça Sorulan Sorular
          </h1>
          <p className="mt-4 text-batech-silver max-w-2xl">
            Havuz ekipmanları, sipariş ve fiyatlandırma hakkında merak ettikleriniz.
          </p>
        </div>
      </div>
      <div className="mt-0">
        <Faq showSectionHeader={false} />
      </div>
    </div>
  );
}
