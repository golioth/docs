---
id: overview
title: ESP32 Quickstart Overview
slug: /hardware/esp32/quickstart
---

:::caution
You must first follow the [Golioth Platform Quickstart](/services/getting-started/) before attempting this guide.
:::

This work-through will demonstrate how to quickly connect an Espressif [ESP32 DevKitC](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/hw-reference/esp32/get-started-devkitc.html) with [Zephyr](https://www.zephyrproject.org) & [`west`](https://docs.zephyrproject.org/latest/guides/west/index.html). Remember, we first need to install the main tool you need to work with Golioth, `goliothctl` using the Golioth Platform Guide. 

:::note

Golioth's Zephyr SDK will work with other ESP32 devkits and many other devices but require additional setup. We've picked a "reference" board to have a consistent getting started experience.

:::
