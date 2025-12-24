'use client';

import { motion } from 'framer-motion';
import styles from '@/styles/Features.module.css';
import { FEATURES } from '@/config/features';

export default function Features() {
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
    <section className={styles.features}>
      <div className={styles.container}>
        {/* Header */}
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.eyebrow}>Почему мы лучше</div>
          <h2 className={styles.title}>
            Премиум сервис для выбирающих авто
          </h2>
        </motion.div>

        {/* Features grid */}
        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {FEATURES.map((feature, index) => (
            <motion.div 
              key={index}
              className={styles.feature}
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className={styles.iconWrapper}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <span className={styles.icon}>{feature.icon}</span>
              </motion.div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


