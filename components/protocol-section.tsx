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
    <section id="protocol" className="relative py-14 md:py-28">
      {/* Background burst */}
      <div
        className="pointer-events-none absolute right-0 top-1/3 size-48 rounded-full bg-[radial-gradient(circle,rgba(91,46,255,0.04)_0%,transparent_70%)] blur-3xl sm:size-80"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-4xl px-4 sm:px-6 md:px-10 lg:px-16 text-center">
        <FadeInOnScroll className="mb-10 space-y-4 text-center md:mb-14">
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.35em] text-[#00D4FF] glow-text">
            Access Protocol
          </p>
          <h2 className="font-sans text-2xl font-semibold text-foreground md:text-3xl lg:text-4xl">
            To Enter the Construct
          </h2>
        </FadeInOnScroll>

        <FadeInOnScroll delay={200}>
          <div className="construct-panel mx-auto w-full max-w-4xl rounded-xl p-5 md:p-8 text-center">
            <div className="mb-6 flex items-center justify-center gap-3">
              <ShieldCheck className="size-4 text-[#00D4FF] sm:size-5" />
              <h3 className="font-sans text-lg font-semibold uppercase tracking-wider text-[#00D4FF] md:text-xl">
                Verification Required
              </h3>
            </div>
            <p className="mx-auto mb-6 max-w-3xl break-words font-body text-sm leading-relaxed text-muted-foreground md:text-base">
              Access is confirmed only upon verification. Follow the protocol below.
            </p>
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {PROTOCOLS.map((item, i) => (
                <li key={i} className="flex items-center justify-center gap-3 group text-center sm:gap-4">
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#5B2EFF]/8 transition-all duration-300 group-hover:bg-[#5B2EFF]/15 group-hover:shadow-[0_0_15px_rgba(0,212,255,0.1)] sm:size-10">
                    <item.icon className="size-3.5 text-[#00D4FF] sm:size-4" />
                  </div>
                  <span className="font-body break-words text-sm leading-relaxed text-foreground/80 md:text-base">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  )
}


