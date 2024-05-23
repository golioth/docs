---
title: inject-metadata
---

|   |   |
|---|:---:|
|__Latest Version__| `v1.0.0` |
|__Input Content Type__| `application/json` |
|__Output Content Type__| `application/json` |

The `inject-metadata` transformer injects metadata, namely the device ID, the
project ID, and the timestamp, into the data message payload, and nests the
originaly payload under a top-level `data` key. This information is available in
the message metadata when it is delivered to external destinations, so it is
typically wasteful to also include it in the payload. However, there are some
cases in which it may be desirable to access metadata in the payload.

### Example Usage

```yaml
    transformer:
      type: inject-metadata
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
  "data": {
    "temp": 32
  },
  "device_id": "12345678987654321",
  "project_id": "my-first-project",
  "timestamp": {
    "nanos": 346519550,
    "seconds": 1647624308
  }
}
```
