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
  name: 'Mr. S. Senthil Kumaran, M.E., (Ph.D.)',
  title: 'HoD/ECE & BME, SBMCET',
}

const FACULTY_COORDINATORS: Person[] = [
  { name: 'Mr. K. Thamarai Kannan, M.E., AP/ECE' },
  { name: 'Ms. T. Srimathi, M.E., AP/ECE' },
  { name: 'Ms. J. Sahaya Sophia, M.E., AP/ECE' },
  { name: 'Mr. M. Vignesh, M.E., AP/BME' },
]

const ASSOCIATION_MEMBERS = [
  { title: 'President', names: ['R Abdul Kalam - IV/ECE'] },
  { title: 'Vice-President', names: ['B Sharmila - III/ECE'] },
  { title: 'Secretary', names: ['R Sivasankari - IV/ECE'] },
  { title: 'Joint-Secretary', names: ['S Sanjai - III/ECE'] },
  { title: 'Treasurer', names: ['S Hari Sankar - III/ECE'] },
  { title: 'Joint-Treasurer', names: ['G Vidhya - II/ECE'] },
  {
    title: 'Boys Coordinators',
    names: [
      'M Gnana Chouthri - IV/ECE',
      'V Sriram - III/ECE',
      'N Surendaramoorthy - II/ECE',
      'B Praveen Kumar - II/BME',
    ],
  },
  {
    title: 'Girls Coordinators',
    names: [
      'P Pretheebavathi - IV/ECE',
      'K Nithya sri - III/ECE',
      'P Naachar - II/ECE',
      'M Anusiya - II/BME',
    ],
  },
]

function PersonCard({ person }: { person: Person }) {
  return (
    <div className="construct-panel flex flex-col items-center gap-1 rounded-xl p-6 text-center md:p-8">
      <span className="font-body text-sm font-medium leading-relaxed text-foreground md:text-base">{person.name}</span>
      {person.title && (
        <span className="font-body text-sm leading-relaxed text-muted-foreground">{person.title}</span>
      )}
      {person.phone && (
        <a
          href={`tel:${person.phone.replace(/\s/g, '')}`}
          className="mt-1 inline-flex items-center gap-2 font-body text-sm text-[#00D4FF] hover:underline"
        >
          <Phone className="size-3" />
          {person.phone}
        </a>
      )}
    </div>
  )
}

function SectionBlock({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <div className="mb-4 flex items-center gap-3">
        <div className="h-px flex-1 bg-gradient-to-r from-[#5B2EFF]/50 to-transparent" />
        <h3 className="font-sans text-lg font-semibold uppercase tracking-wider text-[#5B2EFF] md:text-xl">
          {label}
        </h3>
        <div className="h-px flex-1 bg-gradient-to-l from-[#5B2EFF]/50 to-transparent" />
      </div>
      {children}
    </div>
  )
}

function AssociationGroup({
  title,
  names,
}: {
  title: string
  names: string[]
}) {
  return (
    <div className="construct-panel rounded-xl p-6 md:p-8">
      <div className="space-y-2 text-left">
        <p className="font-body text-sm font-semibold leading-relaxed text-foreground md:text-base">{title}</p>
        {names.map((name) => (
          <p key={name} className="font-body text-sm font-normal leading-relaxed text-muted-foreground md:text-base">
            {name}
          </p>
        ))}
      </div>
    </div>
  )
}

export default function CommandSection() {
  return (
    <section id="command" className="relative py-14 md:py-28">
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-10 lg:px-16">
        <FadeInOnScroll className="mb-10 space-y-4 text-center md:mb-14">
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.35em] text-[#00D4FF] glow-text">
            Command Architecture
          </p>
          <h2 className="font-sans text-2xl font-semibold text-foreground md:text-3xl lg:text-4xl">
            The Architects Behind the Construct
          </h2>
        </FadeInOnScroll>

        <FadeInOnScroll delay={150}>
          <SectionBlock label="Chief Patrons">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10">
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
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10">
              {FACULTY_COORDINATORS.map((p) => (
                <PersonCard key={p.name} person={p} />
              ))}
            </div>
          </SectionBlock>
        </FadeInOnScroll>

        <FadeInOnScroll delay={550}>
          <SectionBlock label="ASSOCIATION MEMBERS">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10">
              {ASSOCIATION_MEMBERS.map((group) => (
                <AssociationGroup key={group.title} title={group.title} names={group.names} />
              ))}
            </div>
          </SectionBlock>
        </FadeInOnScroll>
      </div>
    </section>
  )
}


