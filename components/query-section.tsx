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
    <section id="contact" className="relative py-16 px-4 sm:py-24">
      {/* Background accent */}
      <div
        className="pointer-events-none absolute right-1/4 bottom-0 size-48 rounded-full bg-[radial-gradient(circle,rgba(91,46,255,0.04)_0%,transparent_70%)] blur-3xl sm:size-80"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-3xl">
        <FadeInOnScroll className="mb-10 text-center sm:mb-14">
          <p className="mb-1.5 font-sans text-[9px] font-bold uppercase tracking-[0.4em] text-[#00D4FF] glow-text sm:mb-2 sm:text-[10px] sm:tracking-[0.5em]">
            Query Channel
          </p>
          <h2 className="font-sans text-xl font-bold tracking-wider text-foreground sm:text-2xl md:text-3xl text-balance">
            Establish Connection
          </h2>
        </FadeInOnScroll>

        <FadeInOnScroll delay={200}>
          <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
            {CHANNELS.map((ch) => (
              <a
                key={ch.label}
                href={ch.href}
                target="_blank"
                rel="noopener noreferrer"
                className="construct-panel group flex items-center gap-3 rounded-xl p-4 sm:flex-col sm:gap-3 sm:rounded-2xl sm:p-6 sm:text-center"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#5B2EFF]/8 transition-colors duration-300 group-hover:bg-[#5B2EFF]/15 group-hover:shadow-[0_0_15px_rgba(0,212,255,0.1)] sm:size-12 sm:rounded-xl">
                  <ch.icon className="size-4 text-[#00D4FF] sm:size-5" />
                </div>
                <div className="min-w-0 flex-1 sm:flex-initial">
                  <span className="block font-sans text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground sm:text-[10px] sm:tracking-[0.3em]">
                    {ch.label}
                  </span>
                  <span className="block font-body text-xs text-foreground/80 break-all sm:mt-1 sm:text-sm">{ch.value}</span>
                </div>
              </a>
            ))}
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll delay={400}>
          <div className="mt-6 construct-panel gradient-border-animated rounded-xl p-4 text-center sm:mt-8 sm:rounded-2xl sm:p-6 md:p-8">
            <div className="mb-3 flex items-center justify-center gap-1.5 sm:mb-4 sm:gap-2">
              <Send className="size-4 text-[#00D4FF] sm:size-5" />
              <h3 className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#00D4FF] sm:text-xs sm:tracking-[0.3em]">
                Food OTP Redemption
              </h3>
            </div>
            <p className="mb-3 font-body text-xs leading-relaxed text-muted-foreground sm:mb-4 sm:text-sm">
              Food OTPs will be provided via Telegram. Please install Telegram and start the bot before attending the symposium.
            </p>
            <a
              href="https://t.me/food_redeem_ece_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-3d inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-[#5B2EFF] to-[#00D4FF] px-5 py-2 font-sans text-[10px] font-bold uppercase tracking-widest text-[#0F172A] sm:gap-2 sm:px-6 sm:py-2.5 sm:text-xs"
            >
              <Send className="size-3 sm:size-3.5" />
              Open Telegram Bot
            </a>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  )
}
