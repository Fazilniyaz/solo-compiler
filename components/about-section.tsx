"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Clock, Award, Zap } from "lucide-react"
import { useEffect, useState, useRef } from "react"

const features = [
  {
    name: "On-Time Delivery",
    experience: "Never miss a deadline",
    specialty: "Precision in project timelines",
    description:
      "We understand the importance of time in business. Our streamlined processes and agile methodology ensure your projects are delivered exactly when promised, every time.",
    icon: Clock,
  },
  {
    name: "Quality Matters",
    experience: "Excellence in every pixel",
    specialty: "Uncompromising quality standards",
    description:
      "From code architecture to user experience, we maintain the highest quality standards. Every line of code and design element is crafted with precision and attention to detail.",
    icon: Award,
  },
  {
    name: "Cutting-Edge Solutions",
    experience: "Future-proof technology",
    specialty: "AI-powered modern development",
    description:
      "We leverage the latest technologies including AI integration, modern frameworks, and best practices to build scalable, maintainable, and innovative solutions.",
    icon: Zap,
  },
]

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-32 relative overflow-hidden bg-background"
      aria-labelledby="about-heading"
    >
      {/* Animated diagonal stripes background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_25%,rgba(0,0,0,0.02)_25%,rgba(0,0,0,0.02)_50%,transparent_50%,transparent_75%,rgba(0,0,0,0.02)_75%,rgba(0,0,0,0.02))] bg-[length:60px_60px]"></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-1/4 w-72 h-72 bg-foreground/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-foreground/5 rounded-full blur-3xl animate-float-delayed"></div>
        
        {/* Rotating squares */}
        <div className="absolute top-1/4 left-10 w-20 h-20 border-2 border-foreground/10 transform rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-1/3 right-10 w-16 h-16 border-2 border-foreground/10 transform rotate-45 animate-spin-slower"></div>
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,0,0,0.05),transparent)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* Section Header */}
          <div className={`text-center space-y-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-foreground/20 bg-background/80 backdrop-blur-sm shadow-lg mb-4">
              <div className="w-2 h-2 bg-foreground rounded-full animate-pulse"></div>
              <span className="text-sm font-bold tracking-wide uppercase">Our Advantages</span>
            </div>
            
            <h2 id="about-heading" className="text-6xl md:text-7xl font-black tracking-tighter leading-none">
              <span className="bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                Why Choose Us
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
              We deliver <span className="text-foreground font-bold">exceptional value</span> through reliable timelines, 
              uncompromising quality, and <span className="text-foreground font-bold">innovative technology</span> solutions.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card
                  key={feature.name}
                  className={`bg-background/80 backdrop-blur-sm border-2 border-foreground/10 hover:border-foreground/30 transition-all duration-700 group relative overflow-hidden hover:shadow-2xl hover:-translate-y-3 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ 
                    transitionDelay: `${index * 150 + 200}ms`,
                  }}
                >
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-foreground/10 to-transparent"></div>

                  {/* Corner decoration */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-foreground/5 rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <CardContent className="p-8 space-y-6 relative z-10">
                    {/* Icon */}
                    <div className="relative">
                      <div className="w-20 h-20 rounded-2xl bg-foreground text-background flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                        <Icon className="w-10 h-10" />
                      </div>
                      {/* Icon shadow effect */}
                      <div className="absolute inset-0 w-20 h-20 rounded-2xl bg-foreground/20 blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    </div>

                    {/* Content */}
                    <div className="space-y-2">
                      <h3 className="text-2xl font-black tracking-tight group-hover:text-foreground transition-colors">
                        {feature.name}
                      </h3>
                      <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                        {feature.experience}
                      </p>
                    </div>

                    <div className="space-y-3 pt-2">
                      <div className="h-1 w-12 bg-foreground rounded-full"></div>
                      <p className="font-bold text-sm text-foreground">{feature.specialty}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </CardContent>

                  {/* Animated border glow */}
                  <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 rounded-lg border-2 border-foreground/30"></div>
                  </div>
                </Card>
              )
            })}
          </div>

          {/* Stats Bar */}
          <div className={`relative transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-foreground text-background rounded-2xl p-8 shadow-2xl relative overflow-hidden">
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.3)_25%,rgba(255,255,255,0.3)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.3)_75%,rgba(255,255,255,0.3))] bg-[length:60px_60px] animate-slide"></div>
              </div>
              
              <div className="relative z-10 text-center">
                <p className="text-2xl md:text-3xl font-black tracking-tight">
                  Trusted by businesses worldwide to deliver solutions that <span className="underline decoration-4 underline-offset-4">make an impact</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(0, -20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(0, 20px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(45deg); }
          to { transform: rotate(405deg); }
        }
        @keyframes spin-slower {
          from { transform: rotate(45deg); }
          to { transform: rotate(405deg); }
        }
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(60px); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 25s linear infinite;
        }
        .animate-spin-slower {
          animation: spin-slower 35s linear infinite;
        }
        .animate-slide {
          animation: slide 20s linear infinite;
        }
      `}</style>
    </section>
  )
}