#!/usr/bin/env bash
# Диагностика деплоя (по аналогии с gogol_tasks/scripts/server-diagnose-dashboard.sh)
set -euo pipefail

EDGE_NGINX="${EDGE_NGINX:-mysite-nginx}"
APP_CONTAINER="${APP_CONTAINER:-movement-studios-app}"

echo "=== container ==="
docker ps --filter "name=${APP_CONTAINER}" --format 'table {{.Names}}\t{{.Status}}'

echo ""
echo "=== inside app: /movement-studio/ (expect 200) ==="
docker exec "$APP_CONTAINER" wget -qSO- --timeout=5 http://127.0.0.1:3000/movement-studio/ 2>&1 | head -12

echo ""
echo "=== inside app: / (expect 302 to /movement-studio/) ==="
docker exec "$APP_CONTAINER" wget -qSO- --timeout=5 http://127.0.0.1:3000/ 2>&1 | head -8

echo ""
echo "=== via nginx ==="
docker exec "$EDGE_NGINX" wget -qSO- --timeout=5 http://movement-studios-app:3000/movement-studio/ 2>&1 | head -8 || true

echo ""
echo "=== host curl ==="
curl -sI --max-time 5 http://127.0.0.1/movement-studio/ | head -8 || true
