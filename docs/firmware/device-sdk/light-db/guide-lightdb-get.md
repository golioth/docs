---
title: LightDB Get Request
sidebar_position: 2
---
The [LightDB Get sample
application](https://github.com/golioth/golioth-zephyr-sdk/tree/main/samples/lightdb/get)
demonstrates how to retrieve resources from LightDB State using the Golioth SDK.
Data is retrieved asynchronously and sent to a handler function registered when
the get request is first made.

## Details

### Preparation

```c
#include <net/coap.h>
static struct coap_reply coap_replies[1];
```

The Zephyr CoAP library provides a set of helper functions. Creating an array of
`coap_reply` structs is necessary for registering the callback and pointing to
the data when it arrives from the Golioth servers.

### Callback function

```c
static int reply_callback(const struct coap_packet *response,
                          struct coap_reply *reply,
                          const struct sockaddr *from)
{
    /* Process the received message */
}
```

A callback function is necessary to handle the reply received from the get
request. Get requests can use different callbacks, and these functions may be
arbitrarily named.

### Route data to callback using `on_message`

```c
static void golioth_on_message(struct golioth_client *client,
                               struct coap_packet *rx)
{
    coap_response_received(rx, NULL, coap_replies,
                           ARRAY_SIZE(coap_replies));
}
```

The `coap_response_received()` function must be called for all messages received.
It iterates through the `coap_replies` array to properly associate received data
with callback functions.

### Setup in `main()`

```c
coap_replies_clear(coap_replies, ARRAY_SIZE(coap_replies));
client->on_message = golioth_on_message;
golioth_system_client_start();
```

Setup code in the `main()` function clears the `coap_replies` array to ensure
that we begin with a set of empty `coap_reply` structs. The `golioth_on_message`
is then registered to be called whenever a message is received. Finally, the
Golioth system client is started.

### Call `golioth_lightdb_get()` to retrieve data

```c
struct coap_reply *reply;
reply = coap_reply_next_unused(coap_replies,
                    ARRAY_SIZE(coap_replies));
err = golioth_lightdb_get(client,
                          GOLIOTH_LIGHTDB_PATH("counter"),
                          COAP_CONTENT_FORMAT_APP_JSON,
                          reply, reply_callback);
if (err) {
    LOG_WRN("failed to get data from LightDB: %d", err);
}
```

The `golioth_lightdb_get()` API call requests data from the `counter` endpoint,
passing a `coap_reply` object and a callback function to execute when the reply
is received from Golioth. The `coap_reply_next_unused()` function ensures that
the `coap_reply` struct being passed is not already in use by another request.

## Summary

The best example of a Get request is found in [the LightDB Get sample
code](https://github.com/golioth/golioth-zephyr-sdk/tree/main/samples/lightdb/get).
Please note the use of a mutex for protecting the `coap_reply` objects as the
array is a resource shared between the Golioth client thread and the main
application thread.

Further documentation of the device SDK is available in the [Golioth Zephyr SDK
Reference](https://zephyr-sdk-docs.golioth.io/) (Doxygen).
