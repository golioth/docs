---
title: webhook
---

|   |   |
|---|:---:|
|__Latest Version__| `v1.0.0` |
|__Input Content Type__| Any |

:::usage
Sending data to a webhook incurs usage costs after exceeding the free tier. See
[Golioth pricing](https://golioth.io/pricing) for more information.
:::

The `webhook` destination sends data via a `POST` request to the provided URL,
with the supplied headers.

:::info Tip
The `webhook` data destination is not to be confused with the [`webhook`
transformer](/data-routing/transformers/webhook). The data destination delivers
the event to an external location, while the transformer allows for modifying
the content of a data message in a pipeline via an external API call.
:::

### Parameters

|Parameter|Type|Description|Required|
|---|---|---|:---:|
|`url`|`string`| The URL for the external webhook. |✅|
|`headers`| Map (`string`: `string`)| Headers to be included in requests. ||

### Example Secrets

`API_KEY`
```
sup3rs3cr3t
```

### Example Usage

```yaml
    destination:
      type: webhook
      version: v1
      parameters:
        url: https://my-webhook.example.com
        headers:
         x-api-key: $API_KEY
```

### Example Input

```json
{
  "temp": 32
}
```

### Example Output

The following headers will be present on all requests, in addition to any
defined in the parameters.

- `Ce-Source`: ID of device
- `Ce-Subject`: ID of project
- `Ce-Type`: Prefixed path (if path is `/sensor`, the value will be
  `io.golioth.data.v1/.s/sensor`)
- `Content-Type`: the content type of the data message payload

```json
{
  "temp": 32
}
```
