FROM node:18-alpine
WORKDIR /app
COPY package.json .
COPY server.js .
RUN npm install --only=production
EXPOSE 3000
CMD ["npm", "start"]