FROM node:lts-alpine AS builder

WORKDIR /usr/src/app

COPY auth auth
COPY common common
RUN cd common && npm install && npm run build && npm prune --production
RUN cd auth && npm install && npm run build && npm run generate-docs && npm prune --production

# Expose and run the app
EXPOSE 8180
CMD ["node", "/usr/src/app/auth/dist/app.js"]