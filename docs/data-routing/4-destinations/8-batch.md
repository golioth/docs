---
title: batch
---

|   |   |
|---|:---:|
|__Latest Version__| `v1.0.0` |
|__Input Content Type__| `application/json` |

`batch` is a special destination that splits a single data message into multiple
when the input payload is a JSON array. A new message will be delivered to
pipelines for each item in the array.

### Example Usage

No parameters are required for the `batch` destination.

```yaml
    destination:
      type: batch
      version: v1
```

### Example Input

```json
[
  {
    "ts": 1626362266059,
    "latitude": 37.75,
    "longitude": -122.57,
    "speed": 5
  },
  {
    "ts": 1626362276059,
    "latitude": 38.75,
    "longitude": -123.57,
    "speed": 10
  }
]
```

### Example Output

```json
{
  "ts": 1626362266059,
  "latitude": 37.75,
  "longitude": -122.57,
  "speed": 5
}
```

```json
{
  "ts": 1626362276059,
  "latitude": 38.75,
  "longitude": -123.57,
  "speed": 10
}
```

