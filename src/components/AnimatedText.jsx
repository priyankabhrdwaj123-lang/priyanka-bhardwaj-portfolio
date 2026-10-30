import { useEffect, useState } from 'react'

const words = [
  'Python Developer',
  'Web Developer',
  'Software Developer',
]

function AnimatedText() {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex]

    const timer = setTimeout(() => {
      if (!deleting) {
        setText(currentWord.substring(0, text.length + 1))

        if (text.length === currentWord.length) {
          setTimeout(() => setDeleting(true), 1000)
        }
      } else {
        setText(currentWord.substring(0, text.length - 1))

        if (text.length === 0) {
          setDeleting(false)
          setWordIndex((prev) => (prev + 1) % words.length)
        }
      }
    }, deleting ? 50 : 100)

    return () => clearTimeout(timer)
  }, [text, deleting, wordIndex])

  return (
    <span className="text-purple-400">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  )
}

export default AnimatedText