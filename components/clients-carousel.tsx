"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ClientsCarousel() {
  const [clients, setClients] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [loading, setLoading] = useState(true)
  const [direction, setDirection] = useState<'left' | 'right'>('right')

  useEffect(() => {
    fetchClients()
  }, [])

  const fetchClients = async () => {
    try {
      const res = await fetch("/api/clients")
      const data = await res.json()
      if (data.success && Array.isArray(data.data)) {
        setClients(data.data)
      } else {
        setClients([])
      }
    } catch (error) {
      console.error("[v0] Error fetching clients:", error)
      setClients([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!isAutoPlaying || clients.length === 0) return

    const interval = setInterval(() => {
      setDirection('right')
      setCurrentIndex((prev) => (prev + 1) % clients.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, clients.length])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setDirection('left')
    setCurrentIndex((prev) => (prev - 1 + clients.length) % clients.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setDirection('right')
    setCurrentIndex((prev) => (prev + 1) % clients.length)
  }

  if (loading) {
    return (
      <div className="text-center py-20">
        <div className="relative inline-flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-foreground/20 border-t-foreground rounded-full animate-spin"></div>
          <Sparkles className="w-6 h-6 text-foreground absolute animate-pulse" />
        </div>
        <p className="text-muted-foreground mt-6 font-medium text-lg">Loading success stories...</p>
      </div>
    )
  }

  if (clients.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="max-w-md mx-auto bg-background/80 backdrop-blur-sm border-2 border-foreground/20 rounded-2xl p-10 space-y-4">
          <div className="w-16 h-16 bg-foreground/10 rounded-full flex items-center justify-center mx-auto">
            <Sparkles className="w-8 h-8 text-foreground" />
          </div>
          <p className="text-foreground font-bold text-lg">No clients found</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Please run the seed script to add sample clients.
          </p>
          <code className="block text-xs bg-foreground/5 px-4 py-2 rounded-lg font-mono mt-4">
            node scripts/seed-clients.js
          </code>
        </div>
      </div>
    )
  }

  const currentClient = clients[currentIndex]

  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Main Card */}
      <div className="relative overflow-hidden">
        <Card 
          className="bg-background/80 backdrop-blur-sm border-2 border-foreground/10 hover:border-foreground/30 transition-all duration-700 hover:shadow-2xl relative overflow-hidden group"
          key={currentIndex}
        >
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.02)_25%,rgba(0,0,0,0.02)_50%,transparent_50%,transparent_75%,rgba(0,0,0,0.02)_75%,rgba(0,0,0,0.02))] bg-[length:60px_60px]"></div>
          </div>

          {/* Corner decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-foreground/5 rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-foreground/5 rounded-tr-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Shimmer effect */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-foreground/5 to-transparent"></div>

          <CardContent className="p-10 md:p-14 space-y-8 relative z-10">
            {/* Header */}
            <div className="flex items-start justify-between gap-6">
              <div className="flex items-center gap-6">
                {currentClient.logo && (
                  <div className="relative group/logo">
                    <div className="w-24 h-24 rounded-2xl overflow-hidden bg-muted border-2 border-foreground/10 group-hover/logo:border-foreground/30 transition-all duration-500 group-hover/logo:scale-110 group-hover/logo:rotate-3 shadow-lg">
                      <img
                        src={currentClient.logo || "/placeholder.svg"}
                        alt={`${currentClient.clientName} logo`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Logo glow */}
                    <div className="absolute inset-0 w-24 h-24 rounded-2xl bg-foreground/20 blur-xl opacity-0 group-hover/logo:opacity-100 transition-opacity duration-500"></div>
                  </div>
                )}
                <div className="space-y-2">
                  <h3 className="text-3xl md:text-4xl font-black tracking-tight">{currentClient.clientName}</h3>
                  <div className="flex items-center gap-2">
                    <div className="h-1 w-8 bg-foreground rounded-full"></div>
                    <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
                      {new Date(currentClient.from).getFullYear()} - {new Date(currentClient.to).getFullYear()}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {currentClient.problem && (
                <div className="space-y-3 group/section">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-foreground rounded-full"></div>
                    <h4 className="font-black text-sm uppercase tracking-wider text-foreground">Problem</h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm group-hover/section:text-foreground transition-colors">
                    {currentClient.problem}
                  </p>
                </div>
              )}

              {currentClient.solution && (
                <div className="space-y-3 group/section">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-foreground rounded-full"></div>
                    <h4 className="font-black text-sm uppercase tracking-wider text-foreground">Solution</h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm group-hover/section:text-foreground transition-colors">
                    {currentClient.solution}
                  </p>
                </div>
              )}

              {currentClient.outcome && (
                <div className="space-y-3 group/section md:col-span-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-foreground rounded-full"></div>
                    <h4 className="font-black text-sm uppercase tracking-wider text-foreground">Outcome</h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm group-hover/section:text-foreground transition-colors">
                    {currentClient.outcome}
                  </p>
                </div>
              )}

              {currentClient.summary && !currentClient.problem && (
                <div className="space-y-3 group/section md:col-span-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-foreground rounded-full"></div>
                    <h4 className="font-black text-sm uppercase tracking-wider text-foreground">Summary</h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm group-hover/section:text-foreground transition-colors">
                    {currentClient.summary}
                  </p>
                </div>
              )}
            </div>

            {/* Tech Stack */}
            {currentClient.techStack && currentClient.techStack.length > 0 && (
              <div className="space-y-4 pt-4 border-t-2 border-foreground/10">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-foreground rounded-full"></div>
                  <h4 className="font-black text-sm uppercase tracking-wider text-foreground">Tech Stack</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {currentClient.techStack.map((tech, idx) => (
                    <Badge 
                      key={idx} 
                      variant="outline" 
                      className="text-xs font-bold px-3 py-1 border-2 border-foreground/20 hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-300 hover:scale-110"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center gap-6 mt-10">
        {/* Previous Button */}
        <Button
          variant="outline"
          size="icon"
          onClick={goToPrevious}
          className="w-12 h-12 rounded-full border-2 border-foreground/20 hover:bg-foreground hover:text-background hover:border-foreground bg-transparent hover:scale-110 transition-all duration-300 shadow-lg"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>

        {/* Dots Indicator */}
        <div className="flex gap-2">
          {clients.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index)
                setIsAutoPlaying(false)
                setDirection(index > currentIndex ? 'right' : 'left')
              }}
              className={`transition-all duration-500 rounded-full ${
                index === currentIndex 
                  ? "bg-foreground w-10 h-3 shadow-lg" 
                  : "bg-foreground/20 w-3 h-3 hover:bg-foreground/40 hover:scale-125"
              }`}
              aria-label={`Go to client ${index + 1}`}
            />
          ))}
        </div>

        {/* Next Button */}
        <Button
          variant="outline"
          size="icon"
          onClick={goToNext}
          className="w-12 h-12 rounded-full border-2 border-foreground/20 hover:bg-foreground hover:text-background hover:border-foreground bg-transparent hover:scale-110 transition-all duration-300 shadow-lg"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>

      {/* Counter */}
      <div className="text-center mt-6">
        <div className="inline-flex items-center gap-3 px-6 py-2 bg-background/80 backdrop-blur-sm border-2 border-foreground/10 rounded-full">
          <span className="text-sm font-black text-foreground">{currentIndex + 1}</span>
          <div className="w-px h-4 bg-foreground/20"></div>
          <span className="text-sm font-medium text-muted-foreground">{clients.length}</span>
        </div>
      </div>

      {/* Auto-play Indicator */}
      {isAutoPlaying && (
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
          <div className="flex gap-1">
            <div className="w-1.5 h-1.5 bg-foreground rounded-full animate-bounce"></div>
            <div className="w-1.5 h-1.5 bg-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-1.5 h-1.5 bg-foreground rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      )}
    </div>
  )
}