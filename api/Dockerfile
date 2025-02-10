FROM node:lts-alpine AS builder

WORKDIR /usr/src/app

COPY api api
COPY common common
RUN cd common && npm install && npm run build && npm prune --production
RUN cd api && npm install && npm run build && npm run generate-docs && npm prune --production

# Expose and run the app
EXPOSE 3000
CMD ["node", "/usr/src/app/api/dist/app.js"]