FROM node:alpine

WORKDIR /src

RUN apk add --no-cache \
    bash \
    python \
    make \
    g++

EXPOSE 3333 9229

ENV HOST 0.0.0.0

CMD npm run dev

