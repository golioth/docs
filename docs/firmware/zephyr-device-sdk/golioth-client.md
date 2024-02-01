---
title: Golioth Client
sidebar_position: 1.5
---

import Deprecated from '/docs/_partials-common/deprecation-warning-zephyr-sdk.md'

<Deprecated/>

The Golioth Client runs in its own thread and handles all communications with
the Golioth Cloud. Your program must instantiate and start a Golioth Client,
registering callbacks as needed.

## Includes

```c
#include <net/golioth/system_client.h>
```

Including the Golioth System Client header file makes the Golioth API functions
available to your program.

## Set up the Golioth Client

```c
static struct golioth_client *client = GOLIOTH_SYSTEM_CLIENT_GET();

static K_SEM_DEFINE(connected, 0, 1);
```

Declare a pointer to a `golioth_client` struct which will be passed to each API
function and instantiate it using the `GOLIOTH_SYSTEM_CLIENT_GET()` macro.

Here we also define an optional semaphore used to wait for a connection to be
established before continuing program flow.

## Starting the Golioth Client

Your program must start the Golioth Client by calling the
`golioth_system_client_start()` function. The `golioth_client` struct
created above is a singleton and does not need to be passed to the client start
function.

```c
void main(void)
{
	client->on_connect = golioth_on_connect;
	golioth_system_client_start();

	k_sem_take(&connected, K_FOREVER);

	while(true) {
		;;
	}
}
```

The optional `on_connect` callback is registered before starting the client.

As noted before, this example uses an optional semaphore that will block program
execution until a connection with Golioth is established and the callback
function increments the semaphore.

## Callback function

It is often useful to run a function each time the Golioth Client connects
(or reconnects) to the Golioth Cloud.

```c
static void golioth_on_connect(struct golioth_client *client)
{
	k_sem_give(&connected);
}
```

For this example we give an optional semaphore when a connection is established.
Program flow can wait for this semaphore to indicate a connection to Golioth was
successfully established.

:::tip Register other callbacks when the client connects
In the [LightDB Observe](./light-db/guide-light-db-observe.md) part of this
guide you'll see the Observe callback is registered inside of this
`golioth_on_connect` callback. This way, "observed" endpoints will be updated
each time a connection is established.
:::
## Summary

The best example of working with the Golioth Client is found in [the Hello sample
code](https://github.com/golioth/golioth-zephyr-sdk/tree/main/samples/hello).

* Further documentation of the device SDK is available in the [Golioth Zephyr
  SDK Reference](https://zephyr-sdk-docs.golioth.io/) (Doxygen).
