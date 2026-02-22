'use client'

import { Award, Trophy } from 'lucide-react'
import { FadeInOnScroll } from '@/components/hero-section'

export default function RecognitionSection() {
  return (
    <section id="recognition" className="relative py-16 px-4 sm:py-24">
      <div className="relative mx-auto max-w-3xl">
        <FadeInOnScroll className="mb-10 text-center sm:mb-14">
          <p className="mb-1.5 font-sans text-[9px] font-bold uppercase tracking-[0.4em] text-[#00D4FF] glow-text sm:mb-2 sm:text-[10px] sm:tracking-[0.5em]">
            Recognition
          </p>
          <h2 className="font-sans text-xl font-bold tracking-wider text-foreground sm:text-2xl md:text-3xl text-balance">
            Honour Within the Construct
          </h2>
        </FadeInOnScroll>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <FadeInOnScroll delay={150}>
            <div className="construct-panel flex flex-col items-center gap-3 rounded-xl p-6 text-center sm:gap-4 sm:rounded-2xl sm:p-8">
              <div className="flex size-11 items-center justify-center rounded-xl bg-[#00D4FF]/8 sm:size-14">
                <Award className="size-5 text-[#00D4FF] sm:size-7" />
              </div>
              <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-foreground sm:text-sm">
                All Entrants
              </h3>
              <p className="font-body text-xs leading-relaxed text-muted-foreground sm:text-sm">
                Participation Certificates will be issued to all registered entrants.
              </p>
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll delay={300}>
            <div className="construct-panel flex flex-col items-center gap-3 rounded-xl p-6 text-center sm:gap-4 sm:rounded-2xl sm:p-8">
              <div className="flex size-11 items-center justify-center rounded-xl bg-[#5B2EFF]/10 sm:size-14">
                <Trophy className="size-5 text-[#5B2EFF] sm:size-7" />
              </div>
              <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-foreground sm:text-sm">
                Winners & Runners-Up
              </h3>
              <p className="font-body text-xs leading-relaxed text-muted-foreground sm:text-sm">
                Winners and Runners-Up will be recognized within their respective layers.
              </p>
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  )
}
