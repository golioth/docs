---
title: LightDB Set Request
sidebar_position: 4
---

import Deprecated from '/docs/_partials-common/deprecation-warning-zephyr-sdk.md'

<Deprecated/>

The [LightDB Set sample
application](https://github.com/golioth/golioth-zephyr-sdk/tree/main/samples/lightdb/set)
demonstrates how to send resources to LightDB State using the Golioth SDK. Data
can be set synchronously, or asynchronously. Synchronous requests block program
flow until a response is received from the Golioth server. Asynchronous requests
register a callback function that runs when a response is received at some point
in the future.

## Includes

```c
#include <net/golioth/system_client.h>
```

Including the Golioth System Client header file makes the LightDB Set API
functions available to your program.

## Payload preparation

```c
char sbuf[11]; // Large enough for data plus NULL terminator
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

## Synchronous Set

```c
int err = golioth_lightdb_set(client, "counter",
              GOLIOTH_CONTENT_FORMAT_APP_JSON,
              sbuf, strlen(sbuf));
```

The simplest way to send LightDB State data to Golioth is using the synchronous
`golioth_lightdb_set()` function. This blocking function will send data to the
given endpoint ("counter" in this example) and wait for a response (or error)
from the server.

## Asynchronous Set

### Registering a callback

```c
err = golioth_lightdb_set_cb(client, "counter",
                 GOLIOTH_CONTENT_FORMAT_APP_JSON,
                 sbuf, strlen(sbuf),
                 counter_set_handler, NULL);
```

The asynchronous `golioth_lightdb_set_cb()` function is a non-blocking approach
to sending LightDB State data to Golioth. The API call registers a callback
function (e.g.: `counter_set_handler`) to handle the server response. The final
parameter of the asynchronous set can be used to pass additional user-defined
arguments to the callback.

Registering a callback is required for asynchronous function calls. When the
response is received from Golioth, the registered callback will run, confirming
that the data was received, or passing back error codes when the set operation
was not successful.

### Callback function

```c
static int counter_set_handler(struct golioth_req_rsp *rsp)
{
	if (rsp->err) {
		LOG_WRN("Failed to set counter: %d", rsp->err);
		return rsp->err;
	}

	LOG_DBG("Counter successfully set");

	return 0;
}
```

The response is passed to the callback function as a `golioth_req_rsp` struct
that includes `err`. It is recommended that callbacks test for an error code to
ensure the expected data was received.

User-defined arguments are passed to the callback as `rsp.user_data`.

## Resources

The best example of a set request is found in [the LightDB Set sample
code](https://github.com/golioth/golioth-zephyr-sdk/tree/main/samples/lightdb/set).

Further documentation of the device SDK is available in the [Golioth Zephyr SDK
Reference](https://zephyr-sdk-docs.golioth.io/) (Doxygen).
