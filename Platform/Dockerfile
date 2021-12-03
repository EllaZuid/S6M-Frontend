# Stage 1
# FROM node:14.15-alpine as build-step
# RUN mkdir -p /app
# WORKDIR /app
# COPY package.json /app
# RUN npm install
# COPY . /app
# RUN npm run build --prod

# Stage 2
# FROM nginx:1.17.1-alpine
# COPY --from=build-step /app/dist/Platform /usr/share/nginx/html

FROM node:14.15-alpine AS build
EXPOSE 4200
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build
