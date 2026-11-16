---
title: Set up Nordic nRF Connect SDK (NCS)
toc_max_heading_level: 2
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

## Install Dependencies and West

import SetupWest from '/docs/_partials-common/zephyr-setup-dependencies.md'

<SetupWest workspace_directory="golioth-ncs-workspace"/>

## Install the Golioth Firmware SDK for NCS

import InstallNRFSDK from '/docs/_partials-common/ncs-install-golioth-firmware-sdk.md'

<InstallNRFSDK/>

## Install the Zephyr SDK Toolchain

Nordic chips are ARM-based device, so we will use the ARM toolchains (gcc, gdb,
etc) included in the Zephyr SDK

import InstallZephyrSDKtoolchain from '/docs/_partials-common/install-zephyr-sdk-toolchain.md'

<InstallZephyrSDKtoolchain/>

## Install the SEGGER J-Link software and nRF Util

`west flash` programs Nordic targets with nRF Util (`nrfutil device`), using the
SEGGER J-Link debugger that is built into the development kit (DK) boards.

1. Go to SEGGER and download the [J-Link Software and Documentation
   Pack](https://www.segger.com/downloads/jlink). NCS v3.2.3 requires J-Link
   v9.18.

2. Install J-Link: on macOS and Windows, run the downloaded installer; on
   Debian and Ubuntu, install the downloaded package:

    ```bash
    sudo dpkg -i JLink_Linux_<version>_x86_64.deb
    ```

3. Download
   [nRF Util](https://www.nordicsemi.com/Products/Development-tools/nRF-Util/Download),
   make it executable and move it to a directory that is in your `PATH`:

    ```bash
    chmod +x nrfutil
    ```

4. Install the nRF Util device command

    ```bash
    nrfutil install device
    ```

5. On Linux, install Nordic's [udev rules](https://github.com/NordicSemiconductor/nrf-udev)
   which are required to access the USB ports of Nordic devices.

## Build Sample Firmware

### Build firmware

Your system is all set up and ready to start building & flashing with Zephyr.
Verify by building a minimal sample from the Zephyr tree. Here we are using the
nRF9160 DK as an example:

import BuildFirmwareFor9160 from '/docs/_partials-common/build-fw-nrf91.md'

<BuildFirmwareFor9160/>

### Flash firmware to the device

Most boards supported by Zephyr can by flashed using a simple command:

```bash
west flash
```
