---
id: sending-data
title: Sending LightDB Stream Data
---

Devices interact with LightDB Stream using the gateways available on the platform.

> See [CoAP API Reference](/reference/protocols/coap/lightdb-stream).

### Inserting data with POST

Devices can insert data into LightDB Stream with a CoAP `POST` request. Data can
either be in JSON or CBOR, or a single value of type boolean, float, integer, or
string.

In this example, we'll be using the `coap` CLI to send fictional GPS positional
data to a stream located at `/position`.

import { ProtocolPublishSample, ProtocolReadSample } from '/docs/partials/protocol.mdx'

<ProtocolPublishSample path="/.s/position" method="POST" body={{"latitude": 37.75, "longitude" : -122.57, "speed": 5 }} />
<ProtocolPublishSample path="/.s/position" method="POST" body={{"latitude": 38.75, "longitude" : -123.57, "speed": 10 }} />


### Sending data with a timestamp

You can also send a batch request by sending an array at the root level that
includes a timestamp for each entry. The following keys are valid for timestamp
values: `t`, `ts`, `time`. The timestamp will not appear in the data payload
once received by Golioth LightDB Stream, but instead be used as the `time`
value.

The following example illustrates sending the timestamp in either [Unix
time](https://en.wikipedia.org/wiki/Unix_time) or ISO 8601 format. In this case
the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format includes a
timezone offset, but also allow for the `2022-12-08T14:45:47Z` style instead.

<ProtocolPublishSample path="/.s/position" method="POST" body={[{"ts": 1670532287544, "latitude": 37.75, "longitude" : -122.57, "speed": 5 }, {"ts": "2022-12-08T14:45:47-06:00", "latitude": 38.75, "longitude" : -123.57, "speed": 10 }]} />

Getting the latest data entry in the stream with `goliothctl stream get [device
name] /position` shows that the data doesn't contain the timestamp:

```
{"latitude":38.75,"longitude":-123.57,"speed":10}
```

However, if we use a query we can see the full data structure stored on LightDB
Stream that uses the timestamps we submitted:

```
goliothctl stream query [device name] --interval 8h --field time --field "deviceId" --field "*"
```

```
[
  {
    "data": {
      "position": {
        "latitude": 37.75,
        "longitude": -122.57,
        "speed": 5
      }
    },
    "deviceId": "61d34aceea77dbd14986344a",
    "time": "2022-12-08T20:44:47.544+00:00"
  },
  {
    "data": {
      "position": {
        "latitude": 38.75,
        "longitude": -123.57,
        "speed": 10
      }
    },
    "deviceId": "61d34aceea77dbd14986344a",
    "time": "2022-12-08T20:45:47+00:00"
  }
]
```

### Reading latest stream data with GET

A device can also get the latest information streamed to LightDB Stream. Imagine
a scenario where the device went offline and now wants to check the latest
information sent to know if it should post more data. The returned value of the
CoAP API depends on what is stored on LightDB Stream, which can be any JSON-like
data type. The value will be encoded depending on the `Accept` header that is
set on the request.

Taking our asset tracking example, to read the last device position data, we can
issue a `GET` request like this:

<ProtocolReadSample path="/.s/position" response={{ "latitude": 38.75, "longitude" : -123.57, "speed": 5 }} />

And that will return the data like on the previous step:

```
{
  "latitude": 38.75,
  "longitude" : -123.57,
  "speed": 5
}
```
