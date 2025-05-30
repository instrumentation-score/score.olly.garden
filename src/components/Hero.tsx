
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Activity, BarChart3 } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="relative container mx-auto px-6 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <Badge variant="secondary" className="mb-6 bg-blue-500/10 text-blue-400 border-blue-500/20 hover:bg-blue-500/20">
            <Activity className="w-4 h-4 mr-2" />
            OpenTelemetry Excellence Initiative
          </Badge>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
            Instrumentation
            <br />
            <span className="text-blue-400">Score</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
            A standardized, numerical assessment for OpenTelemetry instrumentation effectiveness.
            <br className="hidden md:block" />
            <span className="text-blue-400 font-semibold">From 10 to 100.</span> Objective. Actionable. Industry-backed.
          </p>

          {/* Score visualization */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg px-4 py-2">
              <BarChart3 className="w-5 h-5 text-red-400" />
              <span className="text-red-400 font-mono font-bold">10</span>
              <span className="text-slate-400">Poor</span>
            </div>
            <div className="h-px bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 w-16"></div>
            <div className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg px-4 py-2">
              <BarChart3 className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-mono font-bold">100</span>
              <span className="text-slate-400">Excellent</span>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-slate-400 text-slate-100 hover:bg-slate-700 hover:text-white px-8">
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-400">5+</div>
              <div className="text-slate-400">Industry Vendors</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400">10-100</div>
              <div className="text-slate-400">Score Range</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400">OTLP</div>
              <div className="text-slate-400">Protocol Based</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400">Open</div>
              <div className="text-slate-400">Source Initiative</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
