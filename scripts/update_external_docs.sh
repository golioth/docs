#!/bin/bash

CUR_DIR=$(pwd)

# Generate Golioth Backend/CLI Docs
pushd ../golioth
git pull
make docsgen ARGS="-o $CUR_DIR/docs --baseUrl /docs/"
popd

# Generate Golioth Zephyr SDK Docs
# pushd ../zephyr
# git pull
# make docsgen ARGS="-o $CUR_DIR/docs --baseUrl /docs/"
# popd