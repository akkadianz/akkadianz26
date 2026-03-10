'use client'

import { CalendarClock, MapPin } from 'lucide-react'
import { FadeInOnScroll } from '@/components/hero-section'

type ScheduleItem = {
  time: string
  event: string
  venue: string
}

const SCHEDULE: ScheduleItem[] = [
  { time: '09:30 - 10:30 AM', event: 'Reporting & Registration', venue: 'Auditorium' },
  { time: '10:30 - 12:00 PM', event: 'Inauguration Ceremony', venue: 'Auditorium' },
  { time: '12:00 - 12:10 PM', event: 'Refreshments', venue: 'Auditorium' },
  { time: '12:10 - 03:45 PM', event: 'Paper Presentation', venue: 'Auditorium' },
  { time: '12:10 - 12:40 PM', event: 'Technical Quiz (Slot 1)', venue: "Faraday's Force -- ECE II" },
  { time: '12:10 - 12:40 PM', event: 'Technical Debate (Slot 1)', venue: 'Placement Cell' },
  { time: '12:40 - 01:10 PM', event: 'Guess The Crowd (Slot 1)', venue: 'Seminar Hall' },
  { time: '12:40 - 01:10 PM', event: 'TypeRacer (Slot 1)', venue: 'Shannon-Fano Lab' },
  { time: '12:40 - 01:10 PM', event: 'Bomb Squad (Slot 1)', venue: "Kirchhoff's Knights -- ECE III" },
  { time: '01:15 - 02:00 PM', event: 'Lunch Break', venue: 'Dining Area' },
  { time: '02:15 - 02:45 PM', event: 'Technical Quiz (Slot 2)', venue: "Faraday's Force -- ECE II" },
  { time: '02:15 - 02:45 PM', event: 'Technical Debate (Slot 2)', venue: 'Placement Cell' },
  { time: '02:45 - 03:15 PM', event: 'Guess The Crowd (Slot 2)', venue: 'Seminar Hall' },
  { time: '02:45 - 03:15 PM', event: 'TypeRacer (Slot 2)', venue: 'Shannon-Fano Lab' },
  { time: '02:45 - 03:15 PM', event: 'Bomb Squad (Slot 2)', venue: "Kirchhoff's Knights -- ECE III" },
  { time: '03:45 - 04:45 PM', event: 'Valediction & Prize Distribution', venue: 'Auditorium' },
]

export default function EventSchedule() {
  return (
    <section id="schedule" className="relative py-14 md:py-28">
      <div
        className="pointer-events-none absolute right-1/4 top-1/3 size-56 rounded-full bg-[radial-gradient(circle,rgba(0,212,255,0.04)_0%,transparent_70%)] blur-3xl sm:size-96"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-10 lg:px-16">
        <FadeInOnScroll className="mb-10 space-y-4 text-center md:mb-14">
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.35em] text-[#00D4FF] glow-text">
            Program Flow
          </p>
          <h2 className="font-sans text-2xl font-semibold text-foreground md:text-3xl lg:text-4xl">
            AKKADIANZ&apos;26 Event Schedule
          </h2>
          <p className="font-body text-sm leading-relaxed text-muted-foreground md:text-base">
            National Level Technical Symposium
          </p>
        </FadeInOnScroll>

        <FadeInOnScroll delay={200}>
          <div className="construct-panel mx-auto w-full max-w-6xl rounded-xl p-4 sm:p-5 md:p-8">
            <div className="mb-5 flex flex-wrap items-center justify-center gap-3 text-center">
              <CalendarClock className="size-4 text-[#00D4FF] sm:size-5" />
              <h3 className="font-sans text-lg font-semibold uppercase tracking-wider text-[#00D4FF] md:text-xl">
                Full Day Timeline
              </h3>
            </div>

            <div className="hidden overflow-hidden rounded-lg border border-[#7F5AF0]/25 md:block">
              <table className="w-full table-fixed">
                <thead className="bg-[#5B2EFF]/10">
                  <tr>
                    <th className="w-[24%] px-4 py-3 text-left font-sans text-xs font-semibold uppercase tracking-[0.15em] text-[#00D4FF]">
                      Time
                    </th>
                    <th className="w-[44%] px-4 py-3 text-left font-sans text-xs font-semibold uppercase tracking-[0.15em] text-[#00D4FF]">
                      Event
                    </th>
                    <th className="w-[32%] px-4 py-3 text-left font-sans text-xs font-semibold uppercase tracking-[0.15em] text-[#00D4FF]">
                      Venue
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {SCHEDULE.map((item) => (
                    <tr key={`${item.time}-${item.event}`} className="border-t border-[#7F5AF0]/20">
                      <td className="px-4 py-3 font-sans text-sm text-foreground">{item.time}</td>
                      <td className="px-4 py-3 font-body text-sm text-foreground/90">{item.event}</td>
                      <td className="px-4 py-3">
                        <div className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground">
                          <MapPin className="size-3.5 shrink-0 text-[#5B2EFF]" />
                          <span>{item.venue}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="space-y-3 md:hidden">
              {SCHEDULE.map((item) => (
                <div
                  key={`${item.time}-${item.event}`}
                  className="rounded-lg border border-[#7F5AF0]/25 bg-[#120A2A]/40 p-4"
                >
                  <p className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-[#00D4FF]">
                    {item.time}
                  </p>
                  <p className="mt-1 font-body text-sm text-foreground">{item.event}</p>
                  <div className="mt-2 inline-flex items-center gap-2 font-body text-xs text-muted-foreground">
                    <MapPin className="size-3.5 shrink-0 text-[#5B2EFF]" />
                    <span>{item.venue}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  )
}

