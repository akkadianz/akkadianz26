'use client'

import { Award, Trophy } from 'lucide-react'
import { FadeInOnScroll } from '@/components/hero-section'

export default function RecognitionSection() {
  return (
    <section id="recognition" className="relative py-14 md:py-28">
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-10 lg:px-16">
        <FadeInOnScroll className="mb-10 space-y-4 text-center md:mb-14">
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.35em] text-[#00D4FF] glow-text">
            Recognition
          </p>
          <h2 className="font-sans text-2xl font-semibold text-foreground md:text-3xl lg:text-4xl">
            Honour Within the Construct
          </h2>
        </FadeInOnScroll>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10">
          <FadeInOnScroll delay={150}>
            <div className="construct-panel flex h-full flex-col items-center gap-4 rounded-xl p-6 text-center md:p-8">
              <div className="flex size-11 items-center justify-center rounded-xl bg-[#00D4FF]/8 sm:size-14">
                <Award className="size-5 text-[#00D4FF] sm:size-7" />
              </div>
              <h3 className="font-sans text-lg font-semibold uppercase tracking-wider text-foreground md:text-xl">
                All Entrants
              </h3>
              <p className="font-body text-sm leading-relaxed text-muted-foreground md:text-base">
                Participation Certificates will be issued to all registered entrants.
              </p>
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll delay={300}>
            <div className="construct-panel flex h-full flex-col items-center gap-4 rounded-xl p-6 text-center md:p-8">
              <div className="flex size-11 items-center justify-center rounded-xl bg-[#5B2EFF]/10 sm:size-14">
                <Trophy className="size-5 text-[#5B2EFF] sm:size-7" />
              </div>
              <h3 className="font-sans text-lg font-semibold uppercase tracking-wider text-foreground md:text-xl">
                Winners & Runners-Up
              </h3>
              <p className="font-body text-sm leading-relaxed text-muted-foreground md:text-base">
                Winners and Runners-Up will be recognized within their respective layers.
              </p>
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  )
}


