#!/bin/bash

# Base directory
BASE_DIR="src"

# Create base directory
mkdir -p $BASE_DIR

# Create common subdirectories
mkdir -p $BASE_DIR/common/{decorators,filters,guards,interceptors,pipes}

# Create config subdirectories
mkdir -p $BASE_DIR/config

# Create shared subdirectories
mkdir -p $BASE_DIR/shared/{dto,entities,interfaces}

# Create utils subdirectories
mkdir -p $BASE_DIR/utils

# Create main files
touch $BASE_DIR/config/configuration.ts
touch $BASE_DIR/config/configuration.module.ts

# Create utils files
touch $BASE_DIR/utils/constants.ts
touch $BASE_DIR/utils/helpers.ts
touch $BASE_DIR/utils/logger.ts

# Use Nest CLI to generate modules, controllers, and services
nest g module auth modules
nest g controller auth modules
nest g service auth modules

nest g module posts modules
nest g controller posts modules
nest g service posts modules

nest g module users modules
nest g controller users modules
nest g service users modules

nest g module comments modules
nest g controller comments modules
nest g service comments modules

echo "Directory structure created successfully."