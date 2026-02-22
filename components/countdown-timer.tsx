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
    <div className="flex flex-col items-center gap-1.5 sm:gap-3">
      <div className="gradient-border-animated relative flex size-14 items-center justify-center rounded-xl bg-[#0a0520]/80 backdrop-blur-xl sm:size-18 md:size-24 sm:rounded-2xl">
        {/* Radial pulse behind */}
        <div
          className="animate-radial-pulse absolute inset-0 rounded-xl sm:rounded-2xl"
          style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)' }}
          aria-hidden="true"
        />
        <span className="relative font-sans text-xl font-bold glow-neon animate-neon-flicker sm:text-2xl md:text-4xl" style={{ color: '#00D4FF' }}>
          {value}
        </span>
      </div>
      <span className="font-body text-[8px] uppercase tracking-[0.15em] text-[#A89BC2] sm:text-[10px] sm:tracking-[0.25em] md:text-xs">
        {label}
      </span>
    </div>
  )
}

function Placeholder() {
  return (
    <section className="relative py-12 px-4 sm:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-6 font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-[#00D4FF] sm:mb-8 sm:text-xs sm:tracking-[0.4em]">
          Registration Closes In
        </h2>
        <div className="flex items-center justify-center gap-3 sm:gap-6 md:gap-8">
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
      <section className="relative py-12 px-4 sm:py-20">
        <FadeInOnScroll className="mx-auto max-w-3xl text-center">
          <div className="gradient-border-animated relative inline-block rounded-xl bg-[#0a0520]/80 px-8 py-5 backdrop-blur-xl sm:rounded-2xl sm:px-12 sm:py-8">
            <p className="font-sans text-base font-bold uppercase tracking-[0.2em] glow-neon sm:text-xl sm:tracking-[0.3em] md:text-2xl" style={{ color: '#00D4FF' }}>
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
    <section className="relative py-12 px-4 sm:py-20">
      {/* Background light burst */}
      <div
        className="animate-radial-pulse pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[300px] rounded-full sm:size-[500px]"
        style={{ background: 'radial-gradient(circle, rgba(91,46,255,0.06) 0%, transparent 60%)' }}
        aria-hidden="true"
      />

      <FadeInOnScroll className="relative mx-auto max-w-3xl text-center">
        <h2 className="mb-6 font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-[#00D4FF] glow-text sm:mb-10 sm:text-xs sm:tracking-[0.4em]">
          Registration Closes In
        </h2>
        <div className="flex items-center justify-center gap-3 sm:gap-6 md:gap-8">
          {units.map((unit) => (
            <TimerBox
              key={unit.label}
              value={String(unit.value).padStart(2, '0')}
              label={unit.label}
            />
          ))}
        </div>

        {/* Separator line */}
        <div className="mx-auto mt-6 h-px w-32 bg-gradient-to-r from-transparent via-[#5B2EFF]/40 to-transparent sm:mt-10 sm:w-48" />
      </FadeInOnScroll>
    </section>
  )
}
