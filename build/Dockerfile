# syntax=docker/dockerfile:1

FROM node:20.12-alpine AS node-base
WORKDIR /home/node/

#-------
#-- API build/serve

FROM node-base AS api-build
WORKDIR ./build/
COPY ./api/*.json ./api/
COPY ./api/src ./api/src/
WORKDIR ./api/
RUN npm install
RUN npm run build
WORKDIR ./dist/
RUN cp ../package.json ./
RUN npm install --no-package-lock --omit dev
RUN rm ./package.json
WORKDIR ../

FROM node-base AS api-serve
WORKDIR ./api/
COPY --from=api-build /home/node/build/api/dist ./
CMD node ./index.js
EXPOSE 3000

#-------
#-- UI build/serve

FROM node-base AS ui-build-base
RUN npm install -g @angular/cli
WORKDIR ./build/

FROM ui-build-base AS ui-build
COPY ./ui/*.json ./ui/
COPY ./ui/src ./ui/src/
WORKDIR ./ui/
RUN npm install
RUN ng build

FROM ui-build AS ui-serve
CMD ng serve
EXPOSE 4200

