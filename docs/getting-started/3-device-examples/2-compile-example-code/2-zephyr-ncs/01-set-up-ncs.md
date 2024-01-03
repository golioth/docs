---
title: Set up Nordic nRF Connect SDK (NCS)
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Nordic Semiconductor devices require the [nRF Connect SDK
(NCS)](https://www.nordicsemi.com/Products/Development-software/nRF-Connect-SDK).
This is a fork of the Zephyr project that Nordic Semiconductor maintains and
includes some distinct features and IP. For instance, NCS includes the firmware
for the cellular modem on the nRF9160, which is unavailable in the upstream
Zephyr project.

This section will guide you through installing NCS and the Zephyr tree
(including the Golioth SDK) in a directory called `golioth-ncs-workspace`.

### Install West

import SetupWestNRF91 from '/docs/partials-common/setup-west-nrf91.md'

<SetupWestNRF91/>

### Installing the Golioth Firmware SDK for NCS

import InstallNRFSDK from '/docs/partials-common/ncs-install-golioth-firmware-sdk.md'

<InstallNRFSDK/>

### Installing the Zephyr SDK Toolchain

Nordic chips are ARM-based device, so we will use the ARM toolchains (gcc, gdb,
etc) included in the Zephyr SDK

import InstallZephyrSDKtoolchain from '/docs/partials-common/install-zephyr-sdk-toolchain.md'

<InstallZephyrSDKtoolchain/>

### Installing the Segger J-Link and nRF Command Line Tools

Zephyr uses `nrfjprog` to flash Nordic targets using a hardware programmer like
the Segger J-Link, or the debugger that is built into the development kit (DK)
boards. This tool is part of the nRF Command Line Tools which we will install
along with the Segger tool.

1. Go to Segger and download the latest [J-Link Software and Documentation
   Pack](https://www.segger.com/downloads/jlink)

2. Run the J-Link installer

    ```bash
    sudo dpkg -i JLink_Linux_V760f_x86_64.deb
    ```

3. Go to the [nRF Command Line
   Tools](https://www.nordicsemi.com/Products/Development-tools/nrf-command-line-tools/download)
   page. Scroll down, select your operating system, and download the installer
   package.

4. Run the nRF Command Line Tools installer

    ```bash
    sudo dpkg -i nrf-command-line-tools_10.15.2_amd64.deb
    ```

## Build Sample Firmware

### Build firmware

Your system is all set up and ready to start building & flashing with Zephyr.
Verify by building a minimal sample from the Zephyr tree. Here we are using the
nRF9160 DK as an example:

import BuildFirmwareFor9160 from '/docs/partials-common/build-fw-nrf91.md'

<BuildFirmwareFor9160/>

### Flash firmware to the device

Most boards supported by Zephyr can by flashed using a simple command:

```bash
west flash
```
