---
title: Tracking Location
---

Whether location is obtained via traditional on-device mechanisms, such as GNSS,
or via Golioth Location's [network-based
positioning](/application-services/location/network-based-positioning)
capabilities, it can be routed and delivered to one or more destinations via
[Golioth Pipelines](/data-routing). For example, if tracking a device's location
over time is necessary, routing location to [LightDB
Stream](/application-services/lightdb-stream) or an external timeseries database
may be required. If it is necessary to make devices aware of their own position,
location information may be routed to [LightDB
State](/application-services/lightdb-state), where it can be accessed by the
device.

Golioth Location also offers built-in storage for the most recent device
position. Routing location information to the [`location` data
destination](/data-routing/destinations/location) will make it available for
visualization in the `Location` section of the [Golioth
console](https://docs.golioth.io/getting-started/golioth-console).

Location data for one or more devices can also be retrieved via the [Golioth
Management API](/reference/management-api). See the [OpenAPI
definitions](/reference/management-api/openapi) for more information.
