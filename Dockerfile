FROM node:12

# Create app directory
WORKDIR /usr/src/app

COPY . .

RUN ls

EXPOSE 8080

CMD [ "node", "node-build/main.js" ]
