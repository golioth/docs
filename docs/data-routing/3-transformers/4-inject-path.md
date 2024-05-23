---
title: inject-path
---

|   |   |
|---|:---:|
|__Latest Version__| `v1.0.0` |
|__Input Content Type__| `application/json` |
|__Output Content Type__| `application/json` |

The `inject-path` transformer nests the data message payload as a child object
of the path of the data message. If the path has multiple segments, each will be
represented as a nested layer. The path will remain unchanged.

### Example Usage

```yaml
    transformer:
      type: inject-path
      version: v1
```

### Example Input

Path: `/sensor0/temp`

```json
{
  "celsius": 32
}
```

### Example Output

Path: `/sensor0/temp`

```json
{
  "sensor0": {
    "temp": {
      "celsius": 32
    }
  }
}
```
