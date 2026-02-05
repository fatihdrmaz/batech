"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="tr">
      <body style={{ fontFamily: "system-ui, sans-serif", padding: "2rem", background: "#f8fafc", margin: 0 }}>
        <div style={{ maxWidth: "32rem", margin: "0 auto", textAlign: "center" }}>
          <h1 style={{ fontSize: "1.5rem", color: "#0a1628", marginBottom: "0.5rem" }}>
            Bir hata oluştu
          </h1>
          <p style={{ color: "#64748b", marginBottom: "1.5rem" }}>
            Uygulama yüklenirken bir sorun oluştu. Lütfen sayfayı yenileyin veya ana sayfaya gidin.
          </p>
          <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
            <button
              onClick={reset}
              style={{
                padding: "0.75rem 1.5rem",
                borderRadius: "0.75rem",
                background: "#0d2137",
                color: "white",
                border: "none",
                fontWeight: 500,
                cursor: "pointer",
              }}
            >
              Tekrar dene
            </button>
            <a
              href="/"
              style={{
                padding: "0.75rem 1.5rem",
                borderRadius: "0.75rem",
                border: "1px solid #0d2137",
                color: "#0d2137",
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              Ana sayfa
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
