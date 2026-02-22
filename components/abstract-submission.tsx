'use client'

import { FileText, Upload } from 'lucide-react'
import { FadeInOnScroll } from '@/components/hero-section'

export default function AbstractSubmission() {
  return (
    <section id="abstract" className="relative py-16 px-4 sm:py-24">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute left-1/4 top-1/3 size-48 rounded-full bg-[radial-gradient(circle,rgba(0,212,255,0.03)_0%,transparent_70%)] blur-3xl sm:size-96"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-3xl">
        <FadeInOnScroll className="mb-10 text-center sm:mb-14">
          <p className="mb-1.5 font-sans text-[9px] font-bold uppercase tracking-[0.4em] text-[#00D4FF] glow-text sm:mb-2 sm:text-[10px] sm:tracking-[0.5em]">
            Paper Presentation
          </p>
          <h2 className="font-sans text-xl font-bold tracking-wider text-foreground sm:text-2xl md:text-3xl text-balance">
            Submit Your Abstract
          </h2>
        </FadeInOnScroll>

        <FadeInOnScroll delay={200}>
          <div className="construct-panel rounded-xl p-4 sm:rounded-2xl sm:p-6 md:p-8">
            <div className="mb-4 flex items-center gap-2 sm:mb-6 sm:gap-3">
              <FileText className="size-4 text-[#00D4FF] sm:size-5" />
              <h3 className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#00D4FF] sm:text-xs sm:tracking-[0.3em]">
                Submission Format
              </h3>
            </div>

            <p className="mb-4 font-body text-xs leading-relaxed text-muted-foreground sm:mb-6 sm:text-sm">
              Submit your abstract via email to{' '}
              <a
                href="mailto:akkadianz.ece.sbmcet@gmail.com?subject=Abstract%20Submission%20-%20AKKADIANZ'26"
                className="text-[#00D4FF] underline underline-offset-2 hover:text-[#00D4FF]/80 break-all"
              >
                akkadianz.ece.sbmcet@gmail.com
              </a>{' '}
              on or before <span className="font-semibold text-foreground">10 March 2026</span>.
            </p>

            <div className="mb-4 space-y-2 sm:mb-6 sm:space-y-3">
              <h4 className="font-sans text-[9px] font-bold uppercase tracking-[0.2em] text-[#5B2EFF] sm:text-[10px] sm:tracking-[0.3em]">
                Required Fields
              </h4>
              <ul className="space-y-1.5 sm:space-y-2">
                {[
                  'Title of the Paper',
                  'Author(s) Name & Institution',
                  'Abstract (Max 250 words)',
                  'Keywords',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 font-body text-xs text-foreground/80 sm:gap-3 sm:text-sm">
                    <span className="block size-1 shrink-0 rounded-full bg-[#5B2EFF] sm:size-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-4 space-y-2 sm:mb-6 sm:space-y-3">
              <h4 className="font-sans text-[9px] font-bold uppercase tracking-[0.2em] text-[#5B2EFF] sm:text-[10px] sm:tracking-[0.3em]">
                Guidelines
              </h4>
              <ul className="space-y-1.5 sm:space-y-2">
                {[
                  'The abstract should clearly define the problem, methodology, and key findings.',
                  'Ensure that the content is original and plagiarism-free.',
                  'The abstract should be within 250 words.',
                  'Upload your full paper in PDF format (recommended).',
                  'Late submissions may not be considered.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 font-body text-xs text-foreground/80 sm:gap-3 sm:text-sm">
                    <span className="mt-1 block size-1 shrink-0 rounded-full bg-[#7F5AF0] sm:mt-1.5 sm:size-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="gradient-border-animated relative rounded-lg bg-[#0a0520]/60 p-3 text-center sm:rounded-xl sm:p-4">
              <p className="mb-0.5 font-sans text-[9px] font-bold uppercase tracking-[0.2em] text-[#00D4FF] sm:mb-1 sm:text-[10px] sm:tracking-[0.3em]">
                Submission Deadline
              </p>
              <p className="font-sans text-base font-bold tracking-wider text-foreground glow-text sm:text-lg">
                10 March 2026
              </p>
            </div>

            <div className="mt-4 flex justify-center sm:mt-6">
              <a
                href="mailto:akkadianz.ece.sbmcet@gmail.com?subject=Abstract%20Submission%20-%20AKKADIANZ'26"
                className="btn-3d inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#5B2EFF] to-[#00D4FF] px-6 py-2.5 font-sans text-xs font-bold uppercase tracking-widest text-[#0F172A] sm:px-8 sm:py-3 sm:text-sm"
              >
                <Upload className="size-3.5 sm:size-4" />
                Submit via Email
              </a>
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  )
}
