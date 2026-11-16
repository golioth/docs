---
id: overview
title: ESP-IDF with Golioth
---

## What is ESP-IDF?

The Espressif IoT Development Framework
([ESP-IDF](https://docs.espressif.com/projects/esp-idf/en/v5.4.1/esp32s3/)) is a
FreeRTOS-based platform developed and maintained by [Espressif
Systems](https://espressif.com/) for their line of ESP32 microcontrollers. The
Golioth Firmware SDK can be included in your projects as an ESP-IDF component.

## Using ESP32 with Golioth

The ESP32 is a Wi-Fi and Bluetooth combination chip. There are multiple versions
of the chip, including the ESP32, ESP32-S2, and ESP32-S3 based on the Xtensa
core and the ESP32-C3 which uses the RISC-V core.

Golioth works with ESP32 variants supported by the ESP-IDF platform. Golioth
continuously tests the ESP-IDF samples on the ESP32-S3-DevKitC-1, so this
section uses the ESP32-S3 as its target; for other chips, set the matching
target with `idf.py set-target`. This section shows how to set up your build
environment, compile, and run demo code that connects to Golioth.
