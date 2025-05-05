---
title: lightdb-state
---

|   |   |
|---|:---:|
|__Latest Version__| `v1.0.0` |
|__Input Content Type__| `application/json` |

:::usage
Sending data to LightDB State incurs usage costs after exceeding the free tier.
See [Golioth pricing](https://golioth.io/pricing) for more information.
:::

The LightDB State destination sends data to [LightDB
State](/application-services/lightdb-state). Data must arrive as or be
transformed into JSON in order to be successfully delivered to LightDB State.

If a `path` is specified, it will be used to nest the message data in the
device's LightDB State JSON document. If the `path` parameter is omitted, the
stream path will be used for nesting.

### Parameters

|Parameter|Type|Description|Required|
|---|---|---|:---:|
|`path`|`string`| A fixed path to nest the JSON object. | |

### Example Usage

Because LightDB State is hosted by Golioth, no credentials are required to
deliver data to the service.

```yaml
    destination:
      type: lightdb-state
      version: v1
      parameters:
        path: /latest/stream
```

### Example Input

```json
{
  "temp": 32
}
```

### Example Output

```json
{
  "latest": {
    "stream": {
      "temp": 32
    }
  }
}
```
