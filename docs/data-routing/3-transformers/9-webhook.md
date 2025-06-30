---
title: webhook
---

|   |   |
|---|:---:|
|__Latest Version__| `v1.0.0` |
|__Input Content Type__| Any |
|__Output Content Type__| Any |

:::usage
Sending data to a webhook for transformation incurs usage costs after exceeding
the free tier. See [Golioth pricing](https://golioth.io/pricing) for more
information.
:::

The `webhook` transformer invokes an external API endpoint and, on success,
replaces the data message content and content type with that of the response. If
both the input and output are `application/json` data, the `embed` parameter can
be used to preserve the original data, returning a merged JSON object where the
input data is embedded under the top-level `input` key, and the output data is
returned under the top-level `output` key.

:::info Tip
The `webhook` transformer is not to be confused with the [`webhook` data
destination](/data-routing/destinations/webhook). The transformer allows for
modifying the content of a data message in a pipeline via an external API call,
while the data destination delivers the event to an external location.
:::

### Parameters

|Parameter|Type|Description|Required|
|---|---|---|:---:|
|`url`|`string`| The URL for the external webhook. |✅|
|`headers`| Map (`string`: `string`)| Headers to be included in requests. ||
|`embed`| `boolean` | Preserve input data in resulting JSON object. ||

### Example Secrets

`API_KEY`
```
sup3rs3cr3t
```

### Example Usage

```yaml
    transformer:
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

The following headers will be present on all requests to external webhooks, in
addition to any defined in the parameters.

- `Ce-Source`: ID of device
- `Ce-Subject`: ID of project
- `Ce-Type`: Prefixed path (if path is `/sensor`, the value will be
  `io.golioth.data.v1/.s/sensor`)
- `Content-Type`: the content type of the data message payload

### Example Output

In this example, the webhook converts Celsius temperature readings to
Fahrenheit.

```json
{
  "temp": 89.6
}
```

### Example Usage with `embed: true`

```yaml
    transformer:
      type: webhook
      version: v1
      parameters:
        url: https://my-webhook.example.com
        headers:
         x-api-key: $API_KEY
        embed: true
```

### Example Input with `embed: true`

```json
{
  "temp": 32
}
```

### Example Output with `embed: true`

In this example, the webhook converts Celsius temperature readings to
Fahrenheit, but preserves both values in the output.

```json
{
  "input": {
    "temp": 32
  },
  "output": {
    "temp": 89.6
  }
}
```
