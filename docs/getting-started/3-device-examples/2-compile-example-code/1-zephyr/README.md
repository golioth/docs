---
title: Zephyr with Golioth
---

What is Zephyr?

The Zephyr&reg; Project is an open source scalable real-time operating system
(RTOS) supporting multiple hardware architectures including ARC, ARM, RISC-V and
X86. Zephyr includes a mature networking stack, making it a perfect option for
working with Golioth. The Golioth Firmware SDK can be included in your projects
as a Zephyr module.

## Using Zephyr with Golioth

Golioth can be added to the manifest of any Zephyr project. As long as a socket
is available, all network connection types (cellular, WiFi, Ethernet, thread,
etc.) will work thanks to Zephyr's network abstractions.

This section shows how to set up your build environment, compile, and run demo
code that connects to Golioth.

