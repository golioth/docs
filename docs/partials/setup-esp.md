#### Install Espressif SDK (ESP-IDF)

`west` makes it easy to install the Espressif toolchain:

```
west espressif install
```

Configure the toolchain with environment variables:

```
export ZEPHYR_TOOLCHAIN_VARIANT="espressif"
export ESPRESSIF_TOOLCHAIN_PATH="${HOME}/.espressif/tools/xtensa-esp32-elf/esp-2020r3-8.4.0/xtensa-esp32-elf"
export PATH=$PATH:$ESPRESSIF_TOOLCHAIN_PATH/bin
```

:::caution
`ESPRESSIF_TOOLCHAIN_PATH` may be different on your machine. Verify location after the `west espressif install` step.
:::