import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="background-design">
      <Navbar />
      <Hero />
      <Services />
    </div>
  );
}
