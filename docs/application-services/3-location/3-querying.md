---
title: Querying Location
---

:::note
Device location retention is currently unspecified during [private
access](https://blog.golioth.io/golioth-location-private-access/). Customers
should not rely on long-term availability of previous location resolution
results. Retention tiers will be enabled for general availability.
:::

In addition to returning position information to devices, Golioth stores
historical device location and provides a map view of fleets in the
[console](/getting-started/golioth-console).

### Fleet Location Visualization

Projects using the Golioth Location service can observe the location of devices
that have recently obtained position information by navigating to the `Location`
section in the console.

### Device Location Queries

Location data for one or more devices can also be retrieved via the [Golioth
Management API](/reference/management-api). See the [OpenAPI
definitions](/reference/management-api/openapi) for more information.

### Forwarding Device Location

For devices that wish to have their location forwarded to external systems,
position information can be
[streamed](/reference/device-api/api-docs/streaming-data) to Golioth, then
routed to the appropriate destination using
[Pipelines](https://docs.golioth.io/data-routing).
