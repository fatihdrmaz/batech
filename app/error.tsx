"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("App error:", error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 bg-white">
      <h1 className="text-2xl font-bold text-batech-navy">Bir hata oluştu</h1>
      <p className="mt-2 text-batech-silver text-center max-w-md">
        Sayfa yüklenirken bir sorun oluştu. Lütfen tekrar deneyin.
      </p>
      <div className="mt-6 flex gap-4">
        <button
          onClick={reset}
          className="px-6 py-3 rounded-xl bg-batech-ocean text-white font-medium hover:bg-batech-teal transition-colors"
        >
          Tekrar dene
        </button>
        <Link
          href="/"
          className="px-6 py-3 rounded-xl border border-batech-ocean text-batech-ocean font-medium hover:bg-batech-pearl transition-colors"
        >
          Ana sayfaya dön
        </Link>
      </div>
    </div>
  );
}
