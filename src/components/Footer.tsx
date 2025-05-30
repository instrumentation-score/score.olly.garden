import { Activity } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Activity className="w-6 h-6 text-blue-400" />
            <span className="text-xl font-bold text-white">Instrumentation Score</span>
          </div>
          
          <div className="flex items-center gap-6 text-slate-400">
            <span>© 2025 OllyGarden, Inc</span>
            <span>•</span>
            <span>Open Source</span>
            <span>•</span>
            <span>Community Driven</span>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-500">
          <p>Built with ❤️ by the OpenTelemetry community for better instrumentation quality assessment.</p>
        </div>
      </div>
    </footer>
  );
};
