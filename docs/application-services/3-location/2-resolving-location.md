---
id: resolving
title: Resolving Location
---

Devices can obtain their position by submitting information about cell towers,
Wi-Fi access points, or both. Typically, the more information that a device can
provide, the more accurate the location data returned will be.

### Forming Location Requests

Location requests include information about zero or more cell towers and Wi-Fi
access points. They are submitted to the Golioth Location service as a `POST`
request to the `/.l/v1/net` [Device API](/reference/device-api) endpoint. On
successful resolution, the service will respond with latitude, location, and
accuracy. See [the API reference](/reference/device-api/api-docs/location) for
more information.

### Submitting Location Requests

The [Golioth Firmware SDK](/firmware/golioth-firmware-sdk) provides
[examples](https://github.com/golioth/golioth-firmware-sdk/tree/main/examples/zephyr/location)
that demonstrate how to use location APIs. Testing can also be performed using
the [CoAP CLI](/reference/command-line-tools/coap/coap). An example command is
provided below.

import { ProtocolPublishSample } from '/docs/_partials-common/protocol.mdx'

<ProtocolPublishSample path="/.l/v1/net" method="POST" body={{"cell":[{"type":"ltecatm","mcc":260,"mnc":3,"id":25115045,"strength":-113},{"type":"ltecatm","mcc":260,"mnc":3,"id":25115046,"strength":-89}],"wifi":[{"mac":"b0:5b:99:d8:0f:f4","rssi":-83},{"mac":"ac:f8:cc:09:b3:16","rssi":-90}]}}/>

The response should match the following output.

```json
{
  "lat": 50664189000,
  "lon": 17942112000,
  "acc": 65
}
```
