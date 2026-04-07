"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [dark, setDark] = useState(true);
  const [timeText, setTimeText] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Europe/London",
        dateStyle: "medium",
        timeStyle: "short",
      }).format(now);

      setTimeText(`${formatted} • Belfast, UK`);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const experiences = [
    {
      role: "Software Engineer",
      company: "Hitachi Energy",
      period: "Aug 2024 - Jul 2025",
      details: [
        "Deployed and supported Asset Suite, Ellipse, and Hitachi Vegetation Management across virtual machines and physical servers in enterprise environments.",
        "Configured server permissions, environment variables, SSL, and networking settings to improve deployment reliability and secure web access.",
        "Resolved production-style access, port, and connectivity issues while coordinating with IT and operations teams during deployments and fixes.",
      ],
    },
    {
      role: "Management Trainee",
      company: "Hitachi Energy",
      period: "Sep 2023 - Aug 2024",
      details: [
        "Supported HVM back-office applications and iOS field apps by working on configuration, data preparation, inspection, and cost-related enhancements.",
        "Worked with REST APIs, Postman, DBeaver, AWS, Kubernetes, and Argo CD to support application delivery and deployment workflows.",
        "Used QGIS for geospatial analysis and visualization while contributing to backend support and cloud-based release processes.",
      ],
    },
    {
      role: "Intern",
      company: "Hitachi Energy",
      period: "Feb 2023 - Aug 2023",
      details: [
        "Developed supplier management modules with CRUD functionality and automated activation and deactivation workflows.",
        "Wrote Groovy-based automation, validated services in SOAPUI, supported AWS deployments, and prepared reports in Oracle SQL Developer.",
      ],
    },
  ];

  const projects = [
    {
      title: "EventMania",
      tech: "Python • Django",
      description:
        "A web-based event management platform supporting event creation, browsing, and user interaction workflows with reusable templates and server-side validation.",
    },
    {
      title: "NewsReader Portal",
      tech: "JDBC • JSP • Servlets • Spring Boot",
      description:
        "A structured online news portal built for category-based browsing and dynamic content delivery with organized backend routing and database connectivity.",
    },
  ];

  const skillGroups = [
    {
      title: "Languages",
      items: ["Python", "Java", "Groovy", "JavaScript", "SQL", "C"],
    },
    {
      title: "Frameworks",
      items: ["Django", "Spring Boot", "React", "Node.js"],
    },
    {
      title: "Cloud & DevOps",
      items: ["AWS", "Docker", "Kubernetes", "Argo CD"],
    },
    {
      title: "Databases & Tools",
      items: [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "Oracle",
        "Postman",
        "SOAPUI",
        "DBeaver",
        "QGIS",
        "GitHub",
      ],
    },
  ];

  const certifications = [
    "AWS Solution Architect Associate",
    "AWS Academy Graduate",
    "Aviatrix Certified Engineer",
    "Wipro Talent Next",
  ];

  const focusTags = [
    "Cloud-Native Systems",
    "Backend Engineering",
    "API Integration",
    "Deployment Support",
    "AI Systems",
    "DevOps Tooling",
  ];

  const orbitSets = [
    {
      radius: 120,
      duration: 20,
      reverse: false,
      items: ["AWS", "Kubernetes", "Docker", "Argo CD"],
    },
    {
      radius: 175,
      duration: 28,
      reverse: true,
      items: ["Python", "Java", "React", "Spring Boot", "PostgreSQL"],
    },
    {
      radius: 230,
      duration: 36,
      reverse: false,
      items: ["REST APIs", "DBeaver", "QGIS", "Postman", "Oracle", "Node.js"],
    },
  ];

  const isDark = dark;

  return (
    <main
      className={`min-h-screen scroll-smooth ${
        isDark
          ? "bg-[#050816] text-white"
          : "bg-slate-50 text-slate-900"
      }`}
    >
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes counterSpin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }

        @keyframes floaty {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .floaty {
          animation: floaty 4s ease-in-out infinite;
        }
      `}</style>

      <header
        className={`sticky top-0 z-50 border-b backdrop-blur-xl ${
          isDark
            ? "border-white/10 bg-[#050816]/80"
            : "border-slate-200 bg-white/80"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-3">
            <div
              className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold ${
                isDark
                  ? "bg-white/10 text-white"
                  : "bg-slate-900 text-white"
              }`}
            >
              ST
            </div>
            <div>
              <p className="text-base font-semibold">Sai Tharun Katari</p>
              <p
                className={`text-xs ${
                  isDark ? "text-slate-400" : "text-slate-500"
                }`}
              >
                Software Engineer
              </p>
            </div>
          </a>

          <nav
            className={`hidden items-center gap-7 text-sm md:flex ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            <a href="#about" className="transition hover:text-inherit">
              About
            </a>
            <a href="#experience" className="transition hover:text-inherit">
              Experience
            </a>
            <a href="#projects" className="transition hover:text-inherit">
              Projects
            </a>
            <a href="#skills" className="transition hover:text-inherit">
              Skills
            </a>
            <a href="#certifications" className="transition hover:text-inherit">
              Certifications
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/katari-tharun"
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden rounded-full border px-4 py-2 text-sm font-medium sm:inline-flex ${
                isDark
                  ? "border-white/10 bg-white/5 text-white hover:bg-white/10"
                  : "border-slate-300 bg-white text-slate-900 hover:bg-slate-100"
              }`}
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/katari-sai-tharun-95bb91206/"
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden rounded-full border px-4 py-2 text-sm font-medium sm:inline-flex ${
                isDark
                  ? "border-white/10 bg-white/5 text-white hover:bg-white/10"
                  : "border-slate-300 bg-white text-slate-900 hover:bg-slate-100"
              }`}
            >
              LinkedIn
            </a>

            <button
              onClick={() => setDark((prev) => !prev)}
              className={`rounded-full border px-4 py-2 text-sm font-medium ${
                isDark
                  ? "border-cyan-400/40 bg-white/5 text-white hover:bg-white/10"
                  : "border-slate-300 bg-white text-slate-900 hover:bg-slate-100"
              }`}
            >
              {isDark ? "Light" : "Dark"}
            </button>

            <a
              href="#contact"
              className={`rounded-full px-5 py-2.5 text-sm font-semibold ${
                isDark
                  ? "bg-white text-slate-950 hover:bg-slate-200"
                  : "bg-slate-950 text-white hover:bg-slate-800"
              }`}
            >
              Contact
            </a>
          </div>
        </div>
      </header>

      <section
        id="home"
        className={`relative overflow-hidden border-b ${
          isDark ? "border-white/10" : "border-slate-200"
        }`}
      >
        <div
          className={`absolute inset-0 ${
            isDark
              ? "bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_28%),radial-gradient(circle_at_top_right,rgba(147,51,234,0.16),transparent_30%),radial-gradient(circle_at_bottom_center,rgba(14,165,233,0.12),transparent_24%)]"
              : "bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_28%),radial-gradient(circle_at_top_right,rgba(147,51,234,0.12),transparent_30%),radial-gradient(circle_at_bottom_center,rgba(14,165,233,0.08),transparent_24%)]"
          }`}
        />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 md:grid-cols-[1.05fr_0.95fr] md:py-24">
          <div>
            <p
              className={`mb-6 inline-flex rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] ${
                isDark
                  ? "border-white/10 bg-white/5 text-slate-300"
                  : "border-slate-300 bg-white text-slate-600"
              }`}
            >
              Cloud • Backend • APIs • Deployment Systems
            </p>

            <div
              className={`rounded-[30px] border shadow-2xl ${
                isDark
                  ? "border-cyan-400/10 bg-[#071124]"
                  : "border-slate-200 bg-white"
              }`}
            >
              <div
                className={`flex items-center justify-between rounded-t-[30px] border-b px-5 py-4 ${
                  isDark
                    ? "border-white/10 bg-[#06101f]"
                    : "border-slate-200 bg-slate-50"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>

                <div className="flex gap-3 text-xs font-semibold uppercase tracking-[0.18em]">
                  <span
                    className={`rounded-full px-3 py-1 ${
                      isDark
                        ? "bg-white/5 text-slate-400"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    profile.json
                  </span>
                  <span
                    className={`rounded-full px-3 py-1 ${
                      isDark
                        ? "bg-cyan-500/15 text-cyan-300"
                        : "bg-cyan-50 text-cyan-700"
                    }`}
                  >
                    engineer_profile.ts
                  </span>
                </div>
              </div>

              <div
                className={`space-y-4 p-6 font-mono text-sm leading-8 ${
                  isDark ? "text-slate-200" : "text-slate-700"
                }`}
              >
                <div>
                  <span className={isDark ? "text-purple-300" : "text-purple-700"}>
                    const
                  </span>{" "}
                  <span className={isDark ? "text-cyan-300" : "text-cyan-700"}>
                    engineerProfile
                  </span>{" "}
                  = {"{"}
                </div>
                <div className="pl-5">
                  role:{" "}
                  <span className={isDark ? "text-emerald-300" : "text-emerald-700"}>
                    "Software Engineer"
                  </span>
                  ,
                </div>
                <div className="pl-5">
                  focus: [
                  <span className={isDark ? "text-emerald-300" : "text-emerald-700"}>
                    "Cloud"
                  </span>
                  ,{" "}
                  <span className={isDark ? "text-emerald-300" : "text-emerald-700"}>
                    "Backend"
                  </span>
                  ,{" "}
                  <span className={isDark ? "text-emerald-300" : "text-emerald-700"}>
                    "Systems"
                  </span>
                  ],
                </div>
                <div className="pl-5">
                  location:{" "}
                  <span className={isDark ? "text-emerald-300" : "text-emerald-700"}>
                    "Belfast, UK"
                  </span>
                  ,
                </div>
                <div className="pl-5">
                  toolkit: [
                  <span className={isDark ? "text-emerald-300" : "text-emerald-700"}>
                    "AWS"
                  </span>
                  ,{" "}
                  <span className={isDark ? "text-emerald-300" : "text-emerald-700"}>
                    "Kubernetes"
                  </span>
                  ,{" "}
                  <span className={isDark ? "text-emerald-300" : "text-emerald-700"}>
                    "Argo CD"
                  </span>
                  ],
                </div>
                <div>{"};"}</div>
              </div>
            </div>

            <div
              className={`mt-6 flex flex-wrap items-center gap-3 text-sm ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              <span>📍 Belfast, Northern Ireland</span>
              <span>•</span>
              <span>{timeText}</span>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className={`rounded-full px-6 py-3 text-sm font-semibold ${
                  isDark
                    ? "bg-white text-slate-950 hover:bg-slate-200"
                    : "bg-slate-950 text-white hover:bg-slate-800"
                }`}
              >
                View Projects
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-full border px-6 py-3 text-sm font-semibold ${
                  isDark
                    ? "border-white/10 bg-white/5 text-white hover:bg-white/10"
                    : "border-slate-300 bg-white text-slate-900 hover:bg-slate-100"
                }`}
              >
                Download Resume
              </a>
            </div>

            <div className="mt-5 flex flex-wrap gap-4">
              <a
                href="https://github.com/katari-tharun"
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-full border px-5 py-3 text-sm font-medium ${
                  isDark
                    ? "border-white/10 bg-transparent text-white hover:bg-white/5"
                    : "border-slate-300 bg-white text-slate-900 hover:bg-slate-100"
                }`}
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/katari-sai-tharun-95bb91206/"
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-full border px-5 py-3 text-sm font-medium ${
                  isDark
                    ? "border-white/10 bg-transparent text-white hover:bg-white/5"
                    : "border-slate-300 bg-white text-slate-900 hover:bg-slate-100"
                }`}
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div
              className={`relative h-[560px] w-full max-w-[520px] overflow-hidden rounded-[36px] border shadow-2xl ${
                isDark
                  ? "border-white/10 bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.18),transparent_38%),linear-gradient(180deg,#0b1228_0%,#060b18_100%)]"
                  : "border-slate-200 bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.10),transparent_38%),linear-gradient(180deg,#ffffff_0%,#eef2ff_100%)]"
              }`}
            >
              <div className="absolute inset-0">
                <div
                  className={`absolute left-8 top-10 rounded-full border px-4 py-2 text-sm tracking-[0.18em] ${
                    isDark
                      ? "border-white/10 bg-white/5 text-slate-300"
                      : "border-slate-300 bg-white text-slate-600"
                  }`}
                >
                  Cloud-Native Systems
                </div>

                <div
                  className={`absolute right-8 top-24 rounded-full border px-4 py-2 text-sm tracking-[0.18em] ${
                    isDark
                      ? "border-white/10 bg-white/5 text-slate-300"
                      : "border-slate-300 bg-white text-slate-600"
                  }`}
                >
                  Backend Engineering
                </div>

                <div
                  className={`absolute bottom-28 left-10 rounded-full border px-4 py-2 text-sm tracking-[0.18em] ${
                    isDark
                      ? "border-white/10 bg-white/5 text-slate-300"
                      : "border-slate-300 bg-white text-slate-600"
                  }`}
                >
                  Deployment Workflows
                </div>

                <div
                  className={`absolute bottom-20 right-8 rounded-full border px-4 py-2 text-sm tracking-[0.18em] ${
                    isDark
                      ? "border-white/10 bg-white/5 text-slate-300"
                      : "border-slate-300 bg-white text-slate-600"
                  }`}
                >
                  AI Systems
                </div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className={`floaty relative flex h-[330px] w-[250px] items-center justify-center rounded-[28px] border shadow-2xl ${
                    isDark
                      ? "border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.10),rgba(255,255,255,0.03))]"
                      : "border-slate-200 bg-[linear-gradient(180deg,rgba(255,255,255,1),rgba(241,245,249,1))]"
                  }`}
                >
                  <div
                    className={`absolute inset-x-0 top-0 h-20 ${
                      isDark
                        ? "bg-gradient-to-b from-cyan-500/15 to-transparent"
                        : "bg-gradient-to-b from-cyan-100 to-transparent"
                    }`}
                  />
                  <div className="text-center">
                    <div
                      className={`mx-auto flex h-24 w-24 items-center justify-center rounded-full text-2xl font-bold shadow-lg ${
                        isDark
                          ? "bg-white text-slate-950"
                          : "bg-slate-900 text-white"
                      }`}
                    >
                      ST
                    </div>
                    <h3 className="mt-6 text-2xl font-semibold">Sai Tharun</h3>
                    <p
                      className={`mt-2 text-sm ${
                        isDark ? "text-slate-300" : "text-slate-600"
                      }`}
                    >
                      Software Engineer
                    </p>
                    <p
                      className={`mt-4 max-w-[180px] text-sm leading-6 ${
                        isDark ? "text-slate-400" : "text-slate-500"
                      }`}
                    >
                      Add your real profile photo later by placing
                      <span className="font-semibold"> profile.jpg </span>
                      in the public folder.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 text-center">
        <p
          className={`text-sm font-semibold uppercase tracking-[0.25em] ${
            isDark ? "text-slate-400" : "text-slate-500"
          }`}
        >
          My Tech Stack Orbit
        </p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
          A visual view of the tools I work with
        </h2>

        <div
          className={`relative mx-auto mt-14 h-[560px] w-full max-w-[760px] overflow-hidden rounded-[36px] border ${
            isDark
              ? "border-white/10 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_30%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.12),transparent_24%),rgba(255,255,255,0.03)]"
              : "border-slate-200 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_30%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.08),transparent_24%),white]"
          }`}
        >
          <div
            className={`absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border shadow-xl ${
              isDark
                ? "border-cyan-400/30 bg-cyan-500/10"
                : "border-cyan-300 bg-cyan-50"
            }`}
          />
          <div
            className={`absolute left-1/2 top-1/2 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full border ${
              isDark ? "border-white/10" : "border-slate-200"
            }`}
          />
          <div
            className={`absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full border ${
              isDark ? "border-white/10" : "border-slate-200"
            }`}
          />
          <div
            className={`absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full border ${
              isDark ? "border-white/10" : "border-slate-200"
            }`}
          />

          {orbitSets.map((orbit, orbitIndex) => (
            <div
              key={orbitIndex}
              className="absolute inset-0"
              style={{
                animation: `spin ${orbit.duration}s linear infinite${
                  orbit.reverse ? " reverse" : ""
                }`,
              }}
            >
              {orbit.items.map((item, itemIndex) => {
                const angle = (360 / orbit.items.length) * itemIndex;
                return (
                  <div
                    key={item}
                    className="absolute left-1/2 top-1/2"
                    style={{
                      transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(${orbit.radius}px)`,
                    }}
                  >
                    <div
                      style={{
                        animation: `counterSpin ${orbit.duration}s linear infinite${
                          orbit.reverse ? "" : " reverse"
                        }`,
                      }}
                      className={`rounded-full border px-4 py-2 text-sm font-medium shadow-lg ${
                        isDark
                          ? "border-white/10 bg-[#081425] text-slate-200"
                          : "border-slate-200 bg-white text-slate-700"
                      }`}
                    >
                      {item}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}

          <div className="absolute inset-x-0 bottom-8 text-center">
            <p className={isDark ? "text-slate-400" : "text-slate-500"}>
              Cloud, backend, API, and platform tools in continuous motion
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <p
            className={`text-sm font-semibold uppercase tracking-[0.25em] ${
              isDark ? "text-slate-400" : "text-slate-500"
            }`}
          >
            About
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
            A practical engineer shaped by enterprise systems
          </h2>
          <p
            className={`mt-6 text-lg leading-8 ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            My work combines backend support, deployment workflows, cloud tooling,
            system configuration, and production issue resolution. I have supported
            enterprise applications across operational environments with hands-on
            exposure to AWS, Kubernetes, Argo CD, REST APIs, databases, and Linux
            and Windows server setups.
          </p>
        </div>
      </section>

      <section
        id="experience"
        className={`border-y py-20 ${
          isDark
            ? "border-white/10 bg-white/[0.03]"
            : "border-slate-200 bg-white"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6">
          <p
            className={`text-sm font-semibold uppercase tracking-[0.25em] ${
              isDark ? "text-slate-400" : "text-slate-500"
            }`}
          >
            Experience
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
            Professional Experience
          </h2>

          <div className="mt-12 space-y-6">
            {experiences.map((exp) => (
              <div
                key={`${exp.role}-${exp.period}`}
                className={`rounded-[30px] border p-7 shadow-xl ${
                  isDark
                    ? "border-white/10 bg-white/5"
                    : "border-slate-200 bg-slate-50"
                }`}
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <h3 className="text-2xl font-semibold">
                    {exp.role} - {exp.company}
                  </h3>
                  <p className={isDark ? "text-slate-400" : "text-slate-500"}>
                    {exp.period}
                  </p>
                </div>

                <ul className="mt-6 space-y-4">
                  {exp.details.map((item) => (
                    <li
                      key={item}
                      className={`flex gap-4 ${
                        isDark ? "text-slate-300" : "text-slate-600"
                      }`}
                    >
                      <span
                        className={`mt-2 h-2.5 w-2.5 rounded-full ${
                          isDark ? "bg-cyan-400" : "bg-cyan-600"
                        }`}
                      />
                      <span className="leading-7">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-20">
        <p
          className={`text-sm font-semibold uppercase tracking-[0.25em] ${
            isDark ? "text-slate-400" : "text-slate-500"
          }`}
        >
          Projects
        </p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
          Featured Projects
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`group rounded-[30px] border p-7 shadow-xl transition duration-300 hover:-translate-y-1 ${
                isDark
                  ? "border-white/10 bg-white/5 hover:bg-white/10"
                  : "border-slate-200 bg-white hover:shadow-2xl"
              }`}
            >
              <p
                className={`text-sm font-semibold uppercase tracking-[0.25em] ${
                  isDark ? "text-cyan-300" : "text-cyan-700"
                }`}
              >
                {project.tech}
              </p>
              <h3 className="mt-4 text-2xl font-semibold">{project.title}</h3>
              <p
                className={`mt-5 leading-7 ${
                  isDark ? "text-slate-300" : "text-slate-600"
                }`}
              >
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="skills"
        className={`border-y py-20 ${
          isDark
            ? "border-white/10 bg-white/[0.03]"
            : "border-slate-200 bg-white"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6">
          <p
            className={`text-sm font-semibold uppercase tracking-[0.25em] ${
              isDark ? "text-slate-400" : "text-slate-500"
            }`}
          >
            Skills
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
            Technical Skills
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className={`rounded-[30px] border p-7 shadow-xl ${
                  isDark
                    ? "border-white/10 bg-white/5"
                    : "border-slate-200 bg-slate-50"
                }`}
              >
                <h3 className="text-xl font-semibold">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className={`rounded-full border px-4 py-2 text-sm font-medium ${
                        isDark
                          ? "border-white/10 bg-black/20 text-slate-200"
                          : "border-slate-300 bg-white text-slate-700"
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="certifications" className="mx-auto max-w-7xl px-6 py-20">
        <p
          className={`text-sm font-semibold uppercase tracking-[0.25em] ${
            isDark ? "text-slate-400" : "text-slate-500"
          }`}
        >
          Certifications
        </p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
          Certifications & Credentials
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {certifications.map((cert) => (
            <div
              key={cert}
              className={`rounded-[24px] border p-6 shadow-xl ${
                isDark
                  ? "border-white/10 bg-white/5"
                  : "border-slate-200 bg-white"
              }`}
            >
              <p className="font-semibold">{cert}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
        <div
          className={`rounded-[34px] border p-8 shadow-2xl md:p-10 ${
            isDark
              ? "border-white/10 bg-[linear-gradient(135deg,rgba(34,211,238,0.10),rgba(168,85,247,0.10),rgba(255,255,255,0.04))]"
              : "border-slate-200 bg-[linear-gradient(135deg,rgba(224,242,254,1),rgba(243,232,255,1),rgba(255,255,255,1))]"
          }`}
        >
          <p
            className={`text-sm font-semibold uppercase tracking-[0.25em] ${
              isDark ? "text-slate-300" : "text-slate-500"
            }`}
          >
            Contact
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
            Let&apos;s connect
          </h2>
          <p
            className={`mt-6 max-w-2xl text-lg leading-8 ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            I&apos;m open to graduate opportunities, software engineering roles,
            and conversations around backend, cloud, DevOps, and platform-focused
            work.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:saitharunkatari24@gmail.com"
              className={`rounded-full px-6 py-3 text-sm font-semibold ${
                isDark
                  ? "bg-white text-slate-950 hover:bg-slate-200"
                  : "bg-slate-950 text-white hover:bg-slate-800"
              }`}
            >
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/katari-sai-tharun-95bb91206/"
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-full border px-6 py-3 text-sm font-semibold ${
                isDark
                  ? "border-white/10 bg-white/5 text-white hover:bg-white/10"
                  : "border-slate-300 bg-white text-slate-900 hover:bg-slate-100"
              }`}
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/katari-tharun"
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-full border px-6 py-3 text-sm font-semibold ${
                isDark
                  ? "border-white/10 bg-white/5 text-white hover:bg-white/10"
                  : "border-slate-300 bg-white text-slate-900 hover:bg-slate-100"
              }`}
            >
              GitHub
            </a>
          </div>

          <div
            className={`mt-8 text-sm ${
              isDark ? "text-slate-400" : "text-slate-500"
            }`}
          >
            <p>📧 saitharunkatari24@gmail.com</p>
            <p className="mt-2">📍 Belfast, Northern Ireland</p>
          </div>
        </div>
      </section>

      <footer
        className={`border-t px-6 py-8 ${
          isDark ? "border-white/10 text-slate-400" : "border-slate-200 text-slate-500"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-2 text-sm md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Sai Tharun Katari. All rights reserved.</p>
          <p>Belfast, UK</p>
        </div>
      </footer>
    </main>
  );
}
