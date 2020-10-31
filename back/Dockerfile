FROM node

COPY . .

RUN npm cache clean --force

RUN npm install

CMD [ "npm", "start" ]