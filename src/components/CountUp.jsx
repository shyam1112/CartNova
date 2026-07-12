import { useEffect, useState } from 'react'
import useReveal from '../hooks/useReveal'

const VALUE_PATTERN = /^([\d.]+)(.*)$/

export default function CountUp({ value, duration = 1400 }) {
  const [ref, visible] = useReveal()
  const [display, setDisplay] = useState(value)

  const match = value.match(VALUE_PATTERN)

  useEffect(() => {
    if (!visible || !match) return

    const target = parseFloat(match[1])
    const suffix = match[2]
    const decimals = match[1].includes('.') ? match[1].split('.')[1].length : 0
    const start = performance.now()

    let frame
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - (1 - progress) ** 3
      const current = target * eased
      setDisplay(`${current.toFixed(decimals)}${suffix}`)
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [visible])

  return (
    <span ref={ref}>{match ? display : value}</span>
  )
}
