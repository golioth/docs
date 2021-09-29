---
id: virtual-overview
title: Virtual Device Quickstart Introduction
---

:::caution
You must first follow the [Golioth Platform Quickstart](/docs/platform/getting-started/platform-installing) before attempting this guide.
:::

This quickstart guide shows you how to build and test your system *without any hardware*. Take THAT, atoms! Software, FTW!

There are two paths for testing using virtual devices:
* Using the [`coap`](/reference/command-line-tools/coap/) command to send virtual responses to the platform
* Using QEMU (an emulator) to act like a piece of hardware would in the real world. QEMU acts as a build target for Zephyr.

