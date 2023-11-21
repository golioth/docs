---
id: logging
title: Logging
---

[Logging Device Service](/device-management/logging) definitions over CoAP.

How to use guides:

- [Sending logs](/device-management/logging/sending-logs)

### Interface

| Method   | Description | Path  | Content Format |
| -------- | ----------- | ----- | -------------- |
| POST/PUT | Send logs   | /logs | JSON/CBOR      |

### Parameters and attributes that are known and indexed:

| Attribute             | Description                                                                         | Default |
| --------------------- | ----------------------------------------------------------------------------------- | ------- |
| `time` or `timestamp` | Timestamp of the log entry                                                          | now()   |
| level                 | Log Level - Can be info/warn/error/debug                                            | info    |
| module                | Internal module that is generating logs                                             |         |
| `msg` or `message`    | Free form string with the log message                                               |         |
|                       | Any other attribute sent over this endpoint is bundled into a `metadata` attribute. |         |
