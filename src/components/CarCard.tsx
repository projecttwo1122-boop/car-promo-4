'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Car, CarFile } from '@/lib/api';
import styles from '@/styles/CarCard.module.css';

interface CarCardProps {
  car: Car;
  getFileUrl: (file: CarFile) => string;
  isActive?: boolean;
}

export default function CarCard({ car, getFileUrl, isActive = false }: CarCardProps) {
  const [imageError, setImageError] = useState(false);

  const primaryImage = car.files?.[0];
  const imageUrl = primaryImage ? getFileUrl(primaryImage) : null;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price);
  };

  return (
    <motion.div 
      className={`${styles.card} ${isActive ? styles.active : ''}`}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      layout
    >
      {/* Image container */}
      <div className={styles.imageContainer}>
        {imageUrl && !imageError ? (
          <motion.img
            src={imageUrl}
            alt={`${car.brand} ${car.model}`}
            className={styles.image}
            onError={() => setImageError(true)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          />
        ) : (
          <div className={styles.placeholderImage}>
            <span>📷</span>
          </div>
        )}

        {/* Overlay gradient */}
        <div className={styles.overlay} />

        {/* Badge */}
        <motion.div 
          className={styles.badge}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {car.year} г.
        </motion.div>

        {/* Photo count */}
        <motion.div 
          className={styles.photoCount}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          📸 {car.files?.length || 0}
        </motion.div>
      </div>

      {/* Content */}
      <motion.div 
        className={styles.content}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <div className={styles.brand}>{car.brand}</div>
        <h3 className={styles.model}>{car.model}</h3>

        {/* Specs */}
        <div className={styles.specs}>
          <span className={styles.spec}>
            <span className={styles.specIcon}>⚙️</span>
            {car.gearbox}
          </span>
          <span className={styles.spec}>
            <span className={styles.specIcon}>⛽</span>
            {car.fuel}
          </span>
          <span className={styles.spec}>
            <span className={styles.specIcon}>🏎️</span>
            {car.powerValue} л.с.
          </span>
        </div>

        {/* Price */}
        <motion.div 
          className={styles.priceSection}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <div className={styles.price}>
            {formatPrice(car.price)} ₽
          </div>
          <motion.button 
            className={styles.button}
            whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)' }}
            whileTap={{ scale: 0.95 }}
          >
            Подробнее
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}



