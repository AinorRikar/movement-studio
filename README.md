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

## Запуск локально

```bash
npm install
npm run dev
```

Страницы: `/`, `/about-us`, `/classes`

### Dev за подпутём (как на сервере)

```bash
NUXT_APP_BASE_URL=/movement-studio/ npm run dev
```

## Деплой на сервер (через nginx MySite)

Сайт доступен по адресу: `http://ВАШ_IP/movement-studio/`

### 1. Сеть Docker (один раз)

```bash
docker network create web
```

### 2. Проект Movement Studio (этот репозиторий)

```bash
cd /path/to/movement-studio   # каталог Test на сервере
cp .env.example .env
```

В `.env`:

```env
NUXT_PUBLIC_SITE_URL=http://178.250.158.178
NUXT_APP_BASE_URL=/movement-studio/
```

Сборка и запуск (**baseURL вшивается при build** — после смены пути обязателен `--no-cache`**):

```bash
chmod +x scripts/deploy.sh
./scripts/deploy.sh
```

Или вручную:

```bash
docker compose build --no-cache
docker compose up -d
docker compose ps
```

Если в браузере редирект на `/movement-studios/movement-studio/` — образ собран со **старым** `NUXT_APP_BASE_URL=/movement-studios/`. Проверьте `.env` и пересоберите.

Проверка изнутри сети:

```bash
docker run --rm --network web curlimages/curl -s -o /dev/null -w "%{http_code}" http://movement-studios-app:3000/movement-studio/
# ожидается 200
```

### 3. MySite — nginx

В `nginx/conf.d/default.conf` уже должен быть блок `/movement-studio/` (см. [deploy/nginx-movement-studio.conf.example](./deploy/nginx-movement-studio.conf.example)).

```bash
cd /path/to/MySite
git pull origin main
docker compose exec nginx nginx -t
docker compose exec nginx nginx -s reload
```

### 4. Проверка в браузере

- `http://178.250.158.178/movement-studio/`
- `http://178.250.158.178/movement-studio/about-us`
- `http://178.250.158.178/movement-studio/classes`

## Production без Docker

```bash
NUXT_APP_BASE_URL=/movement-studio/ NUXT_PUBLIC_SITE_URL=http://178.250.158.178 npm run build
npm start
```

## Favicon

```bash
npm run favicons
```

## Дизайн-система

Токены в [`src/shared/config/design-system.json`](src/shared/config/design-system.json). Tailwind читает их из `tailwind.config.ts`.
