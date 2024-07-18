---
title: base64
---

|   |   |
|---|:---:|
|__Latest Version__| `v1.0.0` |
|__Input Content Type (Encode)__| Any |
|__Output Content Type (Encode)__| `text/plain` |
|__Input Content Type (Decode)__| Any |
|__Output Content Type (Decode)__| `application/octet-stream` |

The `base64` transformer encodes data to its
[Base64](https://en.wikipedia.org/wiki/Base64) text representation, or decodes
existing Base64 data to its binary representation. Decode will fail if the input
data is not valid Base64.

### Example Usage

Encode:
```yaml
    transformer:
      type: base64
      version: v1
```

Decode:
```yaml
    transformer:
      type: base64
      version: v1
      parameters:
        decode: true
```

### Example Input (Encode)

Path: `/sensor0`

```json
{
  "temp": 55.8324,
  "lat": 51.9977,
  "long": 0.7407
}
```

### Example Output (Encode)

Path: `/sensor0`

```
ewogICJ0ZW1wIjogNTUuODMyNCwKICAibGF0IjogNTEuOTk3NywKICAibG9uZyI6IDAuNzQwNwp9
```

### Example Input (Decode)

Path: `/sensor0`

```
ewogICJ0ZW1wIjogNTUuODMyNCwKICAibGF0IjogNTEuOTk3NywKICAibG9uZyI6IDAuNzQwNwp9
```

### Example Output (Decode)

Path: `/sensor0`

```json
{
  "temp": 55.8324,
  "lat": 51.9977,
  "long": 0.7407
}
```
