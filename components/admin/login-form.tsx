"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Lock, User, AlertCircle, Eye, EyeOff, Shield } from "lucide-react"

export default function LoginForm() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      })

      const data = await response.json()

      if (data.success) {
        router.push("/admin/dashboard")
        router.refresh()
      } else {
        setError(data.message || "Invalid credentials")
      }
    } catch (err) {
      setError("Login failed. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Animated diagonal stripes background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_25%,rgba(0,0,0,0.02)_25%,rgba(0,0,0,0.02)_50%,transparent_50%,transparent_75%,rgba(0,0,0,0.02)_75%,rgba(0,0,0,0.02))] bg-[length:60px_60px]"></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-foreground/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-foreground/5 rounded-full blur-3xl animate-float-delayed"></div>
        
        {/* Rotating squares */}
        <div className="absolute top-20 right-1/4 w-32 h-32 border-2 border-foreground/10 transform rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-32 left-1/3 w-24 h-24 border-2 border-foreground/10 transform rotate-45 animate-spin-slower"></div>
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,0,0,0.05),transparent)]"></div>

      {/* Login Card */}
      <div className="w-full max-w-md mx-6 relative z-10 animate-fade-in-up">
        <div className="bg-background/80 backdrop-blur-sm border-2 border-foreground/10 rounded-2xl shadow-2xl overflow-hidden hover:border-foreground/30 transition-all duration-700 group">
          {/* Top accent bar */}
          <div className="h-2 bg-gradient-to-r from-foreground via-foreground/80 to-foreground"></div>
          
          {/* Shimmer effect */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-foreground/5 to-transparent"></div>
          
          {/* Corner decorations */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-foreground/5 rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="p-10 relative z-10">
            {/* Header */}
            <div className="text-center mb-10 space-y-4">
              {/* Logo/Icon */}
              <div className="inline-flex items-center justify-center relative">
                <div className="w-20 h-20 rounded-2xl bg-foreground text-background flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Shield className="w-10 h-10" />
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 w-20 h-20 rounded-2xl bg-foreground/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div className="space-y-2">
                <h1 className="text-4xl font-black tracking-tighter">
                  <span className="bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                    Admin Login
                  </span>
                </h1>
                <div className="flex items-center justify-center gap-2">
                  <div className="h-1 w-8 bg-foreground rounded-full"></div>
                  <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
                    SoloCompiler Dashboard
                  </p>
                  <div className="h-1 w-8 bg-foreground rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div onSubmit={handleSubmit} className="space-y-6">
              {/* Username Field */}
              <div className="space-y-2">
                <label htmlFor="username" className="block text-sm font-bold uppercase tracking-wide text-foreground">
                  Username
                </label>
                <div className="relative group/input">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-hover/input:text-foreground transition-colors">
                    <User className="w-5 h-5" />
                  </div>
                  <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full pl-12 pr-4 py-3.5 border-2 border-foreground/20 rounded-xl focus:border-foreground bg-background text-foreground font-medium transition-all duration-300 focus:scale-[1.02] outline-none placeholder:text-muted-foreground/50"
                    placeholder="Enter your username"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-bold uppercase tracking-wide text-foreground">
                  Password
                </label>
                <div className="relative group/input">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-hover/input:text-foreground transition-colors">
                    <Lock className="w-5 h-5" />
                  </div>
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-12 pr-12 py-3.5 border-2 border-foreground/20 rounded-xl focus:border-foreground bg-background text-foreground font-medium transition-all duration-300 focus:scale-[1.02] outline-none placeholder:text-muted-foreground/50"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="flex items-start gap-3 p-4 bg-red-50 border-2 border-red-200 rounded-xl text-red-600 animate-shake">
                  <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <p className="text-sm font-semibold">{error}</p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                onClick={handleSubmit}
                disabled={loading}
                className="w-full py-4 bg-foreground text-background rounded-xl font-bold text-base hover:bg-foreground/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group/button relative overflow-hidden shadow-lg hover:shadow-2xl hover:scale-[1.02]"
              >
                <span className="relative z-10 flex items-center justify-center">
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-background border-t-transparent rounded-full animate-spin mr-2"></div>
                      Logging in...
                    </>
                  ) : (
                    <>
                      <Lock className="w-5 h-5 mr-2 group-hover/button:rotate-12 transition-transform" />
                      Login
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/20 to-transparent translate-x-[-100%] group-hover/button:translate-x-[100%] transition-transform duration-1000"></div>
              </button>
            </div>

            {/* Default Credentials Info */}
            <div className="mt-8 p-4 bg-foreground/5 border-2 border-foreground/10 rounded-xl space-y-2">
              <p className="text-center text-xs font-bold text-muted-foreground uppercase tracking-wider">
                Default Credentials
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-background rounded-lg border border-foreground/20">
                  <User className="w-3 h-3 text-foreground" />
                  <code className="text-xs font-bold text-foreground">admin</code>
                </div>
                <div className="text-muted-foreground">/</div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-background rounded-lg border border-foreground/20">
                  <Lock className="w-3 h-3 text-foreground" />
                  <code className="text-xs font-bold text-foreground">SoloCompiler@2025</code>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="flex items-center justify-center gap-2 mt-6">
          <div className="w-2 h-2 bg-foreground/30 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-foreground/50 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-foreground rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
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
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
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
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animate-shake {
          animation: shake 0.4s ease-in-out;
        }
      `}</style>
    </div>
  )
}