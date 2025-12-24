'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getCars, getFileUrl, Car } from '@/lib/api';
import CarCard from '@/components/CarCard';
import styles from '@/styles/CarsShowcase.module.css';

export default function CarsShowcase() {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const loadCars = async () => {
      setLoading(true);
      const fetchedCars = await getCars({ limit: 12 });
      const availableCars = fetchedCars.filter(car => !car.isSold).slice(0, 6);
      setCars(availableCars);
      setLoading(false);
    };

    loadCars();
  }, []);

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
    <section className={styles.showcase}>
      <div className={styles.container}>
        {/* Header */}
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.eyebrow}>Специальная коллекция</div>
          <h2 className={styles.title}>
            Выбранные для вас
            <motion.span 
              className={styles.highlight}
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              автомобили
            </motion.span>
          </h2>
          <p className={styles.subtitle}>
            Каждый автомобиль тщательно отобран для обеспечения высочайшего качества и производительности
          </p>
        </motion.div>

        {/* Loading state */}
        {loading && (
          <div className={styles.loadingContainer}>
            <motion.div 
              className={styles.loadingSpinner}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            />
            <p>Загружаем коллекцию...</p>
          </div>
        )}

        {/* Cars grid */}
        {!loading && cars.length > 0 && (
          <motion.div 
            className={styles.grid}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {cars.map((car, index) => (
              <motion.div 
                key={car.id}
                variants={itemVariants}
                onMouseEnter={() => setActiveIndex(index)}
                className={styles.gridItem}
              >
                <CarCard 
                  car={car} 
                  getFileUrl={getFileUrl}
                  isActive={activeIndex === index}
                />
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Empty state */}
        {!loading && cars.length === 0 && (
          <motion.div 
            className={styles.emptyState}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className={styles.emptyIcon}>🚗</div>
            <p>Коллекция скоро пополнится</p>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div 
          className={styles.cta}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3>Готовы найти свой идеальный автомобиль?</h3>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={styles.ctaButton}
          >
            Просмотреть все →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}



