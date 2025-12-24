'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from '@/styles/CountdownBanner.module.css';

export default function CountdownBanner() {
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 23,
    minutes: 45,
    seconds: 30,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        seconds -= 1;
        if (seconds < 0) {
          seconds = 59;
          minutes -= 1;
        }
        if (minutes < 0) {
          minutes = 59;
          hours -= 1;
        }
        if (hours < 0) {
          hours = 23;
          days -= 1;
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <motion.div
      className={styles.timeBlock}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        className={styles.value}
        key={value}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {String(value).padStart(2, '0')}
      </motion.div>
      <div className={styles.label}>{label}</div>
    </motion.div>
  );

  return (
    <motion.div
      className={styles.banner}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.icon}>⏰</span>
          <h3>Акция заканчивается через:</h3>
        </div>

        <div className={styles.countdown}>
          <TimeBlock value={timeLeft.days} label="Дней" />
          <div className={styles.separator}>:</div>
          <TimeBlock value={timeLeft.hours} label="Часов" />
          <div className={styles.separator}>:</div>
          <TimeBlock value={timeLeft.minutes} label="Минут" />
          <div className={styles.separator}>:</div>
          <TimeBlock value={timeLeft.seconds} label="Сек" />
        </div>

        <motion.p
          className={styles.urgency}
          animate={{ opacity: [1, 0.7, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ⚡ Не пропустите! Места ограничены!
        </motion.p>
      </div>
    </motion.div>
  );
}



