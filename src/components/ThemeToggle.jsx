import { useState, useEffect } from 'react'

function ThemeToggle() {
  const [light, setLight] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('light-theme', light)
  }, [light])

  return (
    <button
      onClick={() => setLight(!light)}
      aria-label="Toggle theme"
      className="fixed bottom-8 left-8 z-50 w-12 h-12 rounded-xl
      bg-white/10 backdrop-blur-xl border border-white/20
      text-xl hover:bg-purple-600 transition duration-300"
    >
      {light ? '🌙' : '☀️'}
    </button>
  )
}

export default ThemeToggle