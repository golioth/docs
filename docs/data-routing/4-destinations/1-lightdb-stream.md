---
title: lightdb-stream
---

|   |   |
|---|:---:|
|__Latest Version__| `v1.0.0` |
|__Input Content Type__| `application/json` |

:::usage
Sending data to LightDB Stream incurs usage costs after exceeding the free tier.
See [Golioth pricing](https://golioth.io/pricing) for more information.
:::

The LightDB Stream destination sends data to [LightDB
Stream](/application-services/lightdb-stream). Data must have arrived as or been
transformed into JSON in order to be successfully delivered to LightDB Stream.

The data message timestamp will be used as the time for the entry in LightDB
Stream, and the data will be identical to the JSON payload passed to the
destination.

### Example Usage

Because LightDB Stream is hosted by Golioth, no configuration or credentials are
required to deliver data to the service.

```yaml
    destination:
      type: lightdb-stream
      version: v1
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
  "temp": 32
}
```

