"use client"

import { Card, CardContent } from "@/components/ui/card"
import { User, Award, Target } from "lucide-react"

const founders = [
  {
    name: "Asif",
    experience: "3 years of IT experience",
    specialty: "Strong client network and business development",
    description:
      "Expert in building and maintaining client relationships, with extensive experience in IT consulting and project management.",
    icon: Award,
  },
  {
    name: "Fazil",
    experience: "2 years of experience",
    specialty: "AI-integrated full-stack development",
    description:
      "Specializes in cutting-edge AI integration and modern full-stack development using MERN stack and latest technologies.",
    icon: Target,
  },
  {
    name: "Ashik",
    experience: "Expert in design & management",
    specialty: "Documentation, Figma & logo design",
    description:
      "Master of visual design and documentation, creating stunning logos and comprehensive project documentation.",
    icon: User,
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
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight">Who We Are</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              A team of passionate developers and designers committed to delivering exceptional software solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {founders.map((founder, index) => {
              const Icon = founder.icon
              return (
                <Card
                  key={founder.name}
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
                      <h3 className="text-2xl font-bold mb-1">{founder.name}</h3>
                      <p className="text-sm text-muted-foreground">{founder.experience}</p>
                    </div>

                    <div className="space-y-2">
                      <p className="font-semibold text-sm">{founder.specialty}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{founder.description}</p>
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
