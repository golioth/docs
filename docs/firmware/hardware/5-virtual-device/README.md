---
id: overview
title: Virtual Devices Overview
slug: /hardware/virtual-devices
---

The virtual device guide shows you how to build and test your system _without
any hardware_. Take THAT, atoms! Software, FTW!

Virtual devices use the same provisioning steps as any other device, and are a
good way to verify you have correctly set the device credentials. They are also
a valuable tool in testing the lightDB state and lightDB stream schemas that you plan
to use with your hardware.

There are two paths for testing using virtual devices:

- Using the [`coap`](/reference/command-line-tools/coap/coap/) command to send virtual responses to the platform
- Using QEMU (an emulator) to act like a piece of hardware would in the real world. QEMU acts as a build target for Zephyr.

:::caution
This guide assumes you have already completed the [Golioth Platform Quickstart](/getting-started).

- The `coap` virtual device section requires [the Golioth Command Line Tools](/commandline)
- The QEMU section requires a provisioned device as outlined in [the Golioth Console getting started guide](/golioth-console)

:::
