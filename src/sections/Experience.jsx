
import Reveal from "../components/Reveal";

const journey = [
  {
    year: "6 Months",
    title: "Software Development Intern",
    company: "Bitloom Infoserv Private Limited",
    type: "Professional Experience",
    description:
      "Gained practical experience working on application workflows, CRUD operations, forms and database-related data management. Also contributed to Vibe Code Trainer responsibilities.",
    icon: "💼",
    featured: true,
  },
  {
    year: "2026",
    title: "Python Development",
    company: "Current Learning Focus",
    type: "Hands-on Learning",
    description:
      "Strengthening Python fundamentals through coding exercises, problem-solving and independent projects. Exploring practical application development with Python and Flask.",
    icon: "🐍",
  },
  {
    year: "2026",
    title: "Frontend Development",
    company: "Practical Projects",
    type: "Project Experience",
    description:
      "Building responsive websites and user interfaces using HTML, CSS, JavaScript, React and Tailwind CSS. Created projects across different website categories.",
    icon: "💻",
  },
  {
    year: "2026",
    title: "Cloud & DevOps",
    company: "Technical Practice",
    type: "Currently Exploring",
    description:
      "Developing familiarity with Linux, Git, Docker and AWS through hands-on practice, containerization and cloud deployment learning.",
    icon: "☁️",
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#080811] px-5 py-24 text-white sm:px-8 lg:px-16"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-purple-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-5xl">

        {/* Heading */}
        <Reveal>
          <div className="mb-20 text-center">
            <span className="mb-4 inline-block rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-purple-300">
              Experience & Growth
            </span>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              My Professional{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Journey
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
              My journey so far — gaining professional experience, building
              practical projects and continuously developing new skills.
            </p>
          </div>
        </Reveal>

        {/* Timeline */}
        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-purple-500 via-blue-500 to-transparent md:left-1/2" />

          <div className="space-y-12">
            {journey.map((item, index) => (
              <Reveal key={item.title} delay={index * 120}>
                <div className="relative flex items-start">

                  {/* Timeline Icon */}
                  <div className="absolute left-5 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-4 border-[#080811] bg-gradient-to-br from-purple-600 to-blue-600 shadow-lg shadow-purple-500/20 md:left-1/2">
                    <span className="text-base">{item.icon}</span>
                  </div>

                  {/* Timeline Card */}
                  <div
                    className={`ml-14 w-full md:ml-0 md:w-[calc(50%-3rem)] ${
                      index % 2 === 0
                        ? "md:mr-auto"
                        : "md:ml-auto"
                    }`}
                  >
                    <div
                      className={`group rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/40 hover:shadow-[0_15px_40px_rgba(124,58,237,0.10)] sm:p-7 ${
                        item.featured
                          ? "border-purple-400/30 bg-gradient-to-br from-purple-500/10 to-blue-500/5"
                          : "border-white/10 bg-white/[0.03]"
                      }`}
                    >

                      {/* Card Header */}
                      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                        <span className="text-sm font-bold text-purple-300">
                          {item.year}
                        </span>

                        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-gray-300">
                          {item.type}
                        </span>
                      </div>

                      {/* Content */}
                      <h3 className="mb-2 text-xl font-bold transition-colors group-hover:text-purple-300">
                        {item.title}
                      </h3>

                      <p className="mb-4 text-sm font-medium text-purple-300/80">
                        {item.company}
                      </p>

                      <p className="text-sm leading-7 text-gray-400">
                        {item.description}
                      </p>

                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Closing Text */}
        <Reveal>
          <div className="mt-20 text-center">
            <p className="text-lg font-semibold text-gray-200">
              Learning. Building. Growing.
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Every step is part of becoming a better developer.
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
}

export default Experience;
