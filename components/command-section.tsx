'use client'

import { Phone } from 'lucide-react'
import { FadeInOnScroll } from '@/components/hero-section'

interface Person {
  name: string
  title?: string
  phone?: string
}

const CHIEF_PATRONS: Person[] = [
  { name: 'Ln. Dr. N. Jayaraj MJF., D.Lit., Ph.D., D.Hons.', title: 'Founder & Chairman, SBM Institutions' },
  { name: 'Er. J. Dinesh @ J. Jayasimhaa, M.E., Ph.D.', title: 'Director, SBM Institutions' },
]

const PATRON: Person = {
  name: 'Dr. G. Vijaychakaravarthy, M.E., Ph.D.',
  title: 'Principal, SBMCET',
}

const CONVENOR: Person = {
  name: 'Mr. S. Senthil Kumaran, M.E., Ph.D.',
  title: 'HoD/ECE & BME, SBMCET',
  phone: '+91 97915 70530',
}

const FACULTY_COORDINATORS: Person[] = [
  { name: 'Mr. K. Thamari Kannan, M.E., AP/ECE', phone: '+91 88254 08677' },
  { name: 'Ms. T. Srimathi, M.E., AP/ECE', phone: '+91 75388 05110' },
  { name: 'Ms. J. Sahaya Sophia, M.E., AP/ECE', phone: '+91 86100 98003' },
  { name: 'Mr. M. Vignesh, M.E., AP/BME', phone: '+91 63695 75719' },
]

const STUDENT_COORDINATORS: Person[] = [
  { name: 'Mr. R. Abdul Kalam, IV/ECE', phone: '+91 82705 95133' },
  { name: 'Mr. S. Hari Sankar, III/ECE', phone: '+91 99400 37292' },
  { name: 'Mr. Thirumurugan, II/ECE', phone: '+91 63828 08992' },
  { name: 'Mr. Praveen Kumar, II/BME', phone: '+91 73589 15324' },
]

function PersonCard({ person }: { person: Person }) {
  return (
    <div className="construct-panel flex flex-col gap-0.5 rounded-lg px-3 py-2 sm:gap-1 sm:rounded-xl sm:px-4 sm:py-3">
      <span className="font-body text-xs font-medium text-foreground sm:text-sm">{person.name}</span>
      {person.title && (
        <span className="font-body text-[10px] text-muted-foreground sm:text-xs">{person.title}</span>
      )}
      {person.phone && (
        <a
          href={`tel:${person.phone.replace(/\s/g, '')}`}
          className="mt-0.5 inline-flex items-center gap-1 font-body text-[10px] text-[#00D4FF] hover:underline sm:mt-1 sm:gap-1.5 sm:text-xs"
        >
          <Phone className="size-2.5 sm:size-3" />
          {person.phone}
        </a>
      )}
    </div>
  )
}

function SectionBlock({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-6 sm:mb-8">
      <div className="mb-3 flex items-center gap-2 sm:mb-4 sm:gap-3">
        <div className="h-px flex-1 bg-gradient-to-r from-[#5B2EFF]/50 to-transparent" />
        <h3 className="font-sans text-[8px] font-bold uppercase tracking-[0.3em] text-[#5B2EFF] sm:text-[10px] sm:tracking-[0.4em]">
          {label}
        </h3>
        <div className="h-px flex-1 bg-gradient-to-l from-[#5B2EFF]/50 to-transparent" />
      </div>
      {children}
    </div>
  )
}

export default function CommandSection() {
  return (
    <section id="command" className="relative py-16 px-4 sm:py-24">
      <div className="relative mx-auto max-w-4xl">
        <FadeInOnScroll className="mb-10 text-center sm:mb-14">
          <p className="mb-1.5 font-sans text-[9px] font-bold uppercase tracking-[0.4em] text-[#00D4FF] glow-text sm:mb-2 sm:text-[10px] sm:tracking-[0.5em]">
            Command Architecture
          </p>
          <h2 className="font-sans text-xl font-bold tracking-wider text-foreground sm:text-2xl md:text-3xl lg:text-4xl text-balance">
            The Architects Behind the Construct
          </h2>
        </FadeInOnScroll>

        <FadeInOnScroll delay={150}>
          <SectionBlock label="Chief Patrons">
            <div className="grid gap-2 sm:grid-cols-2 sm:gap-3">
              {CHIEF_PATRONS.map((p) => (
                <PersonCard key={p.name} person={p} />
              ))}
            </div>
          </SectionBlock>
        </FadeInOnScroll>

        <FadeInOnScroll delay={250}>
          <SectionBlock label="Patron">
            <PersonCard person={PATRON} />
          </SectionBlock>
        </FadeInOnScroll>

        <FadeInOnScroll delay={350}>
          <SectionBlock label="Convenor">
            <PersonCard person={CONVENOR} />
          </SectionBlock>
        </FadeInOnScroll>

        <FadeInOnScroll delay={450}>
          <SectionBlock label="Faculty Coordinators">
            <div className="grid gap-2 sm:grid-cols-2 sm:gap-3">
              {FACULTY_COORDINATORS.map((p) => (
                <PersonCard key={p.name} person={p} />
              ))}
            </div>
          </SectionBlock>
        </FadeInOnScroll>

        <FadeInOnScroll delay={550}>
          <SectionBlock label="Student Coordinators">
            <div className="grid gap-2 sm:grid-cols-2 sm:gap-3">
              {STUDENT_COORDINATORS.map((p) => (
                <PersonCard key={p.name} person={p} />
              ))}
            </div>
          </SectionBlock>
        </FadeInOnScroll>
      </div>
    </section>
  )
}
