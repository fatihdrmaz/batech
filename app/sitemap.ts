import { MetadataRoute } from "next";
import { getAllProductSlugs, getCategorySlugs } from "@/lib/products";
import { locales } from "@/i18n";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://batech.com.tr";

export default function sitemap(): MetadataRoute.Sitemap {
  const productSlugs = getAllProductSlugs();
  const categorySlugs = getCategorySlugs();
  const lastMod = new Date();

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    const prefix = `${BASE_URL}/${locale}`;
    entries.push({ url: prefix, lastModified: lastMod, changeFrequency: "weekly", priority: 1 });
    entries.push({ url: `${prefix}/urunler`, lastModified: lastMod, changeFrequency: "weekly", priority: 0.9 });
    entries.push({ url: `${prefix}/ara`, lastModified: lastMod, changeFrequency: "weekly", priority: 0.8 });
    entries.push({ url: `${prefix}/sss`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.7 });
    entries.push({ url: `${prefix}/oem`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.6 });
    entries.push({ url: `${prefix}/distributor-wanted`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.6 });

    for (const slug of categorySlugs) {
      entries.push({
        url: `${prefix}/urunler/${slug}`,
        lastModified: lastMod,
        changeFrequency: "weekly" as const,
        priority: 0.8,
      });
    }

    for (const slug of productSlugs) {
      entries.push({
        url: `${prefix}/urun/${slug}`,
        lastModified: lastMod,
        changeFrequency: "weekly" as const,
        priority: 0.8,
      });
    }
  }

  return entries;
}
