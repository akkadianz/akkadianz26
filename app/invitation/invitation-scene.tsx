'use client'

import { useEffect, useMemo, useState, type CSSProperties } from 'react'
import { Bebas_Neue, Montserrat } from 'next/font/google'
import styles from './invitation.module.css'

const bebasNeue = Bebas_Neue({ subsets: ['latin'], weight: '400' })
const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '500', '600'] })

const HERO_LINES = ['ENTER', 'THE', 'CONSTRUCT', "AKKADIANZ'26", 'INAUGURAL', 'CEREMONY']

const DETAILS = [
  { label: 'DATE', value: '13 March 2026' },
  { label: 'TIME', value: '10:30 AM' },
  {
    label: 'VENUE',
    value: 'SBM College of Engineering & Technology\nDindigul',
  },
]

export default function InvitationScene() {
  const [scrollY, setScrollY] = useState(0)

  const particles = useMemo(
    () =>
      Array.from({ length: 32 }, (_, i) => ({
        id: i,
        left: ((i * 13) % 100) + 0.2,
        top: ((i * 19) % 100) + 0.2,
        size: 1 + (i % 3),
        duration: 12 + (i % 7) * 2,
        delay: (i % 9) * -1.2,
      })),
    []
  )

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible)
          }
        }
      },
      { threshold: 0.24, rootMargin: '0px 0px -10% 0px' }
    )

    targets.forEach((target) => observer.observe(target))

    return () => observer.disconnect()
  }, [])

  return (
    <main className={`${styles.page} ${montserrat.className}`}>
      <div className={styles.backgroundBase} />
      <div className={styles.gridLayer} style={{ transform: `translateY(${scrollY * 0.12}px)` }} />
      <div className={styles.glowTop} style={{ transform: `translateY(${scrollY * -0.05}px)` }} />
      <div className={styles.glowBottom} style={{ transform: `translateY(${scrollY * 0.08}px)` }} />

      <div className={styles.particleField} aria-hidden="true">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className={styles.particle}
            style={
              {
                '--particle-left': `${particle.left}%`,
                '--particle-top': `${particle.top}%`,
                '--particle-size': `${particle.size}px`,
                '--particle-duration': `${particle.duration}s`,
                '--particle-delay': `${particle.delay}s`,
              } as CSSProperties
            }
          />
        ))}
      </div>

      <section className={styles.sectionHero}>
        <div className={styles.heroBlock}>
          {HERO_LINES.map((line, index) => (
            <p
              key={line}
              className={`${styles.heroLine} ${bebasNeue.className} ${line === "AKKADIANZ'26" ? styles.heroHighlight : ''}`}
              style={{ animationDelay: `${index * 0.18 + 0.2}s` }}
            >
              {line}
            </p>
          ))}
          <p className={styles.heroSubline}>National Level Technical Symposium</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`${styles.reveal} ${styles.centerBlock}`} data-reveal>
          <p className={`${styles.sectionTitle} ${bebasNeue.className}`}>THE CONSTRUCT</p>
          <p className={styles.bodyText}>
            {"AKKADIANZ'26 is a National Level Technical Symposium organized by the Department of Electronics and Communication Engineering and Biomedical Engineering at SBM College of Engineering and Technology, Dindigul."}
          </p>
          <p className={styles.bodyText}>
            A space where innovation begins, ideas evolve, and intellect meets possibility.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.detailStack}>
          {DETAILS.map((detail, index) => (
            <article
              key={detail.label}
              className={`${styles.reveal} ${styles.detailCard}`}
              data-reveal
              style={{ transitionDelay: `${index * 140}ms` }}
            >
              <p className={`${styles.detailLabel} ${bebasNeue.className}`}>{detail.label}</p>
              <p className={styles.detailValue}>
                {detail.value.split('\n').map((line) => (
                  <span key={`${detail.label}-${line}`}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={`${styles.reveal} ${styles.centerBlock}`} data-reveal>
          <p className={`${styles.sectionTitle} ${bebasNeue.className}`}>INVITATION</p>
          <p className={styles.bodyText}>We cordially invite you to witness the inauguration of AKKADIANZ'26.</p>
          <p className={styles.bodyText}>
            Join us as we initiate the first layer of this technical construct and celebrate innovation, knowledge, and engineering excellence.
          </p>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionClosing}`}>
        <div className={styles.closingFrame} data-reveal>
          <p className={`${styles.closingLine} ${bebasNeue.className}`}>WELCOME</p>
          <p className={`${styles.closingLine} ${bebasNeue.className}`}>TO</p>
          <p className={`${styles.closingLine} ${bebasNeue.className} ${styles.heroHighlight}`}>AKKADIANZ'26</p>
        </div>
      </section>
    </main>
  )
}
