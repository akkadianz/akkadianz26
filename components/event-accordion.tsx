'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { FadeInOnScroll } from '@/components/hero-section'

interface ScoringItem {
  label: string
  points: string
}

interface EventData {
  name: string
  tagline: string
  description: string
  format: string[]
  scoring: ScoringItem[]
  rules: string[]
}

const LAYER_01_EVENTS: EventData[] = [
  {
    name: 'FRAMEWORK - Paper Presentation',
    tagline: 'Design. Defend. Construct.',
    description:
      'A formal technical presentation event where participants present innovative research, case studies, or application-driven engineering solutions. The focus is on real-world relevance, technical depth, and presentation clarity.',
    format: [
      'Team Event: Maximum 2-4 members per team',
      'Round 1: 250-word abstract submission. Top abstracts shortlisted based on clarity, originality, and relevance.',
      'Round 2: 5-minute PPT presentation + 2-minute Q&A session with judges.',
    ],
    scoring: [
      { label: 'Innovation & Technical Depth', points: '30' },
      { label: 'Presentation Skills', points: '20' },
      { label: 'Practical Feasibility', points: '20' },
      { label: 'Handling Q&A', points: '15' },
      { label: 'Abstract Quality', points: '15' },
    ],
    rules: [
      'Papers must be original; plagiarism leads to disqualification.',
      'Presentation in PPT format, maximum 20 slides.',
      'Participants must adhere to the given time limits.',
    ],
  },
  {
    name: 'PARADOX - Debate',
    tagline: 'Opposition creates clarity.',
    description:
      'A structured debate event where participants argue on contemporary technological issues (AI ethics, EV adoption, chip shortages, surveillance tech, etc.).',
    format: [
      'Team Size: 2 members',
      'One speaks For, one speaks Against.',
      'Sides are chosen first, then the topic is revealed 15 minutes prior.',
    ],
    scoring: [
      { label: 'Technical Knowledge', points: '30' },
      { label: 'Argument Strength', points: '20' },
      { label: 'Rebuttal Effectiveness', points: '20' },
      { label: 'Logical Consistency', points: '15' },
      { label: 'Confidence & Delivery', points: '15' },
    ],
    rules: [
      'Topic revealed 15 minutes prior.',
      'No personal attacks.',
      'Arguments must be fact-based.',
      'Use of statistics/research encouraged.',
      'Time violation leads to a penalty.',
    ],
  },
  {
    name: 'VECTOR - Quiz',
    tagline: 'Measured knowledge. Calibrated timing.',
    description:
      'A multi-round quiz testing knowledge in core technical domains: VLSI, Embedded Systems, Computing, AI, Networking, Electronics, Recent Innovations.',
    format: [
      'Team Size: 2',
      'Round 1: 20 MCQs. Top 6 teams qualify.',
      'Round 2: Rapid Fire - 10 questions per team, 30 seconds per question.',
    ],
    scoring: [{ label: 'Correct Answer', points: '+1' }],
    rules: ['No mobile devices allowed.', 'Quiz master decision is final.'],
  },
]

const LAYER_02_EVENTS: EventData[] = [
  {
    name: 'PROJECTION - Guess The Crowd',
    tagline: 'Perception shapes the outcome.',
    description:
      'A high-energy audience engagement game inspired by survey-based game shows. Teams must predict the most popular answers given by the public survey.',
    format: [
      'Individual Participation',
      'Each person answers survey-based questions.',
      'Points awarded based on audience response popularity.',
    ],
    scoring: [
      { label: 'Most popular answer', points: '50' },
      { label: 'Second most popular', points: '40' },
      { label: 'And so on...', points: '30+' },
    ],
    rules: [
      'Answers must match pre-collected audience survey.',
      'No repeated answers.',
      '10 seconds response time.',
    ],
  },
  {
    name: 'MOMENTUM - Typing Speed Competition',
    tagline: 'Speed defines control.',
    description:
      'A competitive typing accuracy and speed challenge designed to test reflexes, precision, and composure under time pressure.',
    format: [
      'Individual Participation',
      'Round 1 (MonkeyType): 3 trials, 60 seconds each. Best WPM counted. Top 5 qualify.',
      'Round 2 (TypeRacer): Live head-to-head elimination race. Final race determines winner.',
    ],
    scoring: [
      { label: 'WPM', points: '60%' },
      { label: 'Accuracy', points: '30%' },
      { label: 'Consistency', points: '10%' },
    ],
    rules: [
      'Personal keyboards allowed (optional).',
      'No auto-correct tools.',
      'Any software manipulation = disqualification.',
    ],
  },
  {
    name: 'GRAVITY - Bomb Squad Tournament',
    tagline: 'Balance strategy. Control collapse.',
    description:
      'A high-energy multiplayer gaming event where teams compete in explosive mini-games involving survival, elimination, capture, and tactical coordination.',
    format: [
      'Team Size: 3-4 members',
      'Round 1 (League/Knockout): 4 teams per match. Elimination / Team Deathmatch. Top 2 advance.',
      'Round 2: Best of 3 matches with mixed game modes (Elimination + Capture the Flag + King of the Hill).',
    ],
    scoring: [
      { label: 'Match Win', points: '10' },
      { label: 'Runner-up', points: '5' },
      { label: 'Survival Bonus (entire team)', points: '2' },
    ],
    rules: [
      'No intentional network disconnection.',
      'No physical interference with opponents.',
      'Players must use assigned controls only.',
      'Unsportsmanlike conduct leads to match forfeiture.',
      "Organizers' decision is final in case of disputes.",
    ],
  },
]

/* ===========================================
   EVENT CARD
   =========================================== */
function EventCard({ event, accentColor }: { event: EventData; accentColor: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative border-b border-[#7F5AF0]/10">
      {/* Glowing vertical beam on left when open */}
      <div
        className="absolute left-0 top-0 w-[2px] rounded-full transition-all duration-500"
        style={{
          height: isOpen ? '100%' : '0%',
          background: `linear-gradient(to bottom, ${accentColor}, transparent)`,
          boxShadow: isOpen ? `0 0 12px ${accentColor}40` : 'none',
        }}
      />

      {/* Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex w-full items-center justify-between px-6 py-4 text-left"
      >
        <div className="flex flex-1 flex-col items-start gap-1">
          <span className="font-sans text-base font-bold uppercase tracking-wider text-[#E8E0F0] transition-colors group-hover:text-[#00D4FF] md:text-lg">
            {event.name}
          </span>
          <span className="font-body text-xs leading-relaxed text-[#A89BC2] md:text-sm">{event.tagline}</span>
        </div>
        <ChevronDown
          className={`size-4 shrink-0 text-[#A89BC2] transition-transform duration-500 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Content */}
      <div
        className="overflow-hidden transition-all duration-500"
        style={{
          maxHeight: isOpen ? '1200px' : '0',
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="space-y-4 px-6 pb-6 text-center">
          <p className="font-body text-sm leading-relaxed text-[#A89BC2]">{event.description}</p>

          <div>
            <h4 className="mb-2 font-sans text-lg font-semibold uppercase tracking-wider text-[#00D4FF] md:text-xl">
              Format
            </h4>
            <ul className="space-y-2">
              {event.format.map((item, i) => (
                <li key={i} className="flex items-start justify-center gap-2 text-center font-body text-sm leading-relaxed text-[#E8E0F0]/80">
                  <span className="mt-1.5 block size-1.5 shrink-0 rounded-full" style={{ background: accentColor }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-2 font-sans text-lg font-semibold uppercase tracking-wider text-[#00D4FF] md:text-xl">
              Scoring
            </h4>
            <div className="space-y-2">
              {event.scoring.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-md bg-[#5B2EFF]/5 px-3 py-2 font-body text-sm leading-relaxed"
                >
                  <span className="text-[#E8E0F0]/80">{item.label}</span>
                  <span className="font-sans text-sm font-semibold text-[#00D4FF]">{item.points}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-2 font-sans text-lg font-semibold uppercase tracking-wider text-[#00D4FF] md:text-xl">
              Rules
            </h4>
            <ul className="space-y-2">
              {event.rules.map((rule, i) => (
                <li key={i} className="flex items-start justify-center gap-2 text-center font-body text-sm leading-relaxed text-[#E8E0F0]/80">
                  <span className="mt-1.5 block size-1.5 shrink-0 rounded-full bg-[#7F5AF0]" />
                  {rule}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ===========================================
   LAYER SECTION
   =========================================== */
export default function LayerSection() {
  return (
    <section id="events" className="relative py-14 md:py-28">
      {/* Section background glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-full w-full max-w-5xl"
        aria-hidden="true"
      >
        <div className="absolute left-0 top-1/4 size-48 rounded-full bg-[radial-gradient(circle,rgba(91,46,255,0.04)_0%,transparent_70%)] blur-3xl sm:size-96" />
        <div className="absolute right-0 bottom-1/4 size-40 rounded-full bg-[radial-gradient(circle,rgba(0,212,255,0.03)_0%,transparent_70%)] blur-3xl sm:size-80" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-10 lg:px-16">
        <FadeInOnScroll className="mb-10 space-y-4 text-center md:mb-14">
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.35em] text-[#00D4FF] glow-text">
            The Construct
          </p>
          <h2 className="font-sans text-2xl font-semibold text-[#E8E0F0] md:text-3xl lg:text-4xl">
            Two Realities. One Core.
          </h2>
        </FadeInOnScroll>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10">
          {/* LAYER 01 */}
          <FadeInOnScroll delay={150}>
            <div className="construct-panel rounded-xl p-6 md:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="h-px flex-1 bg-gradient-to-r from-[#5B2EFF] to-transparent" />
                <h3 className="font-sans text-lg font-semibold uppercase tracking-wider text-[#5B2EFF] md:text-xl">
                  {'LAYER_01 // ACTUAL REALITY'}
                </h3>
                <div className="h-px flex-1 bg-gradient-to-l from-[#5B2EFF] to-transparent" />
              </div>
              {LAYER_01_EVENTS.map((event) => (
                <EventCard key={event.name} event={event} accentColor="#5B2EFF" />
              ))}
            </div>
          </FadeInOnScroll>

          {/* LAYER 02 */}
          <FadeInOnScroll delay={300}>
            <div className="construct-panel rounded-xl p-6 md:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="h-px flex-1 bg-gradient-to-r from-[#00D4FF] to-transparent" />
                <h3 className="font-sans text-lg font-semibold uppercase tracking-wider text-[#00D4FF] md:text-xl">
                  {'LAYER_02 // DREAM CONSTRUCT'}
                </h3>
                <div className="h-px flex-1 bg-gradient-to-l from-[#00D4FF] to-transparent" />
              </div>
              {LAYER_02_EVENTS.map((event) => (
                <EventCard key={event.name} event={event} accentColor="#00D4FF" />
              ))}
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  )
}


