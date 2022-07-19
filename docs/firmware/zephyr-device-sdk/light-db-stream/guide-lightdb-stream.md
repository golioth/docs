---
title: LightDB Stream Sample
sidebar_position: 2
---

The LightDB Stream sample contains many of the same elements as the other LightDB samples. The primary difference between LightDB and LightDB Stream is the persistence of data. LightDB is useful for applications of state management. With LightDB Stream, timestamped datapoints can be uploaded using the LightDB Stream service to accumulate time series databases. Check out the [Cloud](https://3000-silver-wolverine-uay44tpw.ws-us21.gitpod.io/cloud/services/lightdb-stream) section of the documentation for information regarding accessing the accumulated data.

The LightDB Stream sample acquires data from a real or simulated temperature sensor and uploads this data over CoAP to the Golioth LightDB cloud. To make use of the real temperature sensor, ```temp0``` must be configured in the device tree.  If this is not configured then the simulated temperature function will be executed.  The main body of the code resembles the [set](https://github.com/golioth/golioth-zephyr-sdk/tree/main/samples/lightdb/set) example. The primary differentiator is the second parameter of the ```golioth_lightdb_set()``` function.  It uses the macro ```GOLIOTH_LIGHTDB_STREAM_PATH``` instead of ```GOLIOTH_LIGHTDB_PATH``` which is the macro found in the LightDB [set](https://github.com/golioth/golioth-zephyr-sdk/tree/main/samples/lightdb/set) example.  These macros configure the URI for the CoAP objects accordingly for the state or stream context.
