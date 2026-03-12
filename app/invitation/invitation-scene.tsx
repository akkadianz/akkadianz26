'use client'

import { useEffect, useMemo, useRef, useState, type CSSProperties } from 'react'
import { Bebas_Neue, Montserrat } from 'next/font/google'
import styles from './invitation.module.css'

const bebasNeue = Bebas_Neue({ subsets: ['latin'], weight: '400' })
const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

const TRANSITION_MS = 1100

type SceneIndex = 0 | 1 | 2 | 3

type ScenePaneProps = {
  index: SceneIndex
  phase: 'steady' | 'enter' | 'exit'
  onAdvance: () => void
  onReturnHome: () => void
}

function ReflectionTitle({ text, large = false, inception = false }: { text: string; large?: boolean; inception?: boolean }) {
  return (
    <div className={styles.reflectionWrap}>
      <p
        className={`${styles.reflectionTitle} ${large ? styles.reflectionLarge : ''} ${styles.neonSweep} ${inception ? styles.inceptionTitle : bebasNeue.className}`}
      >
        {text}
      </p>
      <p
        className={`${styles.reflectionTitle} ${large ? styles.reflectionLarge : ''} ${styles.reflectionCopy} ${inception ? styles.inceptionTitle : bebasNeue.className}`}
        aria-hidden="true"
      >
        {text}
      </p>
    </div>
  )
}

function ScenePane({ index, phase, onAdvance, onReturnHome }: ScenePaneProps) {
  return (
    <section
      className={`${styles.scene} ${phase === 'enter' ? styles.sceneEnter : ''} ${phase === 'exit' ? styles.sceneExit : ''}`}
      data-scene={index + 1}
      aria-hidden={phase === 'exit'}
    >
      {index === 0 && (
        <div className={styles.sceneContent}>
          <div className={styles.entryStack}>
            <p className={`${styles.heroLine} ${bebasNeue.className}`}>ENTER</p>
            <p className={`${styles.heroLine} ${bebasNeue.className}`}>THE</p>
            <p className={`${styles.heroLine} ${bebasNeue.className}`}>CONSTRUCT</p>
            <ReflectionTitle text="AKKADIANZ'26" large inception />
            <p className={`${styles.heroLine} ${styles.heroSub} ${bebasNeue.className}`}>INAUGURAL CEREMONY</p>
          </div>
          <button className={styles.navButton} type="button" onClick={onAdvance}>
            ENTER THE CONSTRUCT
          </button>
        </div>
      )}

      {index === 1 && (
        <div className={styles.sceneContent}>
          <div className={styles.inviteStack}>
            <p className={`${styles.sceneHeadline} ${styles.neonSweep} ${bebasNeue.className}`}>A NATIONAL LEVEL TECHNICAL SYMPOSIUM</p>
            <p className={styles.sceneBody}>Department of Electronics and Communication Engineering</p>
            <p className={styles.sceneBody}>& Biomedical Engineering</p>
            <p className={styles.sceneBodyStrong}>SBM College of Engineering and Technology</p>
          </div>
          <button className={styles.navButton} type="button" onClick={onAdvance}>
            GO DEEPER
          </button>
        </div>
      )}

      {index === 2 && (
        <div className={styles.sceneContent}>
          <div className={styles.eventGrid}>
            <article className={styles.eventCard}>
              <p className={`${styles.eventLabel} ${bebasNeue.className}`}>DATE</p>
              <p className={styles.eventValue}>13 MARCH 2026</p>
            </article>
            <article className={styles.eventCard}>
              <p className={`${styles.eventLabel} ${bebasNeue.className}`}>TIME</p>
              <p className={styles.eventValue}>10:30 AM</p>
            </article>
            <article className={styles.eventCard}>
              <p className={`${styles.eventLabel} ${bebasNeue.className}`}>VENUE</p>
              <p className={styles.eventValue}>SBM COLLEGE OF ENGINEERING & TECHNOLOGY</p>
              <p className={styles.eventValue}>DINDIGUL</p>
            </article>
          </div>
          <button className={styles.navButton} type="button" onClick={onAdvance}>
            INITIATE
          </button>
        </div>
      )}

      {index === 3 && (
        <div className={styles.sceneContent}>
          <div className={styles.finalStack}>
            <p className={`${styles.finalLine} ${bebasNeue.className}`}>YOU ARE INVITED</p>
            <p className={`${styles.finalLine} ${bebasNeue.className}`}>TO WITNESS THE BEGINNING</p>
            <ReflectionTitle text="AKKADIANZ'26" large inception />
            <p className={`${styles.finalSubline} ${bebasNeue.className}`}>INAUGURAL CEREMONY</p>
            <p className={styles.finalNote}>Join us as we initiate the construct of innovation.</p>
          </div>
          <button className={styles.navButton} type="button" onClick={onReturnHome}>
            RETURN TO HOME
          </button>
        </div>
      )}
    </section>
  )
}

export default function InvitationScene() {
  const [activeScene, setActiveScene] = useState<SceneIndex>(0)
  const [outgoingScene, setOutgoingScene] = useState<SceneIndex | null>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const transitionTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const particles = useMemo(
    () =>
      Array.from({ length: 38 }, (_, id) => ({
        id,
        x: ((id * 19) % 100) + 0.2,
        y: ((id * 31) % 100) + 0.2,
        size: 1 + (id % 4),
        duration: 9 + (id % 7) * 2.1,
        delay: (id % 9) * -0.8,
      })),
    []
  )

  useEffect(() => {
    const previousHtmlOverflow = document.documentElement.style.overflow
    const previousBodyOverflow = document.body.style.overflow

    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'

    return () => {
      document.documentElement.style.overflow = previousHtmlOverflow
      document.body.style.overflow = previousBodyOverflow
    }
  }, [])

  useEffect(
    () => () => {
      if (transitionTimer.current) {
        clearTimeout(transitionTimer.current)
      }
    },
    []
  )

  const moveToScene = (next: SceneIndex) => {
    if (next === activeScene || isTransitioning) return

    setOutgoingScene(activeScene)
    setActiveScene(next)
    setIsTransitioning(true)

    if (transitionTimer.current) {
      clearTimeout(transitionTimer.current)
    }

    transitionTimer.current = setTimeout(() => {
      setOutgoingScene(null)
      setIsTransitioning(false)
    }, TRANSITION_MS)
  }

  const handleAdvance = () => {
    const next = Math.min(activeScene + 1, 3) as SceneIndex
    moveToScene(next)
  }

  const handleReturnHome = () => {
    window.location.href = '/'
  }

  return (
    <main className={`${styles.viewport} ${styles[`scene${activeScene + 1}`]} ${montserrat.className}`}>
      <div className={styles.depthTunnel} />
      <div className={styles.reflectiveFloor} />
      <div className={styles.archGrid} />
      <div className={styles.glassPanels} />
      <div className={styles.fogLayer} />
      <div className={styles.lightSweepLayer} />

      <div className={styles.particleField} aria-hidden="true">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className={styles.particle}
            style={
              {
                '--px': `${particle.x}%`,
                '--py': `${particle.y}%`,
                '--ps': `${particle.size}px`,
                '--pd': `${particle.duration}s`,
                '--pl': `${particle.delay}s`,
              } as CSSProperties
            }
          />
        ))}
      </div>

      <div className={styles.sceneStage}>
        {outgoingScene !== null && (
          <ScenePane index={outgoingScene} phase="exit" onAdvance={handleAdvance} onReturnHome={handleReturnHome} />
        )}
        <ScenePane
          index={activeScene}
          phase={isTransitioning ? 'enter' : 'steady'}
          onAdvance={handleAdvance}
          onReturnHome={handleReturnHome}
        />
      </div>
    </main>
  )
}
