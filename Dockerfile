# Dockerfile for React client

# Build react client

FROM node:20-alpine

#set the working directory in docker file
WORKDIR /app

#copy package.json and package-log.json to /app directory
COPY package*.json ./

#Install dependecies

RUN npm install

# copy local files to app folder
COPY . .

#Expose the port

EXPOSE 5173

#start the vite server

CMD ["npm", "run", "dev"]





