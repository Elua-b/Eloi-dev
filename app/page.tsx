"use client";

import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Menu,
  X,
  Link,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "projects", "skills"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Bugingo_Elua_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 border-2 border-gray-400 rotate-45 flex items-center justify-center">
              <span className="text-gray-300 font-bold -rotate-45 text-sm">
                E
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className={`text-sm transition-colors ${
                activeSection === "about"
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className={`text-sm transition-colors ${
                activeSection === "experience"
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className={`text-sm transition-colors ${
                activeSection === "projects"
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`text-sm transition-colors ${
                activeSection === "contact"
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Contact
            </button>
            <Button
              variant="outline"
              size="sm"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white bg-transparent"
              onClick={downloadResume}
            >
              Resume
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0a0a0a] border-t border-gray-800 px-6 py-4 space-y-4">
            <button
              onClick={() => scrollToSection("about")}
              className="block text-sm text-gray-400 hover:text-white"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="block text-sm text-gray-400 hover:text-white"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="block text-sm text-gray-400 hover:text-white"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block text-sm text-gray-400 hover:text-white"
            >
              Contact
            </button>
            <button
              onClick={downloadResume}
              className="block text-sm text-gray-400 hover:text-white"
            >
              Resume
            </button>
          </div>
        )}
      </nav>

      {/* Social Links - Fixed Left Side */}
      <div className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 flex-col gap-6 z-40">
        <a
          href="https://github.com/elua-b"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
        >
          <Github size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/bugingo-elua-b42402231/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="mailto:bugingoeloi@gmail.com"
          className="text-gray-400 hover:text-white transition-colors"
        >
          <Mail size={20} />
        </a>
      </div>

      {/* Email - Fixed Right Side */}
      <div className="hidden lg:block fixed right-6 top-1/2 -translate-y-1/2 z-40">
        <a
          href="mailto:bugingoeloi@gmail.com"
          className="text-gray-400 hover:text-white transition-colors text-xs tracking-widest"
          style={{ writingMode: "vertical-rl" }}
        >
          bugingoeloi@gmail.com
        </a>
      </div>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20 px-6">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-sm text-gray-400 tracking-wide">
              Hi, my name is
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Bugingo Elua.
            </h1>
            <p className="text-2xl md:text-3xl text-gray-400 leading-relaxed">
              I use code to build scalable solutions that drive impact.
            </p>
            <p className="text-gray-400 leading-relaxed max-w-xl">
              I'm a dedicated software engineer with over 5 years of hands-on
              experience in full-stack development, delivering impactful digital
              solutions across public and private sectors. I specialize in
              building scalable applications, optimizing backend systems, and
              collaborating with cross-functional teams to bring ideas to life.
            </p>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white mt-4 bg-transparent"
              onClick={() => scrollToSection("contact")}
            >
              Talk to me
            </Button>
          </div>

          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gray-700 rounded-lg transform rotate-6"></div>
              <div className="relative bg-gray-800 rounded-lg overflow-hidden border-4 border-gray-700">
                <img
                  src="/eloi.jpg"
                  alt="Bugingo Elua"
                  className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-4xl mx-auto w-full">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              About Me
            </h2>
            <div className="flex-1 h-px bg-gray-800"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Hello! I'm Bugingo Elua, a software engineer based in Kigali,
                Rwanda. I code with purpose, precision, and passion — whether
                it's supporting a tech startup, contributing to national memory
                preservation, or working on fintech tools for development banks.
              </p>
              <p>
                From building backend architectures for French press ordering
                systems to creating digital archives that preserve Rwanda's
                national identity, I bring dedication and technical excellence
                to every project.
              </p>
              <p>
                I'm currently contributing to internal platforms at the
                Development Bank of Rwanda (BRD), supporting financial project
                management and monitoring while working closely with finance and
                strategy teams to digitize workflows.
              </p>
              <p className="text-white font-medium">
                Here are a few technologies I've been working with recently:
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">▹</span>
                  <span>JavaScript (ES6+)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">▹</span>
                  <span>React & Next.js</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">▹</span>
                  <span>Node.js & NestJS</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">▹</span>
                  <span>TypeScript</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">▹</span>
                  <span>PostgreSQL & MongoDB</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">▹</span>
                  <span>Spring Boot & Laravel</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-4">Education</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-white font-medium">
                      Software Engineering & Embedded Systems
                    </p>
                    <p className="text-sm text-gray-400">
                      Rwanda Coding Academy (RCA)
                    </p>
                    <p className="text-sm text-gray-500">2020 – Present</p>
                  </div>
                  <div className="pt-4 border-t border-gray-700">
                    <p className="text-white font-medium">Certifications</p>
                    <ul className="text-sm text-gray-400 space-y-1 mt-2">
                      <li>• JavaScript Algorithms & Data Structures</li>
                      <li>• Backend APIs Certification</li>
                      <li>• Best Frontend Developer (RCA)</li>
                      <li>• Best Backend Developer (RCA)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="min-h-screen flex items-center px-6 py-20"
      >
        <div className="max-w-4xl mx-auto w-full">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Experience
            </h2>
            <div className="flex-1 h-px bg-gray-800"></div>
          </div>

          <div className="space-y-8">
            <Card className="bg-gray-900 border-gray-800 p-6 hover:border-gray-700 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Software Engineer
                  </h3>
                  <p className="text-gray-400">
                    Development Bank of Rwanda (BRD)
                  </p>
                </div>
                <p className="text-sm text-gray-500 mt-2 md:mt-0">
                  Jul 2024 – Present
                </p>
              </div>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex gap-2">
                  <span className="text-gray-600 mt-1">▹</span>
                  <span>
                    Contributed to internal platforms supporting financial
                    project management and monitoring
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gray-600 mt-1">▹</span>
                  <span>
                    Worked closely with finance and strategy teams to digitize
                    workflows and streamline data analytics
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gray-600 mt-1">▹</span>
                  <span>
                    Integrated third-party systems with BRD's internal data
                    architecture for efficient reporting
                  </span>
                </li>
              </ul>
            </Card>

            <Card className="bg-gray-900 border-gray-800 p-6 hover:border-gray-700 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Backend Developer
                  </h3>
                  <p className="text-gray-400">Global Kwik Koders</p>
                </div>
                <p className="text-sm text-gray-500 mt-2 md:mt-0">
                  Jan 2024 – Jun 2024
                </p>
              </div>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex gap-2">
                  <span className="text-gray-600 mt-1">▹</span>
                  <span>
                    Built and maintained scalable APIs for startup clients in
                    e-commerce and logistics
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gray-600 mt-1">▹</span>
                  <span>
                    Integrated CI/CD pipelines and enhanced code quality through
                    rigorous testing
                  </span>
                </li>
              </ul>
            </Card>

            <Card className="bg-gray-900 border-gray-800 p-6 hover:border-gray-700 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Backend Developer
                  </h3>
                  <p className="text-gray-400">
                    Grab and Go (French Press Ordering App)
                  </p>
                </div>
                <p className="text-sm text-gray-500 mt-2 md:mt-0">
                  Aug 2023 – Dec 2023
                </p>
              </div>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex gap-2">
                  <span className="text-gray-600 mt-1">▹</span>
                  <span>
                    Designed backend architecture using NestJS and PostgreSQL
                    for an intuitive coffee ordering system
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gray-600 mt-1">▹</span>
                  <span>
                    Implemented order queuing, authentication, and mobile
                    payment support
                  </span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen flex items-center px-6 py-20"
      >
        <div className="max-w-4xl mx-auto w-full">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Key Projects
            </h2>
            <div className="flex-1 h-px bg-gray-800"></div>
          </div>

          <div className="space-y-8">
            <Card className="bg-gray-900 border-gray-800 p-6 hover:border-gray-700 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-white">
                  GrabAndGo-FrenchPress{" "}
                </h3>
                <ExternalLink
                  className="text-gray-500 hover:text-white transition-colors"
                  size={20}
                />
              </div>
              <p className="text-gray-400 mb-4 leading-relaxed">
                As a Software Developer on the Grab and Go project, I
                contributed to building a coffee ordering application that
                allows users to order and prepay for coffee from cafés across
                Kigali. I worked on developing a responsive user interface,
                integrating secure payment and location-based services, and
                implementing APIs for order and menu management. My role
                involved collaborating with a cross-functional team to ensure a
                seamless, user-friendly, and efficient coffee ordering
                experience.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1 bg-gray-800 text-gray-300 rounded-full">
                  Next js
                </span>
                <span className="text-xs px-3 py-1 bg-gray-800 text-gray-300 rounded-full">
                  Nest js
                </span>
                <span className="text-xs px-3 py-1 bg-gray-800 text-gray-300 rounded-full">
                  PostgreSQL
                </span>
                <span className="text-xs px-3 py-1 bg-gray-800 text-gray-300 rounded-full">
                  AWS
                </span>
              </div>
            </Card>

            <Card className="bg-gray-900 border-gray-800 p-6 hover:border-gray-700 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-white">
                  Health Management tools and systems - Global Kwik Koders
                </h3>
                <ExternalLink
                  className="text-gray-500 hover:text-white transition-colors"
                  size={20}
                />
              </div>
              <p className="text-gray-400 mb-4 leading-relaxed">
                I worked on the Rwanda Health Insurance Portal (RHIP), a
                health-tech middleware that integrates medical records and
                insurance systems to automate eligibility checks, prevent fraud,
                and streamline claims management. In addition, I contributed to
                several internal projects focused on improving system
                efficiency, data integration, and process automation within the
                organization.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1 bg-gray-800 text-gray-300 rounded-full">
                  Angular
                </span>
                <span className="text-xs px-3 py-1 bg-gray-800 text-gray-300 rounded-full">
                  Spring Boot
                </span>
                <span className="text-xs px-3 py-1 bg-gray-800 text-gray-300 rounded-full">
                  MySQL
                </span>
                <span className="text-xs px-3 py-1 bg-gray-800 text-gray-300 rounded-full">
                  Docker
                </span>
              </div>
            </Card>

            <Card className="bg-gray-900 border-gray-800 p-6 hover:border-gray-700 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-white">
                  BRD Digital Tools
                </h3>
                <ExternalLink
                  className="text-gray-500 hover:text-white transition-colors"
                  size={20}
                />
              </div>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Contributed to platforms for investment tracking, project
                performance visualization, and funding request management.
                Helped integrate third-party systems with BRD's internal data
                architecture for more efficient reporting and decision-making.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1 bg-gray-800 text-gray-300 rounded-full">
                  Next.js
                </span>
                <span className="text-xs px-3 py-1 bg-gray-800 text-gray-300 rounded-full">
                  NestJS
                </span>
                <span className="text-xs px-3 py-1 bg-gray-800 text-gray-300 rounded-full">
                  PostgreSQL
                </span>
                <span className="text-xs px-3 py-1 bg-gray-800 text-gray-300 rounded-full">
                  TypeScript
                </span>
              </div>
            </Card>
            <Card className="bg-gray-900 border-gray-800 p-0 overflow-hidden hover:border-gray-700 transition-colors">
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
                <h3 className="text-xl font-bold text-white">
                  Check All Personal Projects ---
                </h3>
                <a
                  href="https://eloiprojects.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <span>View all projects</span>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="min-h-screen flex items-center px-6 py-20"
      >
        <div className="max-w-4xl mx-auto w-full">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Technical Skills
            </h2>
            <div className="flex-1 h-px bg-gray-800"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gray-900 border-gray-800 p-6">
              <h3 className="text-lg font-bold text-white mb-4">Languages</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded text-sm">
                  JavaScript
                </span>
                <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded text-sm">
                  TypeScript
                </span>
                <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded text-sm">
                  Java
                </span>
                <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded text-sm">
                  PHP
                </span>
                <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded text-sm">
                  HTML/CSS
                </span>
              </div>
            </Card>

            <Card className="bg-gray-900 border-gray-800 p-6">
              <h3 className="text-lg font-bold text-white mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded text-sm">
                  React
                </span>
                <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded text-sm">
                  Next.js
                </span>
                <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded text-sm">
                  Angular
                </span>
                <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded text-sm">
                  React Native
                </span>
              </div>
            </Card>

            <Card className="bg-gray-900 border-gray-800 p-6">
              <h3 className="text-lg font-bold text-white mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded text-sm">
                  Node.js
                </span>
                <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded text-sm">
                  NestJS
                </span>
                <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded text-sm">
                  Spring Boot
                </span>
                <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded text-sm">
                  Laravel
                </span>
                <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded text-sm">
                  Django
                </span>
              </div>
            </Card>

            <Card className="bg-gray-900 border-gray-800 p-6">
              <h3 className="text-lg font-bold text-white mb-4">Databases</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded text-sm">
                  PostgreSQL
                </span>
                <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded text-sm">
                  MongoDB
                </span>
                <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded text-sm">
                  MySQL
                </span>
              </div>
            </Card>
          </div>

          <Card className="bg-gray-900 border-gray-800 p-6 mt-8">
            <h3 className="text-lg font-bold text-white mb-4">Languages</h3>
            <div className="grid md:grid-cols-3 gap-4 text-gray-400">
              <div>
                <p className="font-medium text-white">English</p>
                <p className="text-sm">Full Professional Proficiency</p>
              </div>
              <div>
                <p className="font-medium text-white">French</p>
                <p className="text-sm">Professional Working Proficiency</p>
              </div>
              <div>
                <p className="font-medium text-white">Swahili</p>
                <p className="text-sm">Professional Working Proficiency</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen flex items-center px-6 py-20"
      >
        <div className="max-w-2xl mx-auto w-full text-center">
          <p className="text-sm text-gray-400 mb-4">What's Next?</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-gray-400 leading-relaxed mb-8 max-w-xl mx-auto">
            I'm currently open to new opportunities and interesting projects.
            Whether you have a question, want to collaborate, or just want to
            say hi, feel free to reach out. I'll do my best to get back to you!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="mailto:bugingoeloi@gmail.com"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <Mail size={20} />
              <span>bugingoeloi@gmail.com</span>
            </a>
            <a
              href="tel:+250788420127"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <Phone size={20} />
              <span>+250788420127</span>
            </a>
          </div>

          <div className="flex items-center gap-2 justify-center text-gray-400 mb-8">
            <MapPin size={20} />
            <span>Kigali, Rwanda</span>
          </div>

          <Button
            size="lg"
            variant="outline"
            className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white bg-transparent"
            onClick={() =>
              (window.location.href = "mailto:bugingoeloi@gmail.com")
            }
          >
            Say Hello
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-gray-500">
            Designed & Built by Bugingo Elua
          </p>
        </div>
      </footer>
    </div>
  );
}
