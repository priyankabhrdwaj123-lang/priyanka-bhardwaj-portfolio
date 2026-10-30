import { useEffect, useRef } from 'react'

function Reveal({ children, delay = 0 }) {
  const elementRef = useRef(null)

  useEffect(() => {
    const element = elementRef.current

    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.animate(
            [
              {
                opacity: 0,
                transform: 'translateY(40px)',
              },
              {
                opacity: 1,
                transform: 'translateY(0)',
              },
            ],
            {
              duration: 800,
              delay,
              easing: 'ease-out',
              fill: 'forwards',
            }
          )

          observer.unobserve(element)
        }
      },
      {
        threshold: 0.15,
      }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [delay])

  return <div ref={elementRef}>{children}</div>
}

export default Reveal