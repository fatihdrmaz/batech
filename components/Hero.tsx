"use client";

export default function Hero() {
  return (
    <section
      className="relative min-h-[95vh] flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#05101a" }}
      aria-label="Ana banner"
    >
      {/* Ana gradient arka plan */}
      <div
        className="absolute inset-0 opacity-100"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% -20%, rgba(6, 182, 212, 0.25), transparent),
            radial-gradient(ellipse 60% 40% at 100% 50%, rgba(14, 116, 144, 0.2), transparent),
            radial-gradient(ellipse 50% 30% at 0% 80%, rgba(6, 182, 212, 0.15), transparent),
            linear-gradient(180deg, #0a1628 0%, #0d2137 40%, #0e7490 100%)
          `,
        }}
      />

      {/* Dekoratif daireler / su kabarcıkları */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute rounded-full opacity-[0.07]"
          style={{
            width: "min(80vw, 600px)",
            height: "min(80vw, 600px)",
            left: "50%",
            top: "30%",
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(circle, #22d3ee 0%, transparent 70%)",
            animation: "hero-glow 8s ease-in-out infinite",
          }}
        />
        <div
          className="absolute rounded-full opacity-[0.05]"
          style={{
            width: "min(50vw, 320px)",
            height: "min(50vw, 320px)",
            right: "10%",
            bottom: "20%",
            background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)",
            animation: "hero-glow 6s ease-in-out infinite 1s",
          }}
        />
        <div
          className="absolute rounded-full opacity-[0.06]"
          style={{
            width: "min(40vw, 240px)",
            height: "min(40vw, 240px)",
            left: "5%",
            top: "60%",
            background: "radial-gradient(circle, #0e7490 0%, transparent 70%)",
            animation: "hero-glow 7s ease-in-out infinite 2s",
          }}
        />
      </div>

      {/* İnce ızgara / su yüzeyi hissi */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* İçerik */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Üst etiket */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-sm font-medium tracking-widest uppercase"
            style={{
              color: "#22d3ee",
              backgroundColor: "rgba(6, 182, 212, 0.15)",
              border: "1px solid rgba(6, 182, 212, 0.3)",
            }}
          >
            <span
              className="inline-block w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: "#06b6d4" }}
            />
            36 Yıllık Tecrübe
          </div>

          {/* Ana başlık */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] tracking-tight">
            <span className="block text-white">Havuza girmenin</span>
            <span className="block mt-2 bg-gradient-to-r from-cyan-300 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              güvenli ve ekonomik
            </span>
            <span className="block mt-2 text-white">yolu</span>
          </h1>

          <p
            className="mt-8 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ color: "#94a3b8" }}
          >
            Havuz aydınlatma, filtre, pompa ve tüm ekipmanlarda kaliteli ürün,
            uygun fiyat, hızlı sevkiyat. Türkiye&apos;nin güvenilir havuz ekipmanları markası.
          </p>

          {/* CTA butonları */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#iletisim"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-cyan-500/25"
              style={{
                backgroundColor: "#06b6d4",
                color: "#0a1628",
                boxShadow: "0 10px 40px -10px rgba(6, 182, 212, 0.4)",
              }}
            >
              Teklif Alın
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="tel:+905462541454"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-lg border-2 transition-all duration-300 hover:bg-white/10"
              style={{ color: "#fff", borderColor: "rgba(255,255,255,0.35)" }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +90 546 254 14 54
            </a>
          </div>

          {/* Trust badges - kart stil */}
          <div className="mt-16 grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-4 sm:gap-6">
            {[
              { label: "Kaliteli Ürün", icon: "✓" },
              { label: "Hızlı Sevkiyat", icon: "✓" },
              { label: "Uygun Fiyat", icon: "✓" },
              { label: "Teknik Destek", icon: "✓" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 px-4 py-3 rounded-xl transition-colors hover:bg-white/5"
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.85)",
                }}
              >
                <span
                  className="flex items-center justify-center w-8 h-8 rounded-lg text-sm font-bold"
                  style={{ backgroundColor: "rgba(6, 182, 212, 0.2)", color: "#22d3ee" }}
                >
                  {item.icon}
                </span>
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Aşağı kaydır */}
      <a
        href="#hakkimizda"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity hover:opacity-100 opacity-70"
        style={{ color: "rgba(255,255,255,0.7)" }}
        aria-label="Aşağı kaydır"
      >
        <span className="text-xs font-medium uppercase tracking-[0.25em]">Keşfet</span>
        <span
          className="inline-flex h-10 w-6 items-center justify-center rounded-full border-2"
          style={{ borderColor: "rgba(255,255,255,0.4)" }}
        >
          <span
            className="h-1.5 w-1.5 rounded-full animate-bounce"
            style={{ backgroundColor: "#22d3ee", animationDuration: "1.5s" }}
          />
        </span>
      </a>

      {/* Alt dalga */}
      <div className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none" aria-hidden="true">
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1440 112"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 56C240 112 480 0 720 56C960 112 1200 0 1440 56V112H0V56Z"
            fill="white"
            fillOpacity="1"
          />
          <path
            d="M0 84C360 28 720 84 1080 28L1440 84V112H0V84Z"
            fill="white"
            fillOpacity="0.7"
          />
        </svg>
      </div>

    </section>
  );
}
