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
  { slug: "havuz-aydinlatma-ekipmanlari", name: "Havuz Aydınlatma Ekipmanları", productCount: 15, description: "41 yıllık tecrübe ile havuz lambaları imalatında 1 numara.", image: "/images/placeholder-category.svg" },
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
    slug: "par38-ayakli-armatur",
    name: "PAR38 Ayaklı Armatür",
    categorySlug: "havuz-aydinlatma-ekipmanlari",
    image: "/images/placeholder-product.svg",
    variants: [
      { code: "BA0141", name: "PAR38 AYAKLI BEYAZ 9W", note: "12V DC" },
      { code: "BA0142", name: "PAR38 AYAKLI GUNISIGI 9W", note: "12V DC" },
      { code: "BA0143", name: "PAR38 AYAKLI RGB 9W", note: "12V DC" },
      { code: "BA0144", name: "PAR38 AYAKLI MAVI 9W", note: "12V DC" },
      { code: "BA0145", name: "PAR38 AYAKLI YESIL 9W", note: "12V DC" },
      { code: "BA0146", name: "PAR38 AYAKLI KIRMIZI 9W", note: "12V DC" },
      { code: "BA0147", name: "PAR38 AYAKLI TURKUAZ 9W", note: "12V DC" },
      { code: "BA0148", name: "PAR38 AYAKLI MOR 9W", note: "12V DC" },
      { code: "BA0149", name: "PAR38 AYAKLI K.D. 9W", note: "12V DC" },
      { code: "BA0150", name: "PAR38 AYAKLI ON-OFF 9W", note: "12V DC" },
    ],
    description: `- IP 68 Özellikli nylon66 case ve polikarbonat cam 5mm silikon conta ile sıkma sistemi ile kapanmaktadır.

- RGB ürünler Kırmızı, mavi, yeşil ana renk 7 ara renk ile 16.000 ışık geçişi sağlar, ve 4×1,5 kablo ile animasyon panosunda toplanır profesyonel sistemdir; hız azaltma çoğaltma ve hafızalama yapılabilmektedir.

- K.dönen lambalar 2 li kablo ile çalışır kendi kendine renk senkronizasyonu yapar.

- On-off lambalar 2 li kablo ile on-off kumanda panosuyla çalışır 2 li kumanda ile aç kapa sistemi ile renk değişimi sağlanır, hız azaltma çoğaltma yapılamaz.`,
    relatedSlugs: ["volkan-fiskiye", "par56-paslanmaz-armatur-siva-alti", "kombine-tip-isitici", "isitici-panolari"],
    tags: ["havuz aydınlatma", "par38", "par38 ampül", "par38 ayaklı armatür", "havuz lambası"],
  },
  {
    slug: "par56-paslanmaz-armatur-siva-alti",
    name: "PAR56 Paslanmaz Armatür (Sıva Altı)",
    categorySlug: "havuz-aydinlatma-ekipmanlari",
    image: "/images/products/par56/ışıksız.PNG",
    description: "Paslanmaz çelik gövde, sıva altı montaj. Havuz aydınlatmada profesyonel çözüm.",
    colorOptions: [
      { label: "İşıksız", image: "/images/products/par56/ışıksız.PNG" },
      { label: "Beyaz", image: "/images/products/par56/beyaz.PNG" },
      { label: "Gün Işığı", image: "/images/products/par56/gün ışığı.PNG" },
      { label: "Kırmızı", image: "/images/products/par56/kırmızı.PNG" },
      { label: "Mavi", image: "/images/products/par56/mavi.PNG" },
      { label: "Pembe", image: "/images/products/par56/pembe.PNG" },
      { label: "RGB", image: "/images/products/par56/rgb.PNG" },
      { label: "Sarı", image: "/images/products/par56/sarı.PNG" },
      { label: "Turkuaz", image: "/images/products/par56/turkuaz.PNG" },
      { label: "Yeşil", image: "/images/products/par56/yesil.PNG" },
    ],
    relatedSlugs: ["par38-ayakli-armatur", "par56-yer-armaturu"],
    tags: ["par56", "sıva altı", "paslanmaz armatür"],
  },
  {
    slug: "par56-yer-armaturu",
    name: "PAR56 Yer Armatürü (Fıskiye Tip)",
    categorySlug: "havuz-aydinlatma-ekipmanlari",
    image: "/images/placeholder-product.svg",
    description: "Yer seviyesinde montaj, fıskiye tipi tasarım.",
    relatedSlugs: ["par38-ayakli-armatur", "par56-paslanmaz-armatur-siva-alti"],
    tags: ["par56", "yer armatürü", "fıskiye tip"],
  },
  {
    slug: "tek-led-mini-spot",
    name: "Tek Led Mini Spot (Parmak Mini Spot)",
    categorySlug: "havuz-aydinlatma-ekipmanlari",
    image: "/images/placeholder-product.svg",
    description: "Enerji tasarruflu LED, kompakt tasarım. Havuz ve su özelliği aydınlatması için idealdir.",
    relatedSlugs: ["par38-ayakli-armatur", "gecme-mini-spot"],
    tags: ["mini spot", "LED", "havuz aydınlatma"],
  },
  {
    slug: "gecme-mini-spot",
    name: "Geçme Mini Spot",
    categorySlug: "havuz-aydinlatma-ekipmanlari",
    image: "/images/placeholder-product.svg",
    description: "Geçme montajlı mini spot, havuz kenarı ve iç aydınlatma.",
    relatedSlugs: ["tek-led-mini-spot", "par38-ayakli-armatur"],
    tags: ["mini spot", "geçme"],
  },
  {
    slug: "mini-flat-21cm-siva-usti",
    name: "Mini Flat (21cm Sıva Üstü)",
    categorySlug: "havuz-aydinlatma-ekipmanlari",
    image: "/images/placeholder-product.svg",
    description: "21 cm sıva üstü flat armatür, düz montaj.",
    relatedSlugs: ["par38-ayakli-armatur"],
    tags: ["mini flat", "sıva üstü"],
  },
  {
    slug: "volkan-fiskiye",
    name: "Volkan Fıskıye",
    categorySlug: "sus-havuzu-ekipmanlari",
    image: "/images/placeholder-product.svg",
    description: "Süs havuzları için volkan tipi fıskiye, dekoratif su efekti.",
    relatedSlugs: ["par38-ayakli-armatur", "paslanmaz-havuz-su-perdesi"],
    tags: ["fıskiye", "süs havuzu"],
  },
  {
    slug: "paslanmaz-havuz-su-perdesi",
    name: "Paslanmaz Havuz Su Perdesi (Kobra Şelale)",
    categorySlug: "sus-havuzu-ekipmanlari",
    image: "/images/placeholder-product.svg",
    description: "Estetik su perdesi ve şelale efekti, paslanmaz yapı.",
    relatedSlugs: ["volkan-fiskiye", "par38-ayakli-armatur"],
    tags: ["su perdesi", "şelale", "kobra"],
  },
  {
    slug: "kombine-tip-isitici",
    name: "Kombine Tip Isıtıcı",
    categorySlug: "isitma-ekipmanlari",
    image: "/images/placeholder-product.svg",
    description: "Havuz suyu ısıtma için kombine tip ısıtıcı.",
    relatedSlugs: ["par38-ayakli-armatur", "isitici-panolari"],
    tags: ["ısıtıcı", "havuz ısıtma"],
  },
  {
    slug: "isitici-panolari",
    name: "Isıtıcı Panoları",
    categorySlug: "isitma-ekipmanlari",
    image: "/images/placeholder-product.svg",
    description: "Havuz ısıtma sistemleri için kontrol panoları.",
    relatedSlugs: ["kombine-tip-isitici", "par38-ayakli-armatur"],
    tags: ["ısıtıcı", "pano"],
  },
  {
    slug: "mosaic-model-havuz-kenar-izgarasi",
    name: "20 cm Mosaic Model Havuz Kenar Izgarası",
    categorySlug: "havuz-kenar-ve-ic-ekipmanlari",
    image: "/images/placeholder-product.svg",
    description: "Dayanıklı paslanmaz yapı, mosaic tasarım. 20 cm model.",
    relatedSlugs: ["alti-yollu-vana", "par38-ayakli-armatur"],
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
    relatedSlugs: ["par38-ayakli-armatur", "kombine-tip-isitici"],
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
