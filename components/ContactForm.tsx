"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export default function ContactForm() {
  const t = useTranslations();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error" | "not_configured">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const payload = {
      name: (form.querySelector('[name="name"]') as HTMLInputElement).value.trim(),
      phone: (form.querySelector('[name="phone"]') as HTMLInputElement).value.trim(),
      email: (form.querySelector('[name="email"]') as HTMLInputElement).value.trim(),
      message: (form.querySelector('[name="message"]') as HTMLTextAreaElement).value.trim(),
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok !== false) {
        setStatus("success");
        form.reset();
      } else if (res.status === 503 && data.error === "not_configured") {
        setStatus("not_configured");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium text-batech-silver mb-1.5">
          {t("contact.formName")} <span className="text-red-400">{t("common.required")}</span>
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-batech-cyan focus:border-transparent"
          placeholder={t("contact.formPlaceholderName")}
        />
      </div>
      <div>
        <label htmlFor="contact-phone" className="block text-sm font-medium text-batech-silver mb-1.5">
          {t("contact.formPhone")} <span className="text-red-400">{t("common.required")}</span>
        </label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          required
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-batech-cyan focus:border-transparent"
          placeholder={t("contact.formPlaceholderPhone")}
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-batech-silver mb-1.5">
          {t("contact.formEmail")} <span className="text-red-400">{t("common.required")}</span>
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-batech-cyan focus:border-transparent"
          placeholder={t("contact.formPlaceholderEmail")}
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-batech-silver mb-1.5">
          {t("contact.formMessage")} <span className="text-red-400">{t("common.required")}</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={4}
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-batech-cyan focus:border-transparent resize-none"
          placeholder={t("contact.formPlaceholderMessage")}
        />
      </div>
      {status === "not_configured" && (
        <p className="text-sm text-amber-400">{t("contact.formNotConfigured")}</p>
      )}
      {status === "success" && (
        <p className="text-sm text-green-400">{t("contact.formSuccess")}</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-400">{t("contact.formError")}</p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full py-3.5 rounded-xl bg-batech-cyan text-batech-navy font-semibold hover:bg-batech-aqua transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "sending" ? t("contact.formSending") : t("contact.formSubmit")}
      </button>
    </form>
  );
}
