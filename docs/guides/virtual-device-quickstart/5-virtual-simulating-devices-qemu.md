---
id: virtual-simulating-devices-qemu
title: Simulating devices with QEMU
---

### Toolchain check

import CheckToolchain from '../../partials/check-toolchain.md'

<CheckToolchain/>

### Add credentials to sample

Navigate to the Golioth directory within Zephyr

```
cd ~/zephyrproject/modules/lib/golioth
```
This is also the place we will build Zephyr from.

Modify the sample you'd like to build (ie. the hello sample)

```
nano samples/hello/prj.conf
```

At the bottom of the page, add your credentials for your device:

```
CONFIG_GOLIOTH_SYSTEM_CLIENT_PSK_ID="DEVICE_CRED_ID"
CONFIG_GOLIOTH_SYSTEM_CLIENT_PSK="DEVICE_PSK"
```
Save and exit (`ctrl+x` in nano)

### Build for a QEMU Device

At this point, you can build a Golioth Zephyr project:

```
west build -b qemu_cortex_m3 samples/hello -p
```

and run it:

```
west build -t run
```

This should have the same effect as running on a piece of hardware, as in the [ESP32](/docs/guides/esp32-quickstart/esp32-overview) or [nRF91](/docs/guides/nrf91-quickstart/nrf91-overview) quickstart guides

For more on networking, see [the QEMU page on the Zephyr Docs](https://docs.zephyrproject.org/latest/guides/networking/qemu_setup.html)