FROM oven/bun:1.0.0 AS builder

WORKDIR /app

COPY bun.lockb package.json ./

RUN bun install

COPY . .

RUN bun run build

FROM oven/bun:1.0.0

WORKDIR /app

COPY --from=builder /app/build ./build
COPY --from=builder /app/package.json ./

RUN bun install --production

EXPOSE 3000

CMD ["bun", "run", "start"]

