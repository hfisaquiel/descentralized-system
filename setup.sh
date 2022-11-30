#!/bin/bash
set -e

export INTERNAL_NETWORK_NAME=descentralized-system-network

echo "Creating main network ${INTERNAL_NETWORK_NAME}"
docker network create \
    --attachable \
    --internal \
    --driver=bridge \
    --subnet=172.32.0.0/16 \
    --ip-range=172.32.10.0/24 \
    ${INTERNAL_NETWORK_NAME} || true

echo 'Bringing up Proxy'
cd -P ./proxy || {
    echo 'No Proxy. aborting!'
    exit 1
} && docker-compose up -d --build
