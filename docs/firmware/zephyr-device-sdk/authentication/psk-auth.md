---
title: PSK Authentication
sidebar_position: 1
---

If you have already worked through the [Getting Started
Guide](/getting-started), you are familiar with creating device credentials
using the Golioth Console (or the `goliothctl` command line tool). Credentials
are passed to the device by adding them via the `prj.conf` file (see the [Hello
sample](https://github.com/golioth/golioth-zephyr-sdk/tree/main/samples/hello))
or via serial using the shell (see [the Settings
sample](https://github.com/golioth/golioth-zephyr-sdk/tree/main/samples/settings)).
Once passed to the device, credentials will be handled by the Golioth System
Client in the background.
