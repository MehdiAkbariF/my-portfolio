'use client'

import { useEffect, useState, useRef } from 'react'

type ScrambleTextProps = {
  text: string
  className?: string
  duration?: number
}

const CHARS = '!<>-_\\/[]{}—=+*^?#________'

export function ScrambleText({
  text,
  className = '',
  duration = 800,
}: ScrambleTextProps) {
  const [display, setDisplay] = useState(text)
  const frameRef = useRef(0)
  const queueRef = useRef<{ from: string; to: string; start: number; end: number }[]>([])

  useEffect(() => {
    const oldText = display
    const length = Math.max(oldText.length, text.length)
    const queue: typeof queueRef.current = []

    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ''
      const to = text[i] || ''
      const start = Math.floor(Math.random() * duration * 0.4)
      const end = start + Math.floor(Math.random() * duration * 0.6)
      queue.push({ from, to, start, end })
    }

    queueRef.current = queue
    frameRef.current = 0

    let raf: number
    const tick = () => {
      let output = ''
      let complete = 0

      for (let i = 0; i < queue.length; i++) {
        const { from, to, start, end } = queue[i]
        if (frameRef.current >= end) {
          complete++
          output += to
        } else if (frameRef.current >= start) {
          const char = CHARS[Math.floor(Math.random() * CHARS.length)]
          output += char
        } else {
          output += from
        }
      }

      setDisplay(output)

      if (complete === queue.length) {
        cancelAnimationFrame(raf)
      } else {
        frameRef.current += 16
        raf = requestAnimationFrame(tick)
      }
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, duration])

  return <span className={className}>{display}</span>
}