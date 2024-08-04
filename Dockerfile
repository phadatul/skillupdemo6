FROM alpine:latest

RUN apk add nodejs
RUN apk add npm

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 8283

CMD [ "npm", "start" ]