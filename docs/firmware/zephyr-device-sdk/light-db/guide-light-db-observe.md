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

## Details

### Preparation

```c
#include <net/coap.h>
static struct coap_reply coap_replies[1];
```

The Zephyr CoAP library provides a set of helper functions. Creating an array of
`coap_reply` structs is necessary for registering the callback and pointing to
the data when it arrives from the Golioth servers. Each Observe request uses one
unique `coap_reply` stored in this array.

### Callback function

```c
static int on_update(const struct coap_packet *response,
                     struct coap_reply *reply,
                     const struct sockaddr *from)
{
    /* Process the received message */
}
```

A callback function is necessary to handle the update received when data changes
on the Golioth servers. Multiple Observe requests each use different callbacks, and these
functions may be arbitrarily named.

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

### Register the observation in `golioth_on_connect()`

```c
static void golioth_on_connect(struct golioth_client *client)
{
    struct coap_reply *observe_reply;
    int err;

    coap_replies_clear(coap_replies, ARRAY_SIZE(coap_replies));

    observe_reply = coap_reply_next_unused(coap_replies,
                           ARRAY_SIZE(coap_replies));

    err = golioth_lightdb_observe(client,
                                  GOLIOTH_LIGHTDB_PATH("counter"),
                                  COAP_CONTENT_FORMAT_TEXT_PLAIN,
                                  observe_reply, on_update);

    if (err) {
        LOG_WRN("failed to observe lightdb path: %d", err);
    }
}
```

When the application first connects to Golioth this function will clear the
`coap_replies` array to ensure that we begin with a set of empty `coap_reply`
structs. The `golioth_lightdb_observe()` API call registers the `counter` as an
observed data endpoint, passing a `coap_reply` object and a callback function to
execute when updated data is received from Golioth. The
`coap_reply_next_unused()` function ensures that the `coap_reply` struct being
passed is not already in use by another request.

To register observations at multiple endpoints it is necessary to increase the
size of the `coap_replies` array to match. For each endpoint you want to
observe, call `coap_reply_next_unused()` to locate the next available struct and
pass it as an argument for `golioth_lightdb_observe()` call along with the
desired callback function.

### Setup in `main()`

```c
client->on_connect = golioth_on_connect;
client->on_message = golioth_on_message;
golioth_system_client_start();
```

The setup code in the `main()` function registers `golioth_on_connect()` to be
called when a connection is first established and `golioth_on_message()` to be called
whenever a message is received. These will take care of registering the Observe
request(s) and routing incoming messages from Golioth to the proper callback function(s).
Finally, the Golioth system client is started.

## Summary

The best example of an Observe request is found in [the LightDB Observe sample
code](https://github.com/golioth/golioth-zephyr-sdk/tree/main/samples/lightdb/observe).

* Further documentation of the device SDK is available in the [Golioth Zephyr
  SDK Reference](https://zephyr-sdk-docs.golioth.io/) (Doxygen).
* Blog post: [How to Add Golioth LightDB Observe to any Zephyr application](https://blog.golioth.io/how-to-add-golioth-lightdb-observe-to-any-zephyr-application/)
