---
id: getting-started
title: Quick Start Guide
slug: /guides
---

In this work-through we're going to connect and send data from a device to Golioth. In this example, we’ll be using an [ESP32 DevKitC](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/hw-reference/esp32/get-started-devkitc.html) with Zephyr & `west`, but first, we want to install the main tool you need to work with Golioth, `goliothctl`.

:::note

Golioth's Zephyr SDK will work with other ESP32 devkits or even custom boards but may require additional setup. We've picked a "reference" board to have a consistant getting started experience.

:::
