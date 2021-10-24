FROM node:14-alpine

WORKDIR /app

COPY package*.json .

RUN yarn add package.json

COPY . .

RUN npm install -g serve

RUN yarn build

EXPOSE 8080

CMD serve -s build -l 3000