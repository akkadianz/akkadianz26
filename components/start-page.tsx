"use client"

import { useState, useEffect } from "react"

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
      className={`fixed inset-0 z-50 flex flex-col transition-all duration-700 ${
        exiting ? "opacity-0 scale-105" : "opacity-100 scale-100"
      }`}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/start-bg.png')" }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0620]/90 via-[#120A2A]/40 to-[#0B0620]/80" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col">
        {/* Top bar - stacks vertically on mobile */}
        <header className="flex flex-col items-center gap-2.5 px-3 pt-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4 sm:px-6 md:px-8 lg:px-12 lg:pt-8">
          {/* College logo - smaller on mobile */}
          <div
            className={`order-1 shrink-0 transition-all duration-700 delay-200 sm:order-none ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            <img
              src="/images/sbm-logo.jpg"
              alt="SBM College of Engineering and Technology logo"
              className="size-10 rounded-full border-2 border-[#5B2EFF]/30 object-cover sm:size-16 md:size-20 lg:size-24"
            />
          </div>

          {/* College name and details */}
          <div
            className={`order-3 flex-1 text-center transition-all duration-700 delay-300 sm:order-none ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            <h2 className="font-sans text-[11px] font-bold uppercase tracking-wider text-[#E0E7FF] sm:text-sm md:text-lg lg:text-2xl text-balance">
              SBM College of Engineering & Technology
            </h2>
            <p className="mt-0.5 font-body text-[7px] text-[#C7D2FE] sm:text-[10px] md:text-xs">
              Approved by AICTE, New Delhi and Affiliated to Anna University - Chennai
            </p>
            <p className="font-body text-[7px] text-[#C7D2FE] sm:text-[10px] md:text-xs">
              SBM Nagar, Thamaraipadi, Trichy Road, Dindigul - 624005
            </p>
            <div className="mt-1.5 sm:mt-2 md:mt-3">
              <p className="font-sans text-[7px] font-bold uppercase tracking-wider text-[#C7D2FE] sm:text-[10px] md:text-sm">
                Department of Electronics & Communication Engineering
              </p>
              <p className="font-sans text-[7px] font-bold uppercase tracking-wider text-[#C7D2FE] sm:text-[10px] md:text-sm">
                and Biomedical Engineering
              </p>
            </div>
            <p className="mt-1 font-body text-[9px] italic text-[#C7D2FE]/70 sm:mt-1.5 sm:text-xs md:text-sm">
              Proudly presents
            </p>
          </div>

          {/* Founder & Chairman - beside logo on mobile row */}
          <div
            className={`order-2 shrink-0 text-center transition-all duration-700 delay-400 sm:order-none ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            <img
              src="/images/founder.jpg"
              alt="Ln.Dr.N.Jayaraj, Founder & Chairman, SBM Institutions"
              className="mx-auto size-10 rounded-full border-2 border-[#5B2EFF]/30 object-cover sm:size-16 md:size-20 lg:size-24"
            />
            <p className="mt-0.5 font-sans text-[6px] font-bold text-[#f0f0ff] sm:text-[9px] md:text-[10px] lg:text-xs">
              Ln.Dr.N.Jayaraj
            </p>
            <p className="font-body text-[6px] uppercase tracking-wider text-[#a0a0c0] sm:text-[7px] md:text-[8px]">
              Founder & Chairman
            </p>
            <p className="font-body text-[6px] uppercase tracking-wider text-[#a0a0c0] sm:text-[7px] md:text-[8px]">
              SBM Institutions
            </p>
          </div>
        </header>

        {/* Center: Title */}
        <div className="flex flex-1 flex-col items-center justify-center px-4">
          <div
            className={`text-center transition-all duration-1000 delay-500 ${
              loaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
            }`}
          >
            <h1
              className="font-inception-title text-3xl font-normal uppercase tracking-[0.1em] text-[#f0f0ff] drop-shadow-[0_0_30px_rgba(127,90,240,0.5)] sm:text-4xl sm:tracking-[0.15em] md:text-6xl lg:text-7xl xl:text-9xl text-balance"
            >
              {"AKKADIANZ'26"}
            </h1>
            <div className="mx-auto mt-2 h-px w-32 bg-gradient-to-r from-transparent via-[#7F5AF0] to-transparent sm:w-48 md:w-72" />
            <p className="mt-2 font-sans text-[9px] font-bold uppercase tracking-[0.15em] text-[#c8b8e8] sm:mt-3 sm:text-xs sm:tracking-[0.25em] md:text-sm lg:text-lg">
              A National Level Technical Symposium
            </p>
          </div>

          {/* Enter button */}
          <div
            className={`mt-8 transition-all duration-700 delay-[800ms] sm:mt-10 md:mt-14 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <button
              onClick={handleEnter}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg border border-[#7F5AF0]/50 bg-[#5B2EFF]/20 px-5 py-2 font-sans text-[9px] font-bold uppercase tracking-[0.18em] text-[#E8E0F0] backdrop-blur-sm transition-all duration-300 hover:border-[#00D4FF]/60 hover:bg-[#5B2EFF]/30 hover:shadow-[0_0_40px_rgba(91,46,255,0.4)] hover:scale-105 sm:px-10 sm:py-3 sm:text-xs sm:tracking-[0.3em] md:px-14 md:py-4 md:text-base"
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

        {/* Bottom line */}
        <div className="px-4 pb-4 text-center sm:px-8 sm:pb-6">
          <p
            className={`font-body text-[7px] uppercase tracking-[0.2em] text-[#a0a0c0]/50 transition-all duration-700 delay-[900ms] sm:text-[9px] sm:tracking-[0.3em] md:text-[10px] ${
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
