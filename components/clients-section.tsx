"use client"

import { ClientsCarousel } from "./clients-carousel"
import { useEffect, useState, useRef } from "react"
import { Briefcase } from "lucide-react"

export function ClientsSection() {
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
      id="clients" 
      ref={sectionRef}
      className="py-32 relative overflow-hidden bg-background"
      aria-labelledby="clients-heading"
    >
      {/* Diagonal stripes background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_25%,rgba(0,0,0,0.02)_25%,rgba(0,0,0,0.02)_50%,transparent_50%,transparent_75%,rgba(0,0,0,0.02)_75%,rgba(0,0,0,0.02))] bg-[length:60px_60px]"></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-80 h-80 bg-foreground/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-foreground/5 rounded-full blur-3xl animate-float-delayed"></div>
        
        {/* Rotating squares */}
        <div className="absolute top-32 right-1/4 w-24 h-24 border-2 border-foreground/10 transform rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-20 left-1/3 w-20 h-20 border-2 border-foreground/10 transform rotate-45 animate-spin-slower"></div>
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_0%,rgba(0,0,0,0.03)_100%)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* Section Header */}
          <div className={`text-center space-y-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-foreground/20 bg-background/80 backdrop-blur-sm shadow-lg mb-4">
              <Briefcase className="w-4 h-4 text-foreground animate-pulse" />
              <span className="text-sm font-bold tracking-wide uppercase">Success Stories</span>
            </div>
            
            <h2 id="clients-heading" className="text-6xl md:text-7xl font-black tracking-tighter leading-none">
              <span className="bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                Our Clients
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
              Real problems solved with <span className="text-foreground font-bold">innovative software</span> solutions
            </p>
          </div>

          {/* Carousel */}
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <ClientsCarousel />
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
      `}</style>
    </section>
  )
}