# 🚀 DEPLOYMENT GUIDE - Car Promo 4

## Готово к Deployment на Production!

### ✅ Pre-Deployment Checklist

```bash
# 1. Проверить что всё собирается
npm run build

# 2. Проверить что нет ошибок TypeScript
npm run build  # будет показано если есть ошибки

# 3. Протестировать локально
npm run dev
# Перейти на http://localhost:3004
# Проверить все компоненты работают
# Проверить мобильную версию
```

---

## 📦 Варианты Deployment

### Вариант 1: Railway (Рекомендуется)

```bash
# 1. Установить Railway CLI
npm i -g @railway/cli

# 2. Логин в Railway
railway login

# 3. Создать новый проект
railway init

# 4. Связать с Git
git add .
git commit -m "car-promo-4: design overhaul complete"
git push

# 5. Deploy
railway deploy

# 6. Получить URL
railway status
```

**Config (railway.json уже готов):**
```json
{
  "build": { "builder": "nixpacks" },
  "start": "npm start"
}
```

---

### Вариант 2: Vercel (Альтернатива)

```bash
# 1. Установить Vercel CLI
npm i -g vercel

# 2. Deploy
vercel deploy

# 3. Выбрать конфигурацию
# Vercel автоматически детектирует Next.js

# 4. Готово!
```

---

### Вариант 3: Docker + Heroku

```bash
# 1. Собрать Docker образ
docker build -t car-promo-4:latest .

# 2. Тестировать локально
docker run -p 3004:3004 car-promo-4:latest

# 3. Пушить на Docker Hub
docker tag car-promo-4:latest your-registry/car-promo-4:latest
docker push your-registry/car-promo-4:latest

# 4. Deploy на Heroku
heroku create car-promo-4
heroku container:push web --app car-promo-4
heroku container:release web --app car-promo-4

# 5. Открыть
heroku open --app car-promo-4
```

---

### Вариант 4: Собственный VPS

```bash
# 1. SSH на сервер
ssh root@your-server.com

# 2. Установить Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# 3. Клонировать репозиторий
git clone https://github.com/your-repo/cars.git
cd cars/car-promo-4

# 4. Установить зависимости
npm install

# 5. Собрать
npm run build

# 6. Запустить production
npm start

# 7. Настроить Nginx как reverse proxy
# Смотреть nginx.conf в проекте

# 8. Создать systemd сервис
sudo nano /etc/systemd/system/car-promo-4.service
```

**Пример systemd сервиса:**
```ini
[Unit]
Description=Car Promo 4 Service
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=/home/www-data/cars/car-promo-4
ExecStart=/usr/bin/npm start
Restart=on-failure
RestartSec=10

[Install]
WantedBy=multi-user.target
```

---

## 🌍 Environment Variables

Создайте файл `.env.production`:

```bash
# API Configuration
NEXT_PUBLIC_API_URL=https://your-api.railway.app

# Optional: Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Optional: Sentry
NEXT_PUBLIC_SENTRY_DSN=https://...

# Port (если нужно)
PORT=3004
```

---

## 🔒 Security Checklist

Перед production:

```bash
# 1. Удалить sensitive данные из кода
grep -r "password\|secret\|token" src/
# Не должно быть найдено

# 2. Проверить .gitignore
cat .gitignore
# Убедиться что есть: .env, .env.local, node_modules

# 3. Включить HTTPS
# Railway/Vercel делают автоматически
# Для VPS: использовать Let's Encrypt

# 4. Включить security headers
# Nginx config или Next.js middleware

# 5. Rate limiting
# Для API ограничить количество запросов с IP
```

---

## 📊 Мониторинг

После deployment:

```bash
# 1. Проверить логи
railway logs  # Railway
vercel logs   # Vercel
tail -f /var/log/car-promo-4.log  # VPS

# 2. Включить monitoring
# New Relic, DataDog, или встроенный

# 3. Настроить alerts
# Если приложение упадёт - получить уведомление
```

---

## 🐛 Troubleshooting

### Приложение не запускается

```bash
# 1. Проверить логи
npm run build  # Может быть ошибка в build
npm start      # Может быть runtime ошибка

# 2. Проверить environment переменные
echo $NEXT_PUBLIC_API_URL

# 3. Проверить порт
lsof -i :3004  # Может быть что-то на порту

# 4. Перезагрузить
pm2 restart car-promo-4
# или
systemctl restart car-promo-4
```

### Медленная загрузка

```bash
# 1. Включить Next.js analytics
# NEXT_PUBLIC_ANALYTICS_ID в .env

# 2. Оптимизировать images
# Используется встроенный Next.js image optimization

# 3. Включить caching headers
# Смотреть next.config.js
```

### CORS ошибки

```bash
# 1. Проверить NEXT_PUBLIC_API_URL
# Должна быть корректная ссылка на API

# 2. Проверить API CORS headers
# API должна разрешить запросы с вашего домена

# 3. Добавить в next.config.js
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
    ];
  },
};
```

---

## 📈 Performance Optimization

Для максимальной скорости:

```bash
# 1. Включить compression
# Уже включен в next.config.js

# 2. Включить image optimization
# Встроено в Next.js

# 3. Минимизировать JavaScript
# Next.js делает автоматически в production

# 4. Использовать CDN
# Railway/Vercel предоставляют глобальный CDN
```

---

## 🎯 Post-Deployment

После успешного deployment:

```bash
# 1. Проверить URL
# https://your-domain.com должен открыться

# 2. Протестировать на мобильных
# Использовать Chrome DevTools

# 3. Проверить всех браузерах
# Chrome, Firefox, Safari, Edge

# 4. Проверить SEO
# Кейс-сенсетив URL
# Meta tags видны
# Open Graph image работает

# 5. Включить monitoring
# Получать alertsи если что сломается

# 6. Настроить auto-deploy
# Каждый push в main → auto deploy
```

---

## ✅ Финальный Чек-лист

Перед тем как объявить production:

- [ ] App открывается на production URL
- [ ] Все компоненты отрисовываются корректно
- [ ] PromoAlert видна и работает
- [ ] CountdownBanner работает
- [ ] CTA кнопки работают
- [ ] Мобильная версия отличная
- [ ] Логи не показывают ошибок
- [ ] API подключена и работает
- [ ] Анимации плавные
- [ ] Нет console errors
- [ ] Lighthouse score > 80
- [ ] Все страницы доступны

---

## 🔄 Continuous Deployment

Для автоматического deploy при каждом push:

### Railway
```bash
# Автоматический deploy при push в main
# Уже сконфигурировано в railway.json
```

### Vercel
```bash
# Автоматический deploy при push
# Нужно связать GitHub repo в Vercel dashb
```

### GitHub Actions (Manual)
```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - run: npm start &
```

---

## 🎉 Успешный Deployment!

Когда вы видите:

```
✅ Application running at https://your-domain.com
✅ All components working
✅ No errors in logs
✅ Mobile version perfect
✅ Lighthouse score excellent
```

**Тогда car-promo-4 готова к боевому использованию! 🚀**

---

## 📞 Support

Если что-то не работает:

1. Проверить логи
2. Проверить environment переменные
3. Перестроить: `npm run build`
4. Перезагрузить: restart container/service
5. Если всё ещё не работает - contact support

---

**Ready to launch! 🎯🔥**



