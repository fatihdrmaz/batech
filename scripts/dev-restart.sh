#!/bin/sh
# Port 3001'de çalışan işlemi durdurup dev sunucusunu temiz başlatır

PORT=3001

echo "Port $PORT'u kullanan işlem aranıyor..."
PID=$(lsof -ti :$PORT 2>/dev/null)

if [ -n "$PID" ]; then
  echo "Port $PORT'u kullanan işlem (PID: $PID) sonlandırılıyor..."
  kill -9 $PID 2>/dev/null || true
  sleep 2
fi

echo ".next önbelleği siliniyor..."
rm -rf .next

echo "Dev sunucusu başlatılıyor (port $PORT)..."
npm run dev -- -p $PORT
