function Footer() {
  return (
    <footer className="border-t border-white/10 bg-white/[0.02] backdrop-blur-xl px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">

        <a href="#home" className="text-2xl font-bold text-white">
          Priyanka<span className="text-purple-400">.</span>
        </a>

        <p className="text-gray-400 text-sm text-center">
          Building ideas into reality, one line of code at a time.
        </p>

        <div className="flex gap-5 text-gray-400 text-sm">
          <a href="#home" className="hover:text-purple-400 transition">Home</a>
          <a href="#projects" className="hover:text-purple-400 transition">Projects</a>
          <a href="#contact" className="hover:text-purple-400 transition">Contact</a>
        </div>

      </div>

      <div className="max-w-6xl mx-auto border-t border-white/10 mt-7 pt-6 text-center">
        <p className="text-gray-500 text-xs">
          © {new Date().getFullYear()} Priyanka Bhardwaj. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer