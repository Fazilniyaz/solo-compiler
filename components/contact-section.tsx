"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubmitStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-32 relative overflow-hidden bg-muted/30"
      aria-labelledby="contact-heading"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      {/* Central glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-foreground/5 rounded-full blur-3xl animate-pulse-slow"></div>

      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-10 w-72 h-72 bg-foreground/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-foreground/5 rounded-full blur-3xl animate-float-delayed"></div>
        
        {/* Rotating squares */}
        <div className="absolute top-20 right-1/3 w-20 h-20 border-2 border-foreground/10 transform rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-32 left-1/4 w-24 h-24 border-2 border-foreground/10 transform rotate-45 animate-spin-slower"></div>
      </div>

      {/* Radial overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(0,0,0,0.02)_100%)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* Section Header */}
          <div className={`text-center space-y-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-foreground/20 bg-background/80 backdrop-blur-sm shadow-lg mb-4">
              <Send className="w-4 h-4 text-foreground animate-pulse" />
              <span className="text-sm font-bold tracking-wide uppercase">Let's Connect</span>
            </div>
            
            <h2 id="contact-heading" className="text-6xl md:text-7xl font-black tracking-tighter leading-none">
              <span className="bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                Get in Touch
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
              Have a project in mind? Let's discuss how we can help <span className="text-foreground font-bold">solve your problems</span> through software.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column - Contact Info */}
            <div className={`space-y-10 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              {/* Contact Cards */}
              <div>
                <h3 className="text-3xl font-black mb-8 tracking-tight">Contact Information</h3>
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-5 group cursor-pointer">
                    <div className="relative flex-shrink-0">
                      <div className="w-14 h-14 rounded-xl bg-foreground text-background flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div className="absolute inset-0 w-14 h-14 rounded-xl bg-foreground/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    <div className="pt-2">
                      <p className="font-bold text-sm uppercase tracking-wide text-muted-foreground mb-1">Email</p>
                      <a
                        href="mailto:contact@solocompiler.com"
                        className="text-lg font-semibold text-foreground hover:underline underline-offset-4 decoration-2"
                      >
                        contact@solocompiler.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-5 group cursor-pointer">
                    <div className="relative flex-shrink-0">
                      <div className="w-14 h-14 rounded-xl bg-foreground text-background flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div className="absolute inset-0 w-14 h-14 rounded-xl bg-foreground/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    <div className="pt-2">
                      <p className="font-bold text-sm uppercase tracking-wide text-muted-foreground mb-1">Phone</p>
                      <a
                        href="tel:+1234567890"
                        className="text-lg font-semibold text-foreground hover:underline underline-offset-4 decoration-2"
                      >
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-5 group cursor-pointer">
                    <div className="relative flex-shrink-0">
                      <div className="w-14 h-14 rounded-xl bg-foreground text-background flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div className="absolute inset-0 w-14 h-14 rounded-xl bg-foreground/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    <div className="pt-2">
                      <p className="font-bold text-sm uppercase tracking-wide text-muted-foreground mb-1">Location</p>
                      <p className="text-lg font-semibold text-foreground">Remote & On-site Available</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-background/80 backdrop-blur-sm border-2 border-foreground/10 rounded-2xl p-8 relative overflow-hidden group hover:border-foreground/30 transition-all duration-500">
                {/* Corner decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-foreground/5 rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-black mb-6 tracking-tight">Why Choose Us?</h3>
                  <ul className="space-y-4">
                    {[
                      "3+ years of combined IT experience",
                      "AI-integrated modern solutions",
                      "Strong client relationships and support",
                      "Full-stack expertise with MERN stack"
                    ].map((item, idx) => (
                      <li 
                        key={item} 
                        className="flex items-start gap-3 group/item"
                        style={{
                          opacity: isVisible ? 1 : 0,
                          transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                          transition: `all 0.5s ease ${300 + idx * 100}ms`
                        }}
                      >
                        <CheckCircle2 className="w-5 h-5 text-foreground mt-0.5 flex-shrink-0 group-hover/item:scale-125 transition-transform" />
                        <span className="text-sm font-medium text-muted-foreground group-hover/item:text-foreground transition-colors">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <Card 
              className={`bg-background border-2 border-foreground/10 hover:border-foreground/30 transition-all duration-700 hover:shadow-2xl delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
            >
              <CardContent className="p-10">
                <div onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-bold uppercase tracking-wide">Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      placeholder="Your name"
                      className="h-12 transition-all focus:scale-[1.02] border-2 focus:border-foreground"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-bold uppercase tracking-wide">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      placeholder="your@email.com"
                      className="h-12 transition-all focus:scale-[1.02] border-2 focus:border-foreground"
                    />
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm font-bold uppercase tracking-wide">Subject</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      placeholder="How can we help?"
                      className="h-12 transition-all focus:scale-[1.02] border-2 focus:border-foreground"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-bold uppercase tracking-wide">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={6}
                      placeholder="Tell us about your project..."
                      className="transition-all focus:scale-[1.02] border-2 focus:border-foreground resize-none"
                    />
                  </div>

                  {/* Success Message */}
                  {submitStatus === "success" && (
                    <div className="flex items-center gap-3 text-sm text-green-600 bg-green-50 p-4 rounded-lg animate-fade-in border-2 border-green-200">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                      <span className="font-semibold">Message sent successfully! We'll get back to you soon.</span>
                    </div>
                  )}

                  {/* Error Message */}
                  {submitStatus === "error" && (
                    <p className="text-sm text-red-600 bg-red-50 p-4 rounded-lg animate-fade-in border-2 border-red-200 font-semibold">
                      Failed to send message. Please try again.
                    </p>
                  )}

                  {/* Submit Button */}
                  <Button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full bg-foreground text-background hover:bg-foreground/90 group relative overflow-hidden h-14 text-base font-bold shadow-lg hover:shadow-2xl transition-all hover:scale-[1.02]"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-background border-t-transparent rounded-full animate-spin mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  </Button>
                </div>
              </CardContent>
            </Card>
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
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
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
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}