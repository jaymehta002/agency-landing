import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="background-design">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
    </div>
  );
}
