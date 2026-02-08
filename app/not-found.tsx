import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold text-batech-navy">Sayfa bulunamadı</h1>
      <p className="mt-3 text-batech-silver text-center max-w-md">
        Aradığınız sayfa mevcut değil veya taşınmış olabilir.
      </p>
      <p className="mt-8 text-sm font-medium text-batech-ocean">Önerilen sayfalar</p>
      <div className="mt-4 flex flex-wrap justify-center gap-3">
        <Link
          href="/tr"
          className="px-6 py-3 rounded-xl bg-batech-ocean text-white font-medium hover:bg-batech-teal transition-colors"
        >
          Ana Sayfa
        </Link>
        <Link
          href="/tr/urunler"
          className="px-6 py-3 rounded-xl border border-batech-ocean text-batech-ocean font-medium hover:bg-batech-pearl transition-colors"
        >
          Ürünler
        </Link>
        <Link
          href="/tr/sss"
          className="px-6 py-3 rounded-xl border border-batech-pearl text-batech-silver font-medium hover:bg-batech-pearl/50 transition-colors"
        >
          SSS
        </Link>
      </div>
    </div>
  );
}
