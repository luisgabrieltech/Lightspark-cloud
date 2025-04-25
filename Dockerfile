FROM node:18

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 8585

CMD ["node", "Backend/server.js"]
