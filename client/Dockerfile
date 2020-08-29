FROM node:latest
WORKDIR client
ADD . .
RUN npm install && \
    npm install http-server -g && \
    npx webpack client.js
CMD ["http-server", "-p", "8081"]

