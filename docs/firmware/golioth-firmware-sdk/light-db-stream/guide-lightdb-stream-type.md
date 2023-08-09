---
id: by-type
title: LightDB Stream (by type)
sidebar_position: 1
---

Type-based LightDB functions can be used to send a single time-series data value
to the cloud. A timestamp is automatically added to the data by the server and
stored using a specific path that you provide. This data will accumulate along
with all previously received values. If the chosen path does not already exist
it will be created.

Synchronous and asynchronous functions exist to handle several data types:
`bool`, `float`, `int`, `string`.

## Includes

```c
#include "golioth.h"
```

Including the `golioth.h` header file makes the Golioth API functions available
to your program.

## Synchronous

```c
int err;
bool my_bool = true;
float my_float = 1.337;
int my_int = 42;
char *my_str[] = "Golioth";

// Stream a bool value
err = golioth_lightdb_stream_set_bool_sync(client, "sensor/active", my_bool, 1);

// Stream a float value
err = golioth_lightdb_stream_set_float_sync(client, "sensor/reading", my_float, 1);

// Stream an int value
err = golioth_lightdb_stream_set_int_sync(client, "sensor/calib", my_int, 1);

// Stream a string
err = golioth_lightdb_stream_set_string_sync(client,
                                             "sensor/name",
                                             my_str,
                                             strlen(my_str),
                                             1);
```

The simplest way to send LightDB Stream data to Golioth is using a synchronous
function call. This blocking function will send data to the given path and wait
for a response (or error) from the server. If a response is not received within
the given timeout, a `GOLIOTH_ERR_TIMEOUT` error code will be returned.

In the above examples, we tell Golioth to set the `"sensor/active"` path to the
value of a variable called `my_bool`, with a `1` second timeout. When Golioth
receives this data, the server will automatically add a timestamp based on when
it was received. Functions for three other data types are also demonstrated,
accomplishing the same end goal of sending individual time-series data points to
Golioth.

:::tip

Each function call represents a separate network payload being sent from the
device to Golioth. If you have several data points that need to be updated at
the same time, you can use a JSON or CBOR object to do so. For the example
above, an object containing all values could be sent to the `sensors` path,
turning four function calls (and four network requests) into just one.

Sending JSON or CBOR objects to LightDB Stream is covered in [the next page of
this section](by-object).

:::

## Asynchronous

The asynchronous functions are a non-blocking approach to sending LightDB Stream
data to Golioth. When the task completes, an optional callback function may be
run to process the result of the async operation.

### Calling the async LightDB stream set function

```c
int err = golioth_lightdb_stream_set_int_async(client,
                                               "sensor/calib",
                                               my_int,
                                               async_set_handler,
                                               NULL);
```

The async set functions send data to a given path, but the request is enqueued
by the Golioth Client so that program execution is not blocked. If a callback
function is supplied, it will be called by the Golioth Client when the set
operation is completed. An optional callback argument can be specified, this
data will be available in the callback function.

In the above example, we tell Golioth to set the `"sensor/calib"` path to the value
of a variable called `my_int`, with `async_set_handler` as the callback
function and no callback argument (`NULL`).

### Callback function

Callback functions need to follow the type specified by the function that
registers them. In this case a `golioth_set_cb_fn` type callback
function must be defined:

```c
static void async_set_handler(golioth_client_t client,
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

## Example in the Golioth Basics Application

An example of the `golioth_lightdb_stream_set_int_async()` API call is
demonstrated [in the Golioth Basics example
application](https://github.com/golioth/golioth-firmware-sdk/blob/develop/examples/common/golioth_basics.c).

## Resources

Further documentation of the device SDK is available in the [Golioth Firmware
SDK
Reference](https://firmware-sdk-docs.golioth.io/group__golioth__lightdb.html)
(Doxygen).
