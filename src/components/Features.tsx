import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, TrendingUp, CheckCircle, Users, Zap, Shield } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Target,
      title: "Objective Assessment",
      description: "Standardized scoring from 10-100 based on OpenTelemetry semantic conventions and community best practices, with transparent calculation methodology.",
      color: "text-blue-400"
    },
    {
      icon: TrendingUp,
      title: "Benchmarking & Trends",
      description: "Enable meaningful comparisons of instrumentation quality across services within your organization and track improvements over time.",
      color: "text-green-400"
    },
    {
      icon: CheckCircle,
      title: "Actionable Insights", 
      description: "Structured rules with clear rationale provide specific, actionable feedback to help teams identify and close instrumentation gaps.",
      color: "text-purple-400"
    },
    {
      icon: Users,
      title: "Common Vocabulary",
      description: "Establish a shared language for discussing instrumentation quality among developers, SREs, platform teams, and vendors.",
      color: "text-orange-400"
    },
    {
      icon: Zap,
      title: "OTLP Data Analysis",
      description: "Real-time analysis of OpenTelemetry Protocol data streams against predefined quality rules focusing on traces and resource attributes.",
      color: "text-yellow-400"
    },
    {
      icon: Shield,
      title: "Industry Standards",
      description: "Built on established OpenTelemetry conventions with qualitative categories: Excellent (90-100), Good (75-89), Needs Improvement (50-74), Poor (10-49).",
      color: "text-red-400"
    }
  ];

  return (
    <section className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Instrumentation Score?
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Transform how your team approaches observability with a standardized metric that drives consistent, 
            effective OpenTelemetry instrumentation across your entire stack.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-slate-800/80 border-slate-700 hover:bg-slate-800 transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-slate-700 flex items-center justify-center mb-4`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-white">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-400 text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
