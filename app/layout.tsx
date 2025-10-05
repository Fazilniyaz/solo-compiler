import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "SoloCompiler - Solving Problems Through Software",
  description:
    "Professional software development company specializing in full-stack solutions, logo design, and Google Ads. We solve real business problems through innovative software.",
  keywords: "software development, full-stack development, logo design, Google Ads, web development, MERN stack",
  authors: [{ name: "SoloCompiler" }],
  openGraph: {
    title: "SoloCompiler - Solving Problems Through Software",
    description: "Professional software development company specializing in full-stack solutions.",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
