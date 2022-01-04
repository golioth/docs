---
id: set-up-zephyr
title: Set up Zephyr for nRF91
---

Golioth can be added to a device with _Device SDKs_ which are based on different embedded Operating Systems. Currently Golioth targets the [Zephyr Project](https://www.zephyrproject.org/) and builds upon the APIs & tools of Zephyr. As such, prior experience with Zephyr will be helpful when working with Golioth's Zephyr Device SDK. Refer to Zephyr's [detailed documentation](https://docs.zephyrproject.org/) when running into issues.

Platforms like nRF9160 Feather require nRF Connect SDK to make use of their distinct features, which is cellular network connectivity. We will install the nRF Connect SDK in a directory in your home location separate from other Zephyr projects shown for Golioth (in a directory called 'zephyr-nrf')

### Install West

import SetupWestNRF91 from '/docs/partials/setup-west-nrf91.md'

<SetupWestNRF91/>

### Installing the NRF Connect SDK

import InstallNRFSDK from '/docs/partials/install-nrf91-sdk.md'

<InstallNRFSDK/>

### Installing the Zephyr SDK Toolchain

The nRF9160 is an ARM based device, so we will use the ARM toolchains (gcc, gdb, etc) included in the Zephyr SDK

import InstallZephyrSDKtoolchain from '/docs/partials/install-zephyr-sdk-toolchain.md'

<InstallZephyrSDKtoolchain/>

### Build firmware for the nRF9160

Your system is all set up and ready to start building & flashing with Zephyr. Verify by building a minimal sample, in this case for the CircuitDojo nRF91 feather:

```
cd ~/zephyr-nrf/zephyr
west build -p auto -b  circuitdojo_feather_nrf9160_ns samples/basic/minimal
```
Alternatively, build for the nRF9160_DK with the following commands:

```
cd ~/zephyr-nrf/zephyr
west build -p auto -b  nrf9160dk_nrf9160_ns samples/basic/minimal
```

### Flash firmware to the nRF9160

Flash the application to the board with the following command:
```
west flash
```