---
id: sending-data
title: Sending LightDB Stream Data
---

Devices interact with LightDB Stream using the gateways available on the platform.

> See [CoAP Gateway Interface](/reference/protocols/coap/lightdb-stream) or [MQTT Gateway Interface](/reference/protocols/mqtt/lightdb-stream)

### Inserting data with POST

To insert data into a LightDB Stream, you can either use the REST API or, as we'll do here, pretend to be a device and use `coap` CLI to send CoAP packets to the Golioth servers. When writing, data can either be in json or cbor, or a single value of type boolean, float, integer, or string.

In this example, we'll be saving fictional GPS positional data to a stream located at /position.

import { ProtocolPublishSample, ProtocolReadSample } from '/docs/partials/protocol.mdx'

<ProtocolPublishSample path="/.s/position" method="POST" body={{"latitude": 37.75, "longitude" : -122.57, "speed": 5 }} />
<ProtocolPublishSample path="/.s/position" method="POST" body={{"latitude": 38.75, "longitude" : -123.57, "speed": 10 }} />

You can also send a batch request by sending an array at the root level and with different timestamps:

<ProtocolPublishSample path="/.s/position" method="POST" body={[{"ts": 1626362266059, "latitude": 37.75, "longitude" : -122.57, "speed": 5 }, {"ts": 1626362276059, "latitude": 38.75, "longitude" : -123.57, "speed": 10 }]} />

If you now dump the data in that stream with `goliothctl stream [device name] get /position`, you can see that it contains multiple items with server-inserted timestamps.

```
{
  "time": <time of reception on server>
  "position": {
    "latitude": 37.75,
    "longitude" : -122.57,
    "speed" : 5
  }
}
{
  "time": <time of reception on server>
  "position": {
    "latitude": 38.75,
    "longitude" : -123.57,
    "speed" : 10
  }
}
```

### Reading latest stream data with GET

A device can also get the latest information streamed to LightDB Stream. Maybe on a scenario that the device went offline and want to check what was the latest information sent to check if it should post more data. The returned value of the CoAP API depends on what is stored on LightDB Stream, which can be any JSON like data type. The value is gonna be encoded depending on the `Accept` header that is set on the request.

Taking our asset tracking example, to read the last device position data, we can issue a GET request like this:

<ProtocolReadSample path="/.s/position" response={{ "latitude": 38.75, "longitude" : -123.57, "speed": 5 }} />

And that will return the data like on the previous step:

```
{
  "latitude": 38.75,
  "longitude" : -123.57,
  "speed": 5
}
```
