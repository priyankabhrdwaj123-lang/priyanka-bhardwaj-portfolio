import { useEffect, useRef, useState } from 'react'

function AnimatedCounter({ value = 0, duration = 1500, suffix = '+' }) {
  const [count, setCount] = useState(0)
  const [start, setStart] = useState(false)
  const counterRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!start) return

    let current = 0
    const increment = value / (duration / 16)

    const timer = setInterval(() => {
      current += increment

      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [start, value, duration])

  return (
    <span ref={counterRef}>
      {count}{suffix}
    </span>
  )
}

export default AnimatedCounter