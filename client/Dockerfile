FROM node:16-alpine
RUN mkdir /client
WORKDIR /client
EXPOSE 3000
COPY package.json /client
COPY package-lock.json /client
RUN npm install
COPY . /client
CMD ["npm", "run", "start"]
