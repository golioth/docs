---
title: LightDB Set Request
sidebar_position: 4
---

The [LightDB Set sample
application](https://github.com/golioth/golioth-zephyr-sdk/tree/main/samples/lightdb/set)
demonstrates how to send resources to LightDB State using the Golioth SDK. The
process in non-blocking and after submitting a set request, the Golioth system
client will complete the operation asyncronously.

## Details

### Payload preparation

```c
char sbuf[64]; // Large enough for data plus zero terminator
snprintk(sbuf, sizeof(sbuf), "%d", some_counter_value);
```

We recommend converting the payload data to plain text using `snprintk()` which
prevents buffer overflows. This command uses `printf` substitution can be easily
be used to format JSON objects like `"{\"value\":%d}"`.

### Send payload to Golioth

```c
err = golioth_lightdb_set(client,
                          GOLIOTH_LIGHTDB_PATH("counter"),
                          COAP_CONTENT_FORMAT_TEXT_PLAIN,
                          sbuf, strlen(sbuf));
if (err) {
    LOG_WRN("Failed to update counter: %d", err);
}
```

The `golioth_lightdb_set()` API call takes a data endpoint and format as the first two arguments. A pointer to an array containing the payload data, and the length of that array are the last two parameters.

## Summary

The best example of a set request is found in [the LightDB Set sample code](https://github.com/golioth/golioth-zephyr-sdk/tree/main/samples/lightdb/set).

Further documentation of the device SDK is available in the [Golioth Zephyr SDK Reference](https://zephyr-sdk-docs.golioth.io/) (Doxygen).