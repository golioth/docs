---
id: overview
title: Virtual Device Quickstart Overview
slug: /hardware/virtual-device/quickstart
---

:::caution
You must first follow the [Golioth Platform Quickstart](/getting-started) before attempting this guide.
:::

This quickstart guide shows you how to build and test your system _without any hardware_. Take THAT, atoms! Software, FTW!

There are two paths for testing using virtual devices:

- Using the [`coap`](/reference/command-line-tools/coap/coap/) command to send virtual responses to the platform
- Using QEMU (an emulator) to act like a piece of hardware would in the real world. QEMU acts as a build target for Zephyr.
