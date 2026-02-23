"use client"

import { useState, useEffect } from "react"
import localFont from "next/font/local"

const inceptionTitle = localFont({
  src: "../public/fonts/Inception.ttf",
  display: "swap",
})

export default function StartPage({ onEnter }: { onEnter: () => void }) {
  const [visible, setVisible] = useState(true)
  const [exiting, setExiting] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  function handleEnter() {
    setExiting(true)
    setTimeout(() => {
      setVisible(false)
      onEnter()
    }, 700)
  }

  if (!visible) return null

  return (
    <div
      className={`fixed inset-0 z-50 flex w-full max-w-full flex-col overflow-hidden transition-all duration-700 ${
        exiting ? "opacity-0 scale-105" : "opacity-100 scale-100"
      }`}
    >
      {/* Background image */}
      <div
        className="pointer-events-none absolute inset-0 max-w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/start-bg.png')" }}
      />
      {/* Dark overlay */}
      <div className="pointer-events-none absolute inset-0 max-w-full bg-gradient-to-b from-[#0B0620]/90 via-[#120A2A]/40 to-[#0B0620]/80" />

      {/* Content */}
      <div className="relative z-10 flex h-full w-full max-w-full flex-col overflow-hidden">
        {/* Top bar */}
        <header className="w-full max-w-full overflow-hidden px-3 pt-2 sm:px-6 md:px-10 lg:pt-8">
          <div className="mx-auto flex w-full max-w-6xl items-start justify-between gap-2 sm:gap-4">
            <div
              className={`shrink-0 transition-all duration-700 delay-200 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
              }`}
            >
              <img
                src="/images/sbm-logo.jpg"
                alt="SBM College of Engineering and Technology logo"
                className="size-10 max-w-full rounded-full border-2 border-[#5B2EFF]/30 object-contain sm:size-16 md:size-20 lg:size-24"
              />
            </div>

            <div
              className={`min-w-0 flex-1 px-1 text-center transition-all duration-700 delay-300 sm:px-0 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
              }`}
            >
              <h2 className="max-w-full break-words font-sans text-[clamp(0.78rem,3.2vw,2.2rem)] font-bold uppercase leading-tight tracking-[0.01em] text-[#E0E7FF]">
                SBM College of Engineering & Technology
              </h2>
              <p className="mt-0.5 max-w-full break-words font-body text-[clamp(0.56rem,1.9vw,0.9rem)] leading-snug text-[#C7D2FE]">
                Approved by AICTE, New Delhi and Affiliated to Anna University - Chennai
              </p>
              <p className="max-w-full break-words font-body text-[clamp(0.56rem,1.9vw,0.9rem)] leading-snug text-[#C7D2FE]">
                SBM Nagar, Thamaraipadi, Trichy Road, Dindigul - 624005
              </p>
              <div className="mt-1.5 space-y-0.5 sm:mt-3">
                <p className="max-w-full break-words font-sans text-[clamp(0.58rem,2.1vw,1.1rem)] font-bold uppercase leading-tight tracking-[0.005em] text-[#C7D2FE]">
                  Department of Electronics & Communication Engineering
                </p>
                <p className="max-w-full break-words font-sans text-[clamp(0.58rem,2.1vw,1.1rem)] font-bold uppercase leading-tight tracking-[0.005em] text-[#C7D2FE]">
                  Department of Biomedical Engineering
                </p>
              </div>
              <p className="mt-0.5 max-w-full break-words font-body text-[clamp(0.66rem,2.3vw,1rem)] italic leading-snug text-[#C7D2FE]/70">
                Proudly presents
              </p>
            </div>

            <div
              className={`shrink-0 text-center transition-all duration-700 delay-400 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
              }`}
            >
              <img
                src="/images/founder.jpg"
                alt="Ln.Dr.N.Jayaraj, Founder, SBM Institutions"
                className="mx-auto size-10 max-w-full rounded-full border-2 border-[#5B2EFF]/30 object-contain sm:size-16 md:size-20 lg:size-24"
              />
              <p className="mt-0.5 font-sans text-[6px] font-bold text-[#f0f0ff] sm:text-[11px] md:text-[12px] lg:text-[14px]">
                Ln.Dr.N.Jayaraj
              </p>
              <p className="font-body text-[6px] uppercase tracking-wide text-[#a0a0c0] sm:text-[8px] md:text-[10px]">
                Founder & Chairman
              </p>
              <p className="font-body text-[6px] uppercase tracking-wide text-[#a0a0c0] sm:text-[8px] md:text-[10px]">
                SBM Institutions
              </p>
            </div>
          </div>
        </header>

        <section className="relative flex min-h-0 flex-1 w-full items-center overflow-hidden">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-10">
            <div className="flex flex-col items-start gap-4 sm:gap-6">
              <div
                className={`w-full text-left transition-all duration-1000 delay-500 ${
                  loaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
                }`}
              >
                <h1
                  className={`${inceptionTitle.className} max-w-full break-words text-[clamp(2.1rem,7.2vw,6rem)] font-normal uppercase leading-tight tracking-wide text-[#f0f0ff] drop-shadow-[0_0_30px_rgba(127,90,240,0.5)]`}
                >
                  AKKADIANZ
                  <span className={inceptionTitle.className}>'26</span>
                </h1>
                <div className="mt-2 h-px w-32 bg-gradient-to-r from-transparent via-[#7F5AF0] to-transparent sm:w-48 md:w-72" />
                <p className="mt-2 max-w-full break-words font-sans text-[clamp(0.82rem,3vw,1.2rem)] font-bold uppercase tracking-[0.15em] leading-relaxed text-[#c8b8e8]">
                  A National Level Technical Symposium
                </p>
              </div>

              <div
                className={`w-full transition-all duration-700 delay-[800ms] ${
                  loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
                  <button
                    onClick={handleEnter}
                    className="group animate-pulse-glow relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-lg border border-[#7F5AF0]/60 bg-[#5B2EFF]/20 px-5 py-2 text-center font-sans text-[11px] font-bold uppercase tracking-[0.16em] text-[#E8E0F0] shadow-[0_0_22px_rgba(127,90,240,0.35)] backdrop-blur-sm transition-all duration-300 hover:border-[#00D4FF]/70 hover:bg-[#5B2EFF]/35 hover:shadow-[0_0_55px_rgba(0,212,255,0.35)] hover:scale-105 sm:w-auto sm:px-10 sm:py-3 sm:text-[14px] sm:tracking-[0.3em] md:px-14 md:py-4 md:text-[19px]"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-[#5B2EFF]/0 via-[#00D4FF]/10 to-[#5B2EFF]/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <span className="relative">Enter the Construct</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="relative size-3.5 transition-transform duration-300 group-hover:translate-x-1 sm:size-4 md:size-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="px-4 pb-4 text-center sm:px-8 sm:pb-6">
          <p
            className={`font-body text-[10px] uppercase tracking-[0.2em] text-[#a0a0c0]/50 transition-all duration-700 delay-[900ms] sm:text-[11px] sm:tracking-[0.3em] md:text-[12px] ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
          >
            13 March 2026 // SBMCET, Dindigul
          </p>
        </div>
      </div>
    </div>
  )
}
