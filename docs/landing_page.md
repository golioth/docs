---
id: home
title: What is Golioth?
slug: /
hide_title: true
---

## WELCOME

---

Golioth is an IoT platform that provides cloud services for embedded devices. Colloquially, we hope to solve the “impedance mismatch between hardware and cloud engineering teams" (a phrase we learned from an early user). Golioth is purpose-built for you and the hardware you develop. Enable everything that your devices need from the cloud, including device messaging, security, updates, analytics, and more.

We chose the [the Zephyr Project™](https://www.zephyrproject.org), as the basis of our first embedded offering. Zephyr is an open-source, safe, secure, and flexible RTOS under the Linux Foundation. We offer the Golioth SDK--built on top of the Zephyr SDK--which you can use to quickly bootstrap an IoT application.

## Get started today

To get started, check out the [Quickstart Guide](/getting-started/). That will get you set up with a Golioth account and help you to provision your first devices. Then you can choose which platform to try out using our [supported hardware](/firmware/hardware).

## Using Golioth with your IoT Hardware

Golioth offers two device SDKs that support a wide range of hardware. Here is
some guidance on what to use when setting up a development environment for your
hardware.

### Platform Support

| Vendor     | SDK                  | Quickstart | Note |
| ---------- | -------------------- | ---------- | ---- |
| Espressif  | [Golioth Firmware SDK](https://github.com/golioth/golioth-firmware-sdk) | [ESP32 ESP-IDF Quickstart](/firmware/hardware/esp32/espidf-quickstart/set-up-espidf) | Use for ESP32 MCUs |
| Espressif  | [Golioth Zephyr SDK](https://github.com/golioth/golioth-zephyr-sdk)   | [ESP32 Zephyr Quickstart](/firmware/hardware/esp32/zephyr-quickstart/set-up-zephyr) | Use for ESP32 MCUs |
| Infineon   | [Golioth Firmware SDK](https://github.com/golioth/golioth-firmware-sdk) | ModusToolbox&trade; [Readme](https://github.com/golioth/golioth-firmware-sdk/tree/main/examples/modus_toolbox) / [Webinar](https://blog.golioth.io/a-recap-of-how-to-collect-data-from-iot-sensors-using-golioth-and-the-infineon-modustoolbox/) | Use for Infineon MCUs like PSoC6 |
| Nordic     | [Golioth Zephyr SDK](https://github.com/golioth/golioth-zephyr-sdk)   | [nRF9160 Zephyr Quickstart](/firmware/hardware/nrf91/zephyr-quickstart/set-up-zephyr) | Use for Nordic MCUs like nRF9160 and nRF7002 |
| NXP        | [Golioth Zephyr SDK](https://github.com/golioth/golioth-zephyr-sdk)   | [mimxrt1060evkb Zephyr Quickstart](/firmware/hardware/mimxrt1060_evkb/zephyr-quickstart/set-up-zephyr) | Use for NXP MCUs like i.MX RT1062 and i.MX RT1024 |
| Other Vendors | [Golioth Zephyr SDK](https://github.com/golioth/golioth-zephyr-sdk) | [mimxrt1060evkb Zephyr Quickstart](/firmware/hardware/mimxrt1060_evkb/zephyr-quickstart/set-up-zephyr) | Many other MCUs are supported by Zephyr will work with Golioth! Follow this quickstart and substitute your board name in the build examples. |

:::info Don't see your hardware listed?

The Golioth Firmware SDK includes a [porting
guide](https://github.com/golioth/golioth-firmware-sdk/blob/main/docs/Porting_Guide.md)
that you can follow to add a port for your platform. If you are interested in
Golioth adding new platform support, please [contact
us](mailto:hello@golioth.io).

:::

### Beta Platform Support

| Vendor     | SDK                  | Quickstart | Note |
| ---------- | -------------------- | ---------- | ---- |
| Zephyr | [Golioth Firmware SDK](https://github.com/golioth/golioth-firmware-sdk) | Golioth Firmware SDK: [Zephyr Beta Support Readme](https://github.com/golioth/golioth-firmware-sdk/tree/main/examples/zephyr)  | The [Golioth Zephyr SDK](https://github.com/golioth/golioth-zephyr-sdk) already delivers support for Zephyr RTOS. We are actively working on Zephyr support in the Golioth Firmware SDK. The beta is currently open for testing. |

## Navigation

There are 5 major sections on the Golioth Docs page:

- [Getting Started](/getting-started) - Start here! If you are confused at all, please [join our Discord](https://golioth.io/discord) or [let us know directly](mailto:devrel@golioth.io)
- [Hardware](/firmware/hardware) - This section details which device platforms are explicitly supported and how you can get started with them quickly. There is also a catalog of all hardware that works with Golioth and whether or not it has been verified by the Golioth team, the community, the Zephyr community, etc.
- [Firmware](/firmware) - This is the "device side" features of our offerings, including device Software Development Kets (SDKs). This section shows how to run the sample firmware that connects to the offerings in the Services section.
- [Cloud](/device-management) - This is the "server side" features of our offerings. Your embedded hardware will communicate with Golioth Services to push and pull information to the broader internet. This section details how to control and interact with each service, and also test the service without any hardware involved. This section also details how to interact with that data via webapps, mobile apps, and from anywhere else on the web. Make calls to the Golioth web API and display your users' data!
- [Reference](/reference) - All generated API documentation lives here, including for the web side API and the Zephyr API
