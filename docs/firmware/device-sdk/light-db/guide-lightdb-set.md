---
title: LightDB Set Request
sidebar_position: 4
---

The [set](https://github.com/golioth/zephyr-sdk/tree/main/samples/lightdb/set) sample application is the most simple of three basic LightDB examples.  It does not receive and process replies, so there is no receive handler array or helper functions to perform those tasks.  This sample performs the Wi-Fi check, initializes the system client, and enters a while loop that increments a counter and updates that value in the Golioth cloud via the ```golioth_lightdb_set()``` function after the value to be set is formatted as a string with the ```snprintk()``` function.

Descriptions of the ```golioth_lightdb_x``` functions can be found [here](https://github.com/golioth/zephyr-sdk/blob/main/include/net/golioth.h)
