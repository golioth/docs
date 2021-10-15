---
id: set-up-zephyr
title: Set up Zephyr for ESP32
---

Golioth can be added to a device with _Device SDKs_ which are based on different embedded Operating Systems. Currently Golioth targets the [Zephyr Project](https://www.zephyrproject.org/) and builds upon the APIs & tools of Zephyr. As such, prior experience with Zephyr will be helpful when working with Golioth's Zephyr Device SDK. Refer to Zephyr's [detailed documentation](https://docs.zephyrproject.org/) when running into issues.

### Install West

import SetupZephyr from '/docs/partials/setup-zephyr.md'

<SetupZephyr/>

### Install Zephyr SDK

import InstallZephyrSDK from '/docs/partials/install-zephyr-sdk.md'

<InstallZephyrSDK/>


### Install the Espressif (ESP32) toolchain

import InstallEspressifToolchain from '/docs/partials/install-espressif-toolchain.md'

<InstallEspressifToolchain />

### Sample build

Your system is all set up and ready to start building & flashing with Zephyr. Verify by building a minimal sample:

```
cd ~/zephyrproject/zephyr
west build -b esp32 samples/basic/minimal
```