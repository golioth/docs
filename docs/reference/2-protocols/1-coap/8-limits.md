---
id: limits
title: CoAP Limitations
---

## Requests per device

Golioth servers enforce the following limit on CoAP requests:

* 20 requests per second per device

When passing frequent readings from a single device to Golioth (greater than 1
Hz) we recommend sending in batches. Batch streaming data can be disaggregated
during [Data Routing](/data-routing) using the [`batch`
destination](/data-routing/destinations/batch).

## Payload length

We recommend that you limit your payload length to 1024 bytes. The
expected result of sending larger payloads is [IP
fragmentation](https://en.wikipedia.org/wiki/IP_fragmentation) which may result
in unwanted retransmissions.
