FROM node:14

WORKDIR /app

COPY Package*.json ./

RUN npm install 

COPY . .

EXPOSE 3001

CMD ["node", "index.js"]

