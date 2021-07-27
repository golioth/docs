---
id: esp32-view-logs
title: View Logs
---

After sending a log entry to Golioth you can search logs using `goliothctl logs`. Here is an example showing logs from the last 10 minutes:

```
$ goliothctl logs --interval 10m
[2021-03-23 22:58:31 +0000 UTC] level:DEBUG  module:"golioth_hello"  message:"Log 1: 1"  metadata:{fields:{key:"func"  value:{string_value:"func_1"}}  fields:{key:"index"  value:{number_value:1}}  fields:{key:"uptime"  value:{number_value:1.301121e+09}}}  device_id:"<device-uuid>"
[2021-03-23 22:58:31 +0000 UTC] level:WARN  module:"golioth_hello"  message:"Warn: 1"  metadata:{fields:{key:"index"  value:{number_value:1568}}  fields:{key:"uptime"  value:{number_value:1.301121e+09}}}  device_id:"<device-uuid>"
[2021-03-23 22:58:31 +0000 UTC] level:DEBUG  module:"golioth_hello"  message:"Log 2: 1"  metadata:{fields:{key:"func"  value:{string_value:"func_2"}}  fields:{key:"index"  value:{number_value:1}}  fields:{key:"uptime"  value:{number_value:1.301121e+09}}}  device_id:"<device-uuid>"
[2021-03-23 22:58:31 +0000 UTC] level:DEBUG  module:"golioth_hello"  message:"Debug info! 1"  metadata:{fields:{key:"func"  value:{string_value:"main"}}  fields:{key:"index"  value:{number_value:1}}  fields:{key:"uptime"  value:{number_value:1.301121e+09}}}  device_id:"<device-uuid>"
```

You can also filter the logs by Zephyr module. That could be a Golioth module, a Zephyr subsystem or your application. Here is an example showing the device IP address by filtering by Zephyr's `net_dhcpv4` module.

```
goliothctl logs --interval 1h --module net_dhcpv4
[2021-03-23 22:37:00 +0000 UTC] level:INFO  module:"net_dhcpv4"  message:"Received: 192.168.84.23"  metadata:{fields:{key:"index"  value:{number_value:0}}  fields:{key:"uptime"  value:{number_value:5.079e+06}}}  device_id:"<device-uuid>"
```

You can check for more commands to search logs on the [goliothctl logs](/docs/reference/goliothctl/goliothctl_logs) reference docs.
