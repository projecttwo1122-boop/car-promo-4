import styles from '@/styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Top divider */}
      <div className={styles.topDivider}></div>

      <div className={styles.container}>
        {/* Main content */}
        <div className={styles.content}>
          <div className={styles.column}>
            <h4 className={styles.title}>Premium Auto</h4>
            <p className={styles.description}>
              Премиум коллекция автомобилей мирового уровня. Мастерство, качество и инновация.
            </p>
            <div className={styles.social}>
              <a href="#" className={styles.socialLink}>Telegram</a>
              <a href="#" className={styles.socialLink}>Instagram</a>
              <a href="#" className={styles.socialLink}>WhatsApp</a>
            </div>
          </div>

          <div className={styles.column}>
            <h5 className={styles.columnTitle}>Навигация</h5>
            <ul className={styles.links}>
              <li><a href="#collection">Коллекция</a></li>
              <li><a href="#specs">Характеристики</a></li>
              <li><a href="#contact">Контакт</a></li>
              <li><a href="#">О компании</a></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h5 className={styles.columnTitle}>Поддержка</h5>
            <ul className={styles.links}>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Доставка</a></li>
              <li><a href="#">Гарантия</a></li>
              <li><a href="#">Контакты</a></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h5 className={styles.columnTitle}>Контакты</h5>
            <ul className={styles.contactLinks}>
              <li><a href="tel:+79991234567">+7 (999) 123-45-67</a></li>
              <li><a href="mailto:info@premium-auto.ru">info@premium-auto.ru</a></li>
              <li className={styles.hours}>Пн-Пт: 09:00 - 20:00<br />Сб-Вс: 10:00 - 18:00</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>© 2024 Premium Auto. Все права защищены.</p>
          <ul className={styles.legal}>
            <li><a href="#">Политика конфиденциальности</a></li>
            <li><a href="#">Условия использования</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom divider */}
      <div className={styles.bottomDivider}></div>
    </footer>
  );
}
