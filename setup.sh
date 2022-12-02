#!/bin/bash
set -e

export INTERNAL_NETWORK_NAME=descentralized-system-network

SCRIPT_DIR=$PWD
DIR_FRONTEND="./frontend"

runDockerComposeRebuild() {
    docker-compose up -d --build --force --remove-orphans
}

runComposeOnScopeProjectList() {
    local FOLDER_PATH_KEEP=$PWD

    cd "$1"

    local CURRENT_FOLDER_PATH=$PWD

    find "." -mindepth 1 -maxdepth 1 -type d | while read dir_name; do
        local path_compose="${dir_name}/docker-compose.yml"
        if [ -e "$path_compose" ]; then
            cd "$dir_name"

            echo "runnig $path_compose"
            runDockerComposeRebuild

            cd "$CURRENT_FOLDER_PATH"
        fi
    done

    cd "$FOLDER_PATH_KEEP"
}

echo ''
echo '\e[1;31;1m+-----------------------+\e[0m'
echo '\e[1;31;1m| Descentralized System |\e[0m'
echo '\e[1;31;1m+-----------------------+\e[0m'

echo ''
echo "\e[1;34;1mCreating main network ${INTERNAL_NETWORK_NAME}\e[0m"
docker network create \
    --attachable \
    --internal \
    --driver=bridge \
    --subnet=172.32.0.0/16 \
    --ip-range=172.32.10.0/24 \
    ${INTERNAL_NETWORK_NAME} || true

echo ''
echo '\e[34;1mBringing up Proxy\e[0m'
cd -P ./proxy || {
    echo 'No Proxy. aborting!'
    exit 1
} && runDockerComposeRebuild
cd "$SCRIPT_DIR"

echo ''
echo '\e[34;1mCreating front-end instances\e[0m'
runComposeOnScopeProjectList $DIR_FRONTEND "$SCRIPT_DIR"
