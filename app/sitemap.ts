import { MetadataRoute } from "next";
import { getAllProductSlugs, getCategorySlugs } from "@/lib/products";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://batech.com.tr";

export default function sitemap(): MetadataRoute.Sitemap {
  const productSlugs = getAllProductSlugs();
  const categorySlugs = getCategorySlugs();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/urunler`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/sss`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];

  const categoryPages: MetadataRoute.Sitemap = categorySlugs.map((slug) => ({
    url: `${BASE_URL}/urunler/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const productPages: MetadataRoute.Sitemap = productSlugs.map((slug) => ({
    url: `${BASE_URL}/urun/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...categoryPages, ...productPages];
}
