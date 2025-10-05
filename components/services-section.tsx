"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Smartphone, Globe, Palette, Code, Wrench, Megaphone } from "lucide-react"

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
  return (
    <section id="services" className="py-32 relative bg-muted/30 overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Comprehensive software solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card
                  key={service.title}
                  className="bg-background border-border hover:border-foreground transition-all duration-500 group hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Shimmer effect on hover */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-foreground/10 to-transparent"></div>

                  <CardContent className="p-6 space-y-4 relative z-10">
                    <div className="w-14 h-14 rounded-full bg-foreground text-background flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <Icon className="w-7 h-7" />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-foreground transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-3 text-sm">{service.description}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{service.details}</p>
                    </div>
                  </CardContent>

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-foreground/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
