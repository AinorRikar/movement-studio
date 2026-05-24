# Movement Studio

Сайт танцевальной студии на **Nuxt 4** + **Tailwind CSS**.

## Структура (FSD)

```
src/
  pages/              — маршруты
  widgets/            — секции страниц
  shared/
    config/           — design-system.json
    content/          — загрузка site.ru.json
    lib/              — SEO, токены кнопок
    ui/               — кнопки, логотип, разделители
content/
  site.ru.json        — все тексты и SEO (редактировать здесь)
public/
  images/
```

## Запуск

```bash
npm install
npm run dev
```

Страницы: `/`, `/about-us`, `/classes`

### Dev за подпутём (как на сервере)

```bash
NUXT_APP_BASE_URL=/movement-studios/ npm run dev
```

## Production (SSR)

```bash
cp .env.example .env
# задать NUXT_APP_BASE_URL=/movement-studios/ и NUXT_PUBLIC_SITE_URL

npm run build
npm start
```

## Docker

```bash
docker compose build
docker compose up -d
```

Контейнер `movement-studios-app` слушает порт 3000 в сети `web`. Проксирование через nginx MySite — см. [deploy/nginx-movement-studios.conf.example](./deploy/nginx-movement-studios.conf.example).

## Favicon

```bash
node scripts/generate-favicons.mjs
```

Генерирует `public/favicon.ico`, `favicon-32x32.png`, `apple-touch-icon.png` из `public/images/logo-mark.png`.

## Дизайн-система

Токены в [`src/shared/config/design-system.json`](src/shared/config/design-system.json). Tailwind читает их из `tailwind.config.ts`.
