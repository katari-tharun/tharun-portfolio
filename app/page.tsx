export default function Home() {
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

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-lg font-semibold tracking-wide text-white">
            Sai Tharun Katari
          </a>

          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#experience" className="transition hover:text-white">Experience</a>
            <a href="#projects" className="transition hover:text-white">Projects</a>
            <a href="#skills" className="transition hover:text-white">Skills</a>
            <a href="#certifications" className="transition hover:text-white">Certifications</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <section
        id="home"
        className="relative overflow-hidden border-b border-white/10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.25),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.22),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-[1.15fr_0.85fr] md:py-32">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-300">
              Software Engineer • Cloud • Backend • Deployment Systems
            </p>

            <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
              Engineering enterprise systems with cloud, backend, and deployment expertise.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              MSc Artificial Intelligence student at Queen&apos;s University Belfast with 2+ years at Hitachi Energy, working across AWS, Kubernetes, Argo CD, REST APIs, server environments, and enterprise application support.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg transition hover:scale-[1.02] hover:bg-slate-200"
              >
                Download Resume
              </a>

              <a
                href="https://github.com/katari-tharun"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/katari-sai-tharun-95bb91206/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                LinkedIn
              </a>

              <a
                href="mailto:saitharunkatari24@gmail.com"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Email Me
              </a>
            </div>
          </div>

          <div className="flex items-end">
            <div className="w-full rounded-[28px] border border-white/10 bg-white/5 p-7 shadow-2xl backdrop-blur-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
                Profile Snapshot
              </p>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-sm text-slate-400">Current Base</p>
                  <p className="mt-2 text-lg font-semibold text-white">Belfast, UK</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-sm text-slate-400">Experience</p>
                  <p className="mt-2 text-lg font-semibold text-white">2+ Years</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-sm text-slate-400">Education</p>
                  <p className="mt-2 text-base font-semibold text-white">
                    MSc Artificial Intelligence
                  </p>
                  <p className="mt-1 text-sm text-slate-400">Queen&apos;s University Belfast</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-sm text-slate-400">Focus</p>
                  <p className="mt-2 text-base font-semibold text-white">
                    Backend, Cloud, APIs, Deployment Systems
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-sm text-slate-400">Open To</p>
                <p className="mt-2 text-base text-slate-200">
                  Graduate and entry-level software engineering, backend, cloud, and platform-focused roles
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
            About
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
            A practical engineer shaped by real enterprise environments
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            My work combines backend support, deployment workflows, cloud tooling, system configuration, and production issue resolution. I have supported enterprise applications across operational environments with hands-on exposure to AWS, Kubernetes, Argo CD, REST APIs, databases, and Linux and Windows server setups.
          </p>
        </div>
      </section>

      <section id="experience" className="border-y border-white/10 bg-white/[0.02] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
            Experience
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Professional Experience
          </h2>

          <div className="mt-12 space-y-6">
            {experiences.map((exp) => (
              <div
                key={`${exp.role}-${exp.period}`}
                className="rounded-[28px] border border-white/10 bg-white/5 p-7 shadow-xl backdrop-blur-xl"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">
                      {exp.role} - {exp.company}
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-slate-400">{exp.period}</p>
                </div>

                <ul className="mt-6 space-y-4">
                  {exp.details.map((item) => (
                    <li key={item} className="flex gap-4 text-slate-300">
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-cyan-400" />
                      <span className="leading-7">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
          Projects
        </p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
          Featured Projects
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-[28px] border border-white/10 bg-white/5 p-7 shadow-xl backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                {project.tech}
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-white">{project.title}</h3>
              <p className="mt-5 leading-7 text-slate-300">{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="border-y border-white/10 bg-white/[0.02] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
            Skills
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Technical Skills
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-[28px] border border-white/10 bg-white/5 p-7 shadow-xl backdrop-blur-xl"
              >
                <h3 className="text-xl font-semibold text-white">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm font-medium text-slate-200"
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

      <section id="certifications" className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
          Certifications
        </p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
          Certifications & Credentials
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {certifications.map((cert) => (
            <div
              key={cert}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-xl"
            >
              <p className="font-semibold text-slate-100">{cert}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-[32px] border border-white/10 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 p-8 shadow-2xl backdrop-blur-xl md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-300">
              Contact
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
              Let&apos;s connect
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              I&apos;m open to graduate opportunities, software engineering roles, and conversations around backend, cloud, DevOps, and platform-focused work.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:saitharunkatari24@gmail.com"
                className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
              >
                saitharunkatari24@gmail.com
              </a>

              <a
                href="https://www.linkedin.com/in/katari-sai-tharun-95bb91206/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/katari-tharun"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
