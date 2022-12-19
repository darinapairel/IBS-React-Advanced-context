FROM node:16.15.0-alpine

ARG REACT_APP_API_PORT
# docker build . -t react-practice-front --build-arg REACT_APP_API_PORT=3000

WORKDIR /app

COPY package*.json .

RUN npm ci

COPY . .

RUN npm run build
# change to RUN npm start

RUN ls

RUN npm i -g simple-server

EXPOSE 3000

CMD ["simple-server", "/app/build", "3000"]
