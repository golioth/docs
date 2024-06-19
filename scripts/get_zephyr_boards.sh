#!/bin/sh
# IMPORTANT! This needs to be run from the repository root, not from the current directory
# 	     You should run this as ./scripts/get_zephyr_board.sh

if [ -d vendor/zephyr/.git ]
then
    cd vendor/zephyr
    git reset --hard origin/main
    git pull origin main
    git checkout main
    git pull
else
    mkdir -p vendor/zephyr
    cd vendor/zephyr
    git init
    git remote add origin https://github.com/zephyrproject-rtos/zephyr.git
    git config core.sparsecheckout true
    echo boards/ >> .git/info/sparse-checkout
    git pull origin main

    # --depth=1 might further reduce download size
    # without depth limitation, the download size is cuurently ~480 MB
fi

cd -
if [ -d scripts/device-catalog/manually_added/boards ]
then
    echo "\nCopying board info from scripts/device-catalog/manually_added/boards to vendor/zephyr/boards\n"
    cp -r scripts/device-catalog/manually_added/boards/* vendor/zephyr/boards/.
fi
