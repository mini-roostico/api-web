FROM node:lts-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production
RUN npm run build

COPY dist ./dist

EXPOSE 3000

CMD ["node", "dist/app.js"]