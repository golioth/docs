---
title: Set up Zephyr RTOS
toc_max_heading_level: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

[Zephyr RTOS](https://docs.zephyrproject.org/) supports a vast number of
microcontrollers from many different vendors. There's a very good chance your
preferred chip will work with Zephyr using Golioth as a module.

This section will guide you through installing the Zephyr tree (including the
Golioth SDK) in a directory called `golioth-zephyr-workspace`.

## Install Dependencies and West

import SetupWest from '/docs/_partials-common/zephyr-setup-dependencies.md'

<SetupWest workspace_directory="golioth-zephyr-workspace"/>

## Install Golioth Firmware SDK

import InstallGoliothSDK from '/docs/_partials-common/zephyr-install-golioth-firmware-sdk.md'

<InstallGoliothSDK/>

## Installing the Zephyr SDK Toolchain

import InstallZephyrSDKtoolchain from '/docs/_partials-common/install-zephyr-sdk-toolchain.md'

<InstallZephyrSDKtoolchain/>

## Install Device Specific Packages and Programming Tools

Zephyr is a cross-vendor operating system and may require additional packages
and tools based on your specific hardware.

### Device Specific Examples:

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

### Build Firmware

Your system is all set up and ready to start building & flashing with Zephyr.
Verify by building a minimal sample from the Zephyr tree.

import BuildSample from '/docs/_partials-common/sample-build.mdx'

<BuildSample board="your_board_name"/>

### Flash firmware to the device

Most boards supported by Zephyr can by flashed using a simple command:

```bash
west flash
```
