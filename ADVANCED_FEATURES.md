# 🚀 Car Promo 4 - Advanced Features Guide

## Расширение функциональности

Этот документ содержит примеры кода для добавления дополнительных функций к car-promo-4.

## 📋 Содержание

1. [Dark/Light Mode Toggle](#darklight-mode-toggle)
2. [Contact Form](#contact-form)
3. [Search Filter](#search-filter)
4. [Newsletter Signup](#newsletter-signup)
5. [Image Gallery Modal](#image-gallery-modal)
6. [Wishlist Feature](#wishlist-feature)
7. [Analytics Integration](#analytics-integration)
8. [Performance Monitoring](#performance-monitoring)

---

## Dark/Light Mode Toggle

Добавить переключатель темы:

```typescript
// src/components/ThemeToggle.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from '@/styles/ThemeToggle.module.css';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved) {
      setIsDark(saved === 'dark');
      document.documentElement.setAttribute('data-theme', saved);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className={styles.toggle}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {isDark ? '☀️' : '🌙'}
    </motion.button>
  );
}
```

---

## Contact Form

Добавить форму контакта:

```typescript
// src/components/ContactForm.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '@/styles/ContactForm.module.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setSuccess(false), 3000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      className={styles.form}
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className={styles.group}>
        <input
          type="text"
          name="name"
          placeholder="Ваше имя"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.group}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.group}>
        <input
          type="tel"
          name="phone"
          placeholder="Телефон"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      <div className={styles.group}>
        <textarea
          name="message"
          placeholder="Сообщение"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          required
        />
      </div>

      <motion.button
        type="submit"
        disabled={loading}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={styles.submit}
      >
        {loading ? 'Отправка...' : 'Отправить'}
      </motion.button>

      {success && (
        <motion.div
          className={styles.success}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          ✅ Сообщение отправлено!
        </motion.div>
      )}
    </motion.form>
  );
}
```

---

## Search Filter

Добавить поиск и фильтры:

```typescript
// src/components/SearchFilter.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '@/styles/SearchFilter.module.css';

interface SearchFiltersProps {
  onFilter: (query: string, filters: any) => void;
}

export default function SearchFilter({ onFilter }: SearchFiltersProps) {
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState({
    minPrice: '',
    maxPrice: '',
    year: '',
    fuel: 'all',
  });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onFilter(value, filters);
  };

  const handleFilterChange = (key: string, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilter(query, newFilters);
  };

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className={styles.searchBox}>
        <input
          type="text"
          placeholder="Поиск по марке или модели..."
          value={query}
          onChange={handleSearch}
          className={styles.input}
        />
      </div>

      <div className={styles.filters}>
        <input
          type="number"
          placeholder="От цены"
          value={filters.minPrice}
          onChange={(e) => handleFilterChange('minPrice', e.target.value)}
          className={styles.filterInput}
        />

        <input
          type="number"
          placeholder="До цены"
          value={filters.maxPrice}
          onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
          className={styles.filterInput}
        />

        <select
          value={filters.year}
          onChange={(e) => handleFilterChange('year', e.target.value)}
          className={styles.filterInput}
        >
          <option value="">Все годы</option>
          {Array.from({ length: 20 }, (_, i) => 2024 - i).map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>

        <select
          value={filters.fuel}
          onChange={(e) => handleFilterChange('fuel', e.target.value)}
          className={styles.filterInput}
        >
          <option value="all">Все виды топлива</option>
          <option value="petrol">Бензин</option>
          <option value="diesel">Дизель</option>
          <option value="electric">Электро</option>
          <option value="hybrid">Гибрид</option>
        </select>
      </div>
    </motion.div>
  );
}
```

---

## Newsletter Signup

Подписка на новости:

```typescript
// src/components/NewsletterSignup.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '@/styles/NewsletterSignup.module.css';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage('✅ Вы подписались на рассылку!');
        setEmail('');
      } else {
        setMessage('❌ Ошибка при подписке');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('❌ Произошла ошибка');
    } finally {
      setLoading(false);
      setTimeout(() => setMessage(''), 3000);
    }
  };

  return (
    <motion.section
      className={styles.newsletter}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className={styles.content}>
        <h2>Будьте в курсе новинок</h2>
        <p>Получайте информацию о новых автомобилях и специальных предложениях</p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="email"
            placeholder="Ваш email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {loading ? '...' : 'Подписаться'}
          </motion.button>
        </form>

        {message && (
          <motion.p
            className={styles.message}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {message}
          </motion.p>
        )}
      </div>
    </motion.section>
  );
}
```

---

## Image Gallery Modal

Модальное окно для галереи:

```typescript
// src/components/ImageGalleryModal.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '@/styles/ImageGalleryModal.module.css';

interface ImageGalleryModalProps {
  images: string[];
  isOpen: boolean;
  onClose: () => void;
}

export default function ImageGalleryModal({
  images,
  isOpen,
  onClose,
}: ImageGalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.backdrop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className={styles.modal}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.close} onClick={onClose}>
              ✕
            </button>

            <div className={styles.imageContainer}>
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                alt="Gallery"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            </div>

            <div className={styles.controls}>
              <button onClick={prevImage}>←</button>
              <span>{currentIndex + 1} / {images.length}</span>
              <button onClick={nextImage}>→</button>
            </div>

            <div className={styles.thumbnails}>
              {images.map((image, index) => (
                <motion.img
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index}`}
                  className={index === currentIndex ? styles.active : ''}
                  onClick={() => setCurrentIndex(index)}
                  whileHover={{ scale: 1.1 }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
```

---

## Wishlist Feature

Система избранных:

```typescript
// src/hooks/useWishlist.ts
import { useState, useEffect } from 'react';

interface WishlistItem {
  carId: number;
  addedAt: number;
}

export function useWishlist() {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('wishlist');
    if (saved) {
      setWishlist(JSON.parse(saved));
    }
  }, []);

  const addToWishlist = (carId: number) => {
    const exists = wishlist.some((item) => item.carId === carId);
    if (!exists) {
      const newWishlist = [...wishlist, { carId, addedAt: Date.now() }];
      setWishlist(newWishlist);
      localStorage.setItem('wishlist', JSON.stringify(newWishlist));
    }
  };

  const removeFromWishlist = (carId: number) => {
    const newWishlist = wishlist.filter((item) => item.carId !== carId);
    setWishlist(newWishlist);
    localStorage.setItem('wishlist', JSON.stringify(newWishlist));
  };

  const isInWishlist = (carId: number) => {
    return wishlist.some((item) => item.carId === carId);
  };

  return { wishlist, addToWishlist, removeFromWishlist, isInWishlist };
}
```

---

## Analytics Integration

Добавить аналитику:

```typescript
// src/lib/analytics.ts
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export const trackEvent = (eventName: string, eventData?: Record<string, any>) => {
  if (window.gtag) {
    window.gtag('event', eventName, eventData);
  }
};

export const trackPageView = (pageName: string) => {
  trackEvent('page_view', {
    page_title: pageName,
  });
};

export const trackCarView = (carId: number, carName: string) => {
  trackEvent('view_car', {
    car_id: carId,
    car_name: carName,
  });
};

export const trackContactClick = () => {
  trackEvent('contact_click');
};
```

Используйте в компонентах:

```typescript
import { trackCarView } from '@/lib/analytics';

// In component
useEffect(() => {
  trackCarView(car.id, `${car.brand} ${car.model}`);
}, [car]);
```

---

## Performance Monitoring

Мониторинг производительности:

```typescript
// src/lib/performance.ts
export const reportWebVitals = (metric: any) => {
  if (window.location.hostname === 'localhost') return;

  const body = {
    name: metric.name,
    value: metric.value,
    id: metric.id,
    label: metric.label,
  };

  // Отправить на сервер
  fetch('/api/metrics', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  }).catch(console.error);
};

export const logPerformance = () => {
  if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        console.log(entry.name, entry.duration);
      }
    });

    observer.observe({ entryTypes: ['navigation', 'resource'] });
  }
};
```

---

## Примеры использования в главной странице

```typescript
// src/app/page.tsx
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SearchFilter from '@/components/SearchFilter';
import CarsShowcase from '@/components/CarsShowcase';
import Stats from '@/components/Stats';
import Features from '@/components/Features';
import NewsletterSignup from '@/components/NewsletterSignup';
import Footer from '@/components/Footer';

export default function Home() {
  const handleFilter = (query: string, filters: any) => {
    // Фильтровать автомобили
    console.log('Search:', query, 'Filters:', filters);
  };

  return (
    <div className="app">
      <Header />
      <Hero />
      <SearchFilter onFilter={handleFilter} />
      <CarsShowcase />
      <Stats />
      <Features />
      <NewsletterSignup />
      <Footer />
    </div>
  );
}
```

---

## API Routes примеры

```typescript
// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.json();

  // Валидация
  if (!body.email || !body.name) {
    return NextResponse.json(
      { error: 'Missing required fields' },
      { status: 400 }
    );
  }

  try {
    // Отправить email или сохранить в БД
    // ...

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
```

---

## 📝 Следующие шаги

1. Реализовать выбранные функции
2. Добавить необходимые API routes
3. Протестировать на всех браузерах
4. Оптимизировать производительность
5. Развернуть на production

---

**Удачи в разработке! 🚀**



