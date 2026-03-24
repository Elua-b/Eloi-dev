import type React from "react"
import type { Metadata } from "next"
import { Inter, Fira_Code } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "Bugingo Elua | Software Engineer | Full-Stack Developer",
  description:
    "Portfolio of Bugingo Elua, a dedicated software engineer with 5+ years of experience in full-stack development, building scalable solutions in Kigali, Rwanda.",
  keywords: [
    "Bugingo Elua",
    "eloi-dev",
    "eloi-dev.com",
    "eloi-dev.com",
    "bugingo eloi",
    "Elua",
    "Software Engineer",
    "Full Stack Developer",
    "Kigali",
    "Rwanda",
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
    "EloiT_ech",
    "Portfolio",
  ],
  authors: [{ name: "Bugingo Elua" }],
  creator: "Bugingo Elua",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://eloidev.netlify.app", // Assuming this is the placeholder URL
    title: "Bugingo Elua | Software Engineer",
    description: "Building scalable digital solutions across public and private sectors.",
    siteName: "Bugingo Elua Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bugingo Elua | Software Engineer",
    description: "Building scalable digital solutions across public and private sectors.",
    creator: "@elua_b",
  },
  robots: {
    index: true,
    follow: true,
  },
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
