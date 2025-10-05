"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Code, Rocket, HeadphonesIcon } from "lucide-react"

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
    icon: HeadphonesIcon,
    number: "04",
    title: "Support & Maintenance",
    description:
      "Our commitment doesn't end at launch. We provide ongoing support, updates, and enhancements to keep your application running at peak performance.",
    highlights: ["24/7 Support", "Regular Updates", "Feature Enhancements"],
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight">How We Work</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              A proven process that delivers exceptional results, from concept to launch and beyond
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <Card
                  key={step.number}
                  className="bg-card border-border hover:border-foreground transition-all duration-300 group relative overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Number watermark */}
                  <div className="absolute top-4 right-4 text-8xl font-bold text-foreground/5 group-hover:text-foreground/10 transition-colors">
                    {step.number}
                  </div>

                  <CardContent className="p-8 space-y-4 relative z-10">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-foreground/10 group-hover:bg-foreground group-hover:text-background transition-all">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-mono text-muted-foreground">{step.number}</span>
                          <h3 className="text-2xl font-bold">{step.title}</h3>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>

                    <div className="pt-4 space-y-2">
                      {step.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-foreground"></div>
                          <span className="text-sm text-muted-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>

                  {/* Hover gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-foreground/0 via-foreground/0 to-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                </Card>
              )
            })}
          </div>

          {/* Timeline connector for larger screens */}
          <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-1/2 bg-border"></div>
        </div>
      </div>
    </section>
  )
}
