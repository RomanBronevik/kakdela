#!/usr/bin/env bash

NET_NAME=kakdela
CONTAINER_NAME=kakdela/php-fpm

. $(dirname $0)/functions.sh

set -e

if [[ -z "$(${SUDO_CMD} docker network inspect ${NET_NAME} > /dev/null 2>&1 && echo 1)" ]]; then
    ${SUDO_CMD} docker network create --subnet 172.18.0.0/24 ${NET_NAME}
fi

if [[ ! -f "${DIR}/../docker-compose.yml" ]]; then
    cp "${DIR}/../docker-compose.yml.dist" "${DIR}/../docker-compose.yml"
fi

if [[ -z "$(${SUDO_CMD} docker image inspect ${CONTAINER_NAME} > /dev/null 2>&1 && echo 1)" ]]; then
    bash -c "cd ${DIR}/.. && ${SUDO_CMD} docker-compose build"
fi

mkdir -m 777 -p $(dirname $0)/../../public/assets
