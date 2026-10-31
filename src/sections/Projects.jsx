import React from "react";

const projects = [
  {
    number: "01",
    title: "PrimeNest",
    category: "Real Estate Platform",
    description:
      "A modern real estate website featuring property listings, search filters, property details and an intuitive browsing experience.",
    technologies: ["HTML", "CSS", "JavaScript"],
    status: "Completed",
    link: "https://priyankabhrdwaj123-lang.github.io/PrimeNest-RealState-WebApp/pages/index.html",
    featured: true,
  },
  {
    number: "02",
    title: "Glow Salon",
    category: "Beauty & Wellness",
    description:
      "A stylish salon website showcasing services, pricing, gallery, customer testimonials and an appointment interface.",
    technologies: ["HTML", "CSS", "JavaScript"],
    status: "Completed",
    link: "https://priyankabhrdwaj123-lang.github.io/glow-salon-website/",
  },
  {
    number: "03",
    title: "TastyBite",
    category: "Restaurant Website",
    description:
      "A restaurant website with an interactive menu, special offers, food gallery, customer reviews and table reservation interface.",
    technologies: ["HTML", "CSS", "JavaScript"],
    status: "Completed",
    link: "https://priyankabhrdwaj123-lang.github.io/TastyBite-Food-Website-/",
  },
  {
    number: "04",
    title: "Boutique Website",
    category: "Fashion & Lifestyle",
    description:
      "An elegant boutique website concept featuring fashion collections, product presentation and a customer enquiry experience.",
    technologies: ["HTML", "CSS", "JavaScript"],
    status: "Completed",
    link: "https://priyankabhrdwaj123-lang.github.io/boutique-website-demo/",
  },
  {
    number: "05",
    title: "SpendWise",
    category: "Expense Tracker",
    description:
      "A Python and Flask-based expense tracking application. Currently developing features for recording and managing personal expenses using local TSV file storage.",
    technologies: ["Python", "Flask", "HTML", "CSS", "TSV"],
    status: "In Progress",
    link: null,
  },
  {
    number: "06",
    title: "Weather Application",
    category: "Python Practice Project",
    description:
      "A weather application built with Python that uses API requests to retrieve weather information for a selected location.",
    technologies: ["Python", "Requests", "REST API"],
    status: "Practice Project",
    link: null,
  },
  {
    number: "07",
    title: "SmartNumberChallenge",
    category: "Python Game Application",
    description:
      "An interactive number guessing game built with Python and Flask, featuring three difficulty levels, hints, score tracking, and a leaderboard.",
    technologies: ["Python", "Flask", "HTML", "CSS", "JSON"],
    status: "Completed",
    link: "https://smartnumberchallenge-1.onrender.com",
    githubLink:
      "https://github.com/priyankabhrdwaj123-lang/SmartNumberChallenge",
  },
  {
    number: "08",
    title: "MiniWebSearch",
    category: "Python Web Application",
    description:
      "A Python-based web search application built with Flask, providing a simple interface for searching and exploring web results.",
    technologies: ["Python", "Flask", "HTML", "CSS"],
    status: "Completed",
    link: "https://miniwebsearch.onrender.com",
    githubLink:
      "https://github.com/priyankabhrdwaj123-lang/MiniWebSearch",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#080811] px-5 py-24 text-white sm:px-8 lg:px-16"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-purple-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-purple-300">
            My Portfolio
          </span>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            A collection of projects where I explore ideas, develop practical
            solutions and continuously improve my development skills.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.number}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-2 hover:border-purple-400/40 hover:shadow-[0_15px_50px_rgba(124,58,237,0.12)] ${
                project.featured
                  ? "border-purple-400/30 bg-gradient-to-br from-purple-500/10 to-blue-500/5"
                  : "border-white/10 bg-white/[0.03]"
              }`}
            >
              {/* Card Top */}
              <div className="mb-8 flex items-center justify-between">
                <span className="font-mono text-sm tracking-widest text-purple-300/70">
                  / {project.number}
                </span>

                <span
                  className={`rounded-full border px-3 py-1 text-[10px] font-semibold tracking-wide ${
                    project.status === "Completed"
                      ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-300"
                      : project.status === "In Progress"
                      ? "border-amber-400/20 bg-amber-400/10 text-amber-300"
                      : "border-blue-400/20 bg-blue-400/10 text-blue-300"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              {/* Project Details */}
              <div className="flex-1">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-purple-300">
                  {project.category}
                </p>

                <h3 className="mb-4 text-2xl font-bold tracking-tight transition-colors group-hover:text-purple-300">
                  {project.title}
                </h3>

                <p className="min-h-[100px] text-sm leading-7 text-gray-400">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="mt-7">
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500">
                  Technologies
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-8 border-t border-white/10 pt-5">
                <div className="flex flex-wrap items-center gap-5">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-purple-300 transition-all hover:gap-3 hover:text-white"
                    >
                      Live Demo ↗
                    </a>
                  )}

                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-gray-300 transition-all hover:text-white"
                    >
                      GitHub ↗
                    </a>
                  )}

                  {!project.link && (
                    <span className="inline-flex items-center gap-2 text-sm text-gray-500">
                      <span className="h-2 w-2 rounded-full bg-amber-400" />
                      Currently building
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-14 text-center">
          <p className="text-sm text-gray-500">
            More projects and improvements coming as I continue learning and
            building.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
