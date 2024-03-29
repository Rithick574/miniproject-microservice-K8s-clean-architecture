FROM node:20.5.0

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8002

CMD [ "npm" , "run" , "dev" ]
