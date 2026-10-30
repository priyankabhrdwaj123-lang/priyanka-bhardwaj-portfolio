import { useEffect, useState } from 'react'

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener('mousemove', moveCursor)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }
  }, [])

  return (
    <div
      className="hidden md:block fixed top-0 left-0 w-5 h-5 rounded-full border-2 border-purple-400 pointer-events-none z-[100] transition-transform duration-75"
      style={{
        transform: `translate(${position.x - 10}px, ${position.y - 10}px)`,
      }}
    />
  )
}

export default CustomCursor