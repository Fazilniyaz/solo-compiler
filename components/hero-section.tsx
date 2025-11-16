"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Code2, Sparkles, Zap, Rocket, Shield, TrendingUp } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Animated gradient background with diagonal stripes */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_25%,rgba(0,0,0,0.03)_25%,rgba(0,0,0,0.03)_50%,transparent_50%,transparent_75%,rgba(0,0,0,0.03)_75%,rgba(0,0,0,0.03))] bg-[length:60px_60px] animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/10 to-background"></div>
      </div>

      {/* Floating geometric shapes with parallax */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large circles */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-foreground/5 rounded-full blur-3xl animate-float"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            transition: "transform 0.5s ease-out",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-foreground/5 rounded-full blur-3xl animate-float-delayed"
          style={{
            transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`,
            transition: "transform 0.5s ease-out",
          }}
        />
        
        {/* Animated diamonds */}
        <div
          className="absolute top-20 right-1/4 w-32 h-32 border-2 border-foreground/10 transform rotate-45 animate-spin-slow"
          style={{
            transform: `rotate(45deg) translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
          }}
        />
        <div
          className="absolute bottom-32 left-1/3 w-24 h-24 border-2 border-foreground/10 transform rotate-45 animate-spin-slower"
          style={{
            transform: `rotate(45deg) translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
          }}
        />
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,0,0,0.1),transparent)]"></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      <div className="container mx-auto px-6 relative z-10 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Animated badge */}
          <div className={`flex justify-center mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-foreground/20 bg-background/80 backdrop-blur-sm shadow-lg hover:border-foreground/40 transition-all hover:scale-105">
              <Sparkles className="w-4 h-4 text-foreground animate-pulse" />
              <span className="text-sm font-bold tracking-wide">Transforming Ideas into Reality</span>
              <div className="w-2 h-2 bg-foreground rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Main heading with enhanced animation */}
          <div className="text-center space-y-6 mb-8">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
              <div className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <span className="inline-block bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                  TheSoloCompiler
                </span>
              </div>
              {/* <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <span className="inline-block bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Compiler
                </span>
              </div> */}
            </h1>

            {/* Feature pills */}
            <div className={`flex items-center justify-center gap-4 flex-wrap transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-foreground text-background shadow-lg hover:scale-105 transition-all">
                <Code2 className="w-4 h-4" />
                <span className="text-sm font-bold">Full-Stack</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-foreground text-background shadow-lg hover:scale-105 transition-all">
                <Zap className="w-4 h-4" />
                <span className="text-sm font-bold">Fast Delivery</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-foreground text-background shadow-lg hover:scale-105 transition-all">
                <Rocket className="w-4 h-4" />
                <span className="text-sm font-bold">Scalable</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className={`text-xl md:text-3xl text-center text-muted-foreground max-w-4xl mx-auto font-medium leading-relaxed mb-12 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            We solve problems through <span className="text-foreground font-bold">software</span>. From concept to deployment, we build{" "}
            <span className="text-foreground font-bold">scalable solutions</span> that drive real business results.
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Button
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 group relative overflow-hidden h-14 px-8 text-base font-bold shadow-2xl hover:shadow-foreground/20 transition-all hover:scale-105"
              onClick={() => document.getElementById("clients")?.scrollIntoView({ behavior: "smooth" })}
            >
              <span className="relative z-10 flex items-center">
                Explore Our Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-foreground hover:bg-foreground hover:text-background bg-transparent backdrop-blur-sm h-14 px-8 text-base font-bold hover:scale-105 transition-all shadow-lg"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get in Touch
            </Button>
          </div>

          {/* Stats section with cards */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-background/60 backdrop-blur-sm border-2 border-foreground/10 rounded-2xl p-8 hover:border-foreground/30 transition-all hover:scale-105 hover:shadow-2xl group">
              <div className="flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-foreground group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-5xl font-black mb-2 text-center">5+</div>
              <div className="text-sm text-muted-foreground text-center font-semibold">Projects Delivered</div>
            </div>
            <div className="bg-background/60 backdrop-blur-sm border-2 border-foreground/10 rounded-2xl p-8 hover:border-foreground/30 transition-all hover:scale-105 hover:shadow-2xl group">
              <div className="flex items-center justify-center mb-4">
                <TrendingUp className="w-8 h-8 text-foreground group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-5xl font-black mb-2 text-center">100%</div>
              <div className="text-sm text-muted-foreground text-center font-semibold">Client Satisfaction</div>
            </div>
            <div className="bg-background/60 backdrop-blur-sm border-2 border-foreground/10 rounded-2xl p-8 hover:border-foreground/30 transition-all hover:scale-105 hover:shadow-2xl group">
              <div className="flex items-center justify-center mb-4">
                <Rocket className="w-8 h-8 text-foreground group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-5xl font-black mb-2 text-center">24/7</div>
              <div className="text-sm text-muted-foreground text-center font-semibold">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-foreground rounded-full flex items-start justify-center p-2 hover:border-foreground/60 transition-colors">
            <div className="w-1.5 h-2.5 bg-foreground rounded-full animate-scroll-indicator"></div>
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
        @keyframes scroll-indicator {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(16px); opacity: 0; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-spin-slower {
          animation: spin-slower 30s linear infinite;
        }
        .animate-scroll-indicator {
          animation: scroll-indicator 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}