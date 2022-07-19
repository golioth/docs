---
title: LightDB Observe Request
sidebar_position: 3
---

The [observe](https://github.com/golioth/golioth-zephyr-sdk/tree/main/samples/lightdb/observe) sample demonstrates another method of retrieving resources using CoAP. The [observe](https://github.com/golioth/golioth-zephyr-sdk/tree/main/samples/lightdb/observe) sample is somewhat of an asynchronous version of the [get](https://github.com/golioth/golioth-zephyr-sdk/tree/main/samples/lightdb/get) sample. The [observe](https://github.com/golioth/golioth-zephyr-sdk/tree/main/samples/lightdb/observe) sample methods are used to establish a subscription to resources in the Golioth cloud. Changes to the state of these resources in the cloud will trigger an update to the known state of the resource on the device.

Due to the similarities between the [get](https://github.com/golioth/golioth-zephyr-sdk/tree/main/samples/lightdb/get) and [observe](https://github.com/golioth/golioth-zephyr-sdk/tree/main/samples/lightdb/observe) samples, it is recommended to review the [get](https://github.com/golioth/golioth-zephyr-sdk/tree/main/samples/lightdb/get) sample first.  Duplications include the ```golioth_on_message()``` function, its initialization in ```main()```, and the Wi-Fi connectivity check. The [observe](https://github.com/golioth/golioth-zephyr-sdk/tree/main/samples/lightdb/observe) sample includes an ```on_update()``` function which is identical to the ```reply_callback()``` function found in the [get](https://github.com/golioth/golioth-zephyr-sdk/tree/main/samples/lightdb/get) sample and serves the same purpose of parsing the coap packet and printing it to console.

The unique function found in the [observe](https://github.com/golioth/golioth-zephyr-sdk/tree/main/samples/lightdb/observe) sample is the ```golioth_on_connect``` function.  This is the function that is used to subscribe to resources in Golioth.  After the reply handler array is cleared, the ```golioth_lightdb_observe()``` function is called to subscribe to the ```"observed"``` resource.

The while loop found in ```main()``` contains only a sleep function because the updates regarding resource value occur from the context of the ```golioth_system_client_start()``` thread context in the background.

Descriptions of the ```golioth_lightdb_x``` functions can be found [here](https://github.com/golioth/golioth-zephyr-sdk/blob/main/include/net/golioth.h)
