FROM node:8.2.1-alpine

# Create app directory
WORKDIR /usr/src/app

# Bundle app source
COPY . /usr/src/app

RUN npm install --silent

EXPOSE 3001

ENTRYPOINT ["npm"]

CMD ["start"]