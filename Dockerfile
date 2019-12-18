### STAGE 1: Build ###
FROM node:12.7-alpine AS build
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build --prod

### STAGE 2: Run ###
FROM nginx:1.17.1-alpine

COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /usr/src/app/dist/client-app /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;" ]
