---
id: lightdb-stream
title: LightDB Stream
---

[LightDB Stream Device Service](/cloud/services/lightdb-stream) definitions over MQTT.

How to use guides:

- [Sending Data](/cloud/services/lightdb-stream/sending-data)

### Interface

| Method    | Description     | Path           | Content Format |
| --------- | --------------- | -------------- | -------------- |
| Publish   | Send data       | .s/{path=\*\*} | JSON           |

> `path` can be any valid URI sub path. Ex:
>
> .s/env/temperature
>
> .s/location

To demonstrate the operations here, let's imagine that we are tracking an asset using an IoT device. The location data from our device is going to periodically pushed to a LightDB Stream.

### Parameters and attributes that are known:

| Attribute                            | Description                | Default |
| ------------------------------------ | -------------------------- | ------- |
| `t` or `ts` or `time` or `timestamp` | Timestamp of the datapoint | now()   |

The body can be a JSON/CBOR object or a single value in the following formats:

- `boolean`
- `float`
- `integer`
- `string`

You can also send a batch request by sending an array at the root level and with different timestamps:

```
$ mosquitto_pub -i deadbeef-id@my-project-id --username deadbeef-id@my-project-id -P supersecret  --host mqtt.golioth.io --port 8883 --topic /.s/position -m "[{\"ts\": 1626362266059, \"latitude\": 37.75, \"longitude\" : -122.57, \"speed\": 5 }, {\"ts\": 1626362276059, \"latitude\": 38.75, \"longitude\" : -123.57, \"speed\": 10 }]"
```
