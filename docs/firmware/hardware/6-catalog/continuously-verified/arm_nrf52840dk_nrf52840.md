---
id: arm_nrf52840dk_nrf52840
title: nRF52840-DK-NRF52840
slug: /firmware/hardware/catalog/boards/continuously-verified/arm_nrf52840dk_nrf52840
description: IoT board nRF52840-DK-NRF52840, compatible with Golioth at continuously-verified level.
image: /img/boards/arm/nrf52840dk_nrf52840.jpg

---

[//]: # (This is an auto-generated file, do not edit! Changes to it will be lost upon re-generation)

![nRF52840-DK-NRF52840!](/img/boards/arm/nrf52840dk_nrf52840.jpg "nRF52840-DK-NRF52840")

|                | Board properties     |
| -------------  | -------------------- |
| Board ID       | `nrf52840dk_nrf52840` |
| Golioth Level  | [Continuously verified](/firmware/hardware#continuously-verified-boards) |
| Golioth Quickstart | [nrf52840dk_nrf52840 quickstart](/getting-started/device-examples/compile-example-code/zephyr/) || Architecture   | ARM |
| RAM*           | 256 kB |
| Flash*         | 1024 kB |

\* values are as reported by Zephyr `.yaml` board files, which don't represent the overall available resources

## Getting started

See our [quickstart guide for nRF52840-DK-NRF52840](/getting-started/device-examples/compile-example-code/zephyr/).


## Supported features

* adc
* arduino_gpio
* arduino_i2c
* arduino_serial
* arduino_spi
* ble
* counter
* gpio
* i2c
* i2s
* pwm
* spi
* usb_cdc
* usb_device
* watchdog
* netif:openthread

## Supported toolchains

* zephyr
* gnuarmemb
* xtools

## Official Zephyr docs

We use the nRF5240 Development Kit along with an ESP32 board running [AT modem firmware](https://www.espressif.com/en/support/download/at) to provide connectivity. The pinout for connecting these boards is described in the README.md of each [Golioth Firmware SDK sample application](https://github.com/golioth/golioth-firmware-sdk/tree/main/examples/zephyr).<br /><br />[nRF52840-DK-NRF52840 (nrf52840dk_nrf52840)](https://docs.zephyrproject.org/3.6.0/boards/arm/nrf52840dk_nrf52840/doc/index.html)
