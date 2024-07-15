# Build stage
FROM node:slim as build
WORKDIR /webapps
COPY . .
RUN yarn install --frozen-lockfile --non-interactive --ignore-scripts
RUN yarn build

# Production stage
FROM nginx:stable-alpine as production
COPY --from=build /webapps/ /usr/share/nginx/html
COPY --from=build /webapps/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
