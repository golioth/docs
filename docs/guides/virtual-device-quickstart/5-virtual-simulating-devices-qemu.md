---
id: virtual-simulating-devices-qemu
title: Simulating devices with QEMU
---


At this point, you can build a Golioth Zephyr project:

```
west build -b qemu_cortex_m3 samples/hello -p
```

and run it:

```
west build -t run
```

This should have the same effect as running on a piece of hardware, as in the [ESP32](/docs/guides/esp32-quickstart/esp32-overview) or [nRF91](/docs/guides/nrf91-quickstart/nrf91-overview) quickstart guides