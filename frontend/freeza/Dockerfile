FROM yobasystems/alpine-nginx:stable

WORKDIR /app

RUN apk add yarn --no-cache
RUN yarn config set registry https://registry.npmjs.org
RUN yarn global add react-scripts

VOLUME /app

RUN yarn