---
title: LightDB Get Request
sidebar_position: 2
---

The [LightDB Get sample
application](https://github.com/golioth/golioth-zephyr-sdk/tree/main/samples/lightdb/get)
demonstrates how to retrieve resources from LightDB State using the Golioth
SDK. Data can be retrieved synchronously, or asynchronously. Synchronous
requests block program flow until a response is response is received from the
Golioth server. Asynchronous requests register a callback function that runs
when a response is received at some point in the future.

## Includes

```c
#include <net/golioth/system_client.h>
```

Including the Golioth System Client header file makes the LightDB Get API
functions available to your program.

## Synchronous Get

```c
uint8_t value[128];
size_t len = sizeof(value);
int err;

err = golioth_lightdb_get(client, "counter",
				  GOLIOTH_CONTENT_FORMAT_APP_JSON,
				  value, &len);
```

The simplest way to get LightDB State data from Golioth is using the
synchronous `golioth_lightdb_get()` function. This blocking function will
request data from the given endpoint ("counter" in this example).

The returned value (or JSON object) is stored in a character array. A pointer
to this array and the length of the array are passed as the final two
parameters of the synchronous get function.

When a request is received, the variable pointed to by `&len` will be changed
to indicate the length of the response.

## Asynchronous Get

### Registering a callback

```c
int err;

err = golioth_lightdb_get_cb(client, "counter",
                 GOLIOTH_CONTENT_FORMAT_APP_JSON,
                 counter_handler, NULL);
```

The asynchronous `golioth_lightdb_get_cb()` function is a non-blocking approach
to requesting LightDB State data from Golioth. The API call still passes the
desired endpoint, but specifies a callback function instead of a character
array. The final parameter of the asynchronous get can be used to pass
additional user-defined arguments to the callback.

Registering a callback is required for asynchronous function calls. When the
response is received from Golioth, the registered callback will run, allowing
you to validate and react to the data.

### Callback function

```c
static int counter_handler(struct golioth_req_rsp *rsp)
{
	if (rsp->err) {
		LOG_ERR("Failed to receive counter value: %d", rsp->err);
		return rsp->err;
	}

	LOG_HEXDUMP_INF(rsp->data, rsp->len, "Counter (async)");

	return 0;
}
```

The response is passed to the callback function as a `golioth_req_rsp` struct
that includes `err`, `data`, and `len`. It is recommended that callbacks test
for an error code to ensure the expected data was received.

User-defined arguments are passed to the callback as `rsp->user_data`.

## Resources

The best example of a Get request is found in [the LightDB Get sample
code](https://github.com/golioth/golioth-zephyr-sdk/tree/main/samples/lightdb/get).

Further documentation of the device SDK is available in the [Golioth Zephyr SDK
Reference](https://zephyr-sdk-docs.golioth.io/) (Doxygen).
