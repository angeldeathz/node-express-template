# Fetching the minified node image on apline linux
FROM node:slim

# Declaring env
ENV NODE_ENV development

# Setting up the work directory
WORKDIR /dist

# Copying all the files in our project
COPY package*.json .

# Installing dependencies
RUN npm ci
COPY . .

# Build app for production
RUN npm run build

# Clean unnecesary folders and files
RUN rm -r src && rm tsconfig.json  && rm package*.json

# Starting our application
CMD [ "node", "dist/server.js" ]

# Exposing server port
EXPOSE 3000