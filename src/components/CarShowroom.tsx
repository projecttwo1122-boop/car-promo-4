import styles from '@/styles/CarShowroom.module.css';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

interface Car {
  id: number;
  name: string;
  brand: string;
  price: number;
  power: number;
  acceleration: number;
  maxSpeed: number;
  year: number;
  image: string;
  specs: {
    engineType: string;
    transmission: string;
    seats: number;
  };
}

interface CarShowroomProps {
  cars?: Car[];
}

const defaultCars: Car[] = [
  {
    id: 1,
    name: '911 Turbo',
    brand: 'Porsche',
    price: 15600000,
    power: 641,
    acceleration: 2.6,
    maxSpeed: 330,
    year: 2024,
    image: 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=500&h=500&fit=crop',
    specs: { engineType: 'V6 TwinTurbo', transmission: 'PDK', seats: 4 }
  },
  {
    id: 2,
    name: 'F8 Tributo',
    brand: 'Ferrari',
    price: 27500000,
    power: 710,
    acceleration: 2.9,
    maxSpeed: 340,
    year: 2024,
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=500&h=500&fit=crop',
    specs: { engineType: 'V12 NA', transmission: 'DCT', seats: 2 }
  },
  {
    id: 3,
    name: 'Revuelto',
    brand: 'Lamborghini',
    price: 45000000,
    power: 654,
    acceleration: 2.5,
    maxSpeed: 350,
    year: 2024,
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=500&h=500&fit=crop',
    specs: { engineType: 'V12 PHEV', transmission: 'Automatic', seats: 2 }
  },
  {
    id: 4,
    name: 'M760xL',
    brand: 'BMW',
    price: 18900000,
    power: 619,
    acceleration: 3.0,
    maxSpeed: 305,
    year: 2024,
    image: 'https://images.unsplash.com/photo-1567818735868-e71b99932e29?w=500&h=500&fit=crop',
    specs: { engineType: 'V12 TwinTurbo', transmission: 'Automatic', seats: 5 }
  },
  {
    id: 5,
    name: 'AMG GT Black',
    brand: 'Mercedes',
    price: 32100000,
    power: 585,
    acceleration: 3.1,
    maxSpeed: 325,
    year: 2024,
    image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=500&h=500&fit=crop',
    specs: { engineType: 'V8 BiTurbo', transmission: 'DCT', seats: 2 }
  },
  {
    id: 6,
    name: 'DBS Superlegera',
    brand: 'Aston Martin',
    price: 38500000,
    power: 645,
    acceleration: 3.2,
    maxSpeed: 340,
    year: 2024,
    image: 'https://images.unsplash.com/photo-1625231724019-a6b2b8e6aeb5?w=500&h=500&fit=crop',
    specs: { engineType: 'V12 NA', transmission: 'Manual/Automatic', seats: 2 }
  },
  {
    id: 7,
    name: 'Chiron',
    brand: 'Bugatti',
    price: 285000000,
    power: 1103,
    acceleration: 2.4,
    maxSpeed: 420,
    year: 2024,
    image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=500&h=500&fit=crop',
    specs: { engineType: 'W16 QuadTurbo', transmission: 'DCT', seats: 2 }
  },
  {
    id: 8,
    name: 'Ghost',
    brand: 'Rolls-Royce',
    price: 52000000,
    power: 420,
    acceleration: 4.6,
    maxSpeed: 250,
    year: 2024,
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=500&h=500&fit=crop',
    specs: { engineType: 'V12 TwinTurbo', transmission: 'Automatic', seats: 5 }
  },
  {
    id: 9,
    name: '720S',
    brand: 'McLaren',
    price: 22800000,
    power: 710,
    acceleration: 2.8,
    maxSpeed: 341,
    year: 2024,
    image: 'https://images.unsplash.com/photo-1557804506-669714153f27?w=500&h=500&fit=crop',
    specs: { engineType: 'V8 TwinTurbo', transmission: 'SSG', seats: 2 }
  },
  {
    id: 10,
    name: 'Continental GT',
    brand: 'Bentley',
    price: 28400000,
    power: 635,
    acceleration: 3.5,
    maxSpeed: 333,
    year: 2024,
    image: 'https://images.unsplash.com/photo-1468276311594-df7cb65d8c50?w=500&h=500&fit=crop',
    specs: { engineType: 'W12 TwinTurbo', transmission: 'Automatic', seats: 4 }
  }
];

export default function CarShowroom({ cars = defaultCars }: CarShowroomProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className={styles.section} id="collection">
      {/* Декоративные линии перехода */}
      <div className={styles.transitionLines}>
        <div className={styles.transitionLine} style={{ top: '0%' }}></div>
        <div className={styles.transitionLine} style={{ top: '25%' }}></div>
        <div className={styles.transitionLine} style={{ top: '50%' }}></div>
        <div className={styles.transitionLine} style={{ top: '75%' }}></div>
      </div>

      <div className={styles.container}>
        {/* Section Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>Исследуйте коллекцию</h2>
          <p className={styles.subtitle}>Каждый автомобиль — вершина мастерства</p>
          <div className={styles.divider}></div>
        </motion.div>

        {/* Cars Grid */}
        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {cars.map((car) => (
            <motion.div
              key={car.id}
              className={styles.card}
              variants={cardVariants}
              onHoverStart={() => setHoveredId(car.id)}
              onHoverEnd={() => setHoveredId(null)}
              whileHover={{ y: -5 }}
            >
              {/* Image Container */}
              <div className={styles.imageContainer}>
                <Image
                  src={car.image}
                  alt={`${car.brand} ${car.name}`}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Year Badge */}
                <div className={styles.yearBadge}>{car.year}</div>
              </div>

              {/* Content */}
              <div className={styles.content}>
                <div className={styles.header}>
                  <div className={styles.brandSection}>
                    <span className={styles.brand}>{car.brand}</span>
                    <span className={styles.dot}></span>
                  </div>
                  <h3 className={styles.name}>{car.name}</h3>
                </div>

                {/* Specs */}
                <div className={styles.specs}>
                  <div className={styles.specItem}>
                    <span className={styles.specLabel}>Мощность</span>
                    <span className={styles.specValue}>{car.power} кВт</span>
                  </div>
                  <div className={styles.specItem}>
                    <span className={styles.specLabel}>0-100</span>
                    <span className={styles.specValue}>{car.acceleration} сек</span>
                  </div>
                  <div className={styles.specItem}>
                    <span className={styles.specLabel}>Макс.</span>
                    <span className={styles.specValue}>{car.maxSpeed} км/ч</span>
                  </div>
                </div>

                {/* Price and Button */}
                <div className={styles.footer}>
                  <div className={styles.price}>
                    {(car.price / 1000000).toFixed(1)}M ₽
                  </div>
                  <motion.button
                    className={styles.button}
                    whileHover={{ letterSpacing: '0.15em' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Подробнее
                    <span className={styles.arrow}>→</span>
                  </motion.button>
                </div>

                {/* Details Line - видна при hover */}
                <div
                  className={styles.detailsLine}
                  style={{
                    opacity: hoveredId === car.id ? 1 : 0,
                    maxHeight: hoveredId === car.id ? '100px' : '0px',
                  }}
                >
                  <p className={styles.detailsText}>
                    {car.specs.engineType} • {car.specs.transmission} • {car.specs.seats} мест
                  </p>
                </div>
              </div>

              {/* Фоновый акцент - лакированное золото при hover */}
              <motion.div
                className={styles.hoverGlow}
                animate={{
                  opacity: hoveredId === car.id ? 0.1 : 0,
                  scale: hoveredId === car.id ? 1 : 0.8,
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className={styles.ctaText}>Готовы найти ваш идеальный автомобиль?</p>
          <button className={styles.ctaButton}>
            Запросить консультацию
          </button>
        </motion.div>
      </div>
    </section>
  );
}
