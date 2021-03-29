### Install `west` and Zephyr SDK

You can follow the [Getting Started Guide](https://docs.zephyrproject.org/latest/getting_started/index.html) on Zephyr's website to install the `west` tool and also setup Zephyr SDK. If you using an OS other than Linux, you can skip the toolchain section as we are gonna show how to install them individually here.

With `west`, you can install our Device SDK with this command:

```
west init -m git@github.com:golioth/zephyr.git --mr main
west update
west patch
```
