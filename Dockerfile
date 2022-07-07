FROM node:14.17.4

WORKDIR /app

COPY ./package.json ./

RUN npm install

#COPY entrypoint.sh .
COPY app.js .

#RUN chmod +x /app/entrypoint.sh
RUN chmod +x /app/app.js

COPY  . .

EXPOSE 3100

#ENTRYPOINT [ "sh", "/app/entrypoint.sh" ]
ENTRYPOINT [ "node", "app.js" ]