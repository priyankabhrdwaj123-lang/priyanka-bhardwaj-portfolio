
import AnimatedText from '../components/AnimatedText'

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 pt-32 pb-20 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/15 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-14 items-center">

        {/* Left Content */}
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-400/20 bg-purple-500/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400" />
            <span className="text-purple-300 text-xs tracking-widest">
              DEVELOPER • CONTINUOUS LEARNER
            </span>
          </div>

          <p className="text-gray-400 text-lg mb-3">
            Hello, I'm
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight text-white">
            Priyanka
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Bhardwaj.
            </span>
          </h1>

          <h2 className="text-xl sm:text-2xl mt-7 font-medium text-gray-300">
            Python & Web Developer
          </h2>

          <div className="mt-2 text-purple-400 text-lg font-medium">
            <AnimatedText />
          </div>

          <p className="mt-7 max-w-xl text-gray-400 leading-8">
            I build web experiences and explore software development
            through practical projects. With a background in frontend
            development and hands-on application practice, I'm now
            focusing on Python to grow as a versatile software developer.
          </p>

          <div className="flex flex-wrap gap-4 mt-9">
            <a
              href="#projects"
              className="px-7 py-3.5 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-500 hover:shadow-lg hover:shadow-purple-500/25 transition"
            >
              Explore My Work ↗
            </a>

            <a
              href="#contact"
              className="px-7 py-3.5 rounded-xl border border-white/20 text-white hover:border-purple-400 hover:bg-white/5 transition"
            >
              Let's Connect
            </a>
          </div>

          <div className="flex items-center gap-6 mt-10 text-sm text-gray-400">
            <a
              href="https://github.com/priyankabhrdwaj123-lang"
              target="_blank"
              rel="noreferrer"
              className="hover:text-purple-400 transition"
            >
              GitHub ↗
            </a>

            <a
              href="#contact"
              className="hover:text-purple-400 transition"
            >
              Contact ↗
            </a>
          </div>
        </div>

        {/* Right Profile Card */}
        <div className="relative max-w-md w-full mx-auto">
          <div className="absolute inset-0 bg-purple-600/20 blur-[90px] rounded-full" />

          <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8 sm:p-10 shadow-2xl">

            <div className="flex items-center justify-between mb-10">
              <span className="text-sm text-gray-400 tracking-wider">
                DEVELOPER PROFILE
              </span>

              <span className="text-xs text-green-400 border border-green-400/20 bg-green-400/10 px-3 py-1.5 rounded-full">
                ● Growing & Building
              </span>
            </div>

            <div className="mb-9">
              <p className="text-gray-500 text-sm mb-2">
                PRIMARY DIRECTION
              </p>

              <h3 className="text-3xl font-bold text-white">
                Software Development
              </h3>

              <p className="text-gray-400 mt-3 leading-7">
                Building a strong foundation in Python while
                developing practical software and web projects.
              </p>
            </div>

            <div className="border-t border-white/10 pt-7">
              <p className="text-gray-500 text-sm mb-5">
                TECH STACK
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  'Python',
                  'JavaScript',
                  'React',
                  'HTML5',
                  'CSS3',
                  'Flask',
                  'Tailwind CSS',
                  'Git & GitHub'
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-lg border border-purple-400/20 bg-purple-500/10 text-purple-200 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-white/10 mt-8 pt-7">
              <p className="text-gray-500 text-sm mb-3">
                CURRENTLY EXPLORING
              </p>

              <div className="flex flex-wrap gap-2 text-sm text-gray-300">
                <span>Docker</span>
                <span className="text-purple-500">•</span>
                <span>AWS</span>
                <span className="text-purple-500">•</span>
                <span>Backend Development</span>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-500 text-sm mt-6">
            Learn • Create • Evolve
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
