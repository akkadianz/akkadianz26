'use client'

import { useState } from 'react'
import StartPage from '@/components/start-page'
import ParticleField from '@/components/particle-field'
import { useMouseParallax } from '@/hooks/use-mouse-parallax'
import HeroSection from '@/components/hero-section'
import CountdownTimer from '@/components/countdown-timer'
import LayerSection from '@/components/event-accordion'
import ProtocolSection from '@/components/protocol-section'
import RecognitionSection from '@/components/recognition-section'
import AbstractSubmission from '@/components/abstract-submission'
import CommandSection from '@/components/command-section'
import QuerySection from '@/components/query-section'

export default function Home() {
  const [entered, setEntered] = useState(false)
  const parallax = useMouseParallax(1.2)

  return (
    <>
      <StartPage onEnter={() => setEntered(true)} />

      {entered && (
        <div
          className="perspective-container relative min-h-screen"
          style={{
            transform: `rotateX(${parallax.rotateX}deg) rotateY(${parallax.rotateY}deg)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          {/* Background depth layer: grid + radial glows */}
          <div className="depth-bg pointer-events-none fixed inset-0 z-0">
            <div className="grid-bg absolute inset-0 opacity-30" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(91,46,255,0.12)_0%,transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(0,212,255,0.06)_0%,transparent_50%)]" />
          </div>

          {/* Particle field */}
          <ParticleField />

          {/* Foreground glow layer */}
          <div className="depth-fg pointer-events-none fixed inset-0 z-50">
            <div className="absolute left-1/4 top-1/4 size-96 rounded-full bg-[radial-gradient(circle,rgba(91,46,255,0.04)_0%,transparent_70%)] blur-3xl" />
            <div className="absolute right-1/4 bottom-1/3 size-80 rounded-full bg-[radial-gradient(circle,rgba(0,212,255,0.03)_0%,transparent_70%)] blur-3xl" />
          </div>

          {/* Mid content layer */}
          <main className="depth-mid relative z-10 overflow-hidden">
            <HeroSection />
            <CountdownTimer />
            <LayerSection />
            <AbstractSubmission />
            <ProtocolSection />
            <RecognitionSection />
            <CommandSection />
            <QuerySection />

            {/* Footer */}
            <footer className="relative border-t border-border/30 py-10 px-4 text-center">
              <p className="font-sans text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground">
                {"AKKADIANZ'26 // SBM College of Engineering & Technology, Dindigul"}
              </p>
              <p className="mt-2 font-body text-xs text-muted-foreground/60">
                Department of ECE & BME
              </p>
            </footer>
          </main>
        </div>
      )}
    </>
  )
}
