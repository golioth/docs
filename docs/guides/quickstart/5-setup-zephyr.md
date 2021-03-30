---
id: setup-zephyr
title: Setup Zephyr
---

Golioth can be integrated into your device with our _Device SDKs_ which are based on different embedded Operating Systems. Currenly Golioth targets the [Zephyr Project](https://www.zephyrproject.org/) and builds upon the APIs & tools that are part of the Zephyr Project. As such, prior experience with Zephyr will make working with Golioth's Zephyr Device SDK comfortable and familiar. Refer to Zephyr's [detailed documentation](https://docs.zephyrproject.org/) if you run into any issues.

import SetupZephyr from '../../partials/setup-zephyr.md'

<SetupZephyr/>

### Install a device-specific toolchain

As a reminder, this guide is assumed to be used with an [ESP32 DevKitC](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/hw-reference/esp32/get-started-devkitc.html). In addition to Zephyr, we need the Espressif SDK to target this device.

import SetupEsp from '../../partials/setup-esp.md'

<SetupEsp/>

:::note
For more platforms, check the [Install Device Toolchain](/docs/guides/device-sdk/install-device-toolchain) guide.
:::
