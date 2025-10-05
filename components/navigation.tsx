"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-border shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tight hover:opacity-80 transition-all hover:scale-105">
            SoloCompiler
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm hover:text-muted-foreground transition-colors relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-foreground transition-all group-hover:w-full"></span>
            </a>
            <a href="#services" className="text-sm hover:text-muted-foreground transition-colors relative group">
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-foreground transition-all group-hover:w-full"></span>
            </a>
            <a href="#process" className="text-sm hover:text-muted-foreground transition-colors relative group">
              Process
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-foreground transition-all group-hover:w-full"></span>
            </a>
            <a href="#clients" className="text-sm hover:text-muted-foreground transition-colors relative group">
              Clients
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-foreground transition-all group-hover:w-full"></span>
            </a>
            <a href="#contact" className="text-sm hover:text-muted-foreground transition-colors relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-foreground transition-all group-hover:w-full"></span>
            </a>
            <Link href="/admin">
              <Button
                variant="outline"
                size="sm"
                className="border-foreground hover:bg-foreground hover:text-background bg-transparent hover:scale-105 transition-all"
              >
                Admin
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
