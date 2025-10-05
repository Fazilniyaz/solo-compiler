"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ClientsCarousel() {
  const [clients, setClients] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [loading, setLoading] = useState(true)

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
      setCurrentIndex((prev) => (prev + 1) % clients.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, clients.length])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + clients.length) % clients.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % clients.length)
  }

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-foreground"></div>
        <p className="text-muted-foreground mt-4">Loading clients...</p>
      </div>
    )
  }

  if (clients.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No clients found. Please run the seed script to add sample clients.</p>
        <p className="text-sm text-muted-foreground mt-2">Run: node scripts/seed-clients.js</p>
      </div>
    )
  }

  const currentClient = clients[currentIndex]

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="relative overflow-hidden">
        <Card className="bg-card border-border hover:border-foreground transition-all duration-500">
          <CardContent className="p-8 md:p-12 space-y-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                {currentClient.logo && (
                  <img
                    src={currentClient.logo || "/placeholder.svg"}
                    alt={`${currentClient.clientName} logo`}
                    className="w-20 h-20 rounded-lg object-cover bg-muted"
                  />
                )}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold">{currentClient.clientName}</h3>
                  <p className="text-sm text-muted-foreground">
                    {new Date(currentClient.from).getFullYear()} - {new Date(currentClient.to).getFullYear()}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {currentClient.problem && (
                <div>
                  <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide">Problem</h4>
                  <p className="text-muted-foreground leading-relaxed">{currentClient.problem}</p>
                </div>
              )}

              {currentClient.solution && (
                <div>
                  <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide">Solution</h4>
                  <p className="text-muted-foreground leading-relaxed">{currentClient.solution}</p>
                </div>
              )}

              {currentClient.techStack && currentClient.techStack.length > 0 && (
                <div>
                  <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentClient.techStack.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {currentClient.outcome && (
                <div>
                  <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide">Outcome</h4>
                  <p className="text-muted-foreground leading-relaxed">{currentClient.outcome}</p>
                </div>
              )}

              {currentClient.summary && !currentClient.problem && (
                <div>
                  <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide">Summary</h4>
                  <p className="text-muted-foreground leading-relaxed">{currentClient.summary}</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center justify-center gap-4 mt-8">
        <Button
          variant="outline"
          size="icon"
          onClick={goToPrevious}
          className="rounded-full hover:bg-foreground hover:text-background bg-transparent"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>

        <div className="flex gap-2">
          {clients.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index)
                setIsAutoPlaying(false)
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? "bg-foreground w-8" : "bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={goToNext}
          className="rounded-full hover:bg-foreground hover:text-background bg-transparent"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>

      <div className="text-center mt-4 text-sm text-muted-foreground">
        {currentIndex + 1} / {clients.length}
      </div>
    </div>
  )
}
