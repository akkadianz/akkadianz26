'use client'

import { ShieldCheck, CreditCard, IdCard, Users, Clock, Gavel, BookOpen } from 'lucide-react'
import { FadeInOnScroll } from '@/components/hero-section'

const PROTOCOLS = [
  { icon: CreditCard, text: 'Registration Fee: \u20B9150 per participant' },
  { icon: CreditCard, text: 'Mode of Payment: UPI' },
  { icon: IdCard, text: 'Participants must carry valid College ID Card' },
  { icon: Users, text: 'Teams must report together before event commencement' },
  { icon: Clock, text: 'Reporting Time: 09:30' },
  { icon: Gavel, text: "Judges' decisions are final and binding" },
  { icon: BookOpen, text: 'Participants must adhere to event-specific rules' },
]

export default function ProtocolSection() {
  return (
    <section id="protocol" className="relative py-16 px-4 sm:py-24">
      {/* Background burst */}
      <div
        className="pointer-events-none absolute right-0 top-1/3 size-48 rounded-full bg-[radial-gradient(circle,rgba(91,46,255,0.04)_0%,transparent_70%)] blur-3xl sm:size-80"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-3xl">
        <FadeInOnScroll className="mb-10 text-center sm:mb-14">
          <p className="mb-1.5 font-sans text-[9px] font-bold uppercase tracking-[0.4em] text-[#00D4FF] glow-text sm:mb-2 sm:text-[10px] sm:tracking-[0.5em]">
            Access Protocol
          </p>
          <h2 className="font-sans text-xl font-bold tracking-wider text-foreground sm:text-2xl md:text-3xl lg:text-4xl text-balance">
            To Enter the Construct
          </h2>
        </FadeInOnScroll>

        <FadeInOnScroll delay={200}>
          <div className="construct-panel rounded-xl p-4 sm:rounded-2xl sm:p-6 md:p-8">
            <div className="mb-4 flex items-center gap-2 sm:mb-6 sm:gap-3">
              <ShieldCheck className="size-4 text-[#00D4FF] sm:size-5" />
              <h3 className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#00D4FF] sm:text-xs sm:tracking-[0.3em]">
                Verification Required
              </h3>
            </div>
            <p className="mb-4 font-body text-xs text-muted-foreground sm:mb-6 sm:text-sm">
              Access is confirmed only upon verification. Follow the protocol below.
            </p>
            <ul className="space-y-3 sm:space-y-4">
              {PROTOCOLS.map((item, i) => (
                <li key={i} className="flex items-center gap-3 group sm:gap-4">
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#5B2EFF]/8 transition-all duration-300 group-hover:bg-[#5B2EFF]/15 group-hover:shadow-[0_0_15px_rgba(0,212,255,0.1)] sm:size-10">
                    <item.icon className="size-3.5 text-[#00D4FF] sm:size-4" />
                  </div>
                  <span className="font-body text-xs text-foreground/80 sm:text-sm">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  )
}
