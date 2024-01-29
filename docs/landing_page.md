---
id: home
title: What is Golioth?
slug: /
hide_title: true
---

## WELCOME

---

Golioth is an IoT platform that provides cloud services for embedded devices. We
think of our platform as a "universal connector". Golioth is purpose-built for
you and the hardware you develop. Golioth enables everything that your devices
need from the cloud, from establishing secure connections and providing
over-the-air updates, to managing data to/from your fleet and connecting that to
any cloud service you may need.

<iframe class="youtube-embed" src="https://www.youtube.com/embed/CgQg6ifrWfU?si=9MKtgs4jlCvQLWfz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Get started today

Our [Quickstart Guide](/getting-started/) gets you set up with a Golioth account
and walks through how to provision your first devices. From there you can run a
pre-compiled binary, or build your own samples from our device SDKs. Either way,
you will have an IoT test fleet connected and sending data to the cloud today.

## Using Golioth with your IoT Hardware

Golioth offers two device SDKs that support a wide range of hardware. Here is
some guidance on what to use when setting up a development environment for your
hardware.

### Platform Support

| Vendor           | SDK                  | Quickstart | Note |
| ---------------- | -------------------- | ---------- | ---- |
| Multiple Vendors | [Golioth Firmware SDK](https://github.com/golioth/golioth-firmware-sdk) | [Golioth Zephyr Build Environment](/getting-started/device-examples/compile-example-code/zephyr) | Full support for the Zephyr real-time operating system (RTOS) which delivers extensive cross-vendor support |
| Espressif        | [Golioth Firmware SDK](https://github.com/golioth/golioth-firmware-sdk) | [Golioth ESP-IDF Build Environment](/getting-started/device-examples/compile-example-code/esp-idf) | Use for ESP32 MCUs |
| Espressif        | [Golioth Zephyr SDK](https://github.com/golioth/golioth-zephyr-sdk)     | [Golioth Zephyr Build Environment](/getting-started/device-examples/compile-example-code/zephyr) | Use for ESP32 MCUs |
| Infineon         | [Golioth Firmware SDK](https://github.com/golioth/golioth-firmware-sdk) | ModusToolbox&trade; [Readme](https://github.com/golioth/golioth-firmware-sdk/tree/main/examples/modus_toolbox) / [Webinar](https://blog.golioth.io/a-recap-of-how-to-collect-data-from-iot-sensors-using-golioth-and-the-infineon-modustoolbox/) | Use for Infineon MCUs like PSoC6 |
| Nordic           | [Golioth Zephyr SDK](https://github.com/golioth/golioth-zephyr-sdk)     | [Golioth NCS Build Environment](/getting-started/device-examples/compile-example-code/zephyr-ncs) | Use for Nordic MCUs like nRF9160 and nRF7002 |
| NXP              | [Golioth Zephyr SDK](https://github.com/golioth/golioth-zephyr-sdk)     | [Golioth Zephyr Build Environment](/getting-started/device-examples/compile-example-code/zephyr) | Use for NXP MCUs like i.MX RT1062 and i.MX RT1024 |

:::info Don't see your hardware listed?

The Golioth Firmware SDK includes a [porting
guide](https://github.com/golioth/golioth-firmware-sdk/blob/main/docs/Porting_Guide.md)
that you can follow to add a port for your platform. If you are interested in
Golioth adding new platform support, please [contact
us](mailto:hello@golioth.io).

:::

### Deprecated Platform Support

| Vendor     | SDK                  | Quickstart | Note |
| ---------- | -------------------- | ---------- | ---- |
| Multiple Vendors | [Golioth Zephyr SDK](https://github.com/golioth/golioth-zephyr-sdk)     | [Golioth Zephyr Build Environment](/getting-started/device-examples/compile-example-code/zephyr) | Zephyr support is now included in the [Golioth Firmware SDK](https://github.com/golioth/golioth-firmware-sdk/tree/main/examples/zephyr).<br /><ul><li>All new projects should utilize that SDK.</li><li>Existing projects should migrate to the Golioth Firmware SDK.  A [Migration Guide](https://github.com/golioth/golioth-firmware-sdk/blob/main/docs/Migration_Guide_Zephyr.md) Guide is available to assist in the process.</li></ul> |

## Navigation

- [Getting Started](/getting-started) - Start here! If you get stuck, please
  post your questions on [the Golioth Forum](https://forum.golioth.io/) or [let
  us know directly](mailto:devrel@golioth.io).
- [Firmware](/firmware) - These are the "device side" features of our offerings,
  including device Software Development Kits (SDKs). This section shows how to
  set up a build environment, run sample firmware, and use Golioth services on
  your microcontroller-based IoT fleet.
- [Device Management](/device-management) - These are "server side" features of
  the Golioth platform that deal with controlling your devices in the filed.
  Here you will find details about rolling out over-the-air (OTA) firmware
  updates, accessing device logs, changing device settings for your fleet, and
  issuing remote procedure calls (RPC).
- [Data Routing](/data-routing) - These are "server side" features of the
  Golioth platform that deal with data moving to and from our IoT fleet. Here
  you will find details about accessing stored data from your devices, and
  options for routing that data to other platforms, whether that's your own
  server, your database backend, or just about any other data service you can
  imagine.
- [Reference](/reference) - All generated API documentation lives here,
  including for the web side API and the Zephyr API
