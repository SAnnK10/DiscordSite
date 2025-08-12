FROM oven/bun:1 AS base
WORKDIR /app

RUN apt-get update && apt-get install -y openssl

COPY package.json bun.lock ./

COPY prisma ./prisma

RUN bun install && bunx prisma generate

COPY . .

CMD ["bun", "run", "dev"]