---
title: extract-timestamp
---

|   |   |
|---|:---:|
|__Latest Version__| `v1.0.0` |
|__Input Content Type__| `application/json` |
|__Output Content Type__| `application/json` |


The `extract-timestamp` transformer extracts a timestamp from the payload of the
data message and uses it as the timestamp for the data message. When this
transformer is not used, the timestamp for the data message is set to the time
that it arrived at Golioth's servers. Using the `extract-timestamp` transformer
effectively allows for the device to set the timestamp.

Timestamps provided under any of the following keys in a JSON payload, or a
payload that is converted to JSON at an earlier step in a pipeline, will be
honored:

- `t`
- `ts`
- `time`
- `timestamp`

The timestamp field will be removed from the payload after it is set in the
metadata of the event.

### Example Usage

```yaml
    transformer:
      type: extract-timestamp
      version: v1
```

### Example Input

```json
{
  "temp": 32,
  "ts": "2022-12-08T20:45:47+00:00"
}
```

### Example Output

```json
{
  "temp": 32
}
```

