# syntax=docker/dockerfile:1.7

FROM node:22-alpine AS builder
WORKDIR /app

ARG NUXT_PUBLIC_APP_BASEURL=/movement-studio/
ARG NUXT_PUBLIC_SITE_URL=http://localhost

ENV NUXT_PUBLIC_APP_BASEURL=$NUXT_PUBLIC_APP_BASEURL \
    NUXT_PUBLIC_SITE_URL=$NUXT_PUBLIC_SITE_URL \
    NUXT_APP_BASE_URL=$NUXT_PUBLIC_APP_BASEURL

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production \
    NITRO_HOST=0.0.0.0 \
    NITRO_PORT=3000

COPY --from=builder /app/.output ./.output

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
