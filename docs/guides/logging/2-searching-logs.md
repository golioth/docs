---
id: searching-logs
title: Searching Device Logs
---

### Prerequisites

- `goliothctl` CLI installed
- Authenticated with Golioth - see [Authentication](../getting-started/authentication)
- Have a project - see [Create a Project](../getting-started/create-project)
- Have a provisioned device and credential for it - see [Authorizing Devices](../getting-started/authorize-devices)

After sending a log entry you can search logs using goliothctl command as presented to show messages on the last 10 minutes:

```
goliothctl logs --interval 10m
[2021-02-19 15:08:05 +0000 UTC] level:INFO module:"hello" message:"Hello logs" metadata:{fields:{key:"network" value:{string_value:"wifi"}}} device_id:<uuid>
```

You can check for more commands to search logs on the [goliothctl logs](/docs/reference/goliothctl/goliothctl_logs) reference docs.
