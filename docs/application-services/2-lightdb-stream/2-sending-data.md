---
id: sending-data
title: Sending Stream Data
---

Devices do not directly interact with LightDB Stream. Rather, device data is
delivered to LightDB Stream via [Pipelines](/data-routing). Projects may have
one or more pipelines configured that deliver all or a subset of streaming data
messages to LightDB Stream via the [LightDB Stream data
destination](/data-routing/destinations/lightdb-stream). See the [Pipelines
examples](/data-routing/examples) for more information.

## Timestamps

By default, Pipelines use the time at which packets arrive at the Golioth
platform as the timestamp for a data message. The data message timestamp will be
used when delivered to LightDB Stream.

In some cases, it may be desirable to set a message's timestamp when sent from a
device. This can be accomplished by using the [`extract-timestamp`
transformer](/data-routing/transformers/extract-timestamp) in a pipeline that
delivers data to LightDB Stream. This will result in a valid timestamp field in
the device data payload being used for the data message timestamp.
