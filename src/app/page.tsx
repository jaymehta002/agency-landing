import ContactPage from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <div className="background-design">
      <Navbar />
      <Hero />
      <WhyUs />
      <Services />
      <Projects />
      <ContactPage />
      <Footer />
    </div>
  );
}
