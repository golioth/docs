---
id: by-object
title: LightDB Stream (by object)
sidebar_position: 2
---

Object-based LightDB functions can be used to send any number of time-series
data values to the cloud with a single function call. A timestamp is
automatically added to the data by the server and stored using a specific path
that you provide. This data will accumulate along with all previously received
values. If the chosen path does not already exist, it will be created.

Synchronous and asynchronous functions exist to set multiple data types and
paths using your choice of these object types: `JSON` or `CBOR`.

## Includes

```c
#include "golioth.h"
```

Including the `golioth.h` header file makes the Golioth API functions available
to your program.

## Preparing the Data

The data you want to send must first be prepared as an object. This will include
one or more key-values pairs. Choose between `JSON` or `CBOR` format.

:::note You Decide the Schema

Golioth doesn't enforce a schema for your data. You may write to the root path
using an empty string `""`, or create `"any/path/you/like"`.

You choose what keys to use with your key-value pairs, and you are free to use
nested objects. The only reserved keys are `t`, `ts`, `time` and `timestamp`;
each will be interpreted as a user-supplied timestamp. [More on that
later](by-object#custom-timestamps).

:::

### JSON

JSON payloads may be formatted using simple `snprintf()` style string
substitution or a library like [cJSON](https://github.com/DaveGamble/cJSON).
Here is a properly-formatted JSON example using all of the key-value pair
examples from [the type-based stream examples](by-type#synchronous):

```c
/* Create a valid JSON string */
char json_buf[] = "{\"name\":\"Golioth\",\"active\":true,\"data\":{\"reading\":1.337,\"calib\":42}}";
```

JSON is great for prototyping as it's human readable. When sending larger data
sets, you may experience bandwidth savings by using CBOR instead.

### CBOR

The same data may be formatted as a serialized CBOR object. On the device this
should be done using a library of your choice. [The zcbor
library](https://github.com/NordicSemiconductor/zcbor) is already available as a
submodule dependency of the Golioth Firmware SDK.

```c
/* Create serialized CBOR object */
uint8_t cbor_buf[] = { 0xA3, 0x64, 0x6E, 0x61, 0x6D, 0x65, 0x67, 0x47, 0x6F, 0x6C, 0x69, 0x6F,
                       0x74, 0x68, 0x66, 0x61, 0x63, 0x74, 0x69, 0x76, 0x65, 0xF5, 0x64, 0x64,
                       0x61, 0x74, 0x61, 0xA2, 0x67, 0x72, 0x65, 0x61, 0x64, 0x69, 0x6E, 0x67,
                       0xFB, 0x3F, 0xF5, 0x64, 0x5A, 0x1C, 0xAC, 0x08, 0x31, 0x65, 0x63, 0x61,
                       0x6C, 0x69, 0x62, 0x18, 0x2A };
```

While CBOR is not human readable, there are online tools like
[cbor.me](https://cbor.me/) that are useful for debugging.

:::note Comparing JSON and CBOR

For this example we see that the CBOR package is 53 bytes while the JSON
representation is 68 bytes for the same data. This ratio will change based on
how many key-value pairs are in the object, the type of the data, and even their
values. In this example, the savings for numerous readings across multiple
devices in a fleet over large time periods becomes substantial.

:::

## Synchronous

```c
/* Send JSON object */
err = golioth_lightdb_stream_set_json_sync(client,
                                           "sensor",
                                           json_buf,
                                           strlen(json_buf),
                                           1);

/* Send CBOR object */
err = golioth_lightdb_stream_set_cbor_sync(client,
                                           "sensor",
                                           cbor_buf,
                                           sizeof(cbor_buf),
                                           1);
```


The simplest way to send LightDB Stream data to Golioth is using a synchronous
function call. This blocking function will send data to the given path and wait
for a response (or error) from the server. If a response is not received within
the given timeout, a `GOLIOTH_ERR_TIMEOUT` error code will be returned.

In the above examples, we tell Golioth to set the `"sensor"` path using
`json_buf`/`cbor_buf` and the length of that array. The final argument is a
timeout value (in seconds). When Golioth receives this data, the server will
automatically add a timestamp based on when it was received.

:::tip Multiple Data Points and Nested Data

This operation can set multiple values stored in the object. The example also
demonstrates data stored as a nested object. After these function calls, the
Golioth servers will have a record of the data that looks like this:

```json
{
  "sensor": {
    "active": true,
    "data": {
      "calib": 42,
      "reading": 1.337
    },
    "name": "Golioth"
  }
}
```

:::

## Asynchronous

The asynchronous functions are a non-blocking approach to sending LightDB Stream
data to Golioth. When the task completes, an optional callback function may be
run to process the result of the async operation.

### Calling the Async LightDB Stream Set Function

```c
enum obj_type {
    JSON_ASYNC,
    CBOR_ASYNC
};

err = golioth_lightdb_stream_set_json_async(client,
                                            "sensor",
                                            json_buf,
                                            strlen(json_buf),
                                            obj_async_handler,
                                            (void *)JSON_ASYNC);

err = golioth_lightdb_stream_set_cbor_async(client,
                                            "sensor",
                                            cbor_buf,
                                            sizeof(cbor_buf),
                                            obj_async_handler,
                                            (void *)CBOR_ASYNC);
```

The async set functions send data to a given path, but the request is enqueued
by the Golioth Client so that program execution is not blocked. If a callback
function is supplied, it will be called by the Golioth Client when the set
operation is completed. An optional callback argument can be specified, this
data will be available in the callback function.

In the above example, we tell Golioth to set the `"sensor"` path to the values
stores in the `json_buf`/`cbor_buf` array. The length of that array is supplied,
along with  with `async_set_handler` as the callback function. An enum value is
used as the callback argument.

### Callback Function

Callback functions need to follow the type specified by the function that
registers them. In this case a `golioth_set_cb_fn` type callback
function must be defined:

```c
static void obj_async_handler(golioth_client_t client,
                              const golioth_response_t* response,
                              const char* path,
                              void* arg) {
    if (response->status != GOLIOTH_OK) {
        // The set operation failed.
        return;
    }

    // The set operation was successful!
    switch((enum obj_type)arg) {
        case JSON_ASYNC:
            printf("JSON async set successful!\n");
            break;
        case CBOR_ASYNC:
            printf("CBOR async set successful!\n");
            break;
        default:
            printf("Async set successful, but arg value unrecognized\n");
    }
    return;
}
```

The response is passed to the callback function as a `golioth_response_t` struct
that includes `status`. It is recommended that callbacks test for the
`GOLIOTH_OK` status which indicates a successful operation.

The same callback may be used by multiple async functions. In this example, the
`arg` value is used to determine which function led to this callback so that a
different message may be printed.

## Custom Timestamps

As a convenience, data received without a timestamp will be automatically
assigned one. However, in cases where you are caching sensor readings, you may
send custom timestamps along with your data. Golioth will recognize and use the
custom timestamp when storing the data.

```c
/* Create a valid JSON string that includes a timestamp */
char json_buf[] = "{\"name\":\"Golioth\","
                  "\"active\":true,"
                  "\"data\":{\"reading\":1.337,\"calib\":83},"
                  "\"time\":\"2023-08-09T08:27:49-05:00\"}";
```

Format your custom time as either Unix time or ISO 8601 format, and add it to
your payload using any of the special key names: `t`, `ts`, `time`, or
`timestamp`. The timestamp will not appear as a key-value pair once received by
Golioth LightDB Stream, but instead be removed and used as the time value for
the database record.

:::tip A timestamp applies to all data received as a single payload

In both cases (automatic or custom timestamps), one timestamp will be used for
all of the data received in the same object.

:::

## Resources

Further documentation of the device SDK is available in the [Golioth Firmware
SDK
Reference](https://firmware-sdk-docs.golioth.io/group__golioth__lightdb.html)
(Doxygen).
