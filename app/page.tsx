export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-3">Sai Tharun Katari</h1>
          <p className="text-lg mb-2">
            Software Engineer | Cloud, Backend, and Deployment Systems
          </p>
          <p className="text-gray-700 mb-6">
            MSc Artificial Intelligence student at Queen&apos;s University Belfast
            with 2+ years of experience at Hitachi Energy across AWS,
            Kubernetes, Argo CD, REST APIs, and enterprise deployments.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg border"
            >
              Download Resume
            </a>

            <a
              href="https://github.com/katari-tharun"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg border"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/katari-sai-tharun-95bb91206/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg border"
            >
              LinkedIn
            </a>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">About</h2>
          <p className="text-gray-700">
            I work on enterprise applications, backend systems, deployment
            workflows, cloud infrastructure, and production support.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Experience</h2>

          <div className="mb-6">
            <h3 className="text-xl font-medium">Software Engineer - Hitachi Energy</h3>
            <p className="text-sm text-gray-600 mb-2">Aug 2024 - Jul 2025</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Deployed and supported enterprise applications on VMs and physical servers.</li>
              <li>Configured server permissions, environment variables, SSL, and networking.</li>
              <li>Resolved production-style access and connectivity issues.</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium">Management Trainee - Hitachi Energy</h3>
            <p className="text-sm text-gray-600 mb-2">Sep 2023 - Aug 2024</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Supported HVM back-office applications and iOS field apps.</li>
              <li>Worked with REST APIs, DBeaver, AWS, Kubernetes, and Argo CD.</li>
              <li>Handled configuration, data preparation, and deployment support tasks.</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Projects</h2>

          <div className="mb-4">
            <h3 className="text-xl font-medium">EventMania</h3>
            <p className="text-gray-700">
              Django-based event management web application for creating and managing events.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium">NewsReader Portal</h3>
            <p className="text-gray-700">
              Online news platform built using JDBC, JSP, Servlets, and Spring Boot.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Skills</h2>
          <p className="text-gray-700">
            Python, Java, Groovy, JavaScript, SQL, AWS, Docker, Kubernetes,
            Argo CD, Django, Spring Boot, React, Node.js, MySQL, PostgreSQL
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Contact</h2>
          <p className="text-gray-700">Email: saitharunkatari24@gmail.com</p>
        </section>
      </div>
    </main>
  );
}
