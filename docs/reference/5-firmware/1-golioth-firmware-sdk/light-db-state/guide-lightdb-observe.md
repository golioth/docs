---
title: LightDB Observe
sidebar_position: 3
---

Use a LightDB observe function to receive an update whenever a specific path
value changes on the cloud.

The observe request works in a similar way to a get request and much of the
setup is the same. Data is received asynchronously and sent to a handler
function. However, a get request runs only once and is relatively short-lived
(the transaction ends when a payload is passed to the callback)&mdash;this is
not the case for observations.

Once the observe request is made, the callback will receive an initial payload
from the server. After this, the callback remains in place and may be called
repeatedly (or never again), based on whether or not and how often the data
changes on the cloud.

## Includes

```c
#include <golioth/client.h>
#include <golioth/lightdb_state.h>
#include <golioth/payload_utils.h>
```

These headers make the Golioth client and LightDB State API functions, and the
payload helper functions from `golioth/payload_utils.h`, available to your
program.

## Observing a path

The function `golioth_lightdb_observe()` is a non-blocking approach to receiving
data updates from Golioth. When data on your observed path changes, a callback
function runs to supply a payload with the updated data.

### Calling the observe function

```c
int err = golioth_lightdb_observe(client,
                                  "counter",
                                  GOLIOTH_CONTENT_TYPE_JSON,
                                  counter_observe_handler,
                                  NULL);
```

The observe function requests that Golioth send a new payload to the
device whenever data from a given path changes. A user-defined callback function
is supplied so that you may process the received data. An optional callback
argument can be specified, this data will be available in the callback function.

In the above example, we observe the `"counter"` path from Golioth as JSON,
specifying `counter_observe_handler` as the callback function and no callback
argument (`NULL`).

### Callback function

Callback functions need to follow the type specified by the function that
registers them. In this case a `golioth_get_cb_fn` type callback function must
be defined:

```c
static void counter_observe_handler(struct golioth_client *client,
                                    enum golioth_status status,
                                    const struct golioth_coap_rsp_code *coap_rsp_code,
                                    const char *path,
                                    const uint8_t *payload,
                                    size_t payload_size,
                                    void *arg) {
    if ((status != GOLIOTH_OK) || golioth_payload_is_null(payload, payload_size)) {
        // Failed to receive the payload, or there is no data at this path.
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

Data observed with `GOLIOTH_CONTENT_TYPE_JSON` is received in JSON format,
stored in memory at the `payload` pointer location, with `payload_size`
indicating the length of data. Helper functions like `golioth_payload_as_int()`
are used to convert the payload to the desired type, or a JSON parser of your
choosing may be used to unpack the payload.

The same callback may be used by multiple requests. Add logic to react
based on which `path` was observed, and any callback arguments found in
the `arg` variable.

## Observing Complex JSON Objects

The example above requests JSON payloads and may be used to observe complex
objects from Golioth.

## Example application

LightDB Observe API calls are demonstrated in the [LightDB OBSERVE sample for
Zephyr](https://github.com/golioth/golioth-firmware-sdk/tree/main/examples/zephyr/lightdb/observe)
and the [LightDB OBSERVE sample for
ESP-IDF](https://github.com/golioth/golioth-firmware-sdk/tree/main/examples/esp_idf/lightdb/observe).

## Resources

Further documentation of the device SDK is available in the [Golioth Firmware
SDK
Reference](https://firmware-sdk-docs.golioth.io/group__golioth__lightdb__state.html)
(Doxygen).
