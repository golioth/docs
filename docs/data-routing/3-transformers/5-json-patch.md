---
title: json-patch
---

|   |   |
|---|:---:|
|__Latest Version__| `v1.0.0` |
|__Input Content Type__| `application/json` |
|__Output Content Type__| `application/json` |

The `json-patch` transformer applies the provided patch to the data message
payload. The patch must be a valid [RFC
6902](https://datatracker.ietf.org/doc/html/rfc6902/) JSON patch document.
Supported operations include:

- `add`
- `remove`
- `replace`
- `copy`
- `move`
- `test`

Patches that specify a `remove` operation on non-existent fields will be applied
successfully with the `remove` operation ignored. Patches that specify an `add`
operation on a non-existent nested field will have the nested object structure
automatically injected into the payload.

### Example Usage

```yaml
    transformer:
      type: json-patch
      version: v1
      parameters:
        patch: |
          [
            { "op": "replace", "path": "/temp", "value": 23.6847 },
            { "op": "add", "path": "/hello", "value": ["world"] },
            { "op": "remove", "path": "/lat" }
          ]
```

### Example Input

Path: `/sensor0`

```json
{
  "temp": 55.8324,
  "lat": 51.9977,
  "long": 0.7407
}
```

### Example Output

Path: `/sensor0`

```json
{
  "temp": 23.6847,
  "long": 0.7407,
  "hello": ["world"]
}
```
