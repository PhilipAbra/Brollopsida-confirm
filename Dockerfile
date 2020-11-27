FROM node

EXPOSE 80
WORKDIR /srv/react

COPY package.json .
COPY dist dist
COPY main.js .
RUN chown -R node:node .

USER node
RUN npm install \
    express@$(node -p -e "require('./package.json').dependencies.express")

USER root

CMD [ "npm", "run", "start:live" ]