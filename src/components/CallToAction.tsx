
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Github, BookOpen, MessageCircle } from "lucide-react";

export const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900/20 via-slate-800 to-purple-900/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Improve Your 
            <span className="text-blue-400"> Observability?</span>
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Join the growing community of engineering teams using Instrumentation Score 
            to standardize and improve their OpenTelemetry implementations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-slate-800/80 border-slate-700 hover:bg-slate-800 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Github className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Explore the Code</h3>
              <p className="text-slate-400 mb-4">Check out our open-source implementation and contribute to the project.</p>
              <Button variant="outline" className="border-slate-400 text-slate-100 hover:bg-slate-700 hover:text-white">
                View on GitHub
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/80 border-slate-700 hover:bg-slate-800 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <BookOpen className="w-8 h-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Read the Docs</h3>
              <p className="text-slate-400 mb-4">Learn how to implement and use Instrumentation Score in your environment.</p>
              <Button variant="outline" className="border-slate-400 text-slate-100 hover:bg-slate-700 hover:text-white">
                Documentation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/80 border-slate-700 hover:bg-slate-800 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <MessageCircle className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Join the Community</h3>
              <p className="text-slate-400 mb-4">Connect with other observability engineers and share your experiences.</p>
              <Button variant="outline" className="border-slate-400 text-slate-100 hover:bg-slate-700 hover:text-white">
                Join Discord
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 text-lg">
            Get Started Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <p className="text-slate-400 mt-4">Free and open source • No vendor lock-in</p>
        </div>
      </div>
    </section>
  );
};
