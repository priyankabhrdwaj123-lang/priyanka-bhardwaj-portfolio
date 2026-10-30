
import Reveal from '../components/Reveal'

const principles = [
  {
    number: '01',
    title: 'Learn by Building',
    description:
      'I prefer hands-on learning through practical projects, experimenting with ideas and applying concepts to real applications.',
  },
  {
    number: '02',
    title: 'Think & Solve',
    description:
      'I enjoy understanding problems, breaking them into smaller steps and developing logical approaches to solve them.',
  },
  {
    number: '03',
    title: 'Keep Improving',
    description:
      'I believe consistent practice, curiosity and learning from mistakes are essential for becoming a better developer.',
  },
]

function About() {
  return (
    <section id="about" className="relative py-24 md:py-28 px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-purple-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">

        {/* Heading */}
        <Reveal>
          <div className="text-center mb-14">
            <p className="text-purple-400 uppercase tracking-[4px] text-xs sm:text-sm font-semibold mb-3">
              Beyond The Code
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-white">
              About <span className="text-purple-400">Myself</span>
            </h2>

            <p className="text-gray-400 mt-4 max-w-xl mx-auto leading-7">
              My journey, my perspective, and what motivates me
              to keep growing in technology.
            </p>
          </div>
        </Reveal>

        {/* Story and Goal */}
        <div className="grid lg:grid-cols-5 gap-6 items-stretch">

          {/* My Story */}
          <div className="lg:col-span-3">
            <Reveal>
              <div className="h-full rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-7 md:p-9">

                <div className="flex items-center gap-3 mb-7">
                  <div className="w-11 h-11 rounded-xl bg-purple-500/15 border border-purple-400/20 flex items-center justify-center">
                    <span className="text-xl">✦</span>
                  </div>

                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-widest">
                      A Little About Me
                    </p>
                    <h3 className="text-xl font-bold text-white">
                      My Journey
                    </h3>
                  </div>
                </div>

                <h4 className="text-2xl md:text-3xl font-bold text-white leading-snug">
                  Turning curiosity into
                  <span className="text-purple-400"> practical skills.</span>
                </h4>

                <div className="mt-6 space-y-4 text-gray-400 leading-7">
                  <p>
                    My journey in technology began with web development,
                    where I explored how websites are designed and
                    transformed into interactive experiences.
                  </p>

                  <p>
                    Working on development tasks and personal projects
                    helped me become more interested in application
                    logic, programming and backend development.
                  </p>

                  <p>
                    I'm now strengthening my Python fundamentals and
                    applying what I learn through practical projects,
                    while continuing to build on my web development
                    experience.
                  </p>
                </div>

              </div>
            </Reveal>
          </div>

          {/* My Goal */}
          <div className="lg:col-span-2">
            <Reveal delay={150}>
              <div className="h-full rounded-3xl border border-purple-400/20 bg-gradient-to-br from-purple-500/10 to-blue-500/5 backdrop-blur-xl p-7 md:p-8 flex flex-col justify-between">

                <div>
                  <p className="text-purple-300 text-xs uppercase tracking-widest font-semibold">
                    My Vision
                  </p>

                  <h3 className="text-3xl font-bold text-white mt-5 leading-snug">
                    Build things
                    <span className="text-purple-400"> that matter.</span>
                  </h3>

                  <p className="text-gray-400 mt-5 leading-8">
                    I want to develop the ability to create useful,
                    reliable and meaningful software solutions.
                    For me, every project is an opportunity to
                    understand something new and become better.
                  </p>
                </div>

                <div className="mt-10 pt-6 border-t border-white/10">
                  <p className="text-white font-semibold">
                    What I believe in
                  </p>

                  <p className="text-gray-400 text-sm mt-2 leading-7">
                    Curiosity · Consistency · Creativity
                  </p>
                </div>

              </div>
            </Reveal>
          </div>
        </div>

        {/* Working Principles */}
        <div className="mt-20">

          <Reveal>
            <div className="mb-9">
              <p className="text-purple-400 uppercase tracking-[4px] text-xs sm:text-sm font-semibold mb-3">
                My Approach
              </p>

              <h3 className="text-3xl md:text-4xl font-bold text-white">
                How I <span className="text-purple-400">Work</span>
              </h3>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-5">
            {principles.map((item, index) => (
              <Reveal key={item.number} delay={index * 100}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-7 hover:border-purple-400/40 hover:-translate-y-1 transition-all duration-300">

                  <div className="flex items-center justify-between">
                    <span className="text-purple-400 text-sm font-semibold">
                      {item.number}
                    </span>

                    <span className="w-8 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
                  </div>

                  <h4 className="text-xl font-bold text-white mt-6">
                    {item.title}
                  </h4>

                  <p className="text-gray-400 text-sm leading-7 mt-3">
                    {item.description}
                  </p>

                </div>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default About
