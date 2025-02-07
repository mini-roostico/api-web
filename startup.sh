#!/bin/bash
set -e  # Exit immediately if any command (simple or compound) returns a non-zero status

# ++++++++++++++++
# UTIL FUNCTIONS
# ++++++++++++++++

print_help() {
    echo "Usage: $0 [command]"
    echo ""
    echo "Commands:"
    echo "  up      Startup the API service"
    echo "  down    Stop the service"
    echo ""
    echo "Pre-requisites:"
    echo "  - Unix-like operating system (macOS or Linux)"
    echo "  - Docker"
    echo "  - npm"
}

detect_os() {
    unameOut="$(uname -s)"
    case "${unameOut}" in
        Linux*)     machine=Linux;;
        Darwin*)    machine=Mac;;
        CYGWIN*)    machine=Cygwin;;
        MINGW*)     machine=MinGw;;
        *)          machine="UNKNOWN:${unameOut}"
    esac
}

# Check if the container is running
is_container_running() {
    local container_name_or_id=$1
    docker ps --format "{{.Names}} {{.Status}}" | grep "$container_name_or_id" | grep "Up" &> /dev/null
}

# Launch a container and wait for it to be ready
launch_container() {
  container_name=$1
  echo "Launching $container_name"
  docker-compose up -d --build $container_name
  echo "Check for $container_name to be ready..."
  while ! is_container_running $container_name; do
    sleep 1
  done
}

copy_keys() {
  target_folder=$1
  if [ ! -d "$target_folder/secrets" ]; then
    mkdir -p "$target_folder/secrets"
    echo "Directory "$target_folder/secrets" created."
  fi
  echo "Copying test keys in $target_folder/secrets"
  cp -rf ./.test_secrets/* $target_folder/secrets
}


# +++++++++++++++
# MAIN
# +++++++++++++++
detect_os
if [ $machine == "Mac" ]; then
    export INTERNAL_GATEWAY="host.docker.internal"
else
    export INTERNAL_GATEWAY="172.17.0.1"
fi

# Startup and configure the API-server
startup() {

  docker-compose down

  # Launch the containers
  echo "STEP 0: Copying test keys in the projects"
  copy_keys api
  copy_keys auth
  copy_keys common

  echo "STEP 1: Launching the mongodb and redis containers"
  if [ ! -d "dbdata" ]; then
      mkdir -p "dbdata"
      sudo chmod go+rwx ./dbdata
      echo "Directory 'dbdata' created."
  fi
  launch_container mongodb

  if [ ! -d "cache" ]; then
      mkdir -p "cache"
      sudo chmod go+rwx ./cache
      echo "Directory 'cache' created."
  fi
  launch_container redis

  sleep 5
  echo "STEP 2: Launching api and auth containers"
  launch_container api-server
  launch_container auth-server

  echo "STEP 3: Done"
}

# Shutdown the API-server
shutdown() {
    echo "Stopping all services..."
    docker compose down
}

if [ "$1" == "up" ]; then
    startup
elif [ "$1" == "down" ]; then
    shutdown
else
    print_help
fi
