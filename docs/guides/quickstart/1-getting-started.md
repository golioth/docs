---
id: getting-started
title: Quickstart Guide
---

This work-through will demonstrate how to quickly connect a device and send data to Golioth. We’ll be using an Espressif [ESP32 DevKitC](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/hw-reference/esp32/get-started-devkitc.html) with [Zephyr](https://www.zephyrproject.org) & [`west`](https://docs.zephyrproject.org/latest/guides/west/index.html), but first, we want to install the main tool you need to work with Golioth, `goliothctl`.

:::note

Golioth's Zephyr SDK will work with other ESP32 devkits and many other devices but require additional setup. We've picked a "reference" board to have a consistent getting started experience.

:::
