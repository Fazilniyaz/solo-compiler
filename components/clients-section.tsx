"use client"

import { ClientsCarousel } from "./clients-carousel"

export function ClientsSection() {
  return (
    <section id="clients" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight">Our Clients</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Real problems solved with innovative software solutions
            </p>
          </div>

          <ClientsCarousel />
        </div>
      </div>
    </section>
  )
}
