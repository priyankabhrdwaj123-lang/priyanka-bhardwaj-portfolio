
import { useEffect, useState } from 'react'

function Loader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <div className="fixed inset-0 z-[200] bg-[#080817] flex flex-col items-center justify-center">

      <h1 className="text-5xl font-bold text-white">
        Priyanka<span className="text-purple-400">.</span>
      </h1>

      <div className="w-48 h-1 bg-white/10 rounded-full mt-8 overflow-hidden">
        <div className="h-full bg-purple-500 animate-pulse w-full origin-left"></div>
      </div>

      <p className="text-gray-400 text-sm mt-5 tracking-widest">
        LOADING PORTFOLIO...
      </p>

    </div>
  )
}

export default Loader
