import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import AboutSection from "@/components/about-section";
import TestimonialSection from "@/components/testimonial-section";
import ContactSection from "@/components/contact-section";
import FloatingCTA from "@/components/floating-cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialSection />
      <ContactSection />
      <FloatingCTA />
      <Footer />
    </div>
  );
}
