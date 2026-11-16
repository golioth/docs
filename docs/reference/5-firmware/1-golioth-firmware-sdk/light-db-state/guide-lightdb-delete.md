---
title: LightDB Delete
sidebar_position: 1
---

Use a LightDB delete function to delete a specific path on the cloud. After this
operation, the path and all of its child nodes will cease to exist.

## Includes

```c
#include <golioth/client.h>
#include <golioth/lightdb_state.h>
```

These headers make the Golioth client and LightDB State API functions
available to your program.

## Deleting a path

```c
int err = golioth_lightdb_delete(client,
                                 "counter",
                                 counter_delete_handler,
                                 NULL);
```

The delete function does not block. The request is enqueued by the Golioth
Client and the function returns immediately; its return value only reports
whether the request was queued. If a callback function is supplied, it will be
called by the Golioth Client when the delete operation is completed. An
optional callback argument can be specified, this data will be available in the
callback function. The server reports success even if the path does not exist.

In the above example, we tell Golioth to delete the `"counter"` path, with
`counter_delete_handler` as the callback function and no callback argument
(`NULL`).

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
static void counter_delete_handler(struct golioth_client *client,
                                   enum golioth_status status,
                                   const struct golioth_coap_rsp_code *coap_rsp_code,
                                   const char *path,
                                   void *arg) {
    if (status != GOLIOTH_OK) {
        // The delete operation failed.
        return;
    }

    // The delete operation was successful!
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
based on which `path` was being deleted, and any callback arguments found in
the `arg` variable.

## Example in the Golioth Basics Application

A LightDB delete API call is demonstrated [in the Golioth Basics
example
application](https://github.com/golioth/golioth-firmware-sdk/blob/develop/examples/common/golioth_basics.c).
It can be easily located by searching for `golioth_lightdb_delete`.

## Resources

Further documentation of the device SDK is available in the [Golioth Firmware
SDK
Reference](https://firmware-sdk-docs.golioth.io/group__golioth__lightdb__state.html)
(Doxygen).
