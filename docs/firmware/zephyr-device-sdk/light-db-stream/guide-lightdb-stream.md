---
title: LightDB Stream Request
sidebar_position: 2
---

The LightDB Stream sample contains many of the same elements as the other LightDB samples. The primary difference between LightDB State and LightDB Stream is the persistence of data. LightDB State is useful for applications of state management. With LightDB Stream, timestamped datapoints can be uploaded using the LightDB Stream service to accumulate time-series databases. Check out the [Cloud](/cloud) section of the documentation for information regarding accessing the accumulated data.

## Includes

```c
#include <net/golioth/system_client.h>
```

Including the Golioth System Client header file makes the LightDB Get API
functions available to your program.

## Payload preparation

```c
char sbuf[11]; // Large enough for data plus zero terminator
snprintk(sbuf, sizeof(sbuf), "%d", some_counter_value);
```

We recommend converting the payload data to text using `snprintk()` which
prevents buffer overflows. This command uses `printf` substitution to easily
format JSON objects like `"{\"value\":%d}"`.

:::tip Escape Quotes for Strings
Be sure to include escaped quotes around strings that are sent to LightDB
state.

For instance, integers are simply formatted in quotes `"42"`, but strings must
also include escaped quotes to indicate to the server that the data is a string
value: `"\"Golioth\""`.
:::

## Synchronous LightDB Stream

```c
int err = golioth_stream_push(client, "temp",
			      GOLIOTH_CONTENT_FORMAT_APP_JSON,
			      sbuf, strlen(sbuf));
```

The simplest way to send LightDB Stream data to Golioth is using the synchronous
`golioth_stream_push()` function. This blocking function will send data to a
given endpoint ("temp" in this example) and wait for a response (or error) from
the server.

## Asynchronous LightDB Stream

### Registering a callback

```c
int err = golioth_stream_push_cb(client, "temp",
				 GOLIOTH_CONTENT_FORMAT_APP_JSON,
				 sbuf, strlen(sbuf),
				 temperature_push_handler, NULL);
```

The asynchronous `golioth_stream_push_cb()` function is a non-blocking approach
to sending LightDB Stream data to Golioth. The API call registers a callback
function (e.g.: `temperature_push_handler`) to handle the server response. The
final parameter can be used to pass additional user-defined arguments to the
callback.

Registering a callback is required for asynchronous function calls. When the
response is received from Golioth, the registered callback will run, confirming
that the data was received, or passing back error codes when the set operation
was not successful.

### Callback function

```c
static int temperature_push_handler(struct golioth_req_rsp *rsp)
{
	if (rsp->err) {
		LOG_WRN("Failed to push temperature: %d", rsp->err);
		return rsp->err;
	}

	LOG_DBG("Temperature successfully pushed");

	return 0;
}
```

The response is passed to the callback function as a `golioth_req_rsp` struct
that includes `err`. It is recommended that callbacks test for an error code to
ensure the expected data was received.

User-defined arguments are passed to the callback as `rsp.user_data`.

## Resources

The best example of a LightDB Stream request is found in [the LightDB Stream
sample
code](https://github.com/golioth/golioth-zephyr-sdk/tree/main/samples/lightdb_stream).

Further documentation of the device SDK is available in the [Golioth Zephyr SDK
Reference](https://zephyr-sdk-docs.golioth.io/) (Doxygen).
