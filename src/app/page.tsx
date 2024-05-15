import ContactPage from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Culture from "@/components/Culture";
import Testimonials from "@/components/Testimonial";

export default function Home() {
  return (
    <div className="background-design">
      <Navbar />
      <Hero />
      <WhyUs />
      <Services />
      <Projects />
      <Testimonials />
      <Culture />
      <ContactPage />
      <Footer />
    </div>
  );
}
