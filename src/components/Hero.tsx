import styles from '@/styles/Hero.module.css';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Эффект движения дороги */}
      <div className={styles.roadMotion}>
        <div className={styles.roadParticles}></div>
      </div>

      {/* Content */}
      <motion.div
        className={styles.content}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className={styles.titleWrapper}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className={styles.title}>
            <span className={styles.titleLine1}>Дорога</span>
            <span className={styles.titleLine2}>к совершенству</span>
          </h1>
        </motion.div>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Каждый автомобиль в нашей коллекции — это вершина инженерии и роскоши.
          <br />
          Прокрутите вниз, чтобы исследовать путь к идеальному выбору.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className={styles.buttons}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button className={styles.primaryButton}>
            <span>Исследовать коллекцию</span>
            <span className={styles.arrow}>↓</span>
          </button>
          <button className={styles.secondaryButton}>
            Связаться с консультантом
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className={styles.scrollIndicator}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className={styles.scrollDot}></div>
          <span className={styles.scrollText}>Прокрутить</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
