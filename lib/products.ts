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
  { slug: "havuz-aydinlatma-ekipmanlari", name: "Havuz Aydınlatma Ekipmanları", productCount: 6, description: "41 yıllık tecrübe ile havuz lambaları imalatında 1 numara.", image: "/images/placeholder-category.svg" },
  { slug: "elektrik-panolari", name: "Elektrik Panoları", productCount: 2, image: "/images/placeholder-category.svg" },
  { slug: "filtreler-ve-ekipmanlari", name: "Filtreler ve Ekipmanları", productCount: 2, image: "/images/placeholder-category.svg" },
  { slug: "havuz-kenar-ve-ic-ekipmanlari", name: "Havuz Kenar ve İç Ekipmanları", productCount: 13, image: "/images/placeholder-category.svg" },
  { slug: "havuz-temizlik-ekipmanlari", name: "Havuz Temizlik Ekipmanları", productCount: 12, image: "/images/placeholder-category.svg" },
  { slug: "sus-havuzu-ekipmanlari", name: "Süs Havuzu Ekipmanları", productCount: 6, image: "/images/placeholder-category.svg" },
];

export const products: Product[] = [
  {
    slug: "par56-ampul",
    name: "Par56 Ampul",
    categorySlug: "havuz-aydinlatma-ekipmanlari",
    image: "/images/products/Par56 Ampul/isiksiz.png",
    description: "Par56 LED ampul, havuz aydınlatma için yüksek kaliteli çözüm.",
    colorOptions: [
      { label: "Ürün görünümü", image: "/images/products/Par56 Ampul/isiksiz.png" },
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
      { label: "Ürün görünümü", image: "/images/products/Par56 Komple Armatür/isiksiz.png" },
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
      { label: "Ürün görünümü", image: "/images/products/Par56 Komple Armatür Paslanmaz/isiksiz.png" },
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
      { label: "Ürün görünümü", image: "/images/products/Slim Flat Armatür/isiksiz.png" },
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
      { label: "Ürün görünümü", image: "/images/products/Slim Flat Paslanmaz Armatür/isiksiz.png" },
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
    slug: "tek-led-mini-spot",
    name: "Tek Led Mini Spot",
    categorySlug: "havuz-aydinlatma-ekipmanlari",
    image: "/images/products/Tek Led Mini Spot/isiksiz.png",
    description: "Tek LED mini spot, havuz aydınlatmada kompakt ve enerji tasarruflu çözüm.",
    colorOptions: [
      { label: "Ürün görünümü", image: "/images/products/Tek Led Mini Spot/isiksiz.png" },
      { label: "Beyaz", image: "/images/products/Tek Led Mini Spot/beyaz.png" },
      { label: "Gün Işığı", image: "/images/products/Tek Led Mini Spot/gunisigi.png" },
      { label: "Kırmızı", image: "/images/products/Tek Led Mini Spot/kirmizi.png" },
      { label: "Mavi", image: "/images/products/Tek Led Mini Spot/mavi.png" },
      { label: "Macenta", image: "/images/products/Tek Led Mini Spot/macenta.png" },
      { label: "RGB", image: "/images/products/Tek Led Mini Spot/rgb.png" },
      { label: "Turkuaz", image: "/images/products/Tek Led Mini Spot/turkuaz.png" },
      { label: "Yeşil", image: "/images/products/Tek Led Mini Spot/yesil.png" },
      { label: "Amber", image: "/images/products/Tek Led Mini Spot/amber.png" },
    ],
    relatedSlugs: ["par56-ampul", "par56-komple-armatur", "slim-flat-armatur"],
    tags: ["mini spot", "LED", "havuz aydınlatma"],
  },
  // Elektrik Panoları - https://www.batech.com.tr/urun-kategori/elektrik-panolari/
  { slug: "ekonomik-tip-elektrik-panolari", name: "Ekonomik Tip Elektrik Panoları", categorySlug: "elektrik-panolari", image: "/images/placeholder-product.svg", description: "Ekonomik tip havuz elektrik panoları.", tags: ["elektrik", "pano"] },
  { slug: "luks-tip-elektrik-panolari", name: "Lüks Tip Elektrik Panoları", categorySlug: "elektrik-panolari", image: "/images/placeholder-product.svg", description: "Lüks tip havuz elektrik panoları.", tags: ["elektrik", "pano"] },
  // Filtreler ve Ekipmanları - https://www.batech.com.tr/urun-kategori/filtreler-ve-ekipmanlari/
  { slug: "alti-yollu-vana", name: "Altı Yollu Vana", categorySlug: "filtreler-ve-ekipmanlari", image: "/images/placeholder-product.svg", description: "Çok yönlü akış kontrolü, güvenilir kullanım.", relatedSlugs: ["polyester-kum-filtreleri"], tags: ["vana", "filtre"] },
  { slug: "polyester-kum-filtreleri", name: "Polyester Kum Filtreleri", categorySlug: "filtreler-ve-ekipmanlari", image: "/images/placeholder-product.svg", description: "Polyester kum filtreleri, havuz filtre sistemleri.", relatedSlugs: ["alti-yollu-vana"], tags: ["filtre", "kum"] },
  // Havuz Kenar ve İç Ekipmanları - https://www.batech.com.tr/urun-kategori/havuz-kenar-ve-ic-ekipmanlari/
  { slug: "mosaic-model-havuz-kenar-izgarasi", name: "20 cm Mosaic Model Havuz Kenar Izgarası", categorySlug: "havuz-kenar-ve-ic-ekipmanlari", image: "/images/placeholder-product.svg", description: "Dayanıklı paslanmaz yapı, mosaic tasarım.", relatedSlugs: ["cift-gecme-izgara", "tek-gecme-izgara"], tags: ["ızgara", "havuz kenar"] },
  { slug: "45-kose-parcalari", name: "45° Köşe Parçaları", categorySlug: "havuz-kenar-ve-ic-ekipmanlari", image: "/images/placeholder-product.svg", description: "Havuz kenar 45° köşe parçaları.", tags: ["köşe", "havuz kenar"] },
  { slug: "90-kose-parcalari", name: "90° Köşe Parçaları", categorySlug: "havuz-kenar-ve-ic-ekipmanlari", image: "/images/placeholder-product.svg", description: "Havuz kenar 90° köşe parçaları.", tags: ["köşe", "havuz kenar"] },
  { slug: "cift-gecme-izgara", name: "Çift Geçme Izgara", categorySlug: "havuz-kenar-ve-ic-ekipmanlari", image: "/images/placeholder-product.svg", description: "Çift geçme havuz kenar ızgarası.", relatedSlugs: ["tek-gecme-izgara", "mosaic-model-havuz-kenar-izgarasi"], tags: ["ızgara"] },
  { slug: "kare-dip-suzgec", name: "Kare Dip Süzgeç", categorySlug: "havuz-kenar-ve-ic-ekipmanlari", image: "/images/placeholder-product.svg", description: "Kare dip süzgeç, havuz dip ekipmanı.", tags: ["süzgeç", "dip"] },
  { slug: "muro-tip-havuz-merdiveni", name: "Muro Tip Havuz Merdiveni", categorySlug: "havuz-kenar-ve-ic-ekipmanlari", image: "/images/placeholder-product.svg", description: "Muro tip havuz merdiveni.", relatedSlugs: ["standart-tip-havuz-merdiveni"], tags: ["merdiven"] },
  { slug: "paslanmaz-havuz-su-perdesi", name: "Paslanmaz Havuz Su Perdesi (Kobra Şelale)", categorySlug: "havuz-kenar-ve-ic-ekipmanlari", image: "/images/placeholder-product.svg", description: "Estetik su perdesi ve şelale efekti, paslanmaz yapı.", tags: ["su perdesi", "şelale"] },
  { slug: "standart-tip-havuz-merdiveni", name: "Standart Tip Havuz Merdiveni", categorySlug: "havuz-kenar-ve-ic-ekipmanlari", image: "/images/placeholder-product.svg", description: "Standart tip havuz merdiveni.", relatedSlugs: ["muro-tip-havuz-merdiveni"], tags: ["merdiven"] },
  { slug: "tabandan-besleme-nozulu", name: "Tabandan Besleme Nozulu (Debi Ayarlı)", categorySlug: "havuz-kenar-ve-ic-ekipmanlari", image: "/images/placeholder-product.svg", description: "Tabandan besleme nozulu, debi ayarlı.", tags: ["nozul", "besleme"] },
  { slug: "tek-gecme-izgara", name: "Tek Geçme Izgara", categorySlug: "havuz-kenar-ve-ic-ekipmanlari", image: "/images/placeholder-product.svg", description: "Tek geçme havuz kenar ızgarası.", relatedSlugs: ["cift-gecme-izgara", "mosaic-model-havuz-kenar-izgarasi"], tags: ["ızgara"] },
  { slug: "vakum-nozulu", name: "Vakum Nozulu", categorySlug: "havuz-kenar-ve-ic-ekipmanlari", image: "/images/placeholder-product.svg", description: "Havuz vakum nozulu.", tags: ["nozul", "vakum"] },
  { slug: "yandan-besleme-nozulu", name: "Yandan Besleme Nozulu", categorySlug: "havuz-kenar-ve-ic-ekipmanlari", image: "/images/placeholder-product.svg", description: "Yandan besleme nozulu.", tags: ["nozul", "besleme"] },
  { slug: "yuvarlak-dip-suzgec", name: "Yuvarlak Dip Süzgeç", categorySlug: "havuz-kenar-ve-ic-ekipmanlari", image: "/images/placeholder-product.svg", description: "Yuvarlak dip süzgeç, havuz dip ekipmanı.", tags: ["süzgeç", "dip"] },
  // Havuz Temizlik Ekipmanları - https://www.batech.com.tr/urun-kategori/havuz-temizlik-ekipmanlari/
  { slug: "bspool-tuz-jeneratori", name: "BsPool Tuz Jeneratörü", categorySlug: "havuz-temizlik-ekipmanlari", image: "/images/placeholder-product.svg", description: "BsPool tuz jeneratörü, havuz dezenfeksiyon.", tags: ["tuz", "jeneratör"] },
  { slug: "duvar-fircasi", name: "Duvar Fırçası", categorySlug: "havuz-temizlik-ekipmanlari", image: "/images/placeholder-product.svg", description: "Havuz duvar fırçası.", tags: ["fırça", "temizlik"] },
  { slug: "eco-tip-derin-kepce", name: "Eco Tip Derin Kepçe", categorySlug: "havuz-temizlik-ekipmanlari", image: "/images/placeholder-product.svg", description: "Eco tip derin kepçe.", tags: ["kepçe", "temizlik"] },
  { slug: "havuz-supurgesi", name: "Havuz Süpürgesi", categorySlug: "havuz-temizlik-ekipmanlari", image: "/images/placeholder-product.svg", description: "Havuz süpürgesi, dip temizlik.", tags: ["süpürge", "temizlik"] },
  { slug: "kose-fircasi", name: "Köşe Fırçası", categorySlug: "havuz-temizlik-ekipmanlari", image: "/images/placeholder-product.svg", description: "Havuz köşe fırçası.", tags: ["fırça", "temizlik"] },
  { slug: "lux-derin-tip-kepce", name: "Lux Derin Tip Kepçe", categorySlug: "havuz-temizlik-ekipmanlari", image: "/images/placeholder-product.svg", description: "Lux derin tip kepçe.", tags: ["kepçe", "temizlik"] },
  { slug: "robodeep-havuz-robotu", name: "robodeep Havuz Robotu", categorySlug: "havuz-temizlik-ekipmanlari", image: "/images/placeholder-product.svg", description: "robodeep havuz robotu, otomatik temizlik.", tags: ["robot", "temizlik"] },
  { slug: "sivili-test-kiti", name: "Sıvılı Test Kiti", categorySlug: "havuz-temizlik-ekipmanlari", image: "/images/placeholder-product.svg", description: "Sıvılı test kiti, havuz suyu analizi.", tags: ["test", "kimya"] },
  { slug: "supurge-hortum-adaptoru", name: "Süpürge Hortum Adaptörü", categorySlug: "havuz-temizlik-ekipmanlari", image: "/images/placeholder-product.svg", description: "Süpürge hortum adaptörü.", tags: ["hortum", "adaptör"] },
  { slug: "supurge-hortumu", name: "Süpürge Hortumu", categorySlug: "havuz-temizlik-ekipmanlari", image: "/images/placeholder-product.svg", description: "Havuz süpürge hortumu.", tags: ["hortum", "süpürge"] },
  { slug: "teleskopik-saplar", name: "Teleskopik Saplar", categorySlug: "havuz-temizlik-ekipmanlari", image: "/images/placeholder-product.svg", description: "Teleskopik saplar, fırça ve kepçe sapı.", tags: ["sap", "temizlik"] },
  { slug: "yosun-fircasi", name: "Yosun Fırçası", categorySlug: "havuz-temizlik-ekipmanlari", image: "/images/placeholder-product.svg", description: "Yosun fırçası, yosun temizliği.", tags: ["fırça", "yosun"] },
  // Süs Havuzu Ekipmanları - https://www.batech.com.tr/urun-kategori/sus-havuzu-ekipmanlari/
  { slug: "caglayan-fiskiye", name: "Çağlayan Fıskıye", categorySlug: "sus-havuzu-ekipmanlari", image: "/images/placeholder-product.svg", description: "Çağlayan fıskıye, süs havuzu.", relatedSlugs: ["volkan-fiskiye", "parmak-fiskiye"], tags: ["fıskiye", "süs havuzu"] },
  { slug: "kopuk-fiskiye", name: "Köpük Fıskıye", categorySlug: "sus-havuzu-ekipmanlari", image: "/images/placeholder-product.svg", description: "Köpük fıskıye, dekoratif su efekti.", tags: ["fıskiye", "süs havuzu"] },
  { slug: "parmak-fiskiye", name: "Parmak Fıskıye", categorySlug: "sus-havuzu-ekipmanlari", image: "/images/placeholder-product.svg", description: "Parmak fıskıye, süs havuzu.", relatedSlugs: ["caglayan-fiskiye", "volkan-fiskiye"], tags: ["fıskiye", "süs havuzu"] },
  { slug: "su-cani-fiskiye", name: "Su Çanı Fıskıye", categorySlug: "sus-havuzu-ekipmanlari", image: "/images/placeholder-product.svg", description: "Su çanı fıskıye, dekoratif.", tags: ["fıskiye", "süs havuzu"] },
  { slug: "volkan-fiskiye", name: "Volkan Fıskıye", categorySlug: "sus-havuzu-ekipmanlari", image: "/images/placeholder-product.svg", description: "Volkan fıskıye, süs havuzu için dekoratif su efekti.", relatedSlugs: ["caglayan-fiskiye", "yelpaze-film-fiskiye"], tags: ["fıskiye", "süs havuzu"] },
  { slug: "yelpaze-film-fiskiye", name: "Yelpaze Film Fıskıye", categorySlug: "sus-havuzu-ekipmanlari", image: "/images/placeholder-product.svg", description: "Yelpaze film fıskıye, süs havuzu.", relatedSlugs: ["volkan-fiskiye"], tags: ["fıskiye", "süs havuzu"] },
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
