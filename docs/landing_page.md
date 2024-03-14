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

Golioth offers a [Firmware SDK](https://github.com/golioth/golioth-firmware-sdk)
that supports a variety of popular RTOSes and development frameworks. For each of
these platforms we continously (via CI) test our SDK against a representative
sample of boards that each platform supports.

### Platform Support

| Platform            | Quickstart | Note |
| ------------------- | ---------- | ---- |
| Zephyr RTOS         | [Golioth Zephyr Build Environment](/getting-started/device-examples/compile-example-code/zephyr) | Full support for the Zephyr real-time operating system (RTOS) which delivers extensive cross-vendor support. We test against boards from Nordic, NXP, and Espressif |
| nRF Connect SDK     | [Golioth NCS Build Environment](/getting-started/device-examples/compile-example-code/zephyr-ncs) | Nordic's fork of Zephyr that includes proprietary features and functionality built on top of the upstream Zephyr project |
| ESP-IDF             | [Golioth ESP-IDF Build Environment](/getting-started/device-examples/compile-example-code/esp-idf) | Espressif's IoT Development Framework for use with their ESP32 line of microcontrollers |
| ModusToolbox&trade; | [Readme](https://github.com/golioth/golioth-firmware-sdk/tree/main/examples/modus_toolbox) / [Webinar](https://blog.golioth.io/a-recap-of-how-to-collect-data-from-iot-sensors-using-golioth-and-the-infineon-modustoolbox/) | Infineon's IDE that also provides a FreeRTOS based development framework for use with their microcontrollers, including the PSoC series |

:::info Don't see your hardware listed?

The Golioth Firmware SDK includes a [porting
guide](https://github.com/golioth/golioth-firmware-sdk/blob/main/docs/Porting_Guide.md)
that you can follow to add a port for your platform. If you are interested in
Golioth adding new platform support, please [contact
us](mailto:hello@golioth.io).

:::

### Deprecated Platform Support

Golioth previously provided a standalone SDK specifically for the Zephyr RTOS.
Our best and latest support for Zephyr is now found in the Firmware SDK. All
new projects should utilize that SDK. Existing projects should migrate to the
Golioth Firmware SDK. A [Migration Guide](https://github.com/golioth/golioth-firmware-sdk/blob/main/docs/Migration_Guide_Zephyr.md)
is available to assist you in the process.

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
