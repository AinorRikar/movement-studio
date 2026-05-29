#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

if [[ ! -f .env ]]; then
  echo "Создайте .env из .env.example"
  exit 1
fi

# shellcheck disable=SC1091
source .env

EXPECTED_BASE="/movement-studio/"
BASE="${NUXT_PUBLIC_APP_BASEURL:-${NUXT_APP_BASE_URL:-}}"

if [[ "$BASE" != "$EXPECTED_BASE" ]]; then
  echo "Ошибка: NUXT_PUBLIC_APP_BASEURL должен быть ${EXPECTED_BASE}, сейчас: ${BASE:-<не задан>}"
  exit 1
fi

export NUXT_PUBLIC_APP_BASEURL="$BASE"
export NUXT_PUBLIC_SITE_URL="${NUXT_PUBLIC_SITE_URL:-http://localhost}"

echo "Сборка с NUXT_PUBLIC_APP_BASEURL=${NUXT_PUBLIC_APP_BASEURL}"
echo "NUXT_PUBLIC_SITE_URL=${NUXT_PUBLIC_SITE_URL}"

docker compose build --no-cache
docker compose up -d

echo "Ожидание Nitro..."
sleep 3

CHECK_URL="http://127.0.0.1:3000${EXPECTED_BASE}"
echo "Проверка (как gogol /dashboard/): wget ${CHECK_URL}"
HTML=$(docker compose exec -T app wget -qO- "$CHECK_URL" 2>/dev/null || true)

if echo "$HTML" | grep -q "baseURL:\"${EXPECTED_BASE}\""; then
  echo "OK: приложение отвечает на ${CHECK_URL}"
else
  echo "Ошибка: нет ожидаемого baseURL в ответе."
  echo "Корень :3000/ для subpath-сборки обычно даёт 302, не 200 — это нормально."
  docker compose exec -T app wget -qSO- "http://127.0.0.1:3000/" 2>&1 | head -5 || true
  echo "$HTML" | grep -o 'baseURL:"[^"]*"' | head -1 || true
  exit 1
fi

echo "Готово: ${NUXT_PUBLIC_SITE_URL}${EXPECTED_BASE}"
