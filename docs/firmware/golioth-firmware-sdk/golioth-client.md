---
title: Golioth Client
sidebar_position: 1.5
---

The Golioth Client runs in its own thread and handles all communications with
the Golioth Cloud. Your program must instantiate and start a Golioth Client,
registering callbacks as needed.

## Includes

```c
#include "golioth.h"
```

Including the `golioth.h` header file makes the Golioth API functions available
to your program.

## Set up the Golioth Client

When creating a Golioth Client, you must pass your authentication information as
a configuration struct. Here is an example of a configuration that uses PSK
authentication:

```c
const char* golioth_psk_id = "device@project";
const char* golioth_psk = "supersecret";

struct golioth_client_config client_config = {
    .credentials = {
        .auth_type = GOLIOTH_TLS_AUTH_TYPE_PSK,
        .psk = {
            .psk_id = golioth_psk_id,
            .psk_id_len = strlen(golioth_psk_id),
            .psk = golioth_psk,
            .psk_len = strlen(golioth_psk),
        }
    }
};
```

## Creating the Golioth Client

Your program must create the Golioth Client by calling the
`golioth_client_create()` function and passing the configuration as the only
parameter.

```c
int main(void) {
    client = golioth_client_create(&client_config);
```

## Registering a Callback Function

It is often useful to run a function each time the Golioth Client connects (or
reconnects) to the Golioth Cloud. The SDK provides a function for registering a
callback for client events:

```c
golioth_client_register_event_callback(client, on_client_event, NULL);
```

This registers an `on_client_event()` callback that runs each time the client
connects or disconnects with Golioth. Here is an example callback that uses the
Golioth logging system to print a log message following a connection event:

```c
/* Define a tag to use for the logging system */
LOG_TAG_DEFINE(golioth_basics);

/* Callback registered using previous code example */
static void on_client_event(golioth_client_t client, golioth_client_event_t event, void* arg) {
    bool is_connected = (event == GOLIOTH_CLIENT_EVENT_CONNECTED);
    GLTH_LOGI(TAG, "Golioth client %s", is_connected ? "connected" : "disconnected");
}
```

:::tip Using a Semaphore to wait for a connection

It is a common pattern to use a semaphore to indicate when a connection is
established. Program flow can wait for this semaphore, which should be given in
the event callback when a connection to Golioth is successfully established.

:::

## Summary

* The best demonstration of working with the Golioth Client is found in the
  `examples/<your_OS>/golioth_basics` example application. Navigate to [the
  examples
  folder](https://github.com/golioth/golioth-firmware-sdk/tree/main/examples) to
  locate it.
* Further documentation for this SDK is available in the [Golioth Firmware SDK
  Reference](https://firmware-sdk-docs.golioth.io) (Doxygen).
