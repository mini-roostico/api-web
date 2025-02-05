FROM node:lts-alpine as builder

RUN mkdir -p /verdaccio/plugins \
  && cd /verdaccio/plugins \
  && npm install --global-style --no-bin-links --omit=optional verdaccio-auth-memory@latest

FROM verdaccio/verdaccio:5

ADD conf/config.yaml /verdaccio/conf/config.yaml

USER root
RUN npm install --global verdaccio-static-token \
  && npm install --global verdaccio-auth-memory

USER $VERDACCIO_USER_UID