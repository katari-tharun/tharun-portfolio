"use client";

import dynamic from "next/dynamic";
import { useEffect, useMemo, useRef, useState } from "react";

const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [timeText, setTimeText] = useState("");

  const techGlobeRef = useRef<any>(null);
  const contactGlobeRef = useRef<any>(null);

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

  const isDark = darkMode;

  const textures = {
    globeImageUrl:
      "https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-blue-marble.jpg",
    bumpImageUrl:
      "https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-topology.png",
    backgroundImageUrl:
      "https://cdn.jsdelivr.net/npm/three-globe/example/img/night-sky.png",
  };

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

  const heroTags = [
    "Cloud-Native Systems",
    "Backend Engineering",
    "API Integration",
    "Deployment Workflows",
    "AI Systems",
    "DevOps Tooling",
  ];

  const techPoints = useMemo(
    () => [
      { name: "Belfast", lat: 54.5973, lng: -5.9301, size: 0.38, color: "#38bdf8" },
      { name: "London", lat: 51.5072, lng: -0.1276, size: 0.22, color: "#a78bfa" },
      { name: "Bengaluru", lat: 12.9716, lng: 77.5946, size: 0.28, color: "#34d399" },
      { name: "Singapore", lat: 1.3521, lng: 103.8198, size: 0.2, color: "#f59e0b" },
      { name: "Tokyo", lat: 35.6762, lng: 139.6503, size: 0.18, color: "#fb7185" },
      { name: "Seattle", lat: 47.6062, lng: -122.3321, size: 0.2, color: "#60a5fa" },
      { name: "Frankfurt", lat: 50.1109, lng: 8.6821, size: 0.16, color: "#22c55e" },
    ],
    []
  );

  const techArcs = useMemo(
    () => [
      {
        startLat: 54.5973,
        startLng: -5.9301,
        endLat: 51.5072,
        endLng: -0.1276,
        color: ["#38bdf8", "#a78bfa"],
      },
      {
        startLat: 54.5973,
        startLng: -5.9301,
        endLat: 12.9716,
        endLng: 77.5946,
        color: ["#38bdf8", "#34d399"],
      },
      {
        startLat: 54.5973,
        startLng: -5.9301,
        endLat: 1.3521,
        endLng: 103.8198,
        color: ["#38bdf8", "#f59e0b"],
      },
      {
        startLat: 54.5973,
        startLng: -5.9301,
        endLat: 35.6762,
        endLng: 139.6503,
        color: ["#38bdf8", "#fb7185"],
      },
      {
        startLat: 54.5973,
        startLng: -5.9301,
        endLat: 47.6062,
        endLng: -122.3321,
        color: ["#38bdf8", "#60a5fa"],
      },
      {
        startLat: 54.5973,
        startLng: -5.9301,
        endLat: 50.1109,
        endLng: 8.6821,
        color: ["#38bdf8", "#22c55e"],
      },
    ],
    []
  );

  const contactPoint = useMemo(
    () => [
      {
        name: "Belfast",
        lat: 54.5973,
        lng: -5.9301,
        size: 0.5,
        color: "#ff3b3b",
      },
    ],
    []
  );

  useEffect(() => {
    if (!techGlobeRef.current) return;

    const globe = techGlobeRef.current;
    const controls = globe.controls();

    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.45;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.minDistance = 260;
    controls.maxDistance = 260;

    globe.pointOfView({ lat: 20, lng: 10, altitude: 2.15 }, 0);

    const material: any = globe.globeMaterial();
    if (material) {
      if (material.emissive && typeof material.emissive.set === "function") {
        material.emissive.set("#0a1230");
      }
      material.emissiveIntensity = 0.12;
      material.shininess = 1.2;
    }
  }, []);

  useEffect(() => {
    if (!contactGlobeRef.current) return;

    const globe = contactGlobeRef.current;
    const controls = globe.controls();

    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.6;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.minDistance = 180;
    controls.maxDistance = 180;

    globe.pointOfView({ lat: 54.7, lng: -5.8, altitude: 1.6 }, 0);
  }, []);

  return (
    <main
      className={`min-h-screen ${
        isDark ? "bg-[#040816] text-white" : "bg-slate-50 text-slate-900"
      }`}
    >
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        @keyframes floatSlow {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .float-slow {
          animation: floatSlow 5s ease-in-out infinite;
        }
      `}</style>

      <header
        className={`sticky top-0 z-50 border-b backdrop-blur-xl ${
          isDark
            ? "border-white/10 bg-[#040816]/80"
            : "border-slate-200 bg-white/80"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-3">
            <div
              className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold ${
                isDark ? "bg-white/10 text-white" : "bg-slate-900 text-white"
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
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#certifications">Certifications</a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setDarkMode((prev) => !prev)}
              className={`rounded-full border px-4 py-2 text-sm font-medium ${
                isDark
                  ? "border-cyan-400/30 bg-white/5 text-white hover:bg-white/10"
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
              ? "bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.15),transparent_30%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.14),transparent_32%),radial-gradient(circle_at_bottom_center,rgba(59,130,246,0.12),transparent_25%)]"
              : "bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.10),transparent_30%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.10),transparent_32%),radial-gradient(circle_at_bottom_center,rgba(59,130,246,0.08),transparent_25%)]"
          }`}
        />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1.05fr_0.95fr] md:py-24">
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
                    engineer.ts
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
                <div className="pl-5">name: "Sai Tharun Katari",</div>
                <div className="pl-5">role: "Software Engineer",</div>
                <div className="pl-5">focus: ["Cloud", "Backend", "Systems"],</div>
                <div className="pl-5">location: "Belfast, UK",</div>
                <div className="pl-5">toolkit: ["AWS", "Kubernetes", "Argo CD"],</div>
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
                {heroTags.map((tag, index) => {
                  const positions = [
                    "left-7 top-8",
                    "right-7 top-20",
                    "left-10 bottom-28",
                    "right-8 bottom-24",
                    "left-1/2 top-10 -translate-x-1/2",
                    "right-20 top-1/2",
                  ];

                  return (
                    <div
                      key={tag}
                      className={`absolute rounded-full border px-4 py-2 text-sm tracking-[0.14em] ${positions[index]} ${
                        isDark
                          ? "border-white/10 bg-white/5 text-slate-300"
                          : "border-slate-300 bg-white text-slate-600"
                      }`}
                    >
                      {tag}
                    </div>
                  );
                })}
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className={`float-slow relative flex h-[330px] w-[250px] items-center justify-center rounded-[28px] border shadow-2xl ${
                    isDark
                      ? "border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.10),rgba(255,255,255,0.03))]"
                      : "border-slate-200 bg-[linear-gradient(180deg,rgba(255,255,255,1),rgba(241,245,249,1))]"
                  }`}
                >
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
                      Add a real photo later by placing
                      <span className="font-semibold"> profile.jpg </span>
                      in your public folder.
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
          My Tech Stack Globe
        </p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
          Satellite globe with connected systems
        </h2>

        <div
          className={`relative mx-auto mt-14 overflow-hidden rounded-[36px] border ${
            isDark
              ? "border-white/10 bg-[linear-gradient(180deg,#040816_0%,#081427_100%)]"
              : "border-slate-200 bg-white"
          }`}
        >
          <div className="grid items-center gap-8 px-6 py-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="h-[560px]">
              <Globe
                ref={techGlobeRef}
                width={700}
                height={560}
                backgroundColor="rgba(0,0,0,0)"
                globeImageUrl={textures.globeImageUrl}
                bumpImageUrl={textures.bumpImageUrl}
                backgroundImageUrl={textures.backgroundImageUrl}
                pointsData={techPoints}
                pointAltitude="size"
                pointRadius={0.5}
                pointColor="color"
                pointLabel="name"
                arcsData={techArcs}
                arcColor="color"
                arcAltitude={0.22}
                arcStroke={0.7}
                arcDashLength={0.45}
                arcDashGap={0.14}
                arcDashAnimateTime={2200}
                atmosphereColor="#60a5fa"
                atmosphereAltitude={0.18}
              />
            </div>

            <div className="text-left">
              <p
                className={`text-sm font-semibold uppercase tracking-[0.25em] ${
                  isDark ? "text-cyan-300" : "text-cyan-700"
                }`}
              >
                Infrastructure View
              </p>
              <h3 className="mt-4 text-3xl font-bold leading-tight">
                Real satellite globe instead of a flat circle
              </h3>
              <p
                className={`mt-5 text-lg leading-8 ${
                  isDark ? "text-slate-300" : "text-slate-600"
                }`}
              >
                This globe uses an actual earth texture, terrain bump mapping,
                atmospheric glow, live markers, and animated arcs so the section
                feels much closer to the premium globe style you wanted.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {["AWS", "Kubernetes", "Argo CD", "REST APIs", "Docker", "PostgreSQL"].map(
                  (item) => (
                    <span
                      key={item}
                      className={`rounded-full border px-4 py-2 text-sm font-medium ${
                        isDark
                          ? "border-white/10 bg-white/5 text-slate-200"
                          : "border-slate-300 bg-slate-50 text-slate-700"
                      }`}
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>
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
          className={`overflow-hidden rounded-[34px] border shadow-2xl ${
            isDark
              ? "border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.04),rgba(34,211,238,0.06),rgba(168,85,247,0.06))]"
              : "border-slate-200 bg-[linear-gradient(135deg,rgba(248,250,252,1),rgba(224,242,254,1),rgba(243,232,255,1))]"
          }`}
        >
          <div className="grid md:grid-cols-[1.15fr_0.85fr]">
            <div className="p-8 md:p-10">
              <p
                className={`text-sm font-semibold uppercase tracking-[0.25em] ${
                  isDark ? "text-slate-300" : "text-slate-500"
                }`}
              >
                Contact
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
                Let&apos;s build reliable systems together.
              </h2>

              <p
                className={`mt-6 max-w-2xl text-lg leading-8 ${
                  isDark ? "text-slate-300" : "text-slate-600"
                }`}
              >
                Reach out for software engineering, backend, cloud, or
                platform-focused opportunities and collaborations.
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
                  Email me
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
                className={`mt-8 text-base ${
                  isDark ? "text-slate-300" : "text-slate-600"
                }`}
              >
                <p>saitharunkatari24@gmail.com</p>
                <p className="mt-2">📍 Belfast, Northern Ireland</p>
              </div>
            </div>

            <div
              className={`relative min-h-[420px] border-l ${
                isDark
                  ? "border-white/10 bg-[linear-gradient(180deg,#06101d_0%,#08111f_100%)]"
                  : "border-slate-200 bg-white"
              }`}
            >
              <div className="h-[420px] w-full">
                <Globe
                  ref={contactGlobeRef}
                  width={520}
                  height={420}
                  backgroundColor="rgba(0,0,0,0)"
                  globeImageUrl={textures.globeImageUrl}
                  bumpImageUrl={textures.bumpImageUrl}
                  backgroundImageUrl={textures.backgroundImageUrl}
                  pointsData={contactPoint}
                  pointAltitude="size"
                  pointRadius={0.8}
                  pointColor="color"
                  pointLabel="name"
                  atmosphereColor="#60a5fa"
                  atmosphereAltitude={0.18}
                />
              </div>

              <div
                className={`absolute bottom-6 left-6 rounded-2xl border px-4 py-3 text-sm shadow-lg ${
                  isDark
                    ? "border-white/10 bg-black/40 text-slate-200"
                    : "border-slate-200 bg-white/90 text-slate-700"
                }`}
              >
                Belfast, UK
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer
        className={`border-t px-6 py-8 ${
          isDark
            ? "border-white/10 text-slate-400"
            : "border-slate-200 text-slate-500"
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
