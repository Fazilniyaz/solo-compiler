"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-all group">
            <div className="relative w-10 h-10">
              {/* Diamond Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-7 h-7 bg-foreground transform rotate-45 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform group-hover:rotate-[50deg]"></div>
                <div className="w-7 h-7 bg-foreground/70 transform rotate-45 absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 transition-transform group-hover:rotate-[40deg]"></div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight leading-none">TheSoloCompiler</span>
              <span className="text-[9px] font-bold tracking-widest uppercase text-muted-foreground leading-none mt-0.5">
                Digital Experiences
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium hover:text-muted-foreground transition-colors relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-foreground transition-all group-hover:w-full"></span>
            </a>
            <a href="#services" className="text-sm font-medium hover:text-muted-foreground transition-colors relative group">
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-foreground transition-all group-hover:w-full"></span>
            </a>
            <a href="#process" className="text-sm font-medium hover:text-muted-foreground transition-colors relative group">
              Process
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-foreground transition-all group-hover:w-full"></span>
            </a>
            <a href="#clients" className="text-sm font-medium hover:text-muted-foreground transition-colors relative group">
              Clients
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-foreground transition-all group-hover:w-full"></span>
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-muted-foreground transition-colors relative group">
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

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-foreground/10 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 space-y-4 border-t border-border animate-in slide-in-from-top">
            <a href="#about" className="block text-sm font-medium hover:text-muted-foreground transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              About
            </a>
            <a href="#services" className="block text-sm font-medium hover:text-muted-foreground transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              Services
            </a>
            <a href="#process" className="block text-sm font-medium hover:text-muted-foreground transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              Process
            </a>
            <a href="#clients" className="block text-sm font-medium hover:text-muted-foreground transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              Clients
            </a>
            <a href="#contact" className="block text-sm font-medium hover:text-muted-foreground transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </a>
            <Link href="/admin">
              <Button variant="outline" size="sm" className="w-full border-foreground hover:bg-foreground hover:text-background">
                Admin
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}