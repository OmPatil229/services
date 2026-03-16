import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Automation from "@/components/Automation";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Automation />
      <Portfolio />
      <Process />
      <About />
      <Testimonials />
      <CTASection />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
