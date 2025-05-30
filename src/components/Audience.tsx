
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, Target, MessageSquare, Lightbulb, Users2 } from "lucide-react";

export const Audience = () => {
  const audiences = [
    {
      icon: Building2,
      title: "Observability Platform Vendors",
      description: "Vendors may adopt the Instrumentation Score as a standard metric in their platforms.",
      benefits: [
        { icon: Target, text: "Consistent Quality Assessment: Standardized scoring across different tools and platforms" },
        { icon: Users, text: "Customer Value: Clear instrumentation quality insights for users" },
        { icon: MessageSquare, text: "Customer Advisory: Use the spec as a framework when advising customers on instrumentation best practices" }
      ],
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20"
    },
    {
      icon: Users2,
      title: "Observability & Engineering Teams",
      description: "Observability engineers and engineering teams are the primary users who will interpret and act on Instrumentation Scores.",
      benefits: [
        { icon: Target, text: "Quality Assessment: Understand instrumentation health at a glance" },
        { icon: Lightbulb, text: "Improvement Guidance: Get actionable insights for better instrumentation" },
        { icon: Building2, text: "Vendor Independence: Carry knowledge between different observability platforms" },
        { icon: MessageSquare, text: "Team Communication: Use common vocabulary when discussing instrumentation quality" }
      ],
      color: "text-green-400",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20"
    }
  ];

  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Who Benefits from Instrumentation Score?
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {audiences.map((audience, index) => (
            <Card key={index} className={`bg-slate-800/80 border-slate-700 hover:bg-slate-800 transition-all duration-300`}>
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-lg ${audience.bgColor} border ${audience.borderColor} flex items-center justify-center`}>
                    <audience.icon className={`w-6 h-6 ${audience.color}`} />
                  </div>
                  <div>
                    <CardTitle className="text-white text-xl">{audience.title}</CardTitle>
                  </div>
                </div>
                <CardDescription className="text-slate-400 text-base">
                  {audience.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {audience.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-start gap-3">
                      <benefit.icon className={`w-4 h-4 ${audience.color} mt-1 flex-shrink-0`} />
                      <span className="text-slate-300 text-sm">{benefit.text}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-4">Join the Community</h3>
            <p className="text-slate-300 max-w-2xl mx-auto">
              We encourage engineering teams to join the project and contribute their expertise to make 
              Instrumentation Score even better for everyone.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Users, text: "Real-world Experience: Share insights about what constitutes good vs. bad instrumentation" },
              { icon: Target, text: "Rule Development: Help define and refine scoring criteria" },
              { icon: Lightbulb, text: "Use Case Validation: Ensure rules reflect practical observability needs" },
              { icon: Users2, text: "Community Growth: Expand the collective knowledge base" }
            ].map((item, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4">
                <item.icon className="w-5 h-5 text-purple-400 mb-2" />
                <p className="text-slate-300 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
