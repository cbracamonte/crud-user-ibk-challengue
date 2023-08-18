# Stage 1: Build
FROM node:16-alpine AS build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Stage 2
FROM nginx:latest
COPY --from=build /usr/src/app/dist/crud-users-ibk /usr/share/nginx/html
COPY --from=build /usr/src/app/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
