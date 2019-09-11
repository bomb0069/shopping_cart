# base image
FROM node:8.12.0 as dev

# set working directory
WORKDIR /app


# install and cache app dependencies
COPY package.json package.json
RUN npm install 
RUN npm run test
RUN npm run test:e2e


# RUN npm install react-scripts@3.0.1 -g --silent

# start app
# CMD ["npm", "start"]
COPY . /app
RUN npm run build

# production environment
FROM nginx:1.16.0-alpine
COPY --from=dev /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]