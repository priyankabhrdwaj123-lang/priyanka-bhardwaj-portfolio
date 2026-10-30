import { useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', link: '#home' },
    { name: 'About', link: '#about' },
    { name: 'Skills', link: '#skills' },
    { name: 'Projects', link: '#projects' },
    { name: 'Experience', link: '#experience' },
    { name: 'Contact', link: '#contact' },
  ]

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2
      w-[92%] max-w-6xl z-50
      bg-white/10 backdrop-blur-xl
      border border-white/20
      rounded-2xl px-6 py-4
      shadow-lg">

      <div className="flex items-center justify-between">

        <a href="#home" onClick={closeMenu} className="text-2xl font-bold text-white">
          Priyanka<span className="text-purple-400">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-gray-300 font-medium">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="hover:text-purple-400 transition"
            >
              {item.name}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:block bg-purple-600 hover:bg-purple-500 text-white
          px-5 py-2.5 rounded-xl font-medium transition duration-300
          shadow-lg shadow-purple-500/20"
        >
          Hire Me
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

      </div>

      {menuOpen && (
        <div className="md:hidden mt-5 pt-4 border-t border-white/10 flex flex-col gap-4 text-gray-300 font-medium">

          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={closeMenu}
              className="hover:text-purple-400 transition py-1"
            >
              {item.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={closeMenu}
            className="bg-purple-600 hover:bg-purple-500 text-white text-center
            px-5 py-3 rounded-xl font-medium transition"
          >
            Hire Me
          </a>

        </div>
      )}

    </nav>
  )
}

export default Navbar