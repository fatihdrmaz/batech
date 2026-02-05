import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

export const metadata: Metadata = {
  title: "Batech Havuz Ekipmanları | 41 Yıllık Tecrübe",
  description:
    "Havuz aydınlatma, filtre, pompa ve tüm havuz ekipmanlarında Türkiye'nin güvenilir markası. Kaliteli ürün, uygun fiyat, hızlı sevkiyat.",
  keywords: "havuz ekipmanları, havuz lambası, havuz filtresi, Batech, İstanbul",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Batech Havuz Ekipmanları",
    description: "41 yıllık tecrübe ile havuz ekipmanlarında 1 numara.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Plus Jakarta Sans - root layout applies to all pages */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans min-h-screen flex flex-col" style={{ fontFamily: "'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif" }}>
        <Header />
        <main className="flex-1 pt-16 lg:pt-20">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
