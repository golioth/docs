`west` makes it easy to install Espressif submodules and OpenOCD configurations:

```shell
cd c:\golioth-zephyr-workspace
west espressif update
west espressif install
```

:::caution
Older versions of the Zephyr SDK Toolchain (prior to 0.14.2) installed the compiler tools using `west espressif install` and required manually setting environmental variables as follows:

```shell
set ESPRESSIF_TOOLCHAIN_PATH=C:\Users\Mike\.espressif\tools\zephyr
set ZEPHYR_TOOLCHAIN_VARIANT=espressif
```

Now, compiler tools are included in the Zephyr SDK. Manually setting these environmental variables is deprecated and this step is no longer needed. We included this message to help inform users about the changes.
:::
