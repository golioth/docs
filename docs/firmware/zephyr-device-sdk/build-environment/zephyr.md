---
title: Zephyr RTOS
hide_title: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Zephyr Setup Overview

[Zephyr RTOS](https://docs.zephyrproject.org/) supports a vast number of
microcontrollers from a many different vendors. There's a very good chance your
preferred chip will work with Zephyr using Golioth as a module.

We will install the Zephyr tree in a directory in your home location
separate from other Zephyr projects shown for Golioth (in a directory called
`golioth-zephyr-workspace`).

### Install West

import SetupZephyr from '/docs/partials-common/setup-zephyr.md'

<SetupZephyr/>

### Install Golioth Zephyr SDK

import InstallZephyrSDK from '/docs/partials-common/install-zephyr-sdk.md'

<InstallZephyrSDK/>

### Installing the Zephyr SDK Toolchain

import InstallZephyrSDKtoolchain from '/docs/partials-common/install-zephyr-sdk-toolchain.md'

<InstallZephyrSDKtoolchain/>

### Install Device Specific Packages and Programming Tools

Zephyr is a cross-vendor operating system and may require additional packages
and tools based on your specific hardware.

#### Device Specific Examples:

- Espressif support in Zephyr requires binary blob installation:

    ```shell
    $ west blobs fetch hal_espressif
    ```

- NXP evaluation kits usually offer on-board J-Link debugger support. To utilize
  this you will need to install Segger's [J-Link Software and Documentation Pack](https://www.segger.com/downloads/jlink).

:::tip Device-Specific information in Zephyr's Board Index

Review your vendor's board support in the [Zephyr Board Index](https://docs.zephyrproject.org/latest/boards/index.html) to find more information on specific set up steps for your prefered hardware.

:::

## Build Sample Firmware

Your system is all set up and ready to start building & flashing with Zephyr.
Verify by building a minimal sample:

### Build firmware for the mimxrt1060_evkb

Your system is all set up and ready to start building & flashing with Zephyr.
Verify by building a minimal sample for the NXP mimxrt1060_evkb

import BuildSample from '/docs/partials-common/sample-build.mdx'

<BuildSample board="mimxrt1060_evk"/>

### Flash firmware to the device

If you are using [the J-Link debug probe with the
mimxrt1060_evkb](https://community.nxp.com/t5/i-MX-RT-Knowledge-Base/Using-J-Link-with-MIMXRT1060-EVK-or-MIMXRT1064-EVK/ta-p/1281149)
and already have the software for that tool set up on your system, flashing
firmware is as simple as running:

```bash
west flash
```

The mimxrt1060_evkb can act as a J-Link hardware programmer. `west` will
automatically work with J-Link as long as the supporting software is installed
on your system. The next section will walk through installing that software.
