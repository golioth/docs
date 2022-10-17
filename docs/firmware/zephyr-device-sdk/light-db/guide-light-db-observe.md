---
title: LightDB Observe Request
sidebar_position: 3
---

The [LightDB Observe sample
application](https://github.com/golioth/golioth-zephyr-sdk/tree/main/samples/lightdb/observe)
demonstrates how to use the Golioth Zephyr SDK to register a LightDB State
endpoint and receive an update whenever data changes on the cloud. The observe
request works in a similar way to the get request and much of the setup is the
same. Data is received asynchronously and sent to a handler function registered
when the observe request is first made.

## Includes

```c
#include <net/golioth/system_client.h>
```

Including the Golioth System Client header file makes the LightDB Observe API
functions available to your program.

## Asynchronous Observe

### Registering a callback

```c
static void golioth_on_connect(struct golioth_client *client)
{
	int err;

	err = golioth_lightdb_observe_cb(client, "counter",
					 GOLIOTH_CONTENT_FORMAT_APP_JSON,
					 counter_handler, NULL);

	if (err) {
		LOG_WRN("failed to observe lightdb path: %d", err);
	}
}
```

Use the `golioth_lightdb_observe_cb()` to register a non-blocking callback that
will execute asynchronously when receiving data updates from the Golioth Cloud.
Parameters include a desired endpoint and the name of the callback function.
The final parameter can be used to pass additional user-defined arguments to
the callback. The Golioth servers will send an update when the callback is
first registered and each time data changes on the cloud. When the response is
received from Golioth, the registered callback will run, allowing you to
validate and react to the data.

:::tip
Register Observe requests whenever connected We recommend that this
callback be registered in the `client->on_connect` callback that runs each time
the device connects to Golioth. This way, the device will receive endpoint data
at every reconnect as well as whenever data changes on the cloud.
:::

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

User-defined arguments are passed to the callback as `rsp.user_data`.

## Summary

The best example of an Observe request is found in [the LightDB Observe sample
code](https://github.com/golioth/golioth-zephyr-sdk/tree/main/samples/lightdb/observe).

* Further documentation of the device SDK is available in the [Golioth Zephyr
  SDK Reference](https://zephyr-sdk-docs.golioth.io/) (Doxygen).
* Blog post: [How to Add Golioth LightDB Observe to any Zephyr application](https://blog.golioth.io/how-to-add-golioth-lightdb-observe-to-any-zephyr-application/)
