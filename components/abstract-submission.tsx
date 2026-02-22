'use client'

import { FileText, Upload } from 'lucide-react'
import { FadeInOnScroll } from '@/components/hero-section'

export default function AbstractSubmission() {
  return (
    <section id="abstract" className="relative py-14 md:py-28">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute left-1/4 top-1/3 size-48 rounded-full bg-[radial-gradient(circle,rgba(0,212,255,0.03)_0%,transparent_70%)] blur-3xl sm:size-96"
        aria-hidden="true"
      />

      <div className="relative w-full flex justify-center px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="mx-auto w-full max-w-3xl space-y-6 text-center">
        <FadeInOnScroll className="mb-10 space-y-4 text-center md:mb-14">
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.35em] text-[#00D4FF] glow-text">
            Paper Presentation
          </p>
          <h2 className="font-sans text-2xl font-semibold text-foreground md:text-3xl lg:text-4xl">
            Submit Your Abstract
          </h2>
        </FadeInOnScroll>

        <FadeInOnScroll delay={200}>
          <div className="construct-panel mx-auto w-full max-w-3xl rounded-xl p-5 md:p-8 text-center">
            <div className="mb-6 flex items-center justify-center gap-3">
              <FileText className="size-4 text-[#00D4FF] sm:size-5" />
              <h3 className="font-sans text-lg font-semibold uppercase tracking-wider text-[#00D4FF] md:text-xl">
                Submission Format
              </h3>
            </div>

            <p className="mx-auto mb-6 max-w-3xl break-words font-body text-sm leading-relaxed text-muted-foreground md:text-base">
              Submit your abstract via email to{' '}
              <a
                href="mailto:akkadianz.ece.sbmcet@gmail.com?subject=Abstract%20Submission%20-%20AKKADIANZ'26"
                className="text-[#00D4FF] underline underline-offset-2 hover:text-[#00D4FF]/80 break-all"
              >
                akkadianz.ece.sbmcet@gmail.com
              </a>{' '}
              on or before <span className="font-semibold text-foreground">10 March 2026</span>.
            </p>

            <div className="mb-6 space-y-4 text-center">
              <h4 className="font-sans text-lg font-semibold uppercase tracking-wider text-[#5B2EFF] md:text-xl">
                Required Fields
              </h4>
              <ul className="space-y-2">
                {[
                  'Title of the Paper',
                  'Author(s) Name & Institution',
                  'Abstract (Max 250 words)',
                  'Keywords',
                ].map((item) => (
                  <li key={item} className="flex items-center justify-center gap-3 break-words text-center font-body text-sm leading-relaxed text-foreground/80 md:text-base">
                    <span className="block size-1 shrink-0 rounded-full bg-[#5B2EFF] sm:size-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6 space-y-4 text-center">
              <h4 className="font-sans text-lg font-semibold uppercase tracking-wider text-[#5B2EFF] md:text-xl">
                Guidelines
              </h4>
              <ul className="space-y-2">
                {[
                  'The abstract should clearly define the problem, methodology, and key findings.',
                  'Ensure that the content is original and plagiarism-free.',
                  'The abstract should be within 250 words.',
                  'Upload your full paper in PDF format (recommended).',
                  'Late submissions may not be considered.',
                ].map((item) => (
                  <li key={item} className="flex items-start justify-center gap-3 break-words text-center font-body text-sm leading-relaxed text-foreground/80 md:text-base">
                    <span className="mt-1 block size-1 shrink-0 rounded-full bg-[#7F5AF0] sm:mt-1.5 sm:size-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="gradient-border-animated relative rounded-lg bg-[#0a0520]/60 p-5 text-center md:p-8">
              <p className="mb-2 font-sans text-lg font-semibold uppercase tracking-wider text-[#00D4FF] md:text-xl">
                Submission Deadline
              </p>
              <p className="font-sans text-2xl font-semibold tracking-wide text-foreground glow-text md:text-3xl">
                10 March 2026
              </p>
            </div>

            <div className="mt-6 flex justify-center">
              <a
                href="mailto:akkadianz.ece.sbmcet@gmail.com?subject=Abstract%20Submission%20-%20AKKADIANZ'26"
                className="btn-3d inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#5B2EFF] to-[#00D4FF] px-6 py-3 font-sans text-sm font-semibold uppercase tracking-widest text-[#0F172A] md:px-8 md:text-base"
              >
                <Upload className="size-3.5 sm:size-4" />
                Submit via Email
              </a>
            </div>
          </div>
        </FadeInOnScroll>
        </div>
      </div>
    </section>
  )
}


