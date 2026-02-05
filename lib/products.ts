/**
 * Fotoğraflar nereye konur?
 *
 * KATEGORİ FOTOĞRAFLARI: public/images/categories/
 *   Örnek: havuz-aydinlatma-ekipmanlari.jpg
 *   Aşağıdaki categories dizisinde ilgili kategorinin image alanını güncelleyin:
 *   image: "/images/categories/havuz-aydinlatma-ekipmanlari.jpg"
 *
 * ÜRÜN FOTOĞRAFLARI: public/images/products/
 *   Örnek: par38-ayakli-armatur.jpg
 *   Aşağıdaki products dizisinde ilgili ürünün image alanını güncelleyin:
 *   image: "/images/products/par38-ayakli-armatur.jpg"
 *
 * Format: .jpg, .jpeg, .png, .webp veya .svg
 * Dosya yoksa placeholder gösterilir.
 */

import type { ProductColorOption } from "@/types/product";

export type ProductVariant = {
  code: string;
  name: string;
  note?: string;
};

export type { ProductColorOption };

export type Product = {
  slug: string;
  name: string;
  categorySlug: string;
  description?: string;
  image?: string;
  /** Renk seçimi varsa: her seçenekte label + görsel yolu. İlk öğe varsayılan (örn. ışıksız). */
  colorOptions?: ProductColorOption[];
  variants?: ProductVariant[];
  relatedSlugs?: string[];
  tags?: string[];
};

export type Category = {
  slug: string;
  name: string;
  productCount: number;
  description?: string;
  image?: string;
};

export const categories: Category[] = [
  { slug: "havuz-aydinlatma-ekipmanlari", name: "Havuz Aydınlatma Ekipmanları", productCount: 5, description: "41 yıllık tecrübe ile havuz lambaları imalatında 1 numara.", image: "/images/placeholder-category.svg" },
  { slug: "elektrik-panolari", name: "Elektrik Panoları", productCount: 2, image: "/images/placeholder-category.svg" },
  { slug: "filtreler-ve-ekipmanlari", name: "Filtreler ve Ekipmanları", productCount: 2, image: "/images/placeholder-category.svg" },
  { slug: "havuz-kenar-ve-ic-ekipmanlari", name: "Havuz Kenar ve İç Ekipmanları", productCount: 13, image: "/images/placeholder-category.svg" },
  { slug: "havuz-temizlik-ekipmanlari", name: "Havuz Temizlik Ekipmanları", productCount: 12, image: "/images/placeholder-category.svg" },
  { slug: "isitma-ekipmanlari", name: "Isıtma Ekipmanları", productCount: 3, image: "/images/placeholder-category.svg" },
  { slug: "pompalar", name: "Pompalar", productCount: 1, image: "/images/placeholder-category.svg" },
  { slug: "sus-havuzu-ekipmanlari", name: "Süs Havuzu Ekipmanları", productCount: 6, image: "/images/placeholder-category.svg" },
  { slug: "olimpik-havuz-ekipmanlari", name: "Olimpik Havuz Ekipmanları", productCount: 0, image: "/images/placeholder-category.svg" },
  { slug: "yuzme-havuzu-kimyasallari", name: "Yüzme Havuzu Kimyasalları", productCount: 0, image: "/images/placeholder-category.svg" },
];

export const products: Product[] = [
  {
    slug: "par56-ampul",
    name: "Par56 Ampul",
    categorySlug: "havuz-aydinlatma-ekipmanlari",
    image: "/images/products/Par56 Ampul/isiksiz.png",
    description: "Par56 LED ampul, havuz aydınlatma için yüksek kaliteli çözüm.",
    colorOptions: [
      { label: "İşıksız", image: "/images/products/Par56 Ampul/isiksiz.png" },
      { label: "Beyaz", image: "/images/products/Par56 Ampul/beyaz.png" },
      { label: "Gün Işığı", image: "/images/products/Par56 Ampul/gunisigi.png" },
      { label: "Kırmızı", image: "/images/products/Par56 Ampul/kirmizi.png" },
      { label: "Mavi", image: "/images/products/Par56 Ampul/mavi.png" },
      { label: "Macenta", image: "/images/products/Par56 Ampul/macenta.png" },
      { label: "RGB", image: "/images/products/Par56 Ampul/rgb.png" },
      { label: "Turkuaz", image: "/images/products/Par56 Ampul/turkuaz.png" },
      { label: "Yeşil", image: "/images/products/Par56 Ampul/yesil.png" },
      { label: "Amber", image: "/images/products/Par56 Ampul/amber.png" },
    ],
    relatedSlugs: ["par56-komple-armatur", "par56-komple-armatur-paslanmaz"],
    tags: ["par56", "ampul", "LED", "havuz aydınlatma"],
  },
  {
    slug: "par56-komple-armatur",
    name: "Par56 Komple Armatür",
    categorySlug: "havuz-aydinlatma-ekipmanlari",
    image: "/images/products/Par56 Komple Armatür/isiksiz.png",
    description: "Par56 komple armatür, profesyonel havuz aydınlatma çözümü.",
    colorOptions: [
      { label: "İşıksız", image: "/images/products/Par56 Komple Armatür/isiksiz.png" },
      { label: "Beyaz", image: "/images/products/Par56 Komple Armatür/beyaz.png" },
      { label: "Gün Işığı", image: "/images/products/Par56 Komple Armatür/gunisigi.png" },
      { label: "Kırmızı", image: "/images/products/Par56 Komple Armatür/kirmizi.png" },
      { label: "Mavi", image: "/images/products/Par56 Komple Armatür/mavi.png" },
      { label: "Macenta", image: "/images/products/Par56 Komple Armatür/macenta.png" },
      { label: "RGB", image: "/images/products/Par56 Komple Armatür/rgb.png" },
      { label: "Turkuaz", image: "/images/products/Par56 Komple Armatür/turkuaz.png" },
      { label: "Yeşil", image: "/images/products/Par56 Komple Armatür/yesil.png" },
      { label: "Amber", image: "/images/products/Par56 Komple Armatür/amber.png" },
    ],
    relatedSlugs: ["par56-ampul", "par56-komple-armatur-paslanmaz", "slim-flat-armatur"],
    tags: ["par56", "komple armatür", "havuz aydınlatma"],
  },
  {
    slug: "par56-komple-armatur-paslanmaz",
    name: "Par56 Komple Armatür Paslanmaz",
    categorySlug: "havuz-aydinlatma-ekipmanlari",
    image: "/images/products/Par56 Komple Armatür Paslanmaz/isiksiz.png",
    description: "Par56 komple armatür paslanmaz çelik versiyonu, uzun ömürlü ve dayanıklı.",
    colorOptions: [
      { label: "İşıksız", image: "/images/products/Par56 Komple Armatür Paslanmaz/isiksiz.png" },
      { label: "Beyaz", image: "/images/products/Par56 Komple Armatür Paslanmaz/beyaz.png" },
      { label: "Gün Işığı", image: "/images/products/Par56 Komple Armatür Paslanmaz/gunisigi.png" },
      { label: "Kırmızı", image: "/images/products/Par56 Komple Armatür Paslanmaz/kirmizi.png" },
      { label: "Mavi", image: "/images/products/Par56 Komple Armatür Paslanmaz/mavi.png" },
      { label: "Macenta", image: "/images/products/Par56 Komple Armatür Paslanmaz/macenta.png" },
      { label: "RGB", image: "/images/products/Par56 Komple Armatür Paslanmaz/rgb.png" },
      { label: "Turkuaz", image: "/images/products/Par56 Komple Armatür Paslanmaz/turkuaz.png" },
      { label: "Yeşil", image: "/images/products/Par56 Komple Armatür Paslanmaz/yesil.png" },
      { label: "Amber", image: "/images/products/Par56 Komple Armatür Paslanmaz/amber.png" },
    ],
    relatedSlugs: ["par56-ampul", "par56-komple-armatur", "slim-flat-paslanmaz-armatur"],
    tags: ["par56", "komple armatür", "paslanmaz", "havuz aydınlatma"],
  },
  {
    slug: "slim-flat-armatur",
    name: "Slim Flat Armatür",
    categorySlug: "havuz-aydinlatma-ekipmanlari",
    image: "/images/products/Slim Flat Armatür/isiksiz.png",
    description: "Slim flat armatür, ince ve modern tasarım ile havuz aydınlatma.",
    colorOptions: [
      { label: "İşıksız", image: "/images/products/Slim Flat Armatür/isiksiz.png" },
      { label: "Beyaz", image: "/images/products/Slim Flat Armatür/beyaz.png" },
      { label: "Gün Işığı", image: "/images/products/Slim Flat Armatür/gunisigi.png" },
      { label: "Kırmızı", image: "/images/products/Slim Flat Armatür/kirmizi.png" },
      { label: "Mavi", image: "/images/products/Slim Flat Armatür/mavi.png" },
      { label: "Macenta", image: "/images/products/Slim Flat Armatür/macenta.png" },
      { label: "RGB", image: "/images/products/Slim Flat Armatür/rgb.png" },
      { label: "Turkuaz", image: "/images/products/Slim Flat Armatür/turkuaz.png" },
      { label: "Yeşil", image: "/images/products/Slim Flat Armatür/yesil.png" },
      { label: "Amber", image: "/images/products/Slim Flat Armatür/amber.jpeg" },
    ],
    relatedSlugs: ["par56-komple-armatur", "slim-flat-paslanmaz-armatur"],
    tags: ["slim flat", "armatür", "havuz aydınlatma"],
  },
  {
    slug: "slim-flat-paslanmaz-armatur",
    name: "Slim Flat Paslanmaz Armatür",
    categorySlug: "havuz-aydinlatma-ekipmanlari",
    image: "/images/products/Slim Flat Paslanmaz Armatür/isiksiz.png",
    description: "Slim flat paslanmaz armatür, paslanmaz çelik gövde ile uzun ömürlü ve dayanıklı.",
    colorOptions: [
      { label: "İşıksız", image: "/images/products/Slim Flat Paslanmaz Armatür/isiksiz.png" },
      { label: "Beyaz", image: "/images/products/Slim Flat Paslanmaz Armatür/beyaz.png" },
      { label: "Gün Işığı", image: "/images/products/Slim Flat Paslanmaz Armatür/gunisigi.png" },
      { label: "Kırmızı", image: "/images/products/Slim Flat Paslanmaz Armatür/kirmizi.png" },
      { label: "Mavi", image: "/images/products/Slim Flat Paslanmaz Armatür/mavi.png" },
      { label: "Macenta", image: "/images/products/Slim Flat Paslanmaz Armatür/macenta.png" },
      { label: "RGB", image: "/images/products/Slim Flat Paslanmaz Armatür/rgb.png" },
      { label: "Turkuaz", image: "/images/products/Slim Flat Paslanmaz Armatür/turkuaz.png" },
      { label: "Yeşil", image: "/images/products/Slim Flat Paslanmaz Armatür/yesil.png" },
      { label: "Amber", image: "/images/products/Slim Flat Paslanmaz Armatür/amber.png" },
    ],
    relatedSlugs: ["par56-komple-armatur-paslanmaz", "slim-flat-armatur"],
    tags: ["slim flat", "armatür", "paslanmaz", "havuz aydınlatma"],
  },
  {
    slug: "volkan-fiskiye",
    name: "Volkan Fıskıye",
    categorySlug: "sus-havuzu-ekipmanlari",
    image: "/images/placeholder-product.svg",
    description: "Süs havuzları için volkan tipi fıskiye, dekoratif su efekti.",
    relatedSlugs: ["paslanmaz-havuz-su-perdesi"],
    tags: ["fıskiye", "süs havuzu"],
  },
  {
    slug: "paslanmaz-havuz-su-perdesi",
    name: "Paslanmaz Havuz Su Perdesi (Kobra Şelale)",
    categorySlug: "sus-havuzu-ekipmanlari",
    image: "/images/placeholder-product.svg",
    description: "Estetik su perdesi ve şelale efekti, paslanmaz yapı.",
    relatedSlugs: ["volkan-fiskiye"],
    tags: ["su perdesi", "şelale", "kobra"],
  },
  {
    slug: "kombine-tip-isitici",
    name: "Kombine Tip Isıtıcı",
    categorySlug: "isitma-ekipmanlari",
    image: "/images/placeholder-product.svg",
    description: "Havuz suyu ısıtma için kombine tip ısıtıcı.",
    relatedSlugs: ["isitici-panolari"],
    tags: ["ısıtıcı", "havuz ısıtma"],
  },
  {
    slug: "isitici-panolari",
    name: "Isıtıcı Panoları",
    categorySlug: "isitma-ekipmanlari",
    image: "/images/placeholder-product.svg",
    description: "Havuz ısıtma sistemleri için kontrol panoları.",
    relatedSlugs: ["kombine-tip-isitici"],
    tags: ["ısıtıcı", "pano"],
  },
  {
    slug: "mosaic-model-havuz-kenar-izgarasi",
    name: "20 cm Mosaic Model Havuz Kenar Izgarası",
    categorySlug: "havuz-kenar-ve-ic-ekipmanlari",
    image: "/images/placeholder-product.svg",
    description: "Dayanıklı paslanmaz yapı, mosaic tasarım. 20 cm model.",
    relatedSlugs: ["alti-yollu-vana"],
    tags: ["ızgara", "havuz kenar", "mosaic"],
  },
  {
    slug: "alti-yollu-vana",
    name: "Altı Yollu Vana",
    categorySlug: "havuz-kenar-ve-ic-ekipmanlari",
    image: "/images/placeholder-product.svg",
    description: "Çok yönlü akış kontrolü, güvenilir kullanım.",
    relatedSlugs: ["mosaic-model-havuz-kenar-izgarasi"],
    tags: ["vana", "havuz ekipmanı"],
  },
  {
    slug: "pompa",
    name: "Pompa",
    categorySlug: "pompalar",
    image: "/images/placeholder-product.svg",
    description: "Yüksek performanslı havuz pompası.",
    relatedSlugs: ["kombine-tip-isitici"],
    tags: ["pompa", "havuz pompası"],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(product: Product): Product[] {
  if (!product.relatedSlugs?.length) return [];
  return product.relatedSlugs
    .map((s) => getProductBySlug(s))
    .filter((p): p is Product => p != null);
}

export function getAllProductSlugs(): string[] {
  return products.map((p) => p.slug);
}

export function getCategorySlugs(): string[] {
  return categories.map((c) => c.slug);
}

const CATEGORY_PLACEHOLDER = "/images/placeholder-category.svg";
const PRODUCT_PLACEHOLDER = "/images/placeholder-product.svg";

export function getCategoryImage(category: Category): string {
  return category.image || CATEGORY_PLACEHOLDER;
}

export function getProductImage(product: Product): string {
  return product.image || PRODUCT_PLACEHOLDER;
}
