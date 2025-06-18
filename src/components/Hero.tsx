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
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
            Instrumentation <span className="text-blue-400">Score</span>
          </h1>

          {/* Subheading */}
          <div className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
            <p>A standardized, vendor-neutral metric for assessing <br/>OpenTelemetry instrumentation quality.</p>
            <p className="mt-4"><span className="text-blue-400 font-semibold">From 0 to 100.</span> Objective. Actionable. Community-driven.</p>
          </div>

          {/* Additional description */}
          <div className="text-lg text-slate-400 mb-10 max-w-3xl mx-auto">
            <p>Calculated using weighted scoring based on rule criticality against OpenTelemetry semantic conventions and community best practices.</p>
          </div>

          {/* Score visualization */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg px-4 py-2">
              <BarChart3 className="w-5 h-5 text-red-400" />
              <span className="text-red-400 font-mono font-bold">0</span>
              <span className="text-slate-400">Poor</span>
            </div>
            <div className="h-px bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 w-16"></div>
            <div className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg px-4 py-2">
              <BarChart3 className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-mono font-bold">100</span>
              <span className="text-slate-400">Excellent</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
