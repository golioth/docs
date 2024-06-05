---
id: device-connectivity
title: Device Connectivity
---

Two metrics are reported on the device summary page to indicate how often a
device is reconnecting and delivering data to the Golioth platform.

| Metric | Meaning |
| --- | --- |
| Session Established | Indicates the time at which a device most recently established a secure channel on Golioth. |
| Last Report | Indicates the last time at which data was received from a device. |

In many cases, it is ideal for the `Session Established` timestamp to
significantly lag the `Last Report` timestamp, as that indicates that a device
is able to maintain a given session for an extended period of time. However,
evaluating the duration between the two metrics at any single time does not
necessarily indicate that a device is frequently reconnecting.

## Rate Limiting

Devices are rate-limited at **20 requests per second**. When passing frequent
readings from a single device to Golioth, it is recommend to send in batches.
Batch streaming data can be disaggregated during [Data Routing](/data-routing)
using the [`batch` destination](/data-routing/destinations/batch).

## Payload Size

It is recommend to limit your payload size to 1024 bytes. Using larger payloads
may result in [IP fragmentation](https://en.wikipedia.org/wiki/IP_fragmentation)
which can cause unwanted retransmissions.
