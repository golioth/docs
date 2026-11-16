---
title: LightDB Set
sidebar_position: 4
---

Use a LightDB set function to set a data value at a specific path on the cloud.
This data is stateful; data sent by the most recent set request will replace
existing data or create the path if it does not already exist.

A number of functions exist to handle different data types, as well as JSON and
CBOR objects.

## Includes

```c
#include <golioth/client.h>
#include <golioth/lightdb_state.h>
```

These headers make the Golioth client and LightDB State API functions
available to your program.

## Setting a value

```c
int err = golioth_lightdb_set_int(client,
                                  "counter",
                                  counter,
                                  counter_set_handler,
                                  NULL);
```

The set functions do not block. The request is enqueued by the Golioth Client
and the function returns immediately; its return value only reports whether the
request was queued. The result of the set operation is passed to the callback
function, if one is supplied (pass `NULL` to ignore the result). An optional
callback argument can be specified, this data will be available in the callback
function.

In the above example, we tell Golioth to set the `"counter"` path to the value
of a variable called `counter`, with `counter_set_handler` as the callback
function and no callback argument (`NULL`).

:::note Waiting for the result

The synchronous `_sync` functions were removed in Golioth Firmware SDK
v0.23.0. An application that needs to block until the request completes can
wait (for example on a semaphore) for the callback to run, but not from inside
a Golioth callback, because callbacks run on the Golioth client thread.

:::

### Callback function

Callback functions need to follow the type specified by the function that
registers them. In this case a `golioth_set_cb_fn` type callback
function must be defined:

```c
static void counter_set_handler(struct golioth_client *client,
                                enum golioth_status status,
                                const struct golioth_coap_rsp_code *coap_rsp_code,
                                const char *path,
                                void *arg) {
    if (status != GOLIOTH_OK) {
        // The set operation failed.
        return;
    }

    // The set operation was successful!
    return;
}
```

The result is passed to the callback in `status`. It is recommended that
callbacks test for the `GOLIOTH_OK` status which indicates a successful
operation. When `status` is `GOLIOTH_ERR_COAP_RESPONSE`, `coap_rsp_code` holds
the non-success CoAP response code sent by the server; for other errors (for
example `GOLIOTH_ERR_TIMEOUT`) no response was received and `coap_rsp_code` is
`NULL`.

The same callback may be used by multiple requests. Add logic to react
based on which `path` was being written to, and any callback arguments found in
the `arg` variable.

## Setting Complex Objects

The example above sends `int` type data to Golioth, and similar functions exist
for `bool`, `float`, and `string`. However, it is often more convenient to set
several paths in one operation. To do so, the API supports using both JSON and
CBOR objects.

```c
/* Create a valid JSON string */
char json_buf[] = "{\"name\":\"seconds\",\"data\":{\"val\":42,\"inc\":1}}";

int err = golioth_lightdb_set(client,
                              "counter",
                              GOLIOTH_CONTENT_TYPE_JSON,
                              (const uint8_t *)json_buf,
                              strlen(json_buf),
                              counter_set_handler,
                              NULL);
```

In the example above, a JSON object is first prepared as a character array. The
API call instructs Golioth to set the `"counter"` path using content type
`GOLIOTH_CONTENT_TYPE_JSON`. We pass the function the `json_buf` pointer to the
data which is `strlen(json_buf)` long (the null terminator is not counted). The
`counter_set_handler` function is registered as a callback with no callback
argument (`NULL`) specified.

Here is what the resulting data on the cloud will look like:

```json
{
  "counter": {
    "name": "seconds",
    "data": {
      "val": 42,
      "inc": 1
    }
  }
}
```

## Example in the Golioth Basics Application

LightDB Set API calls are demonstrated [in the Golioth Basics example
application](https://github.com/golioth/golioth-firmware-sdk/blob/develop/examples/common/golioth_basics.c).
They can be easily located by searching for `golioth_lightdb_set`.

## Resources

Further documentation of the device SDK is available in the [Golioth Firmware
SDK
Reference](https://firmware-sdk-docs.golioth.io/group__golioth__lightdb__state.html)
(Doxygen).
