'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '@/styles/DetailedCarPage.module.css';

interface DetailedCarPageProps {
  carId?: number;
  carName?: string;
  carBrand?: string;
  carModel?: string;
}

export default function DetailedCarPage({
  carId = 1,
  carName = 'Porsche 911 Turbo',
  carBrand = 'Porsche',
  carModel = '911 Turbo',
}: DetailedCarPageProps) {
  const [activeTab, setActiveTab] = useState<'interior' | 'exterior'>('interior');
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Placeholder изображения - в production будут реальные картинки
  const specs = {
    power: '641 кВт (912 л.с.)',
    acceleration: '0-100 км/ч: 2.6 сек',
    maxSpeed: '330 км/ч',
    price: '15 600 000 ₽',
  };

  const performanceData = [
    { label: 'Acceleration 0 - 100 km/h with Sport Chrono Package', time: '2.6 s' },
    { label: 'Acceleration 0 - 200 km/h with Sport Chrono Package', time: '7.9 s' },
    { label: 'Acceleration 0 - 160 km/h with Sport Chrono Package', time: '5.1 s' },
    { label: 'Brakes: Porsche Ceramics Composite 350x370 (F) 75 m(s)', time: '30.9 m' },
  ];

  const interiorImages = [
    'https://images.unsplash.com/photo-1494976866556-6812c383971e?w=800',
    'https://images.unsplash.com/photo-1549399542-7e3f8b83ad38?w=800',
    'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800',
  ];

  const exteriorImages = [
    'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800',
    'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800',
    'https://images.unsplash.com/photo-1617654112368-307921291f31?w=800',
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400',
    'https://images.unsplash.com/photo-1494976866556-6812c383971e?w=400',
    'https://images.unsplash.com/photo-1549399542-7e3f8b83ad38?w=400',
    'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400',
    'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400',
    'https://images.unsplash.com/photo-1617654112368-307921291f31?w=400',
  ];

  const otherModels = [
    { name: '911 Carrera GTS', image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=300' },
    { name: '911 Targa', image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=300' },
    { name: '911 GT3 RS', image: 'https://images.unsplash.com/photo-1617654112368-307921291f31?w=300' },
  ];

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <motion.section
        className={styles.hero}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.heroContent}>
          <motion.div
            className={styles.heroText}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className={styles.title}>{carBrand}</h1>
            <h2 className={styles.model}>{carModel}</h2>
          </motion.div>

          <motion.img
            src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1000&h=600&fit=crop"
            alt={carName}
            className={styles.heroImage}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
        </div>
      </motion.section>

      {/* Specs Section */}
      <motion.section
        className={styles.specs}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.container}>
          <div className={styles.specGrid}>
            <motion.div
              className={styles.specItem}
              whileHover={{ scale: 1.05 }}
            >
              <div className={styles.specValue}>{specs.power}</div>
              <div className={styles.specLabel}>Power / Output</div>
            </motion.div>

            <motion.div
              className={styles.specItem}
              whileHover={{ scale: 1.05 }}
            >
              <div className={styles.specValue}>{specs.acceleration}</div>
              <div className={styles.specLabel}>Acceleration</div>
            </motion.div>

            <motion.div
              className={styles.specItem}
              whileHover={{ scale: 1.05 }}
            >
              <div className={styles.specValue}>{specs.maxSpeed}</div>
              <div className={styles.specLabel}>Top Speed</div>
            </motion.div>

            <motion.div
              className={styles.specItem}
              whileHover={{ scale: 1.05 }}
            >
              <div className={styles.specValue}>{specs.price}</div>
              <div className={styles.specLabel}>Price</div>
            </motion.div>
          </div>

          <motion.p
            className={styles.description}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Unleashed Power. Timeless Design. A perfect blend of breathtaking performance and eternal elegance. 
            Get ready to experience the extraordinary.
          </motion.p>

          <motion.button
            className={styles.ctaButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Build Your {carModel} →
          </motion.button>
        </div>
      </motion.section>

      {/* Gallery Tabs */}
      <motion.section
        className={styles.gallerySection}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Interior & Exterior</h2>

          <div className={styles.tabs}>
            <motion.button
              className={`${styles.tab} ${activeTab === 'interior' ? styles.active : ''}`}
              onClick={() => setActiveTab('interior')}
              whileHover={{ scale: 1.05 }}
            >
              Interior
            </motion.button>
            <motion.button
              className={`${styles.tab} ${activeTab === 'exterior' ? styles.active : ''}`}
              onClick={() => setActiveTab('exterior')}
              whileHover={{ scale: 1.05 }}
            >
              Exterior
            </motion.button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              className={styles.galleryMain}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={activeTab === 'interior' ? interiorImages[activeImageIndex] : exteriorImages[activeImageIndex]}
                alt="Car"
                className={styles.mainImage}
              />

              <div className={styles.thumbnails}>
                {(activeTab === 'interior' ? interiorImages : exteriorImages).map((img, idx) => (
                  <motion.img
                    key={idx}
                    src={img}
                    alt="Thumbnail"
                    className={`${styles.thumbnail} ${idx === activeImageIndex ? styles.active : ''}`}
                    onClick={() => setActiveImageIndex(idx)}
                    whileHover={{ scale: 1.1 }}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.section>

      {/* Performance Section */}
      <motion.section
        className={styles.performance}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Performance</h2>

          <div className={styles.performanceGrid}>
            {performanceData.map((item, idx) => (
              <motion.div
                key={idx}
                className={styles.performanceItem}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <span className={styles.label}>{item.label}</span>
                <span className={styles.value}>{item.time}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Full Gallery */}
      <motion.section
        className={styles.fullGallery}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Gallery</h2>

          <div className={styles.galleryGrid}>
            {galleryImages.map((img, idx) => (
              <motion.img
                key={idx}
                src={img}
                alt="Gallery"
                className={styles.galleryImage}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ scale: 1.05 }}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Other Models */}
      <motion.section
        className={styles.otherModels}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Other Models</h2>

          <div className={styles.modelsGrid}>
            {otherModels.map((model, idx) => (
              <motion.div
                key={idx}
                className={styles.modelCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <img src={model.image} alt={model.name} className={styles.modelImage} />
                <h3 className={styles.modelName}>{model.name}</h3>
                <motion.button
                  className={styles.modelButton}
                  whileHover={{ scale: 1.05 }}
                >
                  Explore →
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}



