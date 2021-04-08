---
id: read-write-data
title: Read and Write Data
---

Devices interact with Light DB using the gateways available on the platform. For now, only CoAP is available.

| Method   | Description         | Path            |
| -------- | ------------------- | --------------- |
| GET      | Read persisted data | /.d/{path=\*\*} |
| POST/PUT | Create/Update data  | /.d/{path=\*\*} |
| DELETE   | Delete Data         | /.d/{path=\*\*} |

> `path` can be any valid URI sub path. Ex:
>
> /.d/temp/state
>
> /.d/temp/active

To demonstrate the operations here, let's imagine that we are monitoring environment data using an IoT device. All of the data for our device is going to be saved on Light DB.

### Writing/Updating data with POST/PUT

We can start by saving temperature data on Light DB. On requests to write data, the body can be a JSON/CBOR object or a single value in boolean, float, integer or string format.

So for example to save a temperature value of 30 Cº at path `/env/temp` we can do this way.

```
$ gurl coap --path /.d/env/temp -m PUT --psk-id deadbeef-id --psk supersecret --host coap.golioth.dev -b "{\"value\": 30.0, \"unit\" : \"c\" }" --format json
```

After the above request, we are gonna save the device data in Light DB and it's going to look like this now:

```
{
  "env": {
    "temp": {
      "value" : 30.0,
      "unit" : "c"
    }
  }
}
```

You can set any data on any path, so maybe for initialization we send both temperature and unit, but later on, to reduce bandwidth, we can send just the temperature value to the specific path.

```
$ gurl coap --path /.d/env/temp/value -m PUT --psk-id deadbeef-id --psk supersecret --host coap.golioth.dev -b "35.0" --format json
```

And the current device state will look like this:

```
{
  "env": {
    "temp": {
      "value" : 35.0,
      "unit" : "c"
    }
  }
}
```

You can also write data using our APIs and `goliothctl`. Taking the enviroment sensing use case, let's say that we want to set a given alert threshold on the device. We can do this way:

```
$ goliothctl lightdb set [device name] /config/temp -b "{\"min\": 20.0, \"max\": 40.0 }"
```

:::note
`[device name]` should be replace by your device name and wrapped in quotes if spaces are used.
:::

This way the device can also read the `/config` path and calculate alerts. If an alert condition is met, it can post data to `/alert`.

```
$ gurl coap --path /.d/ -m PUT --psk-id deadbeef-id --psk supersecret --host coap.golioth.dev -b "{ \"alert\" : { \"temp\": true }, \"env\" : { \"temp\" : { \"value\" : 45.0 } } }" --format json
```

The current device state might look like this:

```
{
  "env": {
    "temp": {
      "value" : 45.0,
      "unit" : "c"
    }
  },
  "alert": {
    "temp": true
  },
  "config": {
    "temp": {
      "min": 20.0,
      "max": 40.0
    }
  }
}
```

### Reading data with GET

The return value of the CoAP API depends on what is stored on Light DB, which can be any JSON like data type like mentioned [on this guide](./structure-data). The value is gonna be encoded depending on the `Accept` header that is set on the request.

So to read the device data, we can issue a GET request like this:

```
$ gurl coap --path /.d/env -m GET --psk-id deadbeef-id --psk supersecret --host coap.golioth.dev --accept json
```

And that will return the data like on the previous step:

```
{
  "temp": {
    "value" : 45.0,
    "unit" : "c"
  }
}
```

But you can also request a more specific path, like this:

```
$ gurl coap --path /.d/env/temp/value -m GET --psk-id deadbeef-id --psk supersecret --host coap.golioth.dev --accept json
```

And in this case, will return just `45.0`.

### Deleting data with DELETE method

To remove data, we can send a `DELETE` request with the path that need to be cleaned. On our example, let's say that the device have a button to acknowledge the alert state and clean the `/alert/temp` value.

```
$ gurl coap --path /.d/alert/temp -m DELETE --psk-id deadbeef-id --psk supersecret --host coap.golioth.dev
```

Also, you can do that same acknowledgement via our APIs or `goliothctl`. Maybe for example, there is a web application that the final user can ack that alert. Using `goliothctl` you can delete the path with this command:

```
$ goliothctl lightdb delete [device name] /alert/temp
```

The final state of the device in this scenario would be like this:

```
{
  "env:" {
    "temp": {
      "value" : 45.0,
      "unit" : "c"
    }
  },
  "alert": {},
  "config": {
    "temp": {
      "min": 20.0,
      "max": 40.0
    }
  }
}
```
