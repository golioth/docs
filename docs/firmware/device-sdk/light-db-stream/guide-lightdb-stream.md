---
title: LightDB Stream Sample
sidebar_position: 2
---

The LightDB Stream sample contains many of the same elements as the other LightDB samples. The primary difference between LightDB and LightDB Stream is the persistence of data. LightDB is useful for applications of state management. With LightDB Stream, timestamped datapoints can be uploaded using the LightDB Stream service to accumulate time series databases. Check out the [Cloud](https://3000-silver-wolverine-uay44tpw.ws-us21.gitpod.io/cloud/services/lightdb-stream) section of the documentation for information regarding accessing the accumulated data.

The LightDB Stream sample acquires data from a real or simulated temperature sensor and uploads this data over CoAP to the Golioth LightDB cloud.
