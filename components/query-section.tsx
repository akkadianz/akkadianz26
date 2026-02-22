'use client'

import { Mail, Instagram, Phone, Send } from 'lucide-react'
import { FadeInOnScroll } from '@/components/hero-section'

const CHANNELS = [
  {
    icon: Mail,
    label: 'Email',
    value: 'akkadianz.ece.sbmcet@gmail.com',
    href: 'mailto:akkadianz.ece.sbmcet@gmail.com',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@akkadianz.sbmcet',
    href: 'https://www.instagram.com/akkadianz.sbmcet',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9940037292',
    href: 'tel:+919940037292',
  },
]

export default function QuerySection() {
  return (
    <section id="contact" className="relative py-14 md:py-28">
      {/* Background accent */}
      <div
        className="pointer-events-none absolute right-1/4 bottom-0 size-48 rounded-full bg-[radial-gradient(circle,rgba(91,46,255,0.04)_0%,transparent_70%)] blur-3xl sm:size-80"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-10 lg:px-16">
        <FadeInOnScroll className="mb-10 space-y-4 text-center md:mb-14">
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.35em] text-[#00D4FF] glow-text">
            Query Channel
          </p>
          <h2 className="font-sans text-2xl font-semibold text-foreground md:text-3xl lg:text-4xl">
            Establish Connection
          </h2>
        </FadeInOnScroll>

        <FadeInOnScroll delay={200}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-10">
            {CHANNELS.map((ch) => (
              <a
                key={ch.label}
                href={ch.href}
                target="_blank"
                rel="noopener noreferrer"
                className="construct-panel group flex items-center justify-center gap-3 rounded-xl p-6 text-center md:p-8"
              >
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#5B2EFF]/8 transition-colors duration-300 group-hover:bg-[#5B2EFF]/15 group-hover:shadow-[0_0_15px_rgba(0,212,255,0.1)]">
                  <ch.icon className="size-5 text-[#00D4FF]" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="block font-sans text-base font-semibold uppercase tracking-wider text-muted-foreground">
                    {ch.label}
                  </span>
                  <span className="mt-1 block break-words font-body text-sm leading-relaxed text-foreground/80 md:text-base">{ch.value}</span>
                </div>
              </a>
            ))}
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll delay={400}>
          <div className="mx-auto mt-6 construct-panel gradient-border-animated max-w-5xl rounded-xl p-6 text-center md:mt-8 md:p-8">
            <div className="mb-4 flex items-center justify-center gap-2">
              <Send className="size-4 text-[#00D4FF] sm:size-5" />
              <h3 className="font-sans text-lg font-semibold uppercase tracking-wider text-[#00D4FF] md:text-xl">
                Food OTP Redemption
              </h3>
            </div>
            <p className="mx-auto mb-4 max-w-3xl break-words font-body text-sm leading-relaxed text-muted-foreground md:text-base">
              Food OTPs will be provided via Telegram. Please install Telegram and start the bot before attending the symposium.
            </p>
            <div className="flex justify-center">
              <a
                href="https://t.me/food_redeem_ece_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-3d inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#5B2EFF] to-[#00D4FF] px-6 py-3 font-sans text-sm font-semibold uppercase tracking-widest text-[#0F172A] md:text-base"
              >
                <Send className="size-3 sm:size-3.5" />
                Open Telegram Bot
              </a>
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  )
}


