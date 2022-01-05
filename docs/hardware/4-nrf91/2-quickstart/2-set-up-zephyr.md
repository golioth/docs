---
id: set-up-zephyr
title: Set up Zephyr for nRF9160
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Zephyr Setup Overview

Golioth is implemented on IoT devices using [Device SDKs](/firmware). These are based on different embedded Real Time Operating Systems (RTOS). Currently Golioth targets the [Zephyr Project](https://www.zephyrproject.org/) and builds upon the APIs & tools of Zephyr. As such, prior experience with Zephyr will be helpful when working with [Golioth's Zephyr Device SDK](https://github.com/golioth/zephyr-sdk). Refer to Zephyr's [detailed documentation](https://docs.zephyrproject.org/) when running into issues.

The nRF9160 Feather and all Nordic Semiconductor devices utilizing Zephyr require the [nRF Connect SDK (NCS)](https://www.nordicsemi.com/Products/Development-software/nRF-Connect-SDK). Nordic Semiconductor maintains a fork of the Zephyr project that includes some distinct features and IP, including the firmware for the cellular modem on the nRF9160. We will install the nRF Connect SDK in a directory in your home location separate from other Zephyr projects shown for Golioth (in a directory called `zephyr-nrf`)

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
west build -p auto -b  circuitdojo_feather_nrf9160ns samples/basic/minimal
```
Alternatively, build for the nRF9160_DK with the following commands:

```
cd ~/zephyr-nrf/zephyr
west build -p auto -b  nrf9160dk_nrf9160_ns samples/basic/minimal
```

### Flash firmware to the device

<Tabs
groupId="nrf9160-hw"
defaultValue="nrf9160dk"
values={[
{label: 'nRF9160-DK', value: 'nrf9160dk'},
{label: 'nRF91 Feather', value: 'nrf91feather'},
]}>

<TabItem value="nrf9160dk">


The official nRF9160 Development Kit has an onboard debugger and can program entire images into the flash using native west commands. However, there is a required nRF CLI tool installation.

[Download the package here](https://www.nordicsemi.com/Products/Development-tools/nrf-command-line-tools/download) and unpack the archive (Linux)

```
sudo dpkg -i JLink_Linux_V758b_x86_64.deb
sudo dpkg -i nrf-command-line-tools_10.15.1_amd64.deb
```

Flash the application to the board with the following command:
```
west flash
```
</TabItem>
<TabItem value="nrf91feather">

The nRF91 Feather does not have a debugger onboard like the nRF9160_DK. If you have an external debugger (like a JLink) and a programming cable (the board uses a 6 pin Tag Connect), use can the same directions as the nRF9160_DK flashing, shown above.

If you'd like to load firmware directly to the board using a USB cable, you must compile the firmware to compile a bootload-able image and then use an external tool like [`newtmgr`](https://github.com/circuitdojo/mynewt-newtmgr?organization=circuitdojo&organization=circuitdojo). Follow the directions [on the CircuitDojo wiki to install and flash the image to the nRF91 Feather](https://docs.jaredwolff.com/nrf9160-programming-and-debugging.html#using-newtmgr).

</TabItem>
</Tabs>