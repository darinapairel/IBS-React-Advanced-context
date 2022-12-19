FROM node:16.15.0-alpine

WORKDIR /app

COPY package*.json .

RUN npm ci

COPY . .

# Better expose before CMD
EXPOSE 7000

CMD ["node", "server.js"]