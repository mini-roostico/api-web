FROM node:lts-alpine AS builder

WORKDIR /usr/src/app

COPY api api
COPY common common
RUN cd common && npm install && npm run build
RUN cd api && npm install && npm run build && npm run generate-docs

FROM node:lts-alpine AS production

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/api/package.json /usr/src/app/api/package.json
COPY --from=builder /usr/src/app/api/package-lock.json /usr/src/app/api/package-lock.json
COPY --from=builder /usr/src/app/api/dist /usr/src/app/api/dist
COPY --from=builder /usr/src/app/api/swagger.json /usr/src/app/api/swagger.json
COPY --from=builder /usr/src/app/common/package.json /usr/src/app/common/package.json
COPY --from=builder /usr/src/app/common/package-lock.json /usr/src/app/common/package-lock.json
COPY --from=builder /usr/src/app/common/dist /usr/src/app/common/dist

RUN cd common && npm ci --omit=dev
RUN cd api && npm ci --omit=dev

WORKDIR /usr/src/app/api
# Expose and run the app
EXPOSE 8180
CMD ["node", "dist/app.js"]