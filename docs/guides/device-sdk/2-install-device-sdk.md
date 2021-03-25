---
id: install-device-sdk
title: Install/Upgrade Device SDK
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Our main device SDK is based on the Zephyr RTOS. So a lot of the initial steps required at close to the same requirements to use Zephyr.

### Install `west` and Zephyr SDK

You can follow the [Getting Started Guide](https://docs.zephyrproject.org/latest/getting_started/index.html) on Zephyr's website to install the `west` tool and also setup Zephyr SDK. If you using an OS other than Linux, you can skip the toolchain section as we are gonna show how to install them individually here.

With `west`, you can install our Device SDK with this command:

```
west init -m git@github.com:golioth/zephyr.git --mr main
west update
west patch
```

### Upgrading Golioth Device SDK

If you already installed our SDK before and want to upgrade it, you can go to the folder that you made the set up before and run the commands bellow:

```
cd modules/lib/golioth
git pull
west update
cd ../../../
west patch
```
