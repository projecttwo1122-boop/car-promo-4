'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from '@/styles/Stats.module.css';

interface StatsProps {
  stats?: {
    totalCars: number;
    soldCars: number;
    averagePrice: number;
    rating: number;
  };
}

export default function Stats({ stats }: StatsProps) {
  const [displayStats, setDisplayStats] = useState({
    totalCars: 0,
    soldCars: 0,
    averagePrice: 0,
    rating: 0,
  });

  const [isInView, setIsInView] = useState(false);

  const defaultStats = {
    totalCars: 150,
    soldCars: 42,
    averagePrice: 2500000,
    rating: 4.9,
  };

  const finalStats = stats || defaultStats;

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const interval = 50;
    const steps = duration / interval;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = Math.min(currentStep / steps, 1);

      setDisplayStats({
        totalCars: Math.floor(finalStats.totalCars * progress),
        soldCars: Math.floor(finalStats.soldCars * progress),
        averagePrice: Math.floor(finalStats.averagePrice * progress),
        rating: Math.round((finalStats.rating * progress) * 10) / 10,
      });

      if (progress === 1) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isInView, finalStats]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <motion.section 
      className={styles.stats}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      onViewportEnter={() => setIsInView(true)}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.container}>
        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div className={styles.stat} variants={itemVariants}>
            <div className={styles.value}>
              {displayStats.totalCars}
              <span className={styles.suffix}>+</span>
            </div>
            <div className={styles.label}>Автомобилей</div>
          </motion.div>

          <motion.div className={styles.stat} variants={itemVariants}>
            <div className={styles.value}>
              {displayStats.soldCars}
            </div>
            <div className={styles.label}>Продано</div>
          </motion.div>

          <motion.div className={styles.stat} variants={itemVariants}>
            <div className={styles.value}>
              {Math.floor(displayStats.averagePrice / 1000000)}
              <span className={styles.suffix}>M</span>
            </div>
            <div className={styles.label}>Средняя цена ₽</div>
          </motion.div>

          <motion.div className={styles.stat} variants={itemVariants}>
            <div className={styles.value}>
              {displayStats.rating}
              <span className={styles.suffix}>/5</span>
            </div>
            <div className={styles.label}>Рейтинг</div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}



