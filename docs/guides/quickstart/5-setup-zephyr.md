---
id: setup-zephyr
title: Setup Zephyr
---

Golioth can be added to a device with _Device SDKs_ which are based on different embedded Operating Systems. Currenly Golioth targets the [Zephyr Project](https://www.zephyrproject.org/) and builds upon the APIs & tools of Zephyr. As such, prior experience with Zephyr will make working with Golioth's Zephyr Device SDK comfortable and familiar. Refer to Zephyr's [detailed documentation](https://docs.zephyrproject.org/) when running into issues.

#### macOS Instructions

:::note
Zephyr supports developing on Linux, Windows and macOS. This guide will focus on macOS. For other systems follow the guides from the [Zephyr documentation](https://docs.zephyrproject.org/latest/getting_started/index.html).
:::

import SetupZephyr from '../../partials/setup-zephyr.md'

<SetupZephyr/>

### Install a device-specific toolchain

Recall that this guide is designed to be used with an [ESP32 DevKitC](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/hw-reference/esp32/get-started-devkitc.html). In addition to Zephyr, you'll need the Espressif SDK to target this device.

import SetupEsp from '../../partials/setup-esp.md'

<SetupEsp/>

Your system is all set up and ready to start building & flashing with Zephyr. Verify by building a minimal sample:

```
cd ~/zephyrproject/zephyr
west build -b esp32 samples/basic/minimal
```