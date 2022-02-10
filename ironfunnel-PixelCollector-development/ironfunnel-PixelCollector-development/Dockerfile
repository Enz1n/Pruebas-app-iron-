FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 7701

RUN npm run build 

CMD npm run start
