---
id: limits
title: CoAP Request Limits
---

Golioth servers enforce the following limit on CoAP requests:

* 20 requests per second per device

When passing frequent readings from a single device to Golioth (greater than 1
Hz) we recommend sending in batches. As noted for the [LightDB Stream
service](/cloud/services/lightdb-stream/sending-data), your device can add
timestamps to data packets by using `t`, `ts`, or `time` as the key. The Golioth
LightDB Stream service will use the timestamp for the database entry instead of
the time received.
