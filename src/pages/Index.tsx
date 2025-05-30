import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Audience } from "@/components/Audience";
import { Testimonials } from "@/components/Testimonials";
import { Vendors } from "@/components/Vendors";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Hero />
      <Features />
      <Audience />
      <Testimonials />
      <Vendors />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
