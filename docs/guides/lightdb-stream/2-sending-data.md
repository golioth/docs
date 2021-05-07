---
id: sending-data
title: Sending Data
---

Devices interact with Light DB Stream using the gateways available on the platform. For now, only CoAP is available.

| Method | Description     | Path            |
| ------ | --------------- | --------------- |
| POST   | Send data       | /.s/{path=\*\*} |
| GET    | Get latest data | /.s/{path=\*\*} |

> `path` can be any valid URI sub path. Ex:
>
> /.s/env/temperature
>
> /.s/location

To demonstrate the operations here, let's imagine that we are tracking an asset using an IoT device. All of the data for our device is going to be saved on Light DB Stream.

### Inserting data with POST

We can start by saving GPS position data on Light DB Stream. On requests to write data, the body can be a JSON/CBOR object or a single value in boolean, float, integer or string format.

So for example to save a GPS position, we can choose a path `/position` and send this way.

```
$ gurl coap --path /.s/position -m POST --psk-id deadbeef-id --psk supersecret --host coap.golioth.dev -b "{\"latitude\": 37.75, \"longitude\" : -122.57, \"speed\": 5 }" --format json
$ gurl coap --path /.s/position -m POST --psk-id deadbeef-id --psk supersecret --host coap.golioth.dev -b "{\"latitude\": 38.75, \"longitude\" : -123.57, \"speed\": 10 }" --format json
```

After the above requests, we are gonna have multiple positions stored associated to the device and it's going to look like this after being received:

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

A device can also get the latest information streamed to Light DB Stream. Maybe on a scenario that the device went offline and want to check what was the latest information sent to check if it should post more data. The returned value of the CoAP API depends on what is stored on Light DB Stream, which can be any JSON like data type. The value is gonna be encoded depending on the `Accept` header that is set on the request.

Taking our asset tracking example, to read the last device position data, we can issue a GET request like this:

```
$ gurl coap --path /.s/position -m GET --psk-id deadbeef-id --psk supersecret --host coap.golioth.dev --accept json
```

And that will return the data like on the previous step:

```
{
  "latitude": 38.75,
  "longitude" : -123.57,
  "speed": 5
}
```
