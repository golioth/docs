---
title: logs
---

|   |   |
|---|:---:|
|__Latest Version__| `v1.0.0` |
|__Input Content Type__| `application/json` |

:::usage
Sending data to Golioth Logs incurs usage costs after exceeding the free tier.
See [Golioth pricing](https://golioth.io/pricing) for more information.
:::

The Logs destination sends data to [Golioth Logs](/device-management/logging).
Data must have arrived as or been transformed into JSON in order to be delivered
successfully.

The data message timestamp will be used as the time for the entry in Golioth
Logs, and the following JSON fields are supported.

| Attribute | Description                                                            |
|-----------|------------------------------------------------------------------------|
| `level`   | String indicating the log level (`debug`, `info`, `warn`, `error`).    |
| `module`  | String indicating the module from which the log message was generated. |
| `msg`     | String with log message contents.                                      |

Any additional JSON fields will be stored as metadata with the entry in Golioth
Logs.

### Example Usage

Because Golioth Logs is hosted by Golioth, no configuration or credentials are
required to deliver data to the service.

```yaml
    destination:
      type: logs
      version: v1
```

### Example Input

```json
{
  "level": "warn",
  "module": "net_sockets",
  "msg": "failed to send"
}
```

### Example Output

```json
{
  "level": "warn",
  "module": "net_sockets",
  "msg": "failed to send"
}
```
