"use client"
import Link from "next/link"
import { Github, Linkedin, Twitter, Mail, Phone, MapPin, ArrowRight, Sparkles } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-background">
      {/* Animated diagonal stripes background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_25%,rgba(0,0,0,0.02)_25%,rgba(0,0,0,0.02)_50%,transparent_50%,transparent_75%,rgba(0,0,0,0.02)_75%,rgba(0,0,0,0.02))] bg-[length:60px_60px]"></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-foreground/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 animate-pulse-slow"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-foreground/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 animate-pulse-slower"></div>
        
        {/* Rotating squares */}
        <div className="absolute top-1/4 left-1/4 w-20 h-20 border-2 border-foreground/10 transform rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-16 h-16 border-2 border-foreground/10 transform rotate-45 animate-spin-slower"></div>
      </div>

      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-foreground to-transparent"></div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6 md:col-span-1">
            <div className="space-y-4">
              {/* Logo */}
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="relative w-12 h-12">
                  <div className="w-9 h-9 bg-foreground transform rotate-45 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform group-hover:rotate-[50deg]"></div>
                  <div className="w-9 h-9 bg-foreground/70 transform rotate-45 absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 transition-transform group-hover:rotate-[40deg]"></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-black tracking-tight leading-none">TheSoloCompiler</span>
                  <span className="text-[8px] font-bold tracking-widest uppercase text-muted-foreground leading-none mt-1">
                    Digital Experiences
                  </span>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                Solving problems through <span className="text-foreground font-bold">software</span>. Professional development services for modern businesses.
              </p>
            </div>

            {/* Quick Contact */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 group">
                <Mail className="w-4 h-4 text-foreground group-hover:scale-110 transition-transform" />
                <a href="mailto:contact@solocompiler.com" className="text-xs text-muted-foreground hover:text-foreground transition-colors font-medium">
                  contact@solocompiler.com
                </a>
              </div>
              <div className="flex items-center gap-3 group">
                <Phone className="w-4 h-4 text-foreground group-hover:scale-110 transition-transform" />
                <a href="tel:+1234567890" className="text-xs text-muted-foreground hover:text-foreground transition-colors font-medium">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-center gap-3 group">
                <MapPin className="w-4 h-4 text-foreground group-hover:scale-110 transition-transform" />
                <span className="text-xs text-muted-foreground font-medium">Remote & On-site</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-black text-lg mb-6 tracking-tight flex items-center gap-2">
              <div className="w-1 h-6 bg-foreground rounded-full"></div>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Our Work", href: "#clients" },
                { label: "Process", href: "#process" },
                { label: "Contact", href: "#contact" }
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-all inline-flex items-center gap-2 group font-medium"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-black text-lg mb-6 tracking-tight flex items-center gap-2">
              <div className="w-1 h-6 bg-foreground rounded-full"></div>
              Services
            </h4>
            <ul className="space-y-3">
              {[
                "Full-Stack Development",
                "Mobile App Development",
                "UI/UX Design",
                "Logo Design",
                "Google Ads",
                "AI Integration"
              ].map((service) => (
                <li key={service} className="flex items-start gap-2 group">
                  <div className="w-1.5 h-1.5 bg-foreground rounded-full mt-1.5 group-hover:scale-150 transition-transform"></div>
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors font-medium">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-black text-lg mb-6 tracking-tight flex items-center gap-2">
              <div className="w-1 h-6 bg-foreground rounded-full"></div>
              Connect
            </h4>
            
            <div className="space-y-6">
              <div className="flex gap-3">
                {[
                  { icon: Github, href: "#", label: "GitHub" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  { icon: Twitter, href: "#", label: "Twitter" }
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="relative w-12 h-12 rounded-xl border-2 border-foreground/20 flex items-center justify-center hover:border-foreground hover:bg-foreground hover:text-background transition-all hover:scale-110 hover:-translate-y-1 group shadow-lg"
                  >
                    <social.icon className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    {/* Glow effect */}
                    <div className="absolute inset-0 w-12 h-12 rounded-xl bg-foreground/30 blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </a>
                ))}
              </div>

              {/* Newsletter CTA */}
              <div className="bg-foreground/5 border-2 border-foreground/10 rounded-xl p-5 space-y-3 group hover:border-foreground/30 transition-all">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-foreground animate-pulse" />
                  <p className="font-bold text-sm">Stay Updated</p>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Get the latest updates on our projects and tech insights.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t-2 border-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-foreground rounded-full animate-pulse"></div>
              <p className="text-sm text-muted-foreground font-medium">
                © {new Date().getFullYear()} <span className="text-foreground font-bold">TheSoloCompiler</span>. All rights reserved.
              </p>
            </div>

            {/* Legal Links */}
{/* Legal Links */}
<div className="flex items-center gap-6">
  {[
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" }
  ].map((link, idx) => (
    <div key={link.label} className="flex items-center gap-6">
      <Link 
        href={link.href} 
        className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium relative group"
      >
        {link.label}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-foreground transition-all group-hover:w-full"></span>
      </Link>
      {idx < 2 && <div className="w-px h-4 bg-foreground/20"></div>}
    </div>
  ))}
</div>
          </div>

          {/* Made with love */}
          <div className="text-center mt-8">
            <p className="text-xs text-muted-foreground flex items-center justify-center gap-2">
              Made with <span className="text-red-500 animate-pulse">♥</span> by <span className="text-foreground font-bold">TheSoloCompiler</span>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom decorative dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        <div className="w-1.5 h-1.5 bg-foreground/30 rounded-full"></div>
        <div className="w-1.5 h-1.5 bg-foreground/50 rounded-full"></div>
        <div className="w-1.5 h-1.5 bg-foreground rounded-full"></div>
      </div>

      <style jsx>{`
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
        @keyframes pulse-slower {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
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
        .animate-pulse-slower {
          animation: pulse-slower 8s ease-in-out infinite;
        }
      `}</style>
    </footer>
  )
}