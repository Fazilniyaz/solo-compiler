"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Clock, Award, Zap } from "lucide-react"

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
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-foreground/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-foreground/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight">Why Choose Us</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              We deliver exceptional value through reliable timelines, uncompromising quality, and innovative technology solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card
                  key={feature.name}
                  className="bg-card border-border hover:border-foreground transition-all duration-500 group relative overflow-hidden hover:shadow-2xl hover:-translate-y-2"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-foreground/0 via-foreground/0 to-foreground/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <CardContent className="p-8 space-y-4 relative z-10">
                    <div className="w-16 h-16 rounded-full bg-foreground/10 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-300 group-hover:scale-110">
                      <Icon className="w-8 h-8" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-1">{feature.name}</h3>
                      <p className="text-sm text-muted-foreground">{feature.experience}</p>
                    </div>

                    <div className="space-y-2">
                      <p className="font-semibold text-sm">{feature.specialty}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </CardContent>

                  {/* Animated border effect */}
                  <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 rounded-lg border-2 border-foreground/20 animate-pulse"></div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}