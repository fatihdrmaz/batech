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
  /** Teknik çizim görseli (varsa ürün sayfasında sağda gösterilir, tıklanınca popup açılır). */
  technicalDrawing?: string;
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
  { slug: "havuz-aydinlatma-ekipmanlari", name: "Havuz Aydınlatma Ekipmanları", productCount: 18, description: "41 yıllık tecrübe ile havuz lambaları imalatında 1 numara.", image: "/images/placeholder-category.svg" },
  { slug: "elektrik-panolari", name: "Elektrik Panoları", productCount: 2, description: "Ekonomik ve lüks tip havuz elektrik panoları.", image: "/images/categories/elektrik-panolari.png" },
  { slug: "filtreler-ve-ekipmanlari", name: "Filtreler ve Ekipmanları", productCount: 2, description: "Havuz filtre sistemleri ve yedek parçalar.", image: "/images/categories/filtreler-ve-ekipmanlari.png" },
  { slug: "havuz-kenar-ve-ic-ekipmanlari", name: "Havuz Kenar ve İç Ekipmanları", productCount: 13, description: "Izgaralar, vanalar, merdivenler ve kenar ekipmanları.", image: "/images/placeholder-category.svg" },
  { slug: "havuz-temizlik-ekipmanlari", name: "Havuz Temizlik Ekipmanları", productCount: 12, description: "Temizlik fırçaları, skimmerlar ve aksesuarlar.", image: "/images/placeholder-category.svg" },
  { slug: "sus-havuzu-ekipmanlari", name: "Süs Havuzu Ekipmanları", productCount: 6, description: "Fıskiyeler ve süs havuzu ekipmanları.", image: "/images/placeholder-category.svg" },
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
    technicalDrawing: "/images/products/Par56 Komple Armatür/teknikcizim.jpeg",
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
  {
    slug: "gecme-mini-spot",
    name: "Geçme Mini Spot",
    categorySlug: "havuz-aydinlatma-ekipmanlari",
    image: "/images/products/Geçme Mini Spot/isiksiz.png",
    description: "Geçme mini spot, standart ve siyah renk seçenekleri ile havuz aydınlatma.",
    colorOptions: [
      { label: "Ürün görünümü", image: "/images/products/Geçme Mini Spot/isiksiz.png" },
      { label: "Beyaz", image: "/images/products/Geçme Mini Spot/beyaz.png" },
      { label: "Gün Işığı", image: "/images/products/Geçme Mini Spot/gunisigi.png" },
      { label: "Kırmızı", image: "/images/products/Geçme Mini Spot/kirmizi.png" },
      { label: "Mavi", image: "/images/products/Geçme Mini Spot/mavi.png" },
      { label: "Macenta", image: "/images/products/Geçme Mini Spot/macenta.png" },
      { label: "RGB", image: "/images/products/Geçme Mini Spot/rgb.png" },
      { label: "Turkuaz", image: "/images/products/Geçme Mini Spot/turkuaz.png" },
      { label: "Yeşil", image: "/images/products/Geçme Mini Spot/yesil.png" },
      { label: "Amber", image: "/images/products/Geçme Mini Spot/amber.png" },
      { label: "Siyah - Ürün görünümü", image: "/images/products/Geçme Mini Spot/siyah/isiksiz.png" },
      { label: "Siyah - Beyaz", image: "/images/products/Geçme Mini Spot/siyah/beyaz.png" },
      { label: "Siyah - Gün Işığı", image: "/images/products/Geçme Mini Spot/siyah/gunisigi.png" },
      { label: "Siyah - Kırmızı", image: "/images/products/Geçme Mini Spot/siyah/kirmizi.png" },
      { label: "Siyah - Mavi", image: "/images/products/Geçme Mini Spot/siyah/mavi.png" },
      { label: "Siyah - Macenta", image: "/images/products/Geçme Mini Spot/siyah/macenta.png" },
      { label: "Siyah - RGB", image: "/images/products/Geçme Mini Spot/siyah/rgb.png" },
      { label: "Siyah - Turkuaz", image: "/images/products/Geçme Mini Spot/siyah/turkuaz.png" },
      { label: "Siyah - Yeşil", image: "/images/products/Geçme Mini Spot/siyah/yesil.png" },
      { label: "Siyah - Amber", image: "/images/products/Geçme Mini Spot/siyah/amber.png" },
    ],
    relatedSlugs: ["tek-led-mini-spot", "ayakli-mini-spot-armatur", "paslanmaz-gecme-mini-spot"],
    tags: ["geçme", "mini spot", "siyah", "havuz aydınlatma"],
  },
  {
    slug: "paslanmaz-gecme-mini-spot",
    name: "Paslanmaz Geçme Mini Spot",
    categorySlug: "havuz-aydinlatma-ekipmanlari",
    image: "/images/products/Paslanmaz Geçme Mini Spot/isiksiz.png",
    description: "Paslanmaz geçme mini spot, paslanmaz çelik gövde ile uzun ömürlü havuz aydınlatma.",
    colorOptions: [
      { label: "Ürün görünümü", image: "/images/products/Paslanmaz Geçme Mini Spot/isiksiz.png" },
      { label: "Beyaz", image: "/images/products/Paslanmaz Geçme Mini Spot/beyaz.png" },
      { label: "Gün Işığı", image: "/images/products/Paslanmaz Geçme Mini Spot/gunisigi.png" },
      { label: "Kırmızı", image: "/images/products/Paslanmaz Geçme Mini Spot/kirmizi.png" },
      { label: "Mavi", image: "/images/products/Paslanmaz Geçme Mini Spot/mavi.png" },
      { label: "Macenta", image: "/images/products/Paslanmaz Geçme Mini Spot/macenta.png" },
      { label: "RGB", image: "/images/products/Paslanmaz Geçme Mini Spot/rgb.png" },
      { label: "Turkuaz", image: "/images/products/Paslanmaz Geçme Mini Spot/turkuaz.png" },
      { label: "Yeşil", image: "/images/products/Paslanmaz Geçme Mini Spot/yesil.png" },
      { label: "Amber", image: "/images/products/Paslanmaz Geçme Mini Spot/amber.png" },
    ],
    relatedSlugs: ["gecme-mini-spot", "ayakli-mini-spot-armatur", "slim-flat-paslanmaz-armatur"],
    tags: ["paslanmaz", "geçme", "mini spot", "havuz aydınlatma"],
  },
  {
    slug: "ayakli-mini-spot-armatur",
    name: "Ayaklı Mini Spot Armatür",
    categorySlug: "havuz-aydinlatma-ekipmanlari",
    image: "/images/products/Ayaklı Mini Spot Armatur/isiksiz.jpeg",
    description: "Ayaklı mini spot armatür, standart ve siyah renk seçenekleri ile havuz aydınlatma.",
    colorOptions: [
      { label: "Ürün görünümü", image: "/images/products/Ayaklı Mini Spot Armatur/isiksiz.jpeg" },
      { label: "Beyaz", image: "/images/products/Ayaklı Mini Spot Armatur/beyaz.png" },
      { label: "Gün Işığı", image: "/images/products/Ayaklı Mini Spot Armatur/gunisigi.png" },
      { label: "Kırmızı", image: "/images/products/Ayaklı Mini Spot Armatur/kirmizi.png" },
      { label: "Mavi", image: "/images/products/Ayaklı Mini Spot Armatur/mavi.png" },
      { label: "Macenta", image: "/images/products/Ayaklı Mini Spot Armatur/macenta.png" },
      { label: "RGB", image: "/images/products/Ayaklı Mini Spot Armatur/rgb.png" },
      { label: "Turkuaz", image: "/images/products/Ayaklı Mini Spot Armatur/turkuaz.png" },
      { label: "Yeşil", image: "/images/products/Ayaklı Mini Spot Armatur/yesil.png" },
      { label: "Amber", image: "/images/products/Ayaklı Mini Spot Armatur/amber.png" },
      { label: "Siyah - Ürün görünümü", image: "/images/products/Ayaklı Mini Spot Armatur/siyah/isiksiz.jpeg" },
      { label: "Siyah - Beyaz", image: "/images/products/Ayaklı Mini Spot Armatur/siyah/beyaz.png" },
      { label: "Siyah - Gün Işığı", image: "/images/products/Ayaklı Mini Spot Armatur/siyah/gunisigi.png" },
      { label: "Siyah - Kırmızı", image: "/images/products/Ayaklı Mini Spot Armatur/siyah/kirmizi.png" },
      { label: "Siyah - Mavi", image: "/images/products/Ayaklı Mini Spot Armatur/siyah/mavi.png" },
      { label: "Siyah - Macenta", image: "/images/products/Ayaklı Mini Spot Armatur/siyah/macenta.png" },
      { label: "Siyah - RGB", image: "/images/products/Ayaklı Mini Spot Armatur/siyah/rgb.png" },
      { label: "Siyah - Turkuaz", image: "/images/products/Ayaklı Mini Spot Armatur/siyah/turkuaz.png" },
      { label: "Siyah - Yeşil", image: "/images/products/Ayaklı Mini Spot Armatur/siyah/yesil.png" },
      { label: "Siyah - Amber", image: "/images/products/Ayaklı Mini Spot Armatur/siyah/amber.png" },
    ],
    relatedSlugs: ["tek-led-mini-spot", "slim-flat-armatur", "super-smart-armatur"],
    tags: ["ayaklı", "mini spot", "armatür", "siyah", "havuz aydınlatma"],
  },
  {
    slug: "super-smart-armatur",
    name: "Super Smart Armatür",
    categorySlug: "havuz-aydinlatma-ekipmanlari",
    image: "/images/products/Super Smart Armatur/isiksiz.png",
    description: "Super Smart armatür, akıllı tasarım ile modern havuz aydınlatma çözümü.",
    colorOptions: [
      { label: "Ürün görünümü", image: "/images/products/Super Smart Armatur/isiksiz.png" },
      { label: "Beyaz", image: "/images/products/Super Smart Armatur/beyaz.png" },
      { label: "Gün Işığı", image: "/images/products/Super Smart Armatur/gunisigi.png" },
      { label: "Kırmızı", image: "/images/products/Super Smart Armatur/kirmizi.png" },
      { label: "Mavi", image: "/images/products/Super Smart Armatur/mavi.png" },
      { label: "Macenta", image: "/images/products/Super Smart Armatur/macenta.png" },
      { label: "RGB", image: "/images/products/Super Smart Armatur/rgb.png" },
      { label: "Turkuaz", image: "/images/products/Super Smart Armatur/turkuaz.png" },
      { label: "Yeşil", image: "/images/products/Super Smart Armatur/yesil.png" },
      { label: "Amber", image: "/images/products/Super Smart Armatur/amber.png" },
    ],
    relatedSlugs: ["super-smart-armatur-paslanmaz", "slim-flat-armatur", "par56-komple-armatur"],
    tags: ["super smart", "armatür", "havuz aydınlatma"],
  },
  {
    slug: "super-smart-armatur-paslanmaz",
    name: "Super Smart Armatür Paslanmaz",
    categorySlug: "havuz-aydinlatma-ekipmanlari",
    image: "/images/products/Super Smart Armatur Paslanmaz/isiksiz.png",
    description: "Super Smart paslanmaz armatür, akıllı tasarım ve paslanmaz çelik gövde ile uzun ömürlü havuz aydınlatma.",
    colorOptions: [
      { label: "Ürün görünümü", image: "/images/products/Super Smart Armatur Paslanmaz/isiksiz.png" },
      { label: "Beyaz", image: "/images/products/Super Smart Armatur Paslanmaz/beyaz.png" },
      { label: "Gün Işığı", image: "/images/products/Super Smart Armatur Paslanmaz/gunisigi.png" },
      { label: "Kırmızı", image: "/images/products/Super Smart Armatur Paslanmaz/kirmizi.png" },
      { label: "Mavi", image: "/images/products/Super Smart Armatur Paslanmaz/mavi.png" },
      { label: "Macenta", image: "/images/products/Super Smart Armatur Paslanmaz/macenta.png" },
      { label: "RGB", image: "/images/products/Super Smart Armatur Paslanmaz/rgb.png" },
      { label: "Turkuaz", image: "/images/products/Super Smart Armatur Paslanmaz/turkuaz.png" },
      { label: "Yeşil", image: "/images/products/Super Smart Armatur Paslanmaz/yesil.png" },
      { label: "Amber", image: "/images/products/Super Smart Armatur Paslanmaz/amber.png" },
    ],
    relatedSlugs: ["super-smart-armatur", "slim-flat-paslanmaz-armatur", "par56-komple-armatur-paslanmaz"],
    tags: ["super smart", "armatür", "paslanmaz", "havuz aydınlatma"],
  },
  {
    slug: "par38-yer-armaturu-paslanmaz",
    name: "Par38 Yer Armatürü Paslanmaz",
    categorySlug: "havuz-aydinlatma-ekipmanlari",
    image: "/images/products/Par38 Yer Armatürü Paslanmaz/isiksiz.jpeg",
    technicalDrawing: "/images/products/Par38 Yer Armatürü Paslanmaz/teknikcizim.jpeg",
    description: "Par38 yer armatürü paslanmaz, paslanmaz çelik gövde ile havuz kenarı yer aydınlatması.",
    colorOptions: [
      { label: "Ürün görünümü", image: "/images/products/Par38 Yer Armatürü Paslanmaz/isiksiz.jpeg" },
      { label: "Beyaz", image: "/images/products/Par38 Yer Armatürü Paslanmaz/beyaz.png" },
      { label: "Gün Işığı", image: "/images/products/Par38 Yer Armatürü Paslanmaz/gunisigi.png" },
      { label: "Kırmızı", image: "/images/products/Par38 Yer Armatürü Paslanmaz/kirmizi.png" },
      { label: "Mavi", image: "/images/products/Par38 Yer Armatürü Paslanmaz/mavi.png" },
      { label: "Macenta", image: "/images/products/Par38 Yer Armatürü Paslanmaz/macenta.png" },
      { label: "RGB", image: "/images/products/Par38 Yer Armatürü Paslanmaz/rgb.png" },
      { label: "Turkuaz", image: "/images/products/Par38 Yer Armatürü Paslanmaz/turkuaz.png" },
      { label: "Yeşil", image: "/images/products/Par38 Yer Armatürü Paslanmaz/yesil.png" },
      { label: "Amber", image: "/images/products/Par38 Yer Armatürü Paslanmaz/amber.png" },
    ],
    relatedSlugs: ["par56-komple-armatur-paslanmaz", "slim-flat-paslanmaz-armatur", "super-smart-armatur-paslanmaz"],
    tags: ["par38", "yer armatürü", "paslanmaz", "havuz aydınlatma"],
  },
  {
    slug: "mini-flat-armatur",
    name: "Mini Flat Armatür",
    categorySlug: "havuz-aydinlatma-ekipmanlari",
    image: "/images/products/Mini Flat Armatür/isiksiz.png",
    description: "Mini flat armatür, kompakt ve ince tasarım ile havuz aydınlatma.",
    colorOptions: [
      { label: "Ürün görünümü", image: "/images/products/Mini Flat Armatür/isiksiz.png" },
      { label: "Beyaz", image: "/images/products/Mini Flat Armatür/beyaz.png" },
      { label: "Gün Işığı", image: "/images/products/Mini Flat Armatür/gunisigi.png" },
      { label: "Kırmızı", image: "/images/products/Mini Flat Armatür/kirmizi.png" },
      { label: "Mavi", image: "/images/products/Mini Flat Armatür/mavi.png" },
      { label: "Macenta", image: "/images/products/Mini Flat Armatür/macenta.png" },
      { label: "RGB", image: "/images/products/Mini Flat Armatür/rgb.png" },
      { label: "Turkuaz", image: "/images/products/Mini Flat Armatür/turkuaz.png" },
      { label: "Yeşil", image: "/images/products/Mini Flat Armatür/yesil.png" },
      { label: "Amber", image: "/images/products/Mini Flat Armatür/amber.png" },
    ],
    relatedSlugs: ["slim-flat-armatur", "super-smart-armatur", "mini-flat-paslanmaz-armatur"],
    tags: ["mini flat", "armatür", "havuz aydınlatma"],
  },
  {
    slug: "mini-flat-paslanmaz-armatur",
    name: "Mini Flat Paslanmaz Armatür",
    categorySlug: "havuz-aydinlatma-ekipmanlari",
    image: "/images/products/Mini Flat Paslanmaz Armatür/isiksiz.png",
    description: "Mini flat paslanmaz armatür, paslanmaz çelik gövde ile uzun ömürlü havuz aydınlatma.",
    colorOptions: [
      { label: "Ürün görünümü", image: "/images/products/Mini Flat Paslanmaz Armatür/isiksiz.png" },
      { label: "Beyaz", image: "/images/products/Mini Flat Paslanmaz Armatür/beyaz.png" },
      { label: "Gün Işığı", image: "/images/products/Mini Flat Paslanmaz Armatür/gunisigi.png" },
      { label: "Kırmızı", image: "/images/products/Mini Flat Paslanmaz Armatür/kirmizi.png" },
      { label: "Mavi", image: "/images/products/Mini Flat Paslanmaz Armatür/mavi.png" },
      { label: "Macenta", image: "/images/products/Mini Flat Paslanmaz Armatür/macenta.png" },
      { label: "RGB", image: "/images/products/Mini Flat Paslanmaz Armatür/rgb.png" },
      { label: "Turkuaz", image: "/images/products/Mini Flat Paslanmaz Armatür/turkuaz.png" },
      { label: "Yeşil", image: "/images/products/Mini Flat Paslanmaz Armatür/yesil.png" },
      { label: "Amber", image: "/images/products/Mini Flat Paslanmaz Armatür/amber.png" },
    ],
    relatedSlugs: ["mini-flat-armatur", "slim-flat-paslanmaz-armatur", "super-smart-armatur-paslanmaz"],
    tags: ["mini flat", "armatür", "paslanmaz", "havuz aydınlatma"],
  },
  {
    slug: "par38-ankastre-armatur",
    name: "Par38 Ankastre Armatür",
    categorySlug: "havuz-aydinlatma-ekipmanlari",
    image: "/images/products/Par38 Ankastre Armatür/isiksiz.png",
    description: "Par38 ankastre armatür, havuz kenarı gömme montaj için havuz aydınlatma.",
    colorOptions: [
      { label: "Ürün görünümü", image: "/images/products/Par38 Ankastre Armatür/isiksiz.png" },
      { label: "Beyaz", image: "/images/products/Par38 Ankastre Armatür/beyaz.png" },
      { label: "Gün Işığı", image: "/images/products/Par38 Ankastre Armatür/gunisigi.png" },
      { label: "Kırmızı", image: "/images/products/Par38 Ankastre Armatür/kirmizi.png" },
      { label: "Mavi", image: "/images/products/Par38 Ankastre Armatür/mavi.png" },
      { label: "Macenta", image: "/images/products/Par38 Ankastre Armatür/macenta.png" },
      { label: "RGB", image: "/images/products/Par38 Ankastre Armatür/rgb.png" },
      { label: "Turkuaz", image: "/images/products/Par38 Ankastre Armatür/turkuaz.png" },
      { label: "Yeşil", image: "/images/products/Par38 Ankastre Armatür/yesil.png" },
      { label: "Amber", image: "/images/products/Par38 Ankastre Armatür/amber.png" },
    ],
    relatedSlugs: ["par38-ankastre-armatur-paslanmaz", "par38-yer-armaturu-paslanmaz", "par56-komple-armatur"],
    tags: ["par38", "ankastre", "armatür", "havuz aydınlatma"],
  },
  {
    slug: "par38-ankastre-armatur-paslanmaz",
    name: "Par38 Ankastre Armatür Paslanmaz",
    categorySlug: "havuz-aydinlatma-ekipmanlari",
    image: "/images/products/Par38 Ankastre Armatür Paslanmaz/isiksiz.png",
    description: "Par38 ankastre armatür paslanmaz, paslanmaz çelik gövde ile gömme montaj havuz aydınlatma.",
    colorOptions: [
      { label: "Ürün görünümü", image: "/images/products/Par38 Ankastre Armatür Paslanmaz/isiksiz.png" },
      { label: "Beyaz", image: "/images/products/Par38 Ankastre Armatür Paslanmaz/beyaz.png" },
      { label: "Gün Işığı", image: "/images/products/Par38 Ankastre Armatür Paslanmaz/gunisigi.png" },
      { label: "Kırmızı", image: "/images/products/Par38 Ankastre Armatür Paslanmaz/kirmizi.png" },
      { label: "Mavi", image: "/images/products/Par38 Ankastre Armatür Paslanmaz/mavi.png" },
      { label: "Macenta", image: "/images/products/Par38 Ankastre Armatür Paslanmaz/macenta.png" },
      { label: "RGB", image: "/images/products/Par38 Ankastre Armatür Paslanmaz/rgb.png" },
      { label: "Turkuaz", image: "/images/products/Par38 Ankastre Armatür Paslanmaz/turkuaz.png" },
      { label: "Yeşil", image: "/images/products/Par38 Ankastre Armatür Paslanmaz/yesil.png" },
      { label: "Amber", image: "/images/products/Par38 Ankastre Armatür Paslanmaz/amber.png" },
    ],
    relatedSlugs: ["par38-ankastre-armatur", "par38-yer-armaturu-paslanmaz", "par56-komple-armatur-paslanmaz"],
    tags: ["par38", "ankastre", "armatür", "paslanmaz", "havuz aydınlatma"],
  },
  {
    slug: "par38-ayakli-armatur",
    name: "Par38 Ayaklı Armatür",
    categorySlug: "havuz-aydinlatma-ekipmanlari",
    image: "/images/products/Par38 Ayaklı Armatür/isiksiz.png",
    description: "Par38 ayaklı armatür, standart ve siyah renk seçenekleri ile havuz kenarı ayaklı aydınlatma.",
    colorOptions: [
      { label: "Ürün görünümü", image: "/images/products/Par38 Ayaklı Armatür/isiksiz.png" },
      { label: "Beyaz", image: "/images/products/Par38 Ayaklı Armatür/beyaz.png" },
      { label: "Gün Işığı", image: "/images/products/Par38 Ayaklı Armatür/gunisigi.png" },
      { label: "Kırmızı", image: "/images/products/Par38 Ayaklı Armatür/kirmizi.png" },
      { label: "Mavi", image: "/images/products/Par38 Ayaklı Armatür/mavi.png" },
      { label: "Macenta", image: "/images/products/Par38 Ayaklı Armatür/macenta.png" },
      { label: "RGB", image: "/images/products/Par38 Ayaklı Armatür/rgb.png" },
      { label: "Turkuaz", image: "/images/products/Par38 Ayaklı Armatür/turkuaz.png" },
      { label: "Yeşil", image: "/images/products/Par38 Ayaklı Armatür/yesil.png" },
      { label: "Amber", image: "/images/products/Par38 Ayaklı Armatür/amber.png" },
      { label: "Siyah - Ürün görünümü", image: "/images/products/Par38 Ayaklı Armatür/siyah/isiksiz.png" },
      { label: "Siyah - Beyaz", image: "/images/products/Par38 Ayaklı Armatür/siyah/beyaz.png" },
      { label: "Siyah - Gün Işığı", image: "/images/products/Par38 Ayaklı Armatür/siyah/gunisigi.png" },
      { label: "Siyah - Kırmızı", image: "/images/products/Par38 Ayaklı Armatür/siyah/kirmizi.png" },
      { label: "Siyah - Mavi", image: "/images/products/Par38 Ayaklı Armatür/siyah/mavi.png" },
      { label: "Siyah - Macenta", image: "/images/products/Par38 Ayaklı Armatür/siyah/macenta.png" },
      { label: "Siyah - RGB", image: "/images/products/Par38 Ayaklı Armatür/siyah/rgb.png" },
      { label: "Siyah - Turkuaz", image: "/images/products/Par38 Ayaklı Armatür/siyah/turkuaz.png" },
      { label: "Siyah - Yeşil", image: "/images/products/Par38 Ayaklı Armatür/siyah/yesil.png" },
      { label: "Siyah - Amber", image: "/images/products/Par38 Ayaklı Armatür/siyah/amber.png" },
    ],
    relatedSlugs: ["par38-yer-armaturu-paslanmaz", "par38-ankastre-armatur", "ayakli-mini-spot-armatur"],
    tags: ["par38", "ayaklı", "armatür", "siyah", "havuz aydınlatma"],
  },
  // Elektrik Panoları - https://www.batech.com.tr/urun-kategori/elektrik-panolari/
  { slug: "ekonomik-tip-elektrik-panolari", name: "Ekonomik Tip Elektrik Panoları", categorySlug: "elektrik-panolari", image: "/images/products/Elektrik Panoları/ekonomik_tip_elektrik_panolari.png", description: "Antibakteriyel, sızdırmaz, termoplastik ekonomik tip elektrik panosu.\n*kaçak akım, timer ve digital termostat harici olarak satılır lütfen belirtiniz.", tags: ["elektrik", "pano"] },
  { slug: "luks-tip-elektrik-panolari", name: "Lüks Tip Elektrik Panoları", categorySlug: "elektrik-panolari", image: "/images/products/Elektrik Panoları/luks_tip_elektrik_panolari.png", description: "Antibakteriyel yanmaz, polikarbon camlı kırılmaz, IP68 özellikli sızdırmaz lux tip elektrik panosu.\n*kaçak akım, timer ve digital termostat harici olarak satılır lütfen belirtiniz.", tags: ["elektrik", "pano"] },
  // Filtreler ve Ekipmanları - https://www.batech.com.tr/urun-kategori/filtreler-ve-ekipmanlari/
  { slug: "alti-yollu-vana", name: "Altı Yollu Vana", categorySlug: "filtreler-ve-ekipmanlari", image: "/images/products/Filtreler ve Ekipmanları/6yolluvana.png", description: "Çok yönlü ters yıkama vanaları +40 C° sıcaklığa kadar yüzme havuzları, doğal havuzlar, akvaryumlar ve su oyun havuzları için kullanılabilmektedir.\n\nÖzellikleri :\n* Lazer baskılı yönlendirme yazıları ile kolay kullanım\n* Optimum debi ve basınç kaybı ile gürültüsüz çalışma\n* Darbeye ve UV etkilerine karşı dayanıklı ABS malzeme\n* DIN 3320 ye göre basınç sızdırmazlık testi\n* Kış konumu", relatedSlugs: ["polyester-kum-filtreleri"], tags: ["vana", "filtre"] },
  { slug: "polyester-kum-filtreleri", name: "Polyester Kum Filtreleri", categorySlug: "filtreler-ve-ekipmanlari", image: "/images/products/Filtreler ve Ekipmanları/polyesterkumfiltreleri.png", description: "Polyester kum filtreleri, havuz filtre sistemleri.", relatedSlugs: ["alti-yollu-vana"], tags: ["filtre", "kum"] },
  // Havuz Kenar ve İç Ekipmanları - https://www.batech.com.tr/urun-kategori/havuz-kenar-ve-ic-ekipmanlari/
  { slug: "mosaic-model-havuz-kenar-izgarasi", name: "20 cm Mosaic Model Havuz Kenar Izgarası", categorySlug: "havuz-kenar-ve-ic-ekipmanlari", image: "/images/products/Havuz Kenar ve İç Ekipmanları/20 cm Mosaic Model Havuz Kenar Izgarası.png", description: "Taşma kanalı bulunan havuz kenarı oluk olan havuzlarda, havuz çevresinde taşan suyun toplanması amacıyla savak sistemleri bulunmaktadır. Mosaic ızgara, standart tip ızgaralara göre daha dayanıklı olduğundan daha sağlıklı ve uzun ömürlüdür. Ayrıca modern tasarımıyla, havuzunuza görsel olarak değer katma amacıyla üretilmiştir.", relatedSlugs: ["cift-gecme-izgara", "tek-gecme-izgara"], tags: ["ızgara", "havuz kenar"] },
  { slug: "45-kose-parcalari", name: "45° Köşe Parçaları", categorySlug: "havuz-kenar-ve-ic-ekipmanlari", image: "/images/products/Havuz Kenar ve İç Ekipmanları/45koseparca.png", description: "45° köşe parçaları, taşma kanalı olan havuzlarda savak sisteminin köşe birleşimlerinde kullanılan polypropilen mamul parçalardır; UV ışınlarına karşı korumalı olup 2,5 cm yükseklikte üretilir ve ızgara ile uyumlu montaj sağlar.", tags: ["köşe", "havuz kenar"] },
  { slug: "90-kose-parcalari", name: "90° Köşe Parçaları", categorySlug: "havuz-kenar-ve-ic-ekipmanlari", image: "/images/products/Havuz Kenar ve İç Ekipmanları/90koseparca.png", description: "90° köşe parçaları, taşma kanalı olan havuzlarda savak hattının dik köşe birleşimlerinde kullanılan polypropilen parçalardır; UV dayanımlı ve 2,5 cm yükseklikte olup ızgaralar ile birlikte kullanılarak havuz kenar düzenini tamamlar.", tags: ["köşe", "havuz kenar"] },
  { slug: "cift-gecme-izgara", name: "Çift Geçme Izgara", categorySlug: "havuz-kenar-ve-ic-ekipmanlari", image: "/images/products/Havuz Kenar ve İç Ekipmanları/ciftgecmeizgara.png", description: "Çift geçme ızgara, taşma kanalı bulunan havuzlarda taşan suyun toplanması için kullanılan polypropilen savak ızgarasıdır; UV ışınlarına karşı korumalı, 2,5 cm yükseklikte ve çift geçme tasarımı ile dayanıklı ve kolay montajlıdır.", relatedSlugs: ["tek-gecme-izgara", "mosaic-model-havuz-kenar-izgarasi"], tags: ["ızgara"] },
  { slug: "kare-dip-suzgec", name: "Kare Dip Süzgeç", categorySlug: "havuz-kenar-ve-ic-ekipmanlari", image: "/images/products/Havuz Kenar ve İç Ekipmanları/karedipsuzgec.png", description: "Kare dip süzgeç, havuz tabanındaki su giriş-çıkış noktalarında kullanılan ABS malzemeden üretilmiş 26,5 x 26,5 cm boyutunda bir dip ekipmanıdır; saç ve büyük partiküllerin filtreye girmesini engelleyerek havuz dolaşım sistemini korur.", tags: ["süzgeç", "dip"] },
  { slug: "muro-tip-havuz-merdiveni", name: "Muro Tip Havuz Merdiveni", categorySlug: "havuz-kenar-ve-ic-ekipmanlari", image: "/images/products/Havuz Kenar ve İç Ekipmanları/murotiphavuzmerdiveni.png", description: "Muro tip havuz merdiveni, AISI 304-316 paslanmaz çelikten üretilmiş; ankraj pabuçları ve aynaları ile komple sunulan, Ø 42,4 mm x 1,2 mm boru ölçülerinde modern tasarımlı bir havuz giriş-çıkış merdivenidir.", relatedSlugs: ["standart-tip-havuz-merdiveni"], tags: ["merdiven"] },
  { slug: "paslanmaz-havuz-su-perdesi", name: "Paslanmaz Havuz Su Perdesi (Kobra Şelale)", categorySlug: "havuz-kenar-ve-ic-ekipmanlari", image: "/images/products/Havuz Kenar ve İç Ekipmanları/paslanmazhavuzsuperdesi.png", description: "Paslanmaz havuz su perdesi (Kobra Şelale), Mini, Midi ve Maxi olmak üzere üç boyutta sunulan; AISI 304 kalite paslanmaz çelikten imal edilmiş, sabitleme plakası, contası, vidası ve somunları ile komple dekoratif su perdesi ve şelale efektli bir havuz kenar ekipmanıdır.", tags: ["su perdesi", "şelale"] },
  { slug: "standart-tip-havuz-merdiveni", name: "Standart Tip Havuz Merdiveni", categorySlug: "havuz-kenar-ve-ic-ekipmanlari", image: "/images/products/Havuz Kenar ve İç Ekipmanları/standarttiphavuzmerdiveni.png", description: "Standart tip havuz merdiveni, AISI 304-316 paslanmaz çelikten üretilmiş; ankraj pabuçları ve aynaları ile birlikte sunulan, Ø 42,4 mm x 1,2 mm ölçülerinde klasik ve dayanıklı bir havuz giriş-çıkış merdivenidir.", relatedSlugs: ["muro-tip-havuz-merdiveni"], tags: ["merdiven"] },
  { slug: "tabandan-besleme-nozulu", name: "Tabandan Besleme Nozulu (Debi Ayarlı)", categorySlug: "havuz-kenar-ve-ic-ekipmanlari", image: "/images/products/Havuz Kenar ve İç Ekipmanları/tabandanbeslemenozulu.png", description: "Tabandan besleme nozulu, yüzme havuzlarında filtrelenmiş suyu tabandan ve debi ayarlı biçimde veren 2″ bağlantılı yapıştırma tip nozuldur; düz inişli tasarımı ile suyun havuz tabanına yönlendirilmesini ve homojen dağılımını sağlar.", tags: ["nozul", "besleme"] },
  { slug: "tek-gecme-izgara", name: "Tek Geçme Izgara", categorySlug: "havuz-kenar-ve-ic-ekipmanlari", image: "/images/products/Havuz Kenar ve İç Ekipmanları/tekgecmeizgara.png", description: "Tek geçme ızgara, taşma kanalı olan havuzlarda savak hattında kullanılan polypropilen ızgaradır; UV korumalı, 2,5 cm yükseklikte ve tek geçme montajı ile pratik kullanım sunar.", relatedSlugs: ["cift-gecme-izgara", "mosaic-model-havuz-kenar-izgarasi"], tags: ["ızgara"] },
  { slug: "vakum-nozulu", name: "Vakum Nozulu", categorySlug: "havuz-kenar-ve-ic-ekipmanlari", image: "/images/products/Havuz Kenar ve İç Ekipmanları/vakumnozulu.jpg", description: "Vakum nozulu, havuz süpürgesi ile vakum hortumu arasında bağlantı noktası oluşturan; yüzme havuzlarında dip temizliği için kullanılan 2″ bağlantılı yapıştırma tip nozuldur ve manuel süpürme işleminin verimli yapılmasını sağlar.", tags: ["nozul", "vakum"] },
  { slug: "yandan-besleme-nozulu", name: "Yandan Besleme Nozulu", categorySlug: "havuz-kenar-ve-ic-ekipmanlari", image: "/images/products/Havuz Kenar ve İç Ekipmanları/yandanbeslemenozulu.png", description: "Yandan besleme nozulu, yüzme havuzlarında filtrelenmiş suyu havuz yan duvarından veren 2″ bağlantılı yapıştırma tip nozuldur; dolaşım ve su dağılımı için kullanılarak havuz suyu homojenliğine katkı sağlar.", tags: ["nozul", "besleme"] },
  { slug: "yuvarlak-dip-suzgec", name: "Yuvarlak Dip Süzgeç", categorySlug: "havuz-kenar-ve-ic-ekipmanlari", image: "/images/products/Havuz Kenar ve İç Ekipmanları/yavarlakdipsuzgec.png", description: "Yuvarlak dip süzgeç, havuz tabanındaki emiş noktalarında kullanılan ABS malzemeden üretilmiş 24 cm çapında yuvarlak formda bir dip süzgecidir; büyük partiküllerin sisteme girmesini engelleyerek filtre ve pompa koruması sağlar.", tags: ["süzgeç", "dip"] },
  // Havuz Temizlik Ekipmanları - https://www.batech.com.tr/urun-kategori/havuz-temizlik-ekipmanlari/
  { slug: "bspool-tuz-jeneratori", name: "BsPool Tuz Jeneratörü", categorySlug: "havuz-temizlik-ekipmanlari", image: "/images/products/Havuz Temizlik Ekipmanları/bspootuz-jenaratoru.png", description: "BsPool tuz klor jeneratörleri ekolojik havuz sistemidir.\n\nHavuz kimyasalları kullanımı ve işletme giderlerinde %90 gibi bir ekonomi sağlar.\n\nArtık havuzunuzda klor ve yosun önleyici kullanmanıza gerek yoktur. Kullanımı çok kolay tuzlu su havuz sistemidir.\n\nHavuzunuza sadece deniz suyunun 1/7'si kadar (insan gözünün hissedemeyeceği bir oranda) tuz ilave ediyoruz. Denizden su alınan yerlerde tatlı su ile karışım yapılabilir. (Eğer istenirse tam deniz suyu ile çalışabilir).\n\nArtık cihazımız tuzdan yerinde dezenfektan üreterek dışarıdan kimyasal uygulamasını sona erdirecektir.\n\nHavuz sirkülasyon pompasına bağlı olduğundan her daim üretim yaparak homojen bir dozajlama sağlayacaktır. Size havuzunuzun keyfi kalacaktır.", tags: ["tuz", "jeneratör"] },
  { slug: "duvar-fircasi", name: "Duvar Fırçası", categorySlug: "havuz-temizlik-ekipmanlari", image: "/images/products/Havuz Temizlik Ekipmanları/duvar-fircasi.png", description: "Duvar fırçası, havuz yüzeylerinin ve duvarlarının günlük temizliğinde kullanılan 45 cm genişliğinde pratik bir ekipmandır; tüm standart alüminyum saplara takılarak köşe ve düz yüzeylerde rahatça kullanılır ve havuz içi birikintilerin temizlenmesini kolaylaştırır.", tags: ["fırça", "temizlik"] },
  { slug: "eco-tip-derin-kepce", name: "Eco Tip Derin Kepçe", categorySlug: "havuz-temizlik-ekipmanlari", image: "/images/products/Havuz Temizlik Ekipmanları/eko-tip-derin-kepce.png", description: "Havuz içi ve yüzeyindeki yaprak, sap, çöp, böcek ve diğer büyük katı pisliklerin temizlenmesi amacıyla tasarlanmış plastik ve ekonomik bir havuz kepçesidir.", tags: ["kepçe", "temizlik"] },
  { slug: "havuz-supurgesi", name: "Havuz Süpürgesi", categorySlug: "havuz-temizlik-ekipmanlari", image: "/images/products/Havuz Temizlik Ekipmanları/havuz-supurgesi.png", description: "Havuz süpürgesi, havuz dibindeki tortu ve pislikleri vakum hortumu ile çekerek temizlemek için kullanılır; eloksallı alüminyum gövdesi ve kelebek vidalı sap bağlantısı sayesinde dayanıklı ve kullanımı kolaydır, 1½″ (35 cm) ve 2″ (40 cm) olmak üzere iki boyutta satışa sunulmaktadır.", tags: ["süpürge", "temizlik"] },
  { slug: "kose-fircasi", name: "Köşe Fırçası", categorySlug: "havuz-temizlik-ekipmanlari", image: "/images/products/Havuz Temizlik Ekipmanları/kose-firca.png", description: "Köşe fırçası, yüzme havuzunun köşe ve kenar bölgelerinin temizliğinde kullanılan plastik gövdeli bir havuz fırçasıdır; yumuşak plastik kılları sayesinde liner, cam mozaik ve fayans havuzlarda çizilme yapmadan güvenle kullanılır.", tags: ["fırça", "temizlik"] },
  { slug: "lux-derin-tip-kepce", name: "Lux Derin Tip Kepçe", categorySlug: "havuz-temizlik-ekipmanlari", image: "/images/products/Havuz Temizlik Ekipmanları/lux-derin-tip-kepce.png", description: "Lux derin tip kepçe, günlük bakım için bir seferde çok fazla havuz pisliğini toplayabilen mükemmel bir kepçedir. Sağlam plastik gövde ve gövde ile uyumlu renkte kimyasala dirençli hasırdan yapılmış ve büyük miktarda yaprakları ortadan kaldıran filesi ile havuz temizliğinizi en iyi şekilde yapmanızı sağlar. Lux derin tip kepçe, klipsli sap ağzı ile tüm standart teleskopik saplara uygundur. (Sap fiyata dahil değildir)", tags: ["kepçe", "temizlik"] },
  { slug: "robodeep-havuz-robotu", name: "robodeep Havuz Robotu", categorySlug: "havuz-temizlik-ekipmanlari", image: "/images/products/Havuz Temizlik Ekipmanları/robodep-havuz-robotu-1.png", description: "robodeep havuz robotu, havuz tabanı ve duvarlarını otomatik olarak tarayarak yaprak, kum, toz ve diğer pislikleri toplayan elektrikli bir temizlik cihazıdır; manuel süpürme ihtiyacını azaltır, zamandan tasarruf sağlar ve havuz bakımını kolaylaştırır.", tags: ["robot", "temizlik"] },
  { slug: "sivili-test-kiti", name: "Sıvılı Test Kiti", categorySlug: "havuz-temizlik-ekipmanlari", image: "/images/products/Havuz Temizlik Ekipmanları/sivili-test-kiti.png", description: "Sıvılı test kiti, havuz suyunuzdaki pH, serbest klor ve gerekiyorsa alkalinite gibi kimyasal değerleri hızlı ve ekonomik şekilde ölçmenizi sağlar; düzenli kullanım ile su kalitesini takip ederek havuzunuzun sağlıklı ve berrak kalmasına yardımcı olur.", tags: ["test", "kimya"] },
  { slug: "supurge-hortum-adaptoru", name: "Süpürge Hortum Adaptörü", categorySlug: "havuz-temizlik-ekipmanlari", image: "/images/products/Havuz Temizlik Ekipmanları/supurge-hortum-adaptoru.png", description: "Süpürge hortum adaptörü, havuz süpürgesi ile vakum hortumu arasında sızdırmaz ve güvenli bağlantı sağlayan parçadır; farklı çap ve markalardaki süpürge-hortum kombinasyonlarında kullanılarak vakumlu temizliğin sorunsuz yapılmasına olanak tanır.", tags: ["hortum", "adaptör"] },
  { slug: "supurge-hortumu", name: "Süpürge Hortumu", categorySlug: "havuz-temizlik-ekipmanlari", image: "/images/products/Havuz Temizlik Ekipmanları/supurge-hortumu.png", description: "Havuz hortumu 1½″ ve 2″ farklı çap ve farklı (15 m – 30 m) uzunlukları ile satışa sunulmaktadır.", tags: ["hortum", "süpürge"] },
  { slug: "teleskopik-saplar", name: "Teleskopik Saplar", categorySlug: "havuz-temizlik-ekipmanlari", image: "/images/products/Havuz Temizlik Ekipmanları/teleskopik-saplar.png", description: "Teleskopik saplar, uzunlukları ayarlanabilir; hafif, bükülmez ve oksitlenmeye dayanıklı alüminyum malzemeden yapılmıştır.", tags: ["sap", "temizlik"] },
  { slug: "yosun-fircasi", name: "Yosun Fırçası", categorySlug: "havuz-temizlik-ekipmanlari", image: "/images/products/Havuz Temizlik Ekipmanları/yosun-fircasi.png", description: "Paslanmaz çelik kıllardan üretilmiş havuz yosun fırçası, 25 cm genişliğinde plastik gövde desteği ve sap bağlantısı ile betonarme havuzlarda seramik ya da mozaik yüzeylerin ve derz aralıklarının yosundan temizlenmesi amacıyla kullanılır. Sert yapısı nedeniyle liner havuzlar için uygun değildir.", tags: ["fırça", "yosun"] },
  // Süs Havuzu Ekipmanları - https://www.batech.com.tr/urun-kategori/sus-havuzu-ekipmanlari/
  { slug: "caglayan-fiskiye", name: "Çağlayan Fıskıye", categorySlug: "sus-havuzu-ekipmanlari", image: "/images/products/Süs Havuzu Ekipmanları/caglayanfiskiye.jpeg", description: "Çağlayan fıskıye, süs havuzlarında kademeli su akışı ile şelale etkisi yaratan dekoratif bir fıskiyedir; suyu yumuşak katmanlar halinde dökerek hem görsel hem işitsel bir ferahlık sağlar ve bahçe ile plaza süs havuzlarında sıkça tercih edilir.", relatedSlugs: ["volkan-fiskiye", "parmak-fiskiye"], tags: ["fıskiye", "süs havuzu"] },
  { slug: "kopuk-fiskiye", name: "Köpük Fıskıye", categorySlug: "sus-havuzu-ekipmanlari", image: "/images/products/Süs Havuzu Ekipmanları/kopukfiskiye.jpeg", description: "Köpük fıskıye, süs havuzlarında suyu köpük formunda püskürterek yumuşak ve hacimli bir görüntü oluşturan dekoratif fıskiyedir; özellikle gece aydınlatması ile birlikte kullanıldığında etkileyici bir su efekti sunar.", tags: ["fıskiye", "süs havuzu"] },
  { slug: "parmak-fiskiye", name: "Parmak Fıskıye", categorySlug: "sus-havuzu-ekipmanlari", image: "/images/products/Süs Havuzu Ekipmanları/parmakfiskiye.jpeg", description: "Parmak fıskıye, birden fazla ince su jeti ile parmak benzeri formda su çizgileri oluşturan süs havuzu fıskiyesidir; kompakt veya geniş havuzlarda kullanılabilir ve diğer fıskıye modelleri ile birlikte farklı su kompozisyonları oluşturmaya uygundur.", relatedSlugs: ["caglayan-fiskiye", "volkan-fiskiye"], tags: ["fıskiye", "süs havuzu"] },
  { slug: "su-cani-fiskiye", name: "Su Çanı Fıskıye", categorySlug: "sus-havuzu-ekipmanlari", image: "/images/products/Süs Havuzu Ekipmanları/su_cani_fiskiye.png", description: "Su çanı fıskıye, suyu kubbe veya çan formunda yayarak havuz üzerinde şeffaf bir su kubbesi oluşturan dekoratif fıskiyedir; klasik ve zarif bir görünüm sunar, süs havuzu ve meydan çeşmelerinde tercih edilir.", tags: ["fıskiye", "süs havuzu"] },
  { slug: "volkan-fiskiye", name: "Volkan Fıskıye", categorySlug: "sus-havuzu-ekipmanlari", image: "/images/products/Süs Havuzu Ekipmanları/volkan_fiskiye.png", description: "Volkan fıskıye, suyu merkezden yukarı doğru püskürterek volkan benzeri bir su sütunu oluşturan süs havuzu fıskiyesidir; güçlü ve dikkat çekici bir su efekti sunar, plaza ve bahçe süs havuzlarında sıkça kullanılır.", relatedSlugs: ["caglayan-fiskiye", "yelpaze-film-fiskiye"], tags: ["fıskiye", "süs havuzu"] },
  { slug: "yelpaze-film-fiskiye", name: "Yelpaze Film Fıskıye", categorySlug: "sus-havuzu-ekipmanlari", image: "/images/products/Süs Havuzu Ekipmanları/yelpaze_fiskiye.png", description: "Yelpaze film fıskıye, suyu ince bir film veya perde halinde yelpaze formunda yayarak şeffaf ve geniş bir su yüzeyi oluşturan dekoratif fıskiyedir; ışıkla bir arada kullanıldığında renkli ve etkileyici görüntüler sunar.", relatedSlugs: ["volkan-fiskiye"], tags: ["fıskiye", "süs havuzu"] },
  {
    slug: "fiskiye-armaturu",
    name: "Fıskiye Armatürü",
    categorySlug: "havuz-aydinlatma-ekipmanlari",
    image: "/images/products/Fıskiye Armatürü/isiksiz.png",
    description: "Fıskiye armatürü, süs havuzu için LED'li dekoratif fıskiye aydınlatması.",
    colorOptions: [
      { label: "Ürün görünümü", image: "/images/products/Fıskiye Armatürü/isiksiz.png" },
      { label: "Beyaz", image: "/images/products/Fıskiye Armatürü/beyaz.png" },
      { label: "Gün Işığı", image: "/images/products/Fıskiye Armatürü/gunisigi.png" },
      { label: "Kırmızı", image: "/images/products/Fıskiye Armatürü/kirmizi.png" },
      { label: "Mavi", image: "/images/products/Fıskiye Armatürü/mavi.png" },
      { label: "Macenta", image: "/images/products/Fıskiye Armatürü/macenta.png" },
      { label: "RGB", image: "/images/products/Fıskiye Armatürü/rgb.png" },
      { label: "Turkuaz", image: "/images/products/Fıskiye Armatürü/turkuaz.png" },
      { label: "Yeşil", image: "/images/products/Fıskiye Armatürü/yesil.png" },
      { label: "Amber", image: "/images/products/Fıskiye Armatürü/amber.png" },
    ],
    relatedSlugs: ["volkan-fiskiye", "caglayan-fiskiye", "parmak-fiskiye"],
    tags: ["fıskiye", "armatür", "LED", "süs havuzu"],
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

const RELATED_PRODUCTS_MAX = 6;

export function getRelatedProducts(product: Product): Product[] {
  if (product.relatedSlugs?.length) {
    const bySlug = product.relatedSlugs
      .map((s) => getProductBySlug(s))
      .filter((p): p is Product => p != null);
    if (bySlug.length) return bySlug;
  }
  const sameCategory = getProductsByCategory(product.categorySlug).filter(
    (p) => p.slug !== product.slug
  );
  return sameCategory.slice(0, RELATED_PRODUCTS_MAX);
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
  if (category.image && category.image !== CATEGORY_PLACEHOLDER) return category.image;
  const prods = getProductsByCategory(category.slug);
  const first = prods[0];
  if (first) {
    const img = getProductImage(first);
    if (img && img !== PRODUCT_PLACEHOLDER) return img;
  }
  return category.image || CATEGORY_PLACEHOLDER;
}

export function getProductImage(product: Product): string {
  return product.image || PRODUCT_PLACEHOLDER;
}

/** Arama: ürün ve kategori listesinde slug, name, description içinde query geçenleri döner */
export function searchProductsAndCategories(query: string): {
  products: Product[];
  categories: Category[];
} {
  const q = query.trim().toLowerCase();
  if (!q) return { products: [], categories: [] };
  const filteredProducts = products.filter(
    (p) =>
      p.slug.toLowerCase().includes(q) ||
      p.name.toLowerCase().includes(q) ||
      (p.description && p.description.toLowerCase().includes(q))
  );
  const filteredCategories = categories.filter(
    (c) =>
      c.slug.toLowerCase().includes(q) ||
      c.name.toLowerCase().includes(q) ||
      (c.description && c.description.toLowerCase().includes(q))
  );
  return { products: filteredProducts, categories: filteredCategories };
}
