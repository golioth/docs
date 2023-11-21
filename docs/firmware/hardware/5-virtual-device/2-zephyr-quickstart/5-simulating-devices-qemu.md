---
id: simulating-devices-qemu
title: Simulating devices with QEMU
---

### Install West

import SetupZephyr from '/docs/partials-common/setup-zephyr.md'

<SetupZephyr/>

### Install Zephyr SDK

import InstallZephyrSDK from '/docs/partials-common/install-zephyr-sdk.md'

<InstallZephyrSDK/>

### Toolchain check

import CheckToolchain from '/docs/firmware/hardware/5-virtual-device/2-zephyr-quickstart/\_partials/check-toolchain.md'

<CheckToolchain/>

### Add credentials to sample

Navigate to the Golioth directory within Zephyr

```
cd ~/golioth-zephyr-workspace/modules/lib/golioth
```
This is also the place we will build Zephyr from.

Modify the sample you'd like to build (ie. the hello sample)

```
nano samples/hello/prj.conf
```

At the bottom of the page, add your credentials for your device:

```
CONFIG_GOLIOTH_SAMPLE_HARDCODED_PSK_ID="DEVICE_CRED_ID"
CONFIG_GOLIOTH_SAMPLE_HARDCODED_PSK="DEVICE_PSK"
```
Save and exit (`ctrl+x` in nano)

### Build for a QEMU Device

At this point, you can build a Golioth Zephyr project:

```
west build -b qemu_x86 samples/hello -p
```

and run it:

```
west build -t run
```

This should have the same effect as running on a piece of hardware, as in the [ESP32](/firmware/hardware/esp32/zephyr-quickstart) or [nRF91](/firmware/hardware/nrf91/zephyr-quickstart) quickstart guides

For more on networking, see [the QEMU page on the Zephyr Docs](https://docs.zephyrproject.org/latest/guides/networking/qemu_setup.html)