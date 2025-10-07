import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Gallery from "@/components/Gallery";
import Dashboard from "@/components/Dashboard";
import Roadmap from "@/components/Roadmap";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Platform = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Gallery />
        <Dashboard />
        <Roadmap />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Platform;