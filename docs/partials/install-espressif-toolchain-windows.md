1. `west` makes it easy to install the Espressif toolchain:

    ```shell
    west espressif update
    west espressif install
    ```

2. Configure the toolchain with environment variables:

    :::caution
    Pay close attention to the output at the end of the `west espressif install`
    step. **There is currently a bug for Windows** that adds quotes to these
    variable. **Remove the quotes in these commands** and make sure to use the
    path that is show in your console (it will differ from what you see below
    because of the user name).
    :::

    ```shell
    set ESPRESSIF_TOOLCHAIN_PATH=C:\Users\Mike\.espressif\tools\zephyr
    set ZEPHYR_TOOLCHAIN_VARIANT=espressif
    ```

If you're using Powershell instead of cmd, you'll need to use these commands instead:

    ```shell
    $env:ESPRESSIF_TOOLCHAIN_PATH = 'C:\Users\<USER>\.espressif\tools\zephyr'
    $env:ZEPHYR_TOOLCHAIN_VARIANT = 'espressif'
    ```
