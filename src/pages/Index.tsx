
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Vendors } from "@/components/Vendors";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Hero />
      <Features />
      <Vendors />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
