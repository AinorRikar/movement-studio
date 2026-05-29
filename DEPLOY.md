# Развёртывание Movement Studio

Как [gogol_tasks/DEPLOY.md](../gogol_tasks/DEPLOY.md): основной сайт (MySite) на nginx, это приложение — в Docker по префиксу `/movement-studio/`. **Обратного API в MySite нет** (в отличие от integration у gogol).

## Схема

```text
Интернет → nginx MySite :80 / :443
              ├─ /                    → mysite-app:3000
              └─ /movement-studio/    → movement-studios-app:3000/movement-studio/

Docker network "web":
  - mysite-nginx
  - mysite-app
  - movement-studios-app (порт 3000 только внутри сети)
```

## Переменные

```env
NUXT_PUBLIC_SITE_URL=http://178.250.158.178
NUXT_PUBLIC_APP_BASEURL=/movement-studio/
```

| Переменная | Назначение |
|------------|------------|
| `NUXT_PUBLIC_APP_BASEURL` | Должен совпадать с `location` в nginx и **build-arg** в Dockerfile |
| `NUXT_PUBLIC_SITE_URL` | Публичный origin без пути (canonical, OG) |

## Первый деплой

```bash
docker network create web

cd /path/to/movement-studio
cp .env.example .env
chmod +x scripts/deploy.sh
./scripts/deploy.sh
```

## Nginx MySite

Фрагмент в `nginx/conf.d/default.conf` (уже в репозитории MySite):

```nginx
location /movement-studio/ {
  proxy_pass http://movement-studios-app:3000/movement-studio/;
  proxy_http_version 1.1;
  proxy_set_header Host $host;
  proxy_set_header X-Forwarded-Proto $scheme;
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  proxy_set_header X-Forwarded-Prefix /movement-studio;
}
```

```bash
cd /path/to/MySite
git pull origin main
docker compose exec nginx nginx -t
docker compose exec nginx nginx -s reload
```

## Диагностика

**Внутри контейнера** (аналог gogol `/dashboard/`):

```bash
docker exec movement-studios-app wget -qSO- --timeout=5 http://127.0.0.1:3000/movement-studio/ 2>&1 | head
# ожидается HTTP/1.1 200
```

`http://127.0.0.1:3000/` без префикса при `NUXT_PUBLIC_APP_BASEURL=/movement-studio/` даст **302** на `/movement-studio/` — это нормально, не ошибка.

**Через nginx с хоста:**

```bash
curl -sI http://127.0.0.1/movement-studio/ | head
```

## Частые ошибки

| Симптом | Решение |
|---------|---------|
| Редирект на `/movement-studios/movement-studio/` | Образ со старым baseURL → `docker compose build --no-cache` |
| 404 на `/movement-studio/` в контейнере | Сборка с `NUXT_PUBLIC_APP_BASEURL=/` вместо `/movement-studio/` |
| 404 снаружи, 200 внутри | nginx не обновлён или контейнер не в сети `web` |
