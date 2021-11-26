FROM node:16-alpine

WORKDIR /app

COPY svelte.config.js ./
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

ENV PORT=5000
EXPOSE 5000

ENV HOST=0.0.0.0

CMD [ "node", "./build" ]