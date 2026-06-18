import Hero from "@/src/components/Landing_page/Hero";
import AboutSection from "../components/Landing_page/about_us";
import ServicesSection from "@/src/components/Landing_page/sercives";
// import GallerySection from "../components/Landing_page/gallery";
// import TestimonialsSection from "../components/Landing_page/testimonials";
export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
       <ServicesSection />
      {/*<GallerySection />
      <TestimonialsSection /> */}
    </>
  );
}