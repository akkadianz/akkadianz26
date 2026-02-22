'use client'

import { useEffect, useRef, useState } from 'react'

interface ParallaxState {
  rotateX: number
  rotateY: number
}

export function useMouseParallax(intensity: number = 0.5) {
  const [parallax, setParallax] = useState<ParallaxState>({ rotateX: 0, rotateY: 0 })
  const frameRef = useRef<number>(0)
  const targetRef = useRef<ParallaxState>({ rotateX: 0, rotateY: 0 })

  useEffect(() => {
    // Disable parallax on mobile/touch devices
    const isMobile = window.innerWidth < 768 || 'ontouchstart' in window
    if (isMobile) return

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2
      const y = (e.clientY / window.innerHeight - 0.5) * 2
      targetRef.current = {
        rotateX: -y * intensity,
        rotateY: x * intensity,
      }
    }

    const animate = () => {
      setParallax((prev) => ({
        rotateX: prev.rotateX + (targetRef.current.rotateX - prev.rotateX) * 0.05,
        rotateY: prev.rotateY + (targetRef.current.rotateY - prev.rotateY) * 0.05,
      }))
      frameRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove)
    frameRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(frameRef.current)
    }
  }, [intensity])

  return parallax
}
