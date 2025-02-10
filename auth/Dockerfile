FROM node:lts-alpine AS builder

WORKDIR /usr/src/app

COPY auth auth
COPY common common
RUN cd common && npm install && npm run build
RUN cd auth && npm install && npm run build && npm run generate-docs

FROM node:lts-alpine AS production

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/auth/package.json /usr/src/app/auth/package.json
COPY --from=builder /usr/src/app/auth/package-lock.json /usr/src/app/auth/package-lock.json
COPY --from=builder /usr/src/app/auth/dist /usr/src/app/auth/dist
COPY --from=builder /usr/src/app/auth/swagger.json /usr/src/app/auth/swagger.json
COPY --from=builder /usr/src/app/common/package.json /usr/src/app/common/package.json
COPY --from=builder /usr/src/app/common/package-lock.json /usr/src/app/common/package-lock.json
COPY --from=builder /usr/src/app/common/dist /usr/src/app/common/dist

RUN cd common && npm ci --production
RUN cd auth && npm ci --production

WORKDIR /usr/src/app/auth
# Expose and run the app
EXPOSE 8180
CMD ["node", "dist/app.js"]