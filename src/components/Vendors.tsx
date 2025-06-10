import { Badge } from "@/components/ui/badge";

export const Vendors = () => {
  const vendors = [
    "OllyGarden",
    "Dash0", 
    "Datadog",
    "New Relic",
    "Splunk",
    "Grafana Labs"
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Supported by Leading Vendors
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            The Instrumentation Score specification is backed by major observability and monitoring vendors, 
            ensuring industry-wide adoption and standardization of OpenTelemetry instrumentation quality assessment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {vendors.map((vendor, index) => (
            <div 
              key={index} 
              className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:bg-slate-800 transition-all duration-300 hover:border-blue-500/50"
            >
              <h3 className="text-xl font-bold text-white mb-2">{vendor}</h3>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700 rounded-lg px-6 py-3">
            <span className="text-slate-300">And many more joining the initiative</span>
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
