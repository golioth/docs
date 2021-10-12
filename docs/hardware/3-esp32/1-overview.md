---
id: overview
title: Overview
slug: /hardware/esp32
---

## What is the ESP32?

The ESP32 is a Wi-Fi and Bluetooth combination chip from [Espressif Systems](https://espressif.com/). There are multiple versions of the chip, with the most recent versions running in different configurations of core types, up to and including a RISC V core (on the ESP32-C3).

The Espressif team has built-in support for Zephyr. This, in combination with the low cost and wide availability of the chips, has led to the ESP32 being one of the first platforms that Golioth has chosen to support. 

## Terminology

* **ESP32** - A family of Wi-Fi and Bluetooth components from [Espressif Systems](https://espressif.com/).
* **ESP32 Chip** 
  * The silicon packaging (sometimes referred to as 'System On Chip' or 'SOC') that contains the processor and RF hardware that can communicate over Wi-Fi and Bluetooth. 
  * Example chip: [ESP32-C3](https://www.espressif.com/sites/default/files/documentation/esp32-c3_datasheet_en.pdf)
* **ESP32 Module** 
  * A self-contained package including an antenna, RF support components, memory, ESP32 chips, and covered metal shield/can. These are offered as "precertified" for CE and FCC, meaning they are tested to not emit spurious RF emissions. The module costs more than the ESP32 Chip, but will be easier to integrate into your design and will cost less to certify with RF test agencies. 
  * Example module: [ESP32-C3-WROOM-02](https://www.espressif.com/sites/default/files/documentation/esp32-c3-wroom-02_datasheet_en.pdf)
* **ESP32 Development Board** 
  * A PCB with a module or chip soldered to it, often with breakout headers to allow easy access to the pins.
  * Example Board: [ESP32-C3-DevKitC-02](https://docs.espressif.com/projects/esp-idf/en/latest/esp32c3/hw-reference/esp32c3/user-guide-devkitc-02.html)