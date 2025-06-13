import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, ChevronLeft, ChevronRight, Play, Pause, Telescope, Compass, Lightbulb, Sparkles, Shield, TrendingUp, Target } from "lucide-react";

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const testimonials = [
    {
      quote: "Instrumentation Score is a much-needed innovation that fills a critical gap in the observability ecosystem. It's the kind of idea that made me think, 'We should have done this ages ago.' At Atlassian, our observability team is constantly tackling telemetry quality issues across the company's many services. With so many services, it can sometimes feel like we are trying to boil the ocean. Having a standardised \"instrumentation score\" would certainly help us identify and report to teams where issues are.",
      author: "James Moessis",
      role: "Senior Software Engineer - Observability team",
      company: "Atlassian",
      icon: Telescope,
      color: "text-blue-400"
    },
    {
      quote: "If you cannot measure something, you cannot improve it. Without a standard set of measurable best practices, engineers are left wondering what \"good\" telemetry looks like. We need a North Star for high-quality instrumentation, and a way to measure progress towards it across services, regardless of the observability backend where data is ultimately stored.",
      author: "Dan Gomez Blanco",
      role: "Principal Observability Architect",
      company: "New Relic",
      icon: Compass,
      color: "text-green-400"
    },
    {
      quote: "Observability is about embracing the unknown unknowns. Or at least that's what the sticker on my water bottle says. With this deep hunger for measurements and adventure, we want to present to developers an adoption curve to help advertise the observability vision, reap more benefits from their efforts, and quickly evolve their best practices. Instrumentation Score is the next logical step of the OpenTelemetry project towards this common goal.",
      author: "Antoine Toulme",
      role: "Principal Product Manager",
      company: "Splunk",
      icon: Lightbulb,
      color: "text-purple-400"
    },
    {
      quote: "As an OpenTelemetry contributor and enthusiast, I've seen firsthand the project's power to democratize instrumentation. Yet, a persistent question has always been: 'Are we generating good telemetry?' Too often, the answer is unclear, leading to missed insights or wasted resources. The Instrumentation Score, an initiative we're excited to launch from OllyGarden, aims to provide that clarity. It's about establishing a common, actionable language for telemetry quality, built on OpenTelemetry principles, to empower every engineer and organization to confidently improve their observability practices and truly harness the value of their data.",
      author: "Juraci Paixão Kröhling",
      role: "Co-founder",
      company: "OllyGarden",
      icon: Sparkles,
      color: "text-orange-400"
    },
    {
      quote: "Telemetry is that more useful, the more consistent and easy it is to query. Even in a world with the OpenTelemetry semantic conventions, it is common to see implementation oversights and inconsistencies across automatic and manual instrumentations. When the idea of Instrumentation Score came up, I got into almost a drafting frenzy for new rules, delighted to have a way to detect those nasty problems that took too long to troubleshoot and root out.",
      author: "Michele Mancioppi",
      role: "Head of Product",
      company: "Dash0",
      icon: Shield,
      color: "text-red-400"
    },
    {
      quote: "With the Instrumentation Score initiative it will be possible to objectively and automatically assess the quality of the telemetry coming out of your applications. This is a big step forward towards standardizing the instrumentation space, helping practitioners to express the Return On Investment for observability. I applaud the effort and hope to see widespread adoption of it in the context of OpenTelemetry and beyond.",
      author: "Michael Hausenblas",
      role: "Product Manager",
      company: "AWS",
      icon: TrendingUp,
      color: "text-yellow-400"
    },
    {
      quote: "Great observability starts with great instrumentation—but how do we know when we've gotten it right? The Instrumentation Score introduces a much-needed feedback loop, turning best practices into something concrete and actionable. With clear scores and rule severities, we finally know what to prioritize and why. It's like giving a compass for navigating the telemetry landscape.",
      author: "Marylia Gutierrez",
      role: "Staff Software Engineer",
      company: "Grafana Labs",
      icon: Compass,
      color: "text-teal-400"
    },
    {
      quote: "The #O11y Instrumentation Score is a great way to understand the quality of #OpenTelemetry instrumentation. It offers a way to grok completeness and maturity of #OTel observability instrumentation following semantic conventions and best practices.",
      author: "Alolita Sharma",
      role: "Engineering Leader",
      company: "Apple",
      icon: Target,
      color: "text-pink-400"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  // Auto-advance carousel every 8 seconds, but pause when manually paused or hovered
  useEffect(() => {
    if (isPaused || isHovered) return;

    const interval = setInterval(nextTestimonial, 8000);
    return () => clearInterval(interval);
  }, [isPaused, isHovered]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What People Are Saying
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Real feedback from teams and organizations using the Instrumentation Score to improve their observability
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card
            className="bg-slate-800/80 border-slate-700 relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <CardContent className="p-8 md:p-12">
              {/* Quote Icon */}
              <div className="flex justify-center mb-6">
                <Quote className="w-8 h-8 text-slate-500" />
              </div>

              {/* Quote Text */}
              <blockquote className="text-lg md:text-xl text-slate-200 text-center leading-relaxed mb-8">
                "{currentTestimonial.quote}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center justify-center gap-4">
                <div className={`w-12 h-12 rounded-full bg-slate-700 border border-slate-600 flex items-center justify-center`}>
                  <currentTestimonial.icon className={`w-6 h-6 ${currentTestimonial.color}`} />
                </div>
                <div className="text-center">
                  <div className="text-white font-semibold">{currentTestimonial.author}</div>
                  <div className="text-slate-400">{currentTestimonial.role}</div>
                  <div className="text-slate-500 text-sm">{currentTestimonial.company}</div>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex justify-center items-center gap-4 mt-8">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevTestimonial}
                  className="bg-slate-700 border-slate-600 hover:bg-slate-600 text-white"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={togglePause}
                  className={`bg-slate-700 border-slate-600 hover:bg-slate-600 text-white ${isPaused ? 'bg-slate-600' : ''
                    }`}
                  title={isPaused ? 'Resume slideshow' : 'Pause slideshow'}
                >
                  {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextTestimonial}
                  className="bg-slate-700 border-slate-600 hover:bg-slate-600 text-white"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                  ? 'bg-blue-400 w-8'
                  : 'bg-slate-600 hover:bg-slate-500'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}; 
