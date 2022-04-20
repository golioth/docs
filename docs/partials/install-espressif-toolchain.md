`west` makes it easy to install the Espressif toolchain:

```
west espressif update
west espressif install
```

:::caution
Pay close attention to the output at the end of the `west espressif install`
step. You will see the export commands you need to set your environmental
variables. The `ESPRESSIF_TOOLCHAIN_PATH` shown below may be different on your
machine.
:::

Configure the toolchain with environment variables:

```
export ZEPHYR_TOOLCHAIN_VARIANT="espressif"
export ESPRESSIF_TOOLCHAIN_PATH="${HOME}/.espressif/tools/xtensa-esp32-elf/esp-2020r3-8.4.0/xtensa-esp32-elf"
export PATH=$PATH:$ESPRESSIF_TOOLCHAIN_PATH/bin
```
