import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Values from "@/components/Values";
import FeaturedProducts from "@/components/FeaturedProducts";
import Products from "@/components/Products";
import Process from "@/components/Process";
import Certificates from "@/components/Certificates";
import Testimonials from "@/components/Testimonials";
import CtaStrip from "@/components/CtaStrip";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Values />
      <FeaturedProducts />
      <Products />
      <Process />
      <Certificates />
      <Testimonials />
      <CtaStrip />
      <Contact />
    </>
  );
}
