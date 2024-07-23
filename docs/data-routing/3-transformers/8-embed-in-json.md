---
title: embed-in-json
---

|   |   |
|---|:---:|
|__Latest Version__| `v1.0.0` |
|__Input Content Type__| Any |
|__Output Content Type__| `application/json` |

The `embed-in-json` transformer embeds data as a UTF-8 JSON string value for the
specifed string key in a new JSON object.

:::info Tip
When dealing with binary data, it may be helpful to use the [`base64`
transformer](/data-routing/transformers/base64) to encode the data as text prior
to embedding. The [`json-patch`
transformer](/data-routing/transformers/json-patch) may be used to modify the
JSON object after embedding.
:::


### Parameters

|Parameter|Type|Description|Required|
|---|---|---|:---:|
|`key`|`string`| The key that input data should be assigned to. |✅|

### Example Usage

```yaml
    transformer:
      type: embed-in-json
      version: v1
      parameters:
        key: original
```

### Example Input

```
hello, world!
```

### Example Output

```json
{
  "original": "hello, world!"
}
```
