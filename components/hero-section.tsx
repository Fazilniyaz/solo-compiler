"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Code2, Sparkles, Zap } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20 animate-gradient"></div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-foreground/5 rounded-full blur-3xl animate-float"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            transition: "transform 0.3s ease-out",
          }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-foreground/5 rounded-full blur-3xl animate-float-delayed"
          style={{
            transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`,
            transition: "transform 0.3s ease-out",
          }}
        ></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Animated badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm animate-fade-in-up opacity-0 [animation-delay:0.1s] [animation-fill-mode:forwards]">
            <Sparkles className="w-4 h-4 text-foreground animate-pulse" />
            <span className="text-sm font-medium">Transforming Ideas into Reality</span>
          </div>

          {/* Main heading with staggered animation */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-balance leading-tight">
              <span className="inline-block animate-fade-in-up opacity-0 [animation-delay:0.2s] [animation-fill-mode:forwards]">
                Solo
              </span>
              <span className="inline-block animate-fade-in-up opacity-0 [animation-delay:0.3s] [animation-fill-mode:forwards]">
                Compiler
              </span>
            </h1>

            <div className="flex items-center justify-center gap-4 animate-fade-in-up opacity-0 [animation-delay:0.4s] [animation-fill-mode:forwards]">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-foreground/10 backdrop-blur-sm">
                <Code2 className="w-4 h-4" />
                <span className="text-sm font-medium">Full-Stack</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-foreground/10 backdrop-blur-sm">
                <Zap className="w-4 h-4" />
                <span className="text-sm font-medium">Fast Delivery</span>
              </div>
            </div>
          </div>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-pretty animate-fade-in-up opacity-0 [animation-delay:0.5s] [animation-fill-mode:forwards]">
            We are solving problems through software. From concept to deployment, we build scalable solutions that drive
            real business results.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 animate-fade-in-up opacity-0 [animation-delay:0.6s] [animation-fill-mode:forwards]">
            <Button
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 group relative overflow-hidden"
              onClick={() => document.getElementById("clients")?.scrollIntoView({ behavior: "smooth" })}
            >
              <span className="relative z-10 flex items-center">
                Explore Our Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-foreground/0 via-foreground/20 to-foreground/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-foreground hover:bg-foreground hover:text-background bg-transparent backdrop-blur-sm"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get in Touch
            </Button>
          </div>

          {/* Stats section */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12 animate-fade-in-up opacity-0 [animation-delay:0.7s] [animation-fill-mode:forwards]">
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-bold">5+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-bold">100%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-bold">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator with enhanced animation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-0 animate-fade-in [animation-delay:1s] [animation-fill-mode:forwards]">
        <div className="w-6 h-10 border-2 border-foreground rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-foreground rounded-full animate-scroll-indicator"></div>
        </div>
      </div>
    </section>
  )
}
