"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Code, Rocket, Headphones } from "lucide-react"
import { useEffect, useState, useRef } from "react"

const processSteps = [
  {
    icon: Lightbulb,
    number: "01",
    title: "Discovery & Planning",
    description:
      "We start by understanding your business goals, target audience, and technical requirements. Together, we define the project scope and create a detailed roadmap.",
    highlights: ["Requirement Analysis", "Technical Consultation", "Project Roadmap"],
  },
  {
    icon: Code,
    number: "02",
    title: "Design & Development",
    description:
      "Our team brings your vision to life with clean code and modern design. We follow agile methodology with regular updates and feedback loops.",
    highlights: ["UI/UX Design", "Full-Stack Development", "Quality Assurance"],
  },
  {
    icon: Rocket,
    number: "03",
    title: "Testing & Deployment",
    description:
      "Rigorous testing ensures your application is bug-free and performant. We handle deployment, domain setup, and ensure everything runs smoothly.",
    highlights: ["Comprehensive Testing", "Cloud Deployment", "Performance Optimization"],
  },
  {
    icon: Headphones,
    number: "04",
    title: "Support & Maintenance",
    description:
      "Our commitment doesn't end at launch. We provide ongoing support, updates, and enhancements to keep your application running at peak performance.",
    highlights: ["24/7 Support", "Regular Updates", "Feature Enhancements"],
  },
]

export function ProcessSection() {
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
      id="process" 
      ref={sectionRef}
      className="py-32 relative overflow-hidden bg-background"
      aria-labelledby="process-heading"
    >
      {/* Diagonal stripes */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_25%,rgba(0,0,0,0.02)_25%,rgba(0,0,0,0.02)_50%,transparent_50%,transparent_75%,rgba(0,0,0,0.02)_75%,rgba(0,0,0,0.02))] bg-[length:60px_60px]"></div>
      </div>

      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-20 w-80 h-80 bg-foreground/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-20 w-96 h-96 bg-foreground/5 rounded-full blur-3xl animate-float-delayed"></div>
        
        {/* Animated diamonds */}
        <div className="absolute top-20 left-1/4 w-24 h-24 border-2 border-foreground/10 transform rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-32 right-1/3 w-20 h-20 border-2 border-foreground/10 transform rotate-45 animate-spin-slower"></div>
      </div>

      {/* Radial overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_0%,rgba(0,0,0,0.03)_100%)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* Section Header */}
          <div className={`text-center space-y-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-foreground/20 bg-background/80 backdrop-blur-sm shadow-lg mb-4">
              <div className="w-2 h-2 bg-foreground rounded-full animate-pulse"></div>
              <span className="text-sm font-bold tracking-wide uppercase">Our Methodology</span>
            </div>
            
            <h2 id="process-heading" className="text-6xl md:text-7xl font-black tracking-tighter leading-none">
              <span className="bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                How We Work
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
              A <span className="text-foreground font-bold">proven process</span> that delivers exceptional results, 
              from concept to launch and <span className="text-foreground font-bold">beyond</span>
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-2 gap-8 relative">
            {/* Connection lines for desktop */}
            <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-1/2 bg-gradient-to-b from-transparent via-foreground/20 to-transparent"></div>
            <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-px w-full bg-gradient-to-r from-transparent via-foreground/20 to-transparent"></div>

            {processSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <Card
                  key={step.number}
                  className={`bg-background/80 backdrop-blur-sm border-2 border-foreground/10 hover:border-foreground/30 transition-all duration-700 group relative overflow-hidden hover:shadow-2xl hover:-translate-y-3 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ 
                    transitionDelay: `${index * 150 + 200}ms`,
                  }}
                >
                  {/* Number watermark */}
                  <div className="absolute top-0 right-0 text-[140px] font-black text-foreground/5 leading-none group-hover:text-foreground/10 transition-colors duration-500 select-none">
                    {step.number}
                  </div>

                  {/* Shimmer effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-foreground/10 to-transparent"></div>

                  {/* Top accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-foreground transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                  <CardContent className="p-10 space-y-6 relative z-10">
                    {/* Icon and Title */}
                    <div className="flex items-start gap-6">
                      <div className="relative flex-shrink-0">
                        <div className="w-16 h-16 rounded-xl bg-foreground text-background flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                          <Icon className="w-8 h-8" />
                        </div>
                        {/* Glow */}
                        <div className="absolute inset-0 w-16 h-16 rounded-xl bg-foreground/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                      
                      <div className="flex-1 space-y-2 pt-2">
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-mono font-bold text-muted-foreground bg-foreground/10 px-3 py-1 rounded-full">
                            STEP {step.number}
                          </span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-black tracking-tight leading-tight group-hover:text-foreground transition-colors">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                      {step.description}
                    </p>

                    {/* Highlights */}
                    <div className="pt-4 space-y-3">
                      <div className="h-0.5 w-full bg-gradient-to-r from-foreground/20 to-transparent"></div>
                      {step.highlights.map((highlight, idx) => (
                        <div 
                          key={highlight} 
                          className="flex items-center gap-3 group/item"
                          style={{ 
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                            transition: `all 0.5s ease ${index * 150 + 300 + idx * 100}ms`
                          }}
                        >
                          <div className="w-2 h-2 rounded-full bg-foreground group-hover/item:scale-150 transition-transform duration-300"></div>
                          <span className="text-sm font-semibold text-muted-foreground group-hover/item:text-foreground transition-colors">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>

                  {/* Corner decoration */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-foreground/5 rounded-tl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Card>
              )
            })}
          </div>

          {/* Bottom CTA */}
          <div className={`transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-gradient-to-br from-foreground to-foreground/90 text-background rounded-2xl p-12 relative overflow-hidden group">
              {/* Animated pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.3)_25%,rgba(255,255,255,0.3)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.3)_75%,rgba(255,255,255,0.3))] bg-[length:60px_60px] animate-slide"></div>
              </div>
              
              {/* Floating circles */}
              <div className="absolute top-4 right-4 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              
              <div className="relative z-10 text-center space-y-4">
                <h3 className="text-3xl md:text-4xl font-black tracking-tight">
                  Ready to start your project?
                </h3>
                <p className="text-lg text-background/90 max-w-2xl mx-auto font-medium">
                  Let's collaborate to bring your vision to life with our proven process
                </p>
                <div className="flex items-center justify-center gap-2 pt-4">
                  <div className="w-3 h-3 bg-background rounded-full animate-bounce"></div>
                  <div className="w-3 h-3 bg-background rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-3 h-3 bg-background rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(0, -25px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(0, 25px); }
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