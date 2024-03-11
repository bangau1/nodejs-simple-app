ARG ALPINE_VERSION="3.19"
ARG NODE_VERSION="21"

FROM node:${NODE_VERSION}-alpine${ALPINE_VERSION} AS builder
RUN apk add dumb-init

# create /app folder for node user
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app/

USER node
# COPY package*.json first and do npm install for better docker layer caching
COPY --chown=node:node package*.json .
RUN npm ci --only=production

# Then add all other files
COPY --chown=node:node . .

# set NODE_ENV=production to ensure all dependencies use the optimal setting for running it on prod
# in express.js, it can cache the view template, cache css files, and generate less verbose logs
ENV NODE_ENV production

# Use dumb-init, because `node` isn't suitable to run as PID 1 (the init process)
# hence it can't properly handle the SIGTERM signal
CMD [ "dumb-init", "node", "start.js" ]
