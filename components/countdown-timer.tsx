'use client'

import { useEffect, useState } from 'react'
import { FadeInOnScroll } from '@/components/hero-section'

const TARGET_DATE = new Date('2026-03-10T23:59:59+05:30').getTime()

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function getTimeLeft(): TimeLeft | null {
  const now = Date.now()
  const diff = TARGET_DATE - now
  if (diff <= 0) return null
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

function TimerBox({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex w-full flex-col items-center gap-2">
      <div className="gradient-border-animated relative flex aspect-square w-full max-w-[110px] items-center justify-center rounded-xl bg-[#0a0520]/80 backdrop-blur-xl md:max-w-[130px] md:rounded-2xl lg:max-w-[150px]">
        {/* Radial pulse behind */}
        <div
          className="animate-radial-pulse absolute inset-0 rounded-xl sm:rounded-2xl"
          style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)' }}
          aria-hidden="true"
        />
        <span className="relative font-sans text-2xl font-bold glow-neon animate-neon-flicker md:text-3xl lg:text-4xl" style={{ color: '#00D4FF' }}>
          {value}
        </span>
      </div>
      <span className="font-body text-xs uppercase tracking-[0.15em] text-[#A89BC2] md:text-sm">
        {label}
      </span>
    </div>
  )
}

function Placeholder() {
  return (
    <section id="countdown" className="relative py-14 md:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-10 lg:px-16">
        <h2 className="mb-8 text-center font-sans text-2xl font-semibold text-[#00D4FF] md:text-3xl lg:text-4xl">
          Registration Closes In
        </h2>
        <div className="grid grid-cols-2 justify-items-center gap-6 sm:grid-cols-4 md:gap-10">
          {['Days', 'Hours', 'Minutes', 'Seconds'].map((label) => (
            <TimerBox key={label} value="--" label={label} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(getTimeLeft())
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  if (!mounted) return <Placeholder />

  if (!timeLeft) {
    return (
      <section id="countdown" className="relative py-14 md:py-28">
        <FadeInOnScroll className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-10 lg:px-16 text-center">
          <div className="gradient-border-animated relative inline-block rounded-xl bg-[#0a0520]/80 px-8 py-5 backdrop-blur-xl sm:rounded-2xl sm:px-12 sm:py-8">
            <p className="font-sans text-xl font-semibold uppercase tracking-[0.15em] glow-neon md:text-2xl lg:text-3xl" style={{ color: '#00D4FF' }}>
              REGISTRATION CLOSED
            </p>
          </div>
        </FadeInOnScroll>
      </section>
    )
  }

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ]

  return (
    <section id="countdown" className="relative py-14 md:py-28">
      {/* Background light burst */}
      <div
        className="animate-radial-pulse pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[300px] rounded-full sm:size-[500px]"
        style={{ background: 'radial-gradient(circle, rgba(91,46,255,0.06) 0%, transparent 60%)' }}
        aria-hidden="true"
      />

      <FadeInOnScroll className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-10 lg:px-16">
        <h2 className="mb-8 text-center font-sans text-2xl font-semibold text-[#00D4FF] glow-text md:text-3xl lg:text-4xl">
          Registration Closes In
        </h2>
        <div className="grid grid-cols-2 justify-items-center gap-6 sm:grid-cols-4 md:gap-10">
          {units.map((unit) => (
            <TimerBox
              key={unit.label}
              value={String(unit.value).padStart(2, '0')}
              label={unit.label}
            />
          ))}
        </div>

        {/* Separator line */}
        <div className="mt-8 h-px w-40 bg-gradient-to-r from-transparent via-[#5B2EFF]/40 to-transparent md:w-56" />
      </FadeInOnScroll>
    </section>
  )
}


