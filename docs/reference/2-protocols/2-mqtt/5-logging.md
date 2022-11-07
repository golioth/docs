---
id: logging
title: Logging
---

[Logging Device Service](/cloud/services/logging) definitions over MQTT.

How to use guides:

- [Sending logs](/cloud/services/logging/sending-logs)

### Interface

| Method  | Description | Path | Content Format |
| ------- | ----------- | ---- | -------------- |
| Publish | Send logs   | logs | JSON           |

### Parameters and attributes that are known and indexed:

| Attribute             | Description                                                                         | Default |
| --------------------- | ----------------------------------------------------------------------------------- | ------- |
| `time` or `timestamp` | Timestamp of the log entry                                                          | now()   |
| level                 | Log Level - Can be info/warn/error/debug                                            | info    |
| module                | Internal module that is generating logs                                             |         |
| `msg` or `message`    | Free form string with the log message                                               |         |
|                       | Any other attribute sent over this endpoint is bundled into a `metadata` attribute. |         |
