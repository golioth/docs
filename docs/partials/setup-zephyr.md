### Install `west` and the Zephyr SDK

Begin by following the [Getting Started Guide](https://docs.zephyrproject.org/latest/getting_started/index.html) over on Zephyr's website to install the `west` tool and setup Zephyr SDK. Please pay attention to the platform-specific steps.

With `west`, you can install our Device SDK with this command:

```
west init -m git@github.com:golioth/zephyr.git --mr main
west update
west patch
```

:::note
The patch step is temporary until the Github repo is made public
:::
