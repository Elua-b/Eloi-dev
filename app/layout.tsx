import type React from "react"
import type { Metadata } from "next"
import { Inter, Fira_Code } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "Bugingo Elua - Software Engineer",
  description:
    "Portfolio of Bugingo Elua, a dedicated software engineer with 5+ years of experience in full-stack development",
  generator: "Eloi dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${firaCode.variable} font-sans antialiased text-slate-400 bg-navy-900`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
