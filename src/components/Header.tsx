import styles from '@/styles/Header.module.css';
import Link from 'next/link';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo - минималистичный чёрно-белый */}
        <Link href="/" className={styles.logo}>
          <span className={styles.logoText}>PREMIUM</span>
          <span className={styles.logoDot}></span>
          <span className={styles.logoSub}>AUTO</span>
        </Link>

        {/* Navigation */}
        <nav className={styles.nav}>
          <a href="#collection" className={styles.navLink}>Коллекция</a>
          <a href="#specs" className={styles.navLink}>Характеристики</a>
          <a href="#contact" className={styles.navLink}>Контакт</a>
        </nav>

        {/* CTA Button */}
        <button className={styles.ctaButton}>
          <span className={styles.buttonText}>Запросить</span>
          <span className={styles.buttonArrow}>→</span>
        </button>
      </div>

      {/* Bottom line - дорожная разметка */}
      <div className={styles.roadLine}></div>
    </header>
  );
}
