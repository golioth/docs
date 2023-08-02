---
title: LightDB Observe
sidebar_position: 3
---

Use a LightDB observe function to receive an update whenever a specific path
value changes on the cloud.

The observe request works in a similar way to an async get request and much of
the setup is the same. Data is received asynchronously and sent to a handler
function. However, an async get request runs only once and is relatively
short-lived (the transaction ends when a payload is passed to the
callback)&mdash;this is not the case for observations.

Once the observe request is made, the callback will receive an initial payload
from the server. After this, the callback remains in place and may be called
repeatedly (or never again), based on whether or not and how often the data
changes on the cloud.

## Includes

```c
#include "golioth.h"
```

Including the `golioth.h` header file makes the Golioth API functions available
to your program.

## Asynchronous Observe

The asynchronous function `golioth_lightdb_observe_async()` is a non-blocking
approach to receiving data updates from Golioth. When data on your observed path
changes, a callback function runs to supply a payload with the updated data.

### Calling the async observe function

```c
int err = golioth_lightdb_observe_async(client,
                                        "counter",
                                        counter_observe_handler,
                                        NULL);
```

The async observe function requests that Golioth send a new payload to the
device whenever data from a given path changes. A user-defined callback function
is supplied so that you may process the received data. An optional callback
argument can be specified, this data will be available in the callback function.

In the above example, we observe the `"counter"` path from Golioth, specifying
`counter_observe_handler` as the callback function and no callback argument
(`NULL`).

### Callback function

Callback functions need to follow the type specified by the function that
registers them. In this case a `golioth_get_cb_fn` type callback function must
be defined:

```c
static void counter_observe_handler(golioth_client_t client,
                                    const golioth_response_t* response,
                                    const char* path,
                                    const uint8_t* payload,
                                    size_t payload_size,
                                    void* arg) {
    if (response->status != GOLIOTH_OK) {
        // Failed to receive the payload.
        return;
    }

    int32_t received_value = golioth_payload_as_int(payload, payload_size);

    // Do something with the received_value variable
    return;
}
```

The response is passed to the callback function as a `golioth_response_t` struct
that includes `status`. It is recommended that callbacks test for the
`GOLIOTH_OK` status which indicates a successful operation.

By default the data received from Golioth is in JSON format, stored in memory at
the `payload` pointer location, with `payload_size` indicating the length of
data. Helper functions like `golioth_payload_as_int()` are used to convert the
payload to the desired type, or a JSON parser of your choosing may be used to
unpack the payload.

The same callback may be used by multiple async functions. Add logic to react
based on which `path` was being written to, and any callback arguments found in
the `arg` variable.

## Observing Complex JSON Objects

The async example receives JSON formatted payloads by default and may be used to
observe complex objects from Golioth.

## Example in the Golioth Basics Application

The LightDB observe API call is demonstrated [in the Golioth Basics example
application](https://github.com/golioth/golioth-firmware-sdk/blob/develop/examples/common/golioth_basics.c).
It can be easily located by searching for `golioth_lightdb_observe`.

## Resources

Further documentation of the device SDK is available in the [Golioth Firmware
SDK
Reference](https://firmware-sdk-docs.golioth.io/group__golioth__lightdb.html)
(Doxygen).
