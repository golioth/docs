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
#include "golioth.h"
```

Including the `golioth.h` header file makes the Golioth API functions available
to your program.

## Synchronous Set

```c
int err = golioth_lightdb_set_int_sync(client, "counter", counter, 1);
```

The simplest way to send LightDB State data to Golioth is using a synchronous
set function. This blocking function will send data to the given path and wait
for a response (or error) from the server. If a response is not received within
the given timeout, a `GOLIOTH_ERR_TIMEOUT` error code will be returned.

In the above example, we tell Golioth to set the `"counter"` path to the
value of a variable called `counter`, with a `1` second timeout.

## Asynchronous Set

The asynchronous functions are a non-blocking approach to sending LightDB State
data to Golioth. When the task completes, an optional callback function may be
run to process the result of the async operation.

### Calling the async set function

```c
int err = golioth_lightdb_set_int_async(client,
                                        "counter",
                                        counter,
                                        counter_set_handler,
                                        NULL);
```

The async set functions send data to a given path, but the request is enqueued
by the Golioth Client so that program execution is not blocked. If a callback
function is supplied, it will be called by the Golioth Client when the set
operation is completed. An optional callback argument can be specified, this
data will be available in the callback function.

In the above example, we tell Golioth to set the `"counter"` path to the value
of a variable called `counter`, with `counter_set_handler` as the callback
function and no callback argument (`NULL`).

### Callback function

Callback functions need to follow the type specified by the function that
registers them. In this case a `golioth_set_cb_fn` type callback
function must be defined:

```c
static void counter_set_handler(golioth_client_t client,
                                const golioth_response_t* response,
                                const char* path,
                                void* arg) {
    if (response->status != GOLIOTH_OK) {
        // The set operation failed.
        return;
    }

    // The set operation was successful!
    return;
}
```

The response is passed to the callback function as a `golioth_response_t` struct
that includes `status`. It is recommended that callbacks test for the
`GOLIOTH_OK` status which indicates a successful operation.

The same callback may be used by multiple async functions. Add logic to react
based on which `path` was being written to, and any callback arguments found in
the `arg` variable.

## Setting Complex Objects

Both examples above send `int` type data to Golioth, and similar functions exist
for `bool`, `float`, and `string`. However, it is often more convenient to set
several paths in one operation. To do so, the API supports using both JSON and
CBOR objects.

```c
/* Create a valid JSON string */
char *json_buf[] = "{\"name\":\"seconds\",\"data\":{\"val\":42,\"inc\":1}}"

int err = golioth_lightdb_set_json_async(client,
                                         "counter",
                                         json_buf,
                                         strlen(json_buf),
                                         counter_set_handler,
                                         NULL);
```

In the example above, a JSON object is first prepared as a character array. The
API call instructs Golioth to set the `"counter"` path using the `json_buf`
which is `strlen(json_buf)` long (the null terminator is not counted). This is
an async function (although a sync version is also available) so the
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

Both synchronous and asynchronous LightDB Set API calls are demonstrated [in the
Golioth Basics example
application](https://github.com/golioth/golioth-firmware-sdk/blob/develop/examples/common/golioth_basics.c).
They can be easily located by searching for `golioth_lightdb_set`.

## Resources

Further documentation of the device SDK is available in the [Golioth Firmware
SDK
Reference](https://firmware-sdk-docs.golioth.io/group__golioth__lightdb.html)
(Doxygen).
