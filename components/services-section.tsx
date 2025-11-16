"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Smartphone, Globe, Palette, Code, Wrench, Megaphone } from "lucide-react"
import { useEffect, useState, useRef } from "react"

const services = [
  {
    icon: Smartphone,
    title: "Mobile App Design & Development",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    details:
      "Creating intuitive, high-performance mobile apps using React Native, Flutter, and native technologies to reach your customers on any device.",
  },
  {
    icon: Globe,
    title: "Web Application Design & Development",
    description: "Modern, scalable web applications built with cutting-edge technologies.",
    details:
      "Full-stack web development using React, Next.js, Node.js, and cloud services to deliver fast, secure, and responsive web applications.",
  },
  {
    icon: Palette,
    title: "UI/UX Design and Development",
    description: "Beautiful, user-centered designs that enhance user experience.",
    details:
      "Expert UI/UX design services including wireframing, prototyping, and user research to create interfaces that users love.",
  },
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Tailored software solutions designed specifically for your business needs.",
    details:
      "Building custom enterprise software, automation tools, and business applications that solve your unique challenges and drive growth.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Customer Support",
    description: "Ongoing support and maintenance to keep your software running smoothly.",
    details:
      "24/7 technical support, regular updates, bug fixes, and performance optimization to ensure your applications stay secure and efficient.",
  },
  {
    icon: Megaphone,
    title: "Logo Design and Google Ads",
    description: "Professional branding and digital marketing to grow your business.",
    details:
      "Creating memorable logos and running effective Google Ads campaigns that help businesses stand out and reach their target audience.",
  },
]

export function ServicesSection() {
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
      id="services" 
      ref={sectionRef}
      className="py-32 relative overflow-hidden bg-muted/30"
      aria-labelledby="services-heading"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      {/* Large geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-foreground/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-foreground/5 rounded-full blur-3xl animate-pulse-slower"></div>
        
        {/* Floating squares */}
        <div className="absolute top-1/3 right-1/4 w-32 h-32 border-2 border-foreground/10 transform rotate-45 animate-float"></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 border-2 border-foreground/10 transform rotate-45 animate-float-delayed"></div>
      </div>

      {/* Radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.02)_100%)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto space-y-20">
          {/* Section Header */}
          <div className={`text-center space-y-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-foreground/20 bg-background/80 backdrop-blur-sm shadow-lg mb-4">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 bg-foreground rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-1.5 h-1.5 bg-foreground rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-1.5 h-1.5 bg-foreground rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
              <span className="text-sm font-bold tracking-wide uppercase">What We Do</span>
            </div>
            
            <h2 id="services-heading" className="text-6xl md:text-7xl font-black tracking-tighter leading-none">
              <span className="bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                Our Services
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
              Comprehensive <span className="text-foreground font-bold">software solutions</span> tailored to your business needs
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card
                  key={service.title}
                  className={`bg-background border-2 border-foreground/10 hover:border-foreground/30 transition-all duration-700 group relative overflow-hidden hover:shadow-2xl hover:-translate-y-3 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ 
                    transitionDelay: `${index * 100 + 200}ms`,
                  }}
                >
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-foreground/10 to-transparent"></div>

                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-foreground to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <CardContent className="p-8 space-y-6 relative z-10">
                    {/* Icon */}
                    <div className="relative">
                      <div className="w-16 h-16 rounded-xl bg-foreground text-background flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                        <Icon className="w-8 h-8" />
                      </div>
                      {/* Glow effect */}
                      <div className="absolute inset-0 w-16 h-16 rounded-xl bg-foreground/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-black tracking-tight group-hover:text-foreground transition-colors leading-tight">
                        {service.title}
                      </h3>
                      <div className="h-0.5 w-8 bg-foreground rounded-full group-hover:w-full transition-all duration-500"></div>
                      <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                        {service.description}
                      </p>
                      <p className="text-xs text-muted-foreground/80 leading-relaxed">
                        {service.details}
                      </p>
                    </div>

                    {/* Learn more indicator */}
                    <div className="flex items-center gap-2 text-xs font-bold text-foreground opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-2">
                      <span>Explore</span>
                      <div className="w-4 h-0.5 bg-foreground"></div>
                    </div>
                  </CardContent>

                  {/* Corner accent */}
                  <div className="absolute bottom-0 right-0 w-20 h-20 bg-foreground/5 rounded-tl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Card>
              )
            })}
          </div>

          {/* CTA Section */}
          <div className={`text-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-background border-2 border-foreground/20 rounded-2xl p-12 relative overflow-hidden group hover:border-foreground/40 transition-all duration-500">
              {/* Background animation */}
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.02)_25%,rgba(0,0,0,0.02)_50%,transparent_50%,transparent_75%,rgba(0,0,0,0.02)_75%,rgba(0,0,0,0.02))] bg-[length:60px_60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 space-y-4">
                <h3 className="text-3xl md:text-4xl font-black tracking-tight">
                  Ready to transform your business?
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Let's discuss how our services can help you achieve your goals
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(45deg); }
          50% { transform: translate(0, -30px) rotate(45deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translate(0, 0) rotate(45deg); }
          50% { transform: translate(0, 30px) rotate(45deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }
        @keyframes pulse-slower {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        .animate-pulse-slower {
          animation: pulse-slower 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}