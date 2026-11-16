---
title: LightDB Get
sidebar_position: 2
---

Use a LightDB get function to get a data value from a specific path on the
cloud. This data is stateful, the most recently set value will be retrieved. If
the path holds no data, the callback receives a `null` payload; check for it
with `golioth_payload_is_null()`.

A single function, `golioth_lightdb_get()`, retrieves data as JSON or CBOR;
helper functions decode the payload in the callback.

## Includes

```c
#include <golioth/client.h>
#include <golioth/lightdb_state.h>
#include <golioth/payload_utils.h>
```

These headers make the Golioth client and LightDB State API functions, and the
payload helper functions from `golioth/payload_utils.h`, available to your
program.

## Getting a value

```c
int err = golioth_lightdb_get(client,
                              "counter",
                              GOLIOTH_CONTENT_TYPE_JSON,
                              counter_get_handler,
                              NULL);
```

The get function does not block. The request is enqueued by the Golioth Client
and the function returns immediately; its return value only reports whether the
request was queued. A user-defined callback function is supplied so that you
may process the received data once the get operation is completed. An optional
callback argument can be specified, this data will be available in the callback
function.

In the above example, we request the `"counter"` path from Golioth as JSON,
specifying `counter_get_handler` as the callback function and no callback
argument (`NULL`).

:::note Waiting for the result

The synchronous `_sync` functions were removed in Golioth Firmware SDK
v0.23.0, and the typed `golioth_lightdb_get_<type>_sync()` getters were
replaced by `golioth_lightdb_get()` with the payload decoded in the callback.
An application that needs to block until the request completes can wait (for
example on a semaphore) for the callback to run, but not from inside a Golioth
callback, because callbacks run on the Golioth client thread.

:::

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

The same callback may be used by multiple requests. Add logic to react
based on which `path` was requested, and any callback arguments found in
the `arg` variable.

## Getting Complex JSON Objects

The example above decodes an `int`; `golioth_payload_as_bool()` and
`golioth_payload_as_float()` decode other types. However, it is often more
convenient to get several paths in one operation. To do so, the API supports
JSON objects.

```c
/* Get root of LightDB State, but JSON can be returned for any path */
int err = golioth_lightdb_get(client,
                              "",
                              GOLIOTH_CONTENT_TYPE_JSON,
                              json_get_handler,
                              NULL);
```

The callback receives the whole JSON object in `payload`, `payload_size` bytes
long; pass it to a JSON parser of your choosing. Use
`GOLIOTH_CONTENT_TYPE_CBOR` to receive the same data as CBOR.

## Example in the Golioth Basics Application

LightDB Get API calls are demonstrated [in the Golioth Basics example
application](https://github.com/golioth/golioth-firmware-sdk/blob/develop/examples/common/golioth_basics.c).
They can be easily located by searching for `golioth_lightdb_get`.

## Resources

Further documentation of the device SDK is available in the [Golioth Firmware
SDK
Reference](https://firmware-sdk-docs.golioth.io/group__golioth__lightdb__state.html)
(Doxygen).
