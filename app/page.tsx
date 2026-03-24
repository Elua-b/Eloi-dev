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
const EXPERIENCE_DATA = [
  {
    company: "BRD",
    fullCompany: "Development Bank of Rwanda",
    role: "Software Engineer",
    period: "Jul 2024 – Present",
    points: [
      "Contributed to internal platforms supporting financial project management and monitoring",
      "Worked closely with finance and strategy teams to digitize workflows and streamline data analytics",
      "Integrated third-party systems with BRD's internal data architecture for efficient reporting",
    ],
  },
  {
    company: "CKYC Lounge",
    fullCompany: "CKYC Lounge",
    role: "Software Developer Consultant",
    period: "Jan 2025 – Mar 2025",
    points: [
      "Developed a sophisticated lounge website with event management and booking systems using React and Node.js",
      "Implemented real-time booking capabilities and payment gateway integration",
    ],
  },
  {
    company: "Global Kwik Koders",
    fullCompany: "Global Kwik Koders",
    role: "Backend Developer",
    period: "Jan 2024 – Jun 2024",
    points: [
      "Built and maintained scalable APIs for startup clients in e-commerce and logistics",
      "Integrated CI/CD pipelines and enhanced code quality through rigorous testing",
    ],
  },
  {
    company: "Grab and Go",
    fullCompany: "Grab and Go",
    role: "Backend Developer",
    period: "Aug 2025 – Dec 2025",
    points: [
      "Designed backend architecture using NestJS and PostgreSQL for an intuitive coffee ordering system",
      "Implemented order queuing, authentication, and mobile payment support",
    ],
  },
  {
    company: "Secos Company",
    fullCompany: "Secos Company",
    role: "Developer Consultant",
    period: "Apr 2025 – Jun 2025",
    points: [
      "Built a professional corporate website using Next.js and Node.js with a focus on business solutions and services",
      "Implemented secure document sharing and team management features with role-based access control",
    ],
  },
];

function ExperienceTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex flex-col md:flex-row gap-8 min-h-[400px]">
      <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible border-b md:border-b-0 md:border-l-2 border-lightest-navy">
        {EXPERIENCE_DATA.map((exp, index) => (
          <button
            key={exp.company}
            onClick={() => setActiveTab(index)}
            className={`px-5 py-3 text-left font-mono text-xs whitespace-nowrap transition-all duration-300 border-b-2 md:border-b-0 md:border-l-2 -mb-[2px] md:mb-0 md:-ml-[2px] ${
              activeTab === index
                ? "text-green border-green bg-light-navy"
                : "text-slate border-transparent hover:text-green hover:bg-light-navy"
            }`}
          >
            {exp.company}
          </button>
        ))}
      </div>

      <div className="flex-1 py-2">
        <h3 className="text-xl font-medium text-lightest-slate">
          {EXPERIENCE_DATA[activeTab].role}{" "}
          <span className="text-green">@ {EXPERIENCE_DATA[activeTab].company}</span>
        </h3>
        <p className="font-mono text-xs text-slate mt-2 mb-6">
          {EXPERIENCE_DATA[activeTab].period}
        </p>
        <ul className="space-y-4">
          {EXPERIENCE_DATA[activeTab].points.map((point, i) => (
            <li key={i} className="flex gap-4 text-slate text-sm leading-relaxed">
              <span className="text-green mt-1.5">▹</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

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

  const resumeUrl = "/BUGINGO_Elua_resume.pdf";
  const resumeDownloadName = "BUGINGO_Elua_resume.pdf";

  return (
    <div className="min-h-screen bg-navy text-gray-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/85 backdrop-blur-md px-10 h-20 flex items-center justify-between transition-all duration-300">
        <div className="flex items-center justify-between w-full max-w-[1600px] mx-auto">
          <div className="group cursor-pointer">
            <div className="relative w-10 h-10 flex items-center justify-center border-2 border-green rounded-sm transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1">
              <span className="text-green font-bold text-lg font-mono">E</span>
              <div className="absolute inset-0 border-2 border-green rounded-sm opacity-0 group-hover:opacity-100 group-hover:translate-x-1.5 group-hover:translate-y-1.5 transition-all duration-300 -z-10"></div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ol className="flex items-center gap-6 list-none p-0 m-0">
              {[
                { name: "About", id: "about" },
                { name: "Experience", id: "experience" },
                { name: "Work", id: "projects" },
                { name: "Contact", id: "contact" }
              ].map((item, index) => (
                <li key={item.id} className="flex items-center gap-1">
                  <span className="font-mono text-green text-[13px]">0{index + 1}.</span>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-lightest-slate hover:text-green text-[13px] font-mono transition-colors"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ol>
            <a
              href={resumeUrl}
              download={resumeDownloadName}
              className="ml-4 px-5 py-2.5 text-[13px] font-mono border border-green text-green rounded transition-all duration-300 bg-transparent hover:bg-green/10"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-green"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-40 bg-navy/95 backdrop-blur-sm flex items-center justify-center">
            <nav className="flex flex-col items-center gap-10">
              <ol className="flex flex-col items-center gap-8 list-none p-0 m-0">
                {[
                  { name: "About", id: "about" },
                  { name: "Experience", id: "experience" },
                  { name: "Work", id: "projects" },
                  { name: "Contact", id: "contact" }
                ].map((item, index) => (
                  <li key={item.id} className="flex flex-col items-center gap-2">
                    <span className="font-mono text-green text-sm">0{index + 1}.</span>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-lightest-slate hover:text-green text-xl font-mono transition-colors"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ol>
              <a
                href={resumeUrl}
                download={resumeDownloadName}
                className="button-bc text-lg px-12 py-5"
              >
                Resume
              </a>
            </nav>
          </div>
        )}
      </nav>

      {/* Social Links - Fixed Left Side */}
      <div className="hidden lg:flex fixed left-10 bottom-0 flex-col items-center gap-6 z-10">
        <div className="flex flex-col gap-6 mb-8">
          <a href="https://github.com/elua-b" target="_blank" className="text-light-slate hover:text-green hover:-translate-y-1 transition-all duration-300"><Github size={20} /></a>
          <a href="https://www.linkedin.com/in/bugingo-elua-b42402231/" target="_blank" className="text-light-slate hover:text-green hover:-translate-y-1 transition-all duration-300"><Linkedin size={20} /></a>
          <a href="mailto:bugingoeloi@gmail.com" className="text-light-slate hover:text-green hover:-translate-y-1 transition-all duration-300"><Mail size={20} /></a>
          <a href="#" className="text-light-slate hover:text-green hover:-translate-y-1 transition-all duration-300"><ExternalLink size={20} /></a>
          <a href="#" className="text-light-slate hover:text-green hover:-translate-y-1 transition-all duration-300"><Link size={20} /></a>
        </div>
        <div className="block w-px h-24 bg-slate"></div>
      </div>

      {/* Email - Fixed Right Side */}
      <div className="hidden lg:flex fixed right-10 bottom-0 flex-col items-center gap-6 z-10">
        <div className="block w-px h-24 bg-slate mb-8"></div>
        <a
          href="mailto:bugingoeloi@gmail.com"
          className="text-light-slate hover:text-green hover:-translate-y-1 transition-all duration-300 font-mono text-[12px] tracking-widest"
          style={{ writingMode: "vertical-rl" }}
        >
          bugingoeloi@gmail.com
        </a>
      </div>

      {/* Hero Section */}
      <section id="home" className="h-screen flex flex-col justify-center px-6 max-w-[1000px] mx-auto pt-[180px] md:pt-[220px]">
        <div className="space-y-4 md:space-y-1">
          <p className="font-mono text-green tracking-wide text-[16px] mb-4">
            Hi, my name is
          </p>
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[80px] font-bold text-lightest-slate leading-[1.1]">
              Bugingo Elua.
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-[70px] font-bold text-slate leading-[0.9]">
              I use code to build scalable solutions.
            </h2>
          </div>
          <div className="max-w-[540px] pt-8">
            <p className="text-slate text-lg md:text-[20px] leading-relaxed">
              I'm a dedicated software engineer with over 5 years of hands-on
              experience in full-stack development, delivering impactful digital
              solutions across public and private sectors.
            </p>
          </div>
          <div className="pt-12">
            <button
              className="button-bc text-sm px-7 py-4"
              onClick={() => scrollToSection("projects")}
            >
              Check out my work!
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 max-w-[900px] mx-auto">
        <h2 className="section-heading" data-number="01.">
          About Me
        </h2>

        <div className="grid md:grid-cols-3 gap-12 text-slate leading-relaxed">
          <div className="md:col-span-2 space-y-4">
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
            <p>
              Here are a few technologies I've been working with recently:
            </p>
            <ul className="grid grid-cols-2 gap-2 text-sm font-mono mt-4">
              <li className="flex items-center gap-2">
                <span className="text-green">▹</span> JavaScript (ES6+)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green">▹</span> React & Next.js
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green">▹</span> Node.js & NestJS
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green">▹</span> TypeScript
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green">▹</span> PostgreSQL & MongoDB
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green">▹</span> Spring Boot & Laravel
              </li>
            </ul>
          </div>

          <div className="relative group max-w-[300px] mx-auto md:mx-0">
            <div className="relative z-10 block w-full aspect-square rounded-sm overflow-hidden bg-green translate-x-0 translate-y-0 transition-all duration-300 group-hover:-translate-x-2 group-hover:-translate-y-2">
               <img
                src="/image.png"
                alt="Bugingo Elua"
                className="w-full h-full object-cover grayscale mix-blend-multiply transition-all duration-300 group-hover:grayscale-0 group-hover:mix-blend-normal"
              />
            </div>
            <div className="absolute inset-0 border-2 border-green rounded-sm translate-x-5 translate-y-5 -z-10 transition-all duration-300 group-hover:translate-x-3 group-hover:translate-y-3"></div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 max-w-[700px] mx-auto">
        <h2 className="section-heading" data-number="02.">
          Where I've Worked
        </h2>

        <ExperienceTabs />
      </section>

           {/* Projects Section */}
      <section id="projects" className="py-24 px-6 max-w-[1000px] mx-auto">
        <h2 className="section-heading" data-number="03.">
          Some Things I've Built
        </h2>

        <div className="space-y-24">
          {/* Featured Project 1 */}
          <div className="relative grid grid-cols-12 gap-2 items-center">
            <div className="col-span-12 md:col-span-7 relative z-10">
              <p className="font-mono text-green text-xs mb-2">Featured Project</p>
              <h3 className="text-2xl font-bold text-lightest-slate mb-4 hover:text-green cursor-pointer">
                GrabAndGo-FrenchPress
              </h3>
              <div className="bg-light-navy p-6 rounded-sm shadow-xl text-slate text-sm leading-relaxed mb-4">
                As a Software Developer on the Grab and Go project, I
                contributed to building a coffee ordering application that
                allows users to order and prepay for coffee from cafés across
                Kigali. I worked on developing a responsive user interface,
                integrating secure payment and location-based services, and
                implementing APIs for order and menu management.
              </div>
              <ul className="flex flex-wrap gap-4 font-mono text-xs text-slate list-none p-0">
                <li>Next.js</li>
                <li>NestJS</li>
                <li>PostgreSQL</li>
                <li>AWS</li>
              </ul>
              <div className="flex gap-4 mt-6 text-lightest-slate">
                <Github size={20} className="hover:text-green cursor-pointer" />
                <ExternalLink size={20} className="hover:text-green cursor-pointer" />
              </div>
            </div>
            <div className="hidden md:block col-span-12 md:col-span-7 md:col-start-6 relative rounded-sm overflow-hidden h-[350px] bg-green/20 border border-lightest-navy group">
              <div className="absolute inset-0 bg-green/30 mix-blend-multiply group-hover:bg-transparent transition-all duration-300"></div>
              <div className="w-full h-full bg-lightest-navy"></div>
            </div>
          </div>

          {/* Featured Project 2 (Mirrored) */}
          <div className="relative grid grid-cols-12 gap-2 items-center">
             <div className="hidden md:block col-span-12 md:col-span-7 relative rounded-sm overflow-hidden h-[350px] bg-green/20 border border-lightest-navy group">
              <div className="absolute inset-0 bg-green/30 mix-blend-multiply group-hover:bg-transparent transition-all duration-300"></div>
              <div className="w-full h-full bg-lightest-navy"></div>
            </div>
            <div className="col-span-12 md:col-span-7 md:col-start-6 relative z-10 text-right">
              <p className="font-mono text-green text-xs mb-2">Featured Project</p>
              <h3 className="text-2xl font-bold text-lightest-slate mb-4 hover:text-green cursor-pointer">
                Health Management Tools
              </h3>
              <div className="bg-light-navy p-6 rounded-sm shadow-xl text-slate text-sm leading-relaxed mb-4 text-left md:text-right">
                I worked on the Rwanda Health Insurance Portal (RHIP), a
                health-tech middleware that integrates medical records and
                insurance systems to automate eligibility checks, prevent fraud,
                and streamline claims management.
              </div>
              <ul className="flex flex-wrap gap-4 font-mono text-xs text-slate list-none p-0 justify-end">
                <li>Angular</li>
                <li>Spring Boot</li>
                <li>MySQL</li>
                <li>Docker</li>
              </ul>
              <div className="flex gap-4 mt-6 text-lightest-slate justify-end">
                <Github size={20} className="hover:text-green cursor-pointer" />
                <ExternalLink size={20} className="hover:text-green cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-40">
           <div className="bg-light-navy/50 p-8 rounded-sm shadow-sm border border-lightest-navy/30">
              <h3 className="text-xl font-bold text-lightest-slate mb-6 text-center">Other Noteworthy Projects</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { title: "BRD Digital Tools", tech: ["Next.js", "NestJS", "PostgreSQL"] },
                  { title: "CKYC Lounge", tech: ["Next.js", "Node.js", "MongoDB"] },
                  { title: "Secos Company", tech: ["React", "Express", "PostgreSQL"] },
                  { title: "Uncles Restaurant", tech: ["Vue.js", "Laravel", "MySQL"] },
                  { title: "Kingfisher Hotel", tech: ["Angular", "Spring Boot", "MongoDB"] },
                ].map((p, i) => (
                  <div key={i} className="bg-light-navy p-6 rounded-sm shadow-lg hover:-translate-y-2 transition-all duration-300 group flex flex-col items-start text-left">
                    <div className="flex justify-between items-center w-full mb-8">
                      <div className="text-green"><Link size={40} /></div>
                      <div className="flex gap-4 text-slate group-hover:text-green">
                        <Github size={20} className="cursor-pointer" />
                        <ExternalLink size={20} className="cursor-pointer" />
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-lightest-slate group-hover:text-green mb-2">{p.title}</h4>
                    <p className="text-slate text-xs mb-6">Contributed to building scalable solutions and digital tools for various sectors including finance, hospitality, and e-commerce.</p>
                    <ul className="flex flex-wrap gap-3 font-mono text-[10px] text-slate mt-auto list-none p-0">
                      {p.tech.map(t => <li key={t}>{t}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-12 text-center">
                 <a
                  href="https://eloiprojects.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-bc"
                >
                  View all projects
                </a>
              </div>
            </div>
          </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 max-w-[900px] mx-auto">
        <h2 className="section-heading" data-number="04.">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { title: "Languages", items: ["JavaScript", "TypeScript", "Java", "PHP", "HTML/CSS"] },
            { title: "Frontend", items: ["React", "Next.js", "Angular", "React Native", "Tailwind CSS"] },
            { title: "Backend", items: ["Node.js", "NestJS", "Spring Boot", "Laravel", "Django"] },
            { title: "Databases", items: ["PostgreSQL", "MongoDB", "MySQL", "Redis"] },
          ].map((cat) => (
            <div key={cat.title} className="bg-light-navy p-6 rounded-sm border border-lightest-navy/30">
              <h3 className="text-lg font-bold text-lightest-slate mb-4 font-mono select-none">{cat.title}</h3>
              <ul className="grid grid-cols-2 gap-2 text-sm font-mono list-none p-0">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-green text-[10px]">▹</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-40 px-6 max-w-[600px] mx-auto text-center">
        <p className="font-mono text-green text-sm mb-4">05. What's Next?</p>
        <h2 className="text-4xl md:text-6xl font-bold text-lightest-slate mb-6">Get In Touch</h2>
        <p className="text-slate mb-12">
          I'm currently looking for new opportunities and my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
          <br /><span className="text-green mt-4 block font-mono">+250 788 420 127</span>
        </p>
        <a href="mailto:bugingoeloi@gmail.com" className="button-bc text-lg px-12 py-5">
          Say Hello
        </a>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center">
        <div className="flex lg:hidden justify-center gap-6 mb-4 text-light-slate">
           <a href="https://github.com/elua-b" className="hover:text-green"><Github size={20} /></a>
           <a href="https://www.linkedin.com/in/bugingo-elua-b42402231/" className="hover:text-green"><Linkedin size={20} /></a>
           <a href="mailto:bugingoeloi@gmail.com" className="hover:text-green"><Mail size={20} /></a>
        </div>
        <div className="space-y-2">
          <p className="font-mono text-[10px] text-slate hover:text-green transition-colors cursor-pointer">
            Inspired by Brittany Chiang's v4 Portfolio
          </p>
          <p className="font-mono text-[10px] text-slate">
            © {new Date().getFullYear()} Bugingo Elua
          </p>
        </div>
      </footer>
    </div>
  );
}
