---
id: nrf91-set-up-zephyr
title: Set up Zephyr
---

Golioth can be added to a device with _Device SDKs_ which are based on different embedded Operating Systems. Currenly Golioth targets the [Zephyr Project](https://www.zephyrproject.org/) and builds upon the APIs & tools of Zephyr. As such, prior experience with Zephyr will make working with Golioth's Zephyr Device SDK comfortable and familiar. Refer to Zephyr's [detailed documentation](https://docs.zephyrproject.org/) when running into issues.

### Install West and the Zephyr SDK

import SetupZephyr from '../../partials/setup-zephyr.md'

<SetupZephyr/>

### Install nRF91 Toolchain (ARM)

Your system is all set up and ready to start building & flashing with Zephyr. Verify by building a minimal sample:

```
cd ~/zephyrproject/zephyr
west build -b nrf91 samples/basic/minimal
```