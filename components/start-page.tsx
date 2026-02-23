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
      className={`fixed inset-0 z-50 overflow-x-hidden bg-[#0B0620] transition-opacity duration-700 ${
        exiting ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Background image & Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100"
        style={{ backgroundImage: "url('/images/start-bg.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0620]/45 via-[#120A2A]/25 to-[#0B0620]/45" />

      {/* Clean Foundation Structure */}
      <section className="relative z-10 flex min-h-[100svh] w-full items-center">
        <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 md:px-12">
          <div
            className={`flex flex-col items-center gap-6 text-center transition-all duration-1000 md:gap-8 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* College Info (Fluid Subheadings & Descriptions) */}
            <div className="mx-auto max-w-[65ch]">
              <h2 className="font-doctor-glitch text-[clamp(1rem,3.5vw,1.6rem)] font-bold uppercase tracking-normal text-[#E0E7FF]">
                SBM College of Engineering & Technology
              </h2>
              <div className="mx-auto mt-2 max-w-[65ch] text-[clamp(1rem,3.2vw,1.25rem)] leading-relaxed text-[#C7D2FE]">
                <p>Approved by AICTE, New Delhi and Affiliated to Anna University - Chennai</p>
                <p>SBM Nagar, Thamaraipadi, Trichy Road, Dindigul - 624005</p>
                <p className="mt-3 font-semibold uppercase tracking-wide">
                  Department of Electronics & Communication Engineering
                  <br className="hidden sm:block" /> and Biomedical Engineering
                </p>
                <p className="mt-3 italic opacity-80">Proudly presents</p>
              </div>
            </div>

            {/* Main Title (Fluid Typography System) */}
            <div className="mx-auto flex max-w-[65ch] flex-col gap-2">
              <h1 className="font-inception-title whitespace-nowrap text-[clamp(2rem,7.5vw,7rem)] font-extrabold uppercase leading-[1.05] tracking-tight text-[#f0f0ff] drop-shadow-[0_0_30px_rgba(127,90,240,0.5)]">
                AKKADIANZ'26
              </h1>
              <p className="text-[clamp(1.2rem,4vw,2rem)] font-semibold uppercase text-[#c8b8e8]">
                A National Level Technical Symposium
              </p>
              <p className="mx-auto max-w-[65ch] text-[clamp(1rem,3.2vw,1.25rem)] leading-relaxed tracking-widest text-[#a0a0c0]">
                13 March 2026 // SBMCET, Dindigul
              </p>
            </div>

            {/* Space Utilization Button System */}
            <div className="mt-4 flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                onClick={handleEnter}
                className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-lg border border-[#7F5AF0]/50 bg-[#5B2EFF]/20 px-6 py-3 text-sm font-bold uppercase tracking-[0.15em] text-[#E8E0F0] backdrop-blur-sm transition-all duration-300 hover:border-[#00D4FF]/60 hover:bg-[#5B2EFF]/30 hover:shadow-[0_0_40px_rgba(91,46,255,0.4)] sm:w-auto md:text-base"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#5B2EFF]/0 via-[#00D4FF]/10 to-[#5B2EFF]/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="relative">Enter the Construct</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative size-4 transition-transform duration-300 md:-translate-y-px md:group-hover:translate-x-1 lg:translate-z-0"
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
      </section>
    </div>
  )
}

