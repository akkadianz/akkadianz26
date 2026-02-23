"use client"

import { useEffect, useState } from "react"

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
      className={`fixed inset-0 z-50 w-full max-w-full overflow-hidden transition-opacity duration-700 ${
        exiting ? "opacity-0" : "opacity-100"
      }`}
    >
      <section
        className="relative w-full min-h-[100svh] flex items-center overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(11,6,32,0.9), rgba(18,10,42,0.4), rgba(11,6,32,0.8)), url('/images/start-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
          <div className="flex flex-col gap-6 md:gap-8 text-left w-full max-w-full overflow-hidden">
            <div
              className={`flex items-start justify-between gap-3 transition-opacity duration-700 ${
                loaded ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="shrink-0">
                <img
                  src="/images/sbm-logo.jpg"
                  alt="SBM College of Engineering and Technology logo"
                  className="size-10 sm:size-14 md:size-20 lg:size-24 max-w-full h-auto rounded-full border-2 border-[#5B2EFF]/30 object-contain"
                />
              </div>

              <div className="min-w-0 flex-1 text-left">
                <h2 className="font-sans text-[clamp(0.95rem,3.5vw,2rem)] font-bold uppercase leading-tight tracking-[0.01em] text-[#E0E7FF] break-words">
                  SBM College of Engineering & Technology
                </h2>
                <p className="mt-1 font-body text-[clamp(0.62rem,2.1vw,0.9rem)] leading-snug text-[#C7D2FE] break-words">
                  Approved by AICTE, New Delhi and Affiliated to Anna University - Chennai
                </p>
                <p className="font-body text-[clamp(0.62rem,2.1vw,0.9rem)] leading-snug text-[#C7D2FE] break-words">
                  SBM Nagar, Thamaraipadi, Trichy Road, Dindigul - 624005
                </p>
                <div className="mt-2 space-y-0.5">
                  <p className="font-sans text-[clamp(0.66rem,2.3vw,1.05rem)] font-bold uppercase leading-tight tracking-[0.01em] text-[#C7D2FE] break-words">
                    Department of Electronics & Communication Engineering
                  </p>
                  <p className="font-sans text-[clamp(0.66rem,2.3vw,1.05rem)] font-bold uppercase leading-tight tracking-[0.01em] text-[#C7D2FE] break-words">
                    and Biomedical Engineering
                  </p>
                </div>
                <p className="mt-1 font-body text-[clamp(0.72rem,2.5vw,1rem)] italic leading-snug text-[#C7D2FE]/70 break-words">
                  Proudly presents
                </p>
              </div>

              <div className="shrink-0 text-left">
                <img
                  src="/images/founder.jpg"
                  alt="Ln.Dr.N.Jayaraj, Founder & Chairman, SBM Institutions"
                  className="size-10 sm:size-14 md:size-20 lg:size-24 max-w-full h-auto rounded-full border-2 border-[#5B2EFF]/30 object-contain"
                />
                <p className="mt-1 font-sans text-[clamp(0.56rem,2vw,0.85rem)] font-bold text-[#f0f0ff] break-words">
                  Ln.Dr.N.Jayaraj
                </p>
                <p className="font-body text-[clamp(0.52rem,1.8vw,0.75rem)] uppercase tracking-[0.08em] text-[#a0a0c0] break-words">
                  Founder & Chairman
                </p>
                <p className="font-body text-[clamp(0.52rem,1.8vw,0.75rem)] uppercase tracking-[0.08em] text-[#a0a0c0] break-words">
                  SBM Institutions
                </p>
              </div>
            </div>

            <div
              className={`w-full transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
            >
              <h1 className="font-inception-title text-[clamp(2.5rem,8vw,7rem)] font-extrabold leading-[1.05] tracking-tight break-words text-[#f0f0ff] drop-shadow-[0_0_30px_rgba(127,90,240,0.5)] max-w-full">
                {"AKKADIANZ'26"}
              </h1>
              <div className="mt-2 h-px w-32 bg-gradient-to-r from-transparent via-[#7F5AF0] to-transparent sm:w-48 md:w-72" />
              <p className="mt-2 font-sans text-[clamp(1rem,3.2vw,1.25rem)] font-bold uppercase tracking-[0.15em] leading-relaxed text-[#c8b8e8] max-w-[65ch] break-words">
                A National Level Technical Symposium
              </p>
            </div>

            <div
              className={`w-full transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
            >
              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <button
                  onClick={handleEnter}
                  className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-2 overflow-hidden rounded-lg border border-[#7F5AF0]/50 bg-[#5B2EFF]/20 px-6 py-3 text-sm md:text-base text-center font-sans font-bold uppercase tracking-[0.2em] text-[#E8E0F0] backdrop-blur-sm transition-all duration-300 hover:border-[#00D4FF]/60 hover:bg-[#5B2EFF]/30 hover:shadow-[0_0_40px_rgba(91,46,255,0.4)]"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#5B2EFF]/0 via-[#00D4FF]/10 to-[#5B2EFF]/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="relative">Enter the Construct</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="relative size-4"
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

            <div className={`w-full transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}>
              <p className="font-body text-[clamp(0.62rem,2vw,0.85rem)] uppercase tracking-[0.2em] text-[#a0a0c0]/50 break-words">
                13 March 2026 // SBMCET, Dindigul
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
