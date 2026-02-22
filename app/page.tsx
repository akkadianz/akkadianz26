'use client'

import { useEffect, useState, type MouseEvent } from 'react'
import { Menu, X } from 'lucide-react'
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

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Countdown', href: '#countdown' },
  { label: 'Events', href: '#events' },
  { label: 'Abstract', href: '#abstract' },
  { label: 'Protocol', href: '#protocol' },
  { label: 'Recognition', href: '#recognition' },
  { label: 'Command', href: '#command' },
  { label: 'Contact', href: '#contact' },
]

export default function Home() {
  const [entered, setEntered] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeHref, setActiveHref] = useState('#home')
  const [isScrolled, setIsScrolled] = useState(false)
  const parallax = useMouseParallax(1.2)

  const openStartPage = () => {
    setMobileOpen(false)
    setActiveHref('#home')
    setEntered(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === '#home') {
      event.preventDefault()
      openStartPage()
      return
    }
    setMobileOpen(false)
  }

  useEffect(() => {
    if (!entered) return

    const onScroll = () => setIsScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) {
          setActiveHref(`#${visible[0].target.id}`)
        }
      },
      {
        rootMargin: '-30% 0px -55% 0px',
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    )

    NAV_LINKS.forEach((link) => {
      const id = link.href.replace('#', '')
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [entered])

  return (
    <>
      {!entered && <StartPage key="start" onEnter={() => setEntered(true)} />}

      {entered && (
        <header
          className={`fixed inset-x-0 top-0 z-[70] w-full max-w-full px-4 py-2 backdrop-blur-xl transition-all ${
            isScrolled
              ? 'border-[#00D4FF]/30 bg-[#0B0620]/85 shadow-[0_10px_40px_rgba(0,0,0,0.45)]'
              : 'border-[#7F5AF0]/25 bg-[#0B0620]/70'
          }`}
        >
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-2 md:px-10 lg:px-16">
            <a
              href="#home"
              onClick={(event) => {
                event.preventDefault()
                openStartPage()
              }}
              className="inline-flex min-w-0 max-w-[70vw] items-center gap-2 font-sans text-lg font-bold uppercase tracking-[0.1em] text-[#E8E0F0] sm:text-xl"
            >
              <img
                src="/images/akkadianz-logo.png"
                alt="AKKADIANZ logo"
                className="size-6 shrink-0 rounded-md object-contain sm:size-7"
              />
              <span className="truncate">{"AKKADIANZ'26"}</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="inline-flex items-center justify-center rounded-md border border-[#7F5AF0]/35 bg-[#120A2A]/70 p-2 text-[#C7D2FE] transition-colors hover:text-[#00D4FF] sm:hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>

            <nav className="hidden items-center gap-2 sm:flex">
              {NAV_LINKS.map((link) => {
                const isActive = activeHref === link.href
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(event) => handleNavClick(event, link.href)}
                    className={`rounded-md border px-2.5 py-1.5 font-sans text-[10px] font-bold uppercase tracking-[0.18em] transition-colors ${
                      isActive
                        ? 'border-[#00D4FF]/35 bg-[#00D4FF]/10 text-[#00D4FF]'
                        : 'border-transparent text-[#C7D2FE] hover:border-[#5B2EFF]/40 hover:text-[#00D4FF]'
                    }`}
                  >
                    {link.label}
                  </a>
                )
              })}
            </nav>
          </div>

          {mobileOpen && (
            <nav className="absolute left-0 top-full w-full overflow-hidden border-t border-[#7F5AF0]/25 bg-gradient-to-b from-[#120A2A]/95 to-[#0B0620]/95 p-6 sm:hidden">
              <div className="grid grid-cols-1 gap-3">
              {NAV_LINKS.map((link) => {
                const isActive = activeHref === link.href
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(event) => handleNavClick(event, link.href)}
                    className={`rounded-md border px-3 py-2 text-center font-sans text-sm font-bold uppercase tracking-[0.12em] transition-colors ${
                      isActive
                        ? 'border-[#00D4FF]/35 bg-[#00D4FF]/10 text-[#00D4FF]'
                        : 'border-[#5B2EFF]/20 text-[#C7D2FE] hover:border-[#5B2EFF]/40 hover:text-[#00D4FF]'
                    }`}
                  >
                    {link.label}
                  </a>
                )
              })}
              </div>
            </nav>
          )}
        </header>
      )}

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
          <main className="depth-mid relative z-10 max-w-screen overflow-hidden pt-20 sm:pt-24">
            <HeroSection />
            <CountdownTimer />
            <LayerSection />
            <AbstractSubmission />
            <ProtocolSection />
            <RecognitionSection />
            <CommandSection />
            <QuerySection />

            {/* Footer */}
            <footer className="relative border-t border-border/30 py-20 md:py-28">
              <div className="mx-auto w-full max-w-7xl space-y-6 px-4 text-center sm:px-6 md:px-10 lg:px-16">
                <p className="font-sans text-2xl font-semibold text-muted-foreground md:text-3xl lg:text-4xl">
                  {"AKKADIANZ'26 // SBM College of Engineering & Technology, Dindigul"}
                </p>
                <p className="font-body text-base leading-relaxed text-muted-foreground/70">
                  Department of ECE & BME
                </p>
                <p className="font-body text-sm uppercase tracking-[0.2em] text-muted-foreground/50">
                  © 2026 AKKADIANZ. All Rights Reserved.
                </p>
              </div>
            </footer>
          </main>
        </div>
      )}
    </>
  )
}



