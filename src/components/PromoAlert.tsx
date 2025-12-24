'use client';

import { motion } from 'framer-motion';
import styles from '@/styles/PromoAlert.module.css';

interface PromoAlertProps {
  onClose?: () => void;
}

export default function PromoAlert({ onClose }: PromoAlertProps) {
  const containerVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.34, 1.56, 0.64, 1],
      },
    },
    exit: {
      opacity: 0,
      y: -100,
      transition: { duration: 0.3 },
    },
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      boxShadow: [
        '0 0 0 0 rgba(255, 46, 126, 0.7)',
        '0 0 0 15px rgba(255, 46, 126, 0)',
      ],
      transition: {
        duration: 1.5,
        repeat: Infinity,
      },
    },
  };

  return (
    <motion.div
      className={styles.alert}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className={styles.content}>
        <motion.span
          className={styles.icon}
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          🎉
        </motion.span>

        <div className={styles.text}>
          <motion.h3
            className={styles.title}
            animate={{ opacity: [1, 0.8, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            СУПЕР АКЦИЯ! Скидки до 40% на премиум авто
          </motion.h3>
          <p className={styles.subtitle}>
            ⏰ Предложение ограничено! Успейте выбрать свой автомобиль прямо сейчас
          </p>
        </div>

        <motion.button
          className={styles.cta}
          variants={pulseVariants}
          animate="animate"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ВЫБРАТЬ АВТО
        </motion.button>
      </div>

      <motion.div
        className={styles.progress}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  );
}



