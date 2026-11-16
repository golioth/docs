---
title: LightDB Get
sidebar_position: 2
---

Use a LightDB get function to get a data value from a specific path on the
cloud. This data is stateful, the most recently set value will be retrieved. If
the path holds no data, the callback receives a `null` payload; check for it
with `golioth_payload_is_null()`.

A number of functions exist to handle different data types, as well as JSON
objects.

## Includes

```c
#include <golioth/client.h>
#include <golioth/lightdb_state.h>
#include <golioth/payload_utils.h>
```

These headers make the Golioth client and LightDB State API functions, and the
payload helper functions from `golioth/payload_utils.h`, available to your
program.

## Synchronous Get

```c
int err;
int32_t value;

err = golioth_lightdb_get_int_sync(client, "counter", &value, 1);
```

The simplest way to get LightDB State data from Golioth is using a synchronous
get function. This blocking function will request data from the given path and
wait for a response (or error) from the server. If a response is not received
within the given timeout, a `GOLIOTH_ERR_TIMEOUT` error code will be returned.

In the above example, we tell Golioth to get the value from the `"counter"` path
and store it in a variable pointed to by `&value`, with a `1` second timeout.

## Asynchronous Get

The asynchronous function `golioth_lightdb_get_async()` is a non-blocking
approach to retrieving LightDB State data from Golioth. When the task completes,
a callback function runs to supply a payload of the requested data.

### Calling the async get function

```c
int err = golioth_lightdb_get_async(client,
                                    "counter",
                                    GOLIOTH_CONTENT_TYPE_JSON,
                                    counter_get_handler,
                                    NULL);
```

The async get function requests data from a given path, but the request is
enqueued by the Golioth Client so that program execution is not blocked. A
user-defined callback function is supplied so that you may process the received
data once the get operation is completed. An optional callback argument can be
specified, this data will be available in the callback function.

In the above example, we request the `"counter"` path from Golioth as JSON,
specifying `counter_get_handler` as the callback function and no callback
argument (`NULL`).

### Callback function

Callback functions need to follow the type specified by the function that
registers them. In this case a `golioth_get_cb_fn` type callback function must
be defined:

```c
static void counter_get_handler(struct golioth_client *client,
                                enum golioth_status status,
                                const struct golioth_coap_rsp_code *coap_rsp_code,
                                const char *path,
                                const uint8_t *payload,
                                size_t payload_size,
                                void *arg) {
    if ((status != GOLIOTH_OK) || golioth_payload_is_null(payload, payload_size)) {
        // The get operation failed, or there is no data at this path.
        return;
    }

    int32_t received_value = golioth_payload_as_int(payload, payload_size);

    // Do something with the received_value variable
    return;
}
```

The result is passed to the callback in `status`. It is recommended that
callbacks test for the `GOLIOTH_OK` status which indicates a successful
operation.

Data requested with `GOLIOTH_CONTENT_TYPE_JSON` is received in JSON format,
stored in memory at the `payload` pointer location, with `payload_size`
indicating the length of data. Helper functions like `golioth_payload_as_int()`
are used to convert the payload to the desired type, or a JSON parser of your
choosing may be used to unpack the payload.

The same callback may be used by multiple async functions. Add logic to react
based on which `path` was being written to, and any callback arguments found in
the `arg` variable.

## Getting Complex JSON Objects

Both examples above get `int` type data from Golioth, and similar functions exist
for `bool`, `float`, and `string`. However, it is often more convenient to get
several paths in one operation. To do so, the API supports JSON objects.

```c
uint8_t json_buf[128];

/* Get root of LightDB State, but JSON can be returned for any path */
int err = golioth_lightdb_get_sync(client,
                                   "",
                                   GOLIOTH_CONTENT_TYPE_JSON,
                                   json_buf,
                                   sizeof(json_buf),
                                   1);
```

In the example above, the `json_buf[128]` character array of an arbitrary length
is created to store the returned JSON object. The API call instructs Golioth to
get the `""` (root) path using content type `GOLIOTH_CONTENT_TYPE_JSON`. We pass
in the `json_buf` pointer which has a length limit of `sizeof(json_buf)`. This
is a synchronous function, so a timeout of `1` second has been specified.

The async example shown earlier in this page receives JSON formatted payloads by
default and may be used to get complex objects from Golioth.

## Example in the Golioth Basics Application

Both synchronous and asynchronous LightDB Get API calls are demonstrated [in the
Golioth Basics example
application](https://github.com/golioth/golioth-firmware-sdk/blob/develop/examples/common/golioth_basics.c).
They can be easily located by searching for `golioth_lightdb_get`.

## Resources

Further documentation of the device SDK is available in the [Golioth Firmware
SDK
Reference](https://firmware-sdk-docs.golioth.io/group__golioth__lightdb__state.html)
(Doxygen).
