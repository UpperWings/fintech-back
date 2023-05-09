FROM node:lts-alpine
WORKDIR /app

COPY . .
#RUN apk add python g++ make
RUN npm install -g nodemon
RUN npm install
ENV NODE_ENV=local
CMD ["npm", "run", "dev" ]