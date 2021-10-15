---
id: set-up-zephyr
title: Set up Zephyr for nRF91
---

Golioth can be added to a device with _Device SDKs_ which are based on different embedded Operating Systems. Currently Golioth targets the [Zephyr Project](https://www.zephyrproject.org/) and builds upon the APIs & tools of Zephyr. As such, prior experience with Zephyr will be helpful when working with Golioth's Zephyr Device SDK. Refer to Zephyr's [detailed documentation](https://docs.zephyrproject.org/) when running into issues.

Platforms like nRF9160 Feather require nRF Connect SDK to make use of their distinct features, which is cellular network connectivity. We will install the nRF Connect SDK in a directory in your home location separate from other Zephyr projects shown for Golioth (in a directory called 'zephyr-nrf')

### Install West


import SetupZephyr from '/docs/partials/setup-zephyr.md'

<SetupZephyr/>

### Installing the NRF Connect SDK

import InstallNRFSDK from '/docs/partials/install-nrf91-sdk.md'

<InstallNRFSDK/>

Your system is all set up and ready to start building & flashing with Zephyr. Verify by building a minimal sample, in this case for the CircuitDojo nRF91 feather:

```
cd ~/zephyr-nrf/zephyr
west build -p auto -b  circuitdojo_feather_nrf9160 samples/basic/minimal
```