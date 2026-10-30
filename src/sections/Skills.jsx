
import Reveal from '../components/Reveal'

const skillCategories = [
  {
    number: '01',
    title: 'Programming',
    subtitle: 'Building programming fundamentals',
    icon: '⌘',
    status: 'Primary Focus',
    skills: ['Python', 'JavaScript'],
  },
  {
    number: '02',
    title: 'Frontend Development',
    subtitle: 'Creating responsive web interfaces',
    icon: '◈',
    status: 'Practical Experience',
    skills: ['HTML5', 'CSS3', 'React.js', 'Tailwind CSS', 'DOM'],
  },
  {
    number: '03',
    title: 'Backend Development',
    subtitle: 'Working with application logic and APIs',
    icon: '⚙',
    status: 'Hands-on Practice',
    skills: ['Python', 'Flask', 'REST API Integration', 'TSV'],
  },
  {
    number: '04',
    title: 'Tools & Cloud',
    subtitle: 'Development workflow and infrastructure',
    icon: '⌘',
    status: 'Exploring',
    skills: ['Git', 'GitHub', 'VS Code', 'Docker', 'AWS'],
  },
]

function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">

        {/* Section Heading */}
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-purple-400 uppercase tracking-[4px] text-sm font-semibold mb-3">
              What I Work With
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Technical <span className="text-purple-400">Skills</span>
            </h2>

            <p className="text-gray-400 mt-4 max-w-xl mx-auto leading-7">
              Technologies and tools I've explored through
              learning, development practice and projects.
            </p>
          </div>
        </Reveal>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-6">

          {skillCategories.map((category, index) => (
            <Reveal key={category.number} delay={index * 100}>
              <div className="group h-full rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-7 md:p-8 hover:border-purple-400/40 hover:-translate-y-1 transition-all duration-300">

                {/* Card Header */}
                <div className="flex items-start justify-between gap-4 mb-8">

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/15 border border-purple-400/20 flex items-center justify-center">
                      <span className="text-2xl text-purple-300">
                        {category.icon}
                      </span>
                    </div>

                    <div>
                      <p className="text-gray-500 text-xs tracking-widest">
                        {category.number}
                      </p>

                      <h3 className="text-xl font-bold text-white mt-1">
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  <span className="hidden sm:inline-block text-[11px] text-purple-300 border border-purple-400/20 bg-purple-500/10 rounded-full px-3 py-1.5">
                    {category.status}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-6">
                  {category.subtitle}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-gray-300 text-sm hover:border-purple-400/40 hover:text-purple-300 transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Bottom Accent */}
                <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between">
                  <span className="text-gray-500 text-xs">
                    Skill Area
                  </span>

                  <span className="text-purple-400 text-sm group-hover:translate-x-1 transition-transform">
                    ↗
                  </span>
                </div>

              </div>
            </Reveal>
          ))}

        </div>

        {/* Learning Note */}
        <Reveal delay={200}>
          <div className="mt-10 rounded-2xl border border-purple-400/20 bg-purple-500/[0.06] p-6 md:p-7 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="w-11 h-11 shrink-0 rounded-xl bg-purple-500/15 flex items-center justify-center">
              <span className="text-xl">✦</span>
            </div>

            <div>
              <h3 className="text-white font-semibold">
                Always Learning, Always Building
              </h3>

              <p className="text-gray-400 text-sm leading-7 mt-1">
                Currently strengthening Python fundamentals
                through coding exercises and practical projects.
              </p>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  )
}

export default Skills
