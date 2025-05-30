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
              <h3 className="text-lg font-semibold text-white mb-2">Explore the Specification</h3>
              <p className="text-slate-400 mb-4">Review the open-source specification and contribute to the community-driven project.</p>
              <Button 
                variant="outline" 
                className="w-full bg-blue-600 border-blue-600 text-white hover:bg-blue-700 hover:border-blue-700 hover:shadow-lg transition-all duration-300 font-semibold py-6 text-base"
                onClick={() => window.open('https://github.com/instrumentation-score/spec', '_blank')}
              >
                View on GitHub
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/80 border-slate-700 hover:bg-slate-800 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <BookOpen className="w-8 h-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Read the Specification</h3>
              <p className="text-slate-400 mb-4">Learn about the scoring methodology, rules, and implementation guidelines.</p>
              <Button 
                variant="outline" 
                className="w-full bg-green-600 border-green-600 text-white hover:bg-green-700 hover:border-green-700 hover:shadow-lg transition-all duration-300 font-semibold py-6 text-base"
                onClick={() => window.open('https://github.com/instrumentation-score/spec/blob/main/specification.md', '_blank')}
              >
                Read Specification
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/80 border-slate-700 hover:bg-slate-800 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <MessageCircle className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Join the Community</h3>
              <p className="text-slate-400 mb-4">Connect with other observability engineers in the CNCF Slack workspace.</p>
              <Button 
                variant="outline" 
                className="w-full bg-purple-600 border-purple-600 text-white hover:bg-purple-700 hover:border-purple-700 hover:shadow-lg transition-all duration-300 font-semibold py-6 text-base"
                onClick={() => window.open('https://cloud-native.slack.com/archives/C08U9NN1XBR', '_blank')}
              >
                Join CNCF Slack
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 text-lg"
            onClick={() => window.open('https://github.com/instrumentation-score/spec', '_blank')}
          >
            Get Started Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <p className="text-slate-400 mt-4">Free and open source • No vendor lock-in</p>
        </div>
      </div>
    </section>
  );
};
