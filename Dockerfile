FROM node:latest

WORKDIR /usr/src/app

# RUN mkdir node
# COPY . ./node
COPY package*.json ./

RUN npm install 
COPY . .
EXPOSE 3000
CMD ["node", "index.js" ]
