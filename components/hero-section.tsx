'use client'

import { useEffect, useRef, useState } from 'react'
import { Calendar, MapPin, IndianRupee, Clock } from 'lucide-react'

/* ===========================================
   SCROLL-TRIGGERED REVEAL (3D version)
   =========================================== */
function FadeInOnScroll({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add('animate-section-reveal')
            el.style.opacity = '1'
          }, delay)
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={ref} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  )
}

/* ===========================================
   ROTATING WIREFRAME (hidden on mobile)
   =========================================== */
function Wireframe() {
  return (
    <div className="absolute inset-0 hidden items-center justify-center pointer-events-none md:flex" aria-hidden="true">
      <div className="animate-wireframe-rotate relative size-[500px] opacity-[0.06] lg:size-[700px]">
        <div className="absolute inset-0 rounded-full border border-[#7F5AF0]" />
        <div className="absolute inset-[15%] rounded-full border border-[#5B2EFF]" />
        <div className="absolute inset-[30%] rounded-full border border-[#00D4FF]" />
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#7F5AF0]" />
        <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-[#7F5AF0]" />
        <div className="absolute left-1/2 top-1/2 h-full w-px -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#5B2EFF]" />
        <div className="absolute left-1/2 top-1/2 h-full w-px -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-[#5B2EFF]" />
      </div>
    </div>
  )
}

/* ===========================================
   PERSPECTIVE GRID (reduced on mobile)
   =========================================== */
function PerspectiveGrid() {
  return (
    <div className="absolute inset-x-0 bottom-0 hidden h-64 overflow-hidden pointer-events-none opacity-20 sm:block" aria-hidden="true">
      <div
        className="animate-grid-drift absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(127,90,240,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(127,90,240,0.15) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  )
}

/* ===========================================
   HERO SECTION
   =========================================== */
export default function HeroSection() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden py-14 md:py-28" style={{ transformStyle: 'preserve-3d' }}>
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(91,46,255,0.12)_0%,transparent_60%)]" />
      <Wireframe />
      <PerspectiveGrid />

      {/* Radial pulse glow */}
      <div
        className="animate-radial-pulse absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[300px] rounded-full pointer-events-none sm:size-[500px] md:size-[600px]"
        style={{
          background: 'radial-gradient(circle, rgba(91,46,255,0.08) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 text-center sm:px-6 md:px-10 lg:px-16" style={{ transformStyle: 'preserve-3d' }}>
        {/* Vanakkam */}
        <div
          className={`mb-3 transition-all duration-1000 delay-200 sm:mb-4 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="font-tamil text-2xl tracking-normal text-[#00D4FF] glow-neon animate-neon-flicker md:text-3xl">
            {'வணக்கம்!'}
          </p>
        </div>

        {/* Main heading */}
        <div
          className={`mb-4 sm:mb-6 ${loaded ? 'animate-z-entrance' : 'opacity-0'}`}
          style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
        >
          <h1 className="animate-light-sweep mx-auto max-w-5xl break-words font-sans text-[clamp(2rem,8vw,4rem)] font-bold leading-tight tracking-wide md:text-5xl lg:text-6xl">
            ENTER THE LAYERED CONSTRUCT
          </h1>
        </div>

        {/* Description */}
        <div
          className={`transition-all duration-1000 delay-700 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="mx-auto mb-3 max-w-3xl font-body text-base leading-relaxed text-[#A89BC2] md:text-lg lg:text-xl">
            {"AKKADIANZ'26 is a National Level Technical Symposium initiated by the Department of Electronics and Communication Engineering and the Department of Biomedical Engineering, SBM College of Engineering and Technology, Dindigul."}
          </p>
        </div>

        <div
          className={`transition-all duration-1000 delay-[800ms] ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="mx-auto mb-6 max-w-3xl font-body text-base leading-relaxed text-[#A89BC2] sm:mb-8 md:text-lg lg:text-xl">
            It is a constructed reality, engineered in layers, where intellect meets perception, logic meets instinct, and ideas are built with precision.
          </p>
        </div>

        {/* Taglines */}
        <div
          className={`transition-all duration-1000 delay-[900ms] ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="mx-auto mb-6 flex max-w-3xl flex-col items-center gap-2 font-body text-sm leading-relaxed tracking-wide text-[#E8E0F0]/80 sm:mb-8 md:text-base">
            <p>Every participant enters the construct.</p>
            <p>Every idea becomes architecture.</p>
            <p>Every layer reveals a new dimension of capability.</p>
          </div>
        </div>

        {/* Detail chips - single column on mobile */}
        <div
          className={`transition-all duration-1000 delay-[1000ms] ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="mx-auto mb-8 grid w-full max-w-5xl grid-cols-1 gap-6 md:mb-10 md:grid-cols-2 md:gap-10">
            <DetailChip icon={<Calendar className="size-3.5 sm:size-4" />} label="13 March 2026" />
            <DetailChip icon={<MapPin className="size-3.5 sm:size-4" />} label="SBMCET, Dindigul" />
            <DetailChip icon={<IndianRupee className="size-3.5 sm:size-4" />} label="Online: 150 / Offline: 200" />
            <DetailChip icon={<Clock className="size-3.5 sm:size-4" />} label="Last Reg: 10 March 2026" />
          </div>
        </div>

        {/* CTA Buttons - full width on mobile */}
        <div
          className={`transition-all duration-1000 delay-[1100ms] ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="flex flex-col items-stretch gap-3 md:flex-row md:items-center md:justify-center md:gap-4">
            <a
              href="https://tally.so/r/5Bz8vM"
              target="_blank"
              rel="noopener noreferrer"
                className="btn-3d inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#5B2EFF] to-[#00D4FF] px-6 py-3 font-sans text-xs font-bold uppercase tracking-widest text-[#0F172A] md:px-8 md:text-sm"
            >
              Register Now
            </a>
            <a
              href="mailto:akkadianz.ece.sbmcet@gmail.com?subject=Abstract%20Submission%20-%20AKKADIANZ'26"
                className="btn-3d inline-flex items-center justify-center gap-2 rounded-lg border border-[#7F5AF0]/40 bg-[#7F5AF0]/10 px-6 py-3 font-sans text-xs font-bold uppercase tracking-widest text-[#00D4FF] backdrop-blur-sm md:px-8 md:text-sm"
            >
              Submit Abstract
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ===========================================
   DETAIL CHIP
   =========================================== */
function DetailChip({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="construct-panel flex items-center justify-center gap-3 rounded-lg px-4 py-3 text-center">
      <span className="text-[#00D4FF]">{icon}</span>
      <span className="font-body text-sm leading-relaxed text-[#E8E0F0]/90">{label}</span>
    </div>
  )
}

export { FadeInOnScroll }


