---
title: LightDB Delete
sidebar_position: 1
---

Use a LightDB delete function to delete a specific path on the cloud. After this
operation, the path and all of its child nodes will cease to exist.

## Includes

```c
#include "golioth.h"
```

Including the `golioth.h` header file makes the Golioth API functions available
to your program.

## Synchronous Delete

```c
int err = golioth_lightdb_delete_sync(client, "counter", 1);
```

The simplest way to delete LightDB State data from Golioth is using a synchronous
delete function. This blocking function will delete the given path and wait
for a response (or error) from the server. If a response is not received within
the given timeout, a `GOLIOTH_ERR_TIMEOUT` error code will be returned.

In the above example, we tell Golioth to delete the `"counter"` path, with a `1`
second timeout.

## Asynchronous Delete

The asynchronous function is a non-blocking approach to deleting a LightDB State
path from Golioth. When the task completes, an optional callback function may be
run to process the result of the async operation.

### Calling the async delete function

```c
int err = golioth_lightdb_delete_async(client,
                                       "counter",
                                       counter_delete_handler,
                                       NULL);
```

The async delete function deletes a given path, but the request is enqueued by
the Golioth Client so that program execution is not blocked. If a callback
function is supplied, it will be called by the Golioth Client when the delete
operation is completed. An optional callback argument can be specified, this
data will be available in the callback function.

In the above example, we tell Golioth to delete the `"counter"` path, with
`counter_delete_handler` as the callback function and no callback argument
(`NULL`).

### Callback function

Callback functions need to follow the type specified by the function that
registers them. In this case a `golioth_set_cb_fn` type callback
function must be defined:

```c
static void counter_delete_handler(golioth_client_t client,
                                   const golioth_response_t* response,
                                   const char* path,
                                   void* arg) {
    if (response->status != GOLIOTH_OK) {
        // The delete operation failed.
        return;
    }

    // The delete operation was successful!
    return;
}
```

The response is passed to the callback function as a `golioth_response_t` struct
that includes `status`. It is recommended that callbacks test for the
`GOLIOTH_OK` status which indicates a successful operation.

The same callback may be used by multiple async functions. Add logic to react
based on which `path` was being deleted, and any callback arguments found in
the `arg` variable.

## Example in the Golioth Basics Application

An asynchronous LightDB delete API call is demonstrated [in the Golioth Basics
example
application](https://github.com/golioth/golioth-firmware-sdk/blob/develop/examples/common/golioth_basics.c).
It can be easily located by searching for `golioth_lightdb_delete`.

## Resources

Further documentation of the device SDK is available in the [Golioth Firmware
SDK
Reference](https://firmware-sdk-docs.golioth.io/group__golioth__lightdb__state.html)
(Doxygen).
