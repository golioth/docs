---
id: searching-logs
title: Searching Device Logs
---

import Prerequisites from '/docs/_partials-common/prerequisites-platform-setup.md'

<Prerequisites />

After sending a log entry you can search logs using goliothctl command as presented to show messages on the last 10 minutes:

```
goliothctl logs --interval 10m
[2021-02-19 15:08:05 +0000 UTC] level:INFO module:"hello" message:"Hello logs" metadata:{fields:{key:"network" value:{string_value:"wifi"}}} device_id:<uuid>
```

You can check for more commands to search logs on the [goliothctl logs](/reference/command-line-tools/goliothctl/goliothctl_logs) reference docs.
