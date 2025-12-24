'use client';

import styles from '@/styles/RoadSigns.module.css';
import { useEffect, useState } from 'react';
import { FEATURES } from '@/config/features';

export default function RoadSigns() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const signDefs = [
    {
      key: 'inspection',
      feature: FEATURES[0],
      threshold: 15,
      top: '22vh',
      side: 'right' as const,
      variant: 'info' as const,
      kicker: 'ПРОВЕРЕНО',
      badge: '01',
    },
    {
      key: 'quality',
      feature: FEATURES[1],
      threshold: 28,
      top: '34vh',
      side: 'left' as const,
      variant: 'guide' as const,
      kicker: 'PREMIUM',
      badge: '02',
    },
    {
      key: 'warranty',
      feature: FEATURES[2],
      threshold: 42,
      top: '46vh',
      side: 'right' as const,
      variant: 'guide' as const,
      kicker: 'СЕРВИС',
      badge: '03',
    },
    {
      key: 'fast',
      feature: FEATURES[3],
      threshold: 56,
      top: '58vh',
      side: 'left' as const,
      variant: 'warning' as const,
      kicker: 'БЫСТРО',
      badge: '04',
    },
    {
      key: 'price',
      feature: FEATURES[4],
      threshold: 70,
      top: '70vh',
      side: 'right' as const,
      variant: 'service' as const,
      kicker: 'ЧЕСТНО',
      badge: '05',
    },
    {
      key: 'models',
      feature: FEATURES[5],
      threshold: 82,
      top: '82vh',
      side: 'left' as const,
      variant: 'brown' as const,
      kicker: 'ВЫБОР',
      badge: '06',
    },
  ];

  return (
    <>
      {signDefs
        .filter((s) => scrollProgress > s.threshold)
        .map((s) => (
          <div
            key={s.key}
            className={`${styles.sign} ${styles[s.side]} ${styles[s.variant]}`}
            style={{ top: s.top }}
          >
            <div className={styles.post} />
            <div className={styles.panel}>
              <div className={styles.panelInner}>
                <div className={styles.kickerRow}>
                  <span className={styles.kicker}>{s.kicker}</span>
                  <span className={styles.badge} aria-hidden="true">
                    {s.badge}
                  </span>
                </div>
                <div className={styles.title}>{s.feature.title}</div>
                <div className={styles.description}>{s.feature.description}</div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}


