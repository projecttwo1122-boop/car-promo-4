'use client';

import { motion } from 'framer-motion';
import styles from '@/styles/AnimatedText.module.css';

interface AnimatedTextProps {
  children: string;
  highlight?: boolean;
  color?: 'primary' | 'accent' | 'success' | 'warning';
  delay?: number;
}

export default function AnimatedText({
  children,
  highlight = false,
  color = 'primary',
  delay = 0,
}: AnimatedTextProps) {
  const words = children.split(' ');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.08,
        ease: [0.34, 1.56, 0.64, 1],
      },
    }),
  };

  return (
    <motion.span
      className={`${styles.container} ${highlight ? styles.highlight : ''} ${styles[color]}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, i) => (
        <motion.span key={i} custom={i} variants={wordVariants}>
          {word}{' '}
        </motion.span>
      ))}
    </motion.span>
  );
}



