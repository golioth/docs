---
id: goliothctl_logs_listen
title: "goliothctl logs listen"
slug: goliothctl_logs_listen
sidebar_label: goliothctl logs listen
url: /reference/command-line-tools/goliothctl/goliothctl_logs_listen/
hide_title: true
---
## goliothctl logs listen

Listen to log messages:

```bash
goliothctl logs listen [device name] [flags]
```

Listen to logs from all devices of the project or filter them by:

* **`device`**: passing the device name, the device id or the hardware id
* **`log level`**: passing the log level name ("*NONE*", "*INFO*", "*WARN*", "*ERROR*", "*DEBUG*"). Omitting the level flag is like passing `--level NONE`. It will not filter logs by level.
* **`log module`**: passing the module name registered as part of the Zephyr logging specification

There are 2 ways of getting the response:

* formatted (default)

    Example:

    ```log
    [2022-02-22T18:44:54Z] level:DEBUG  module:"wired"  message:"Signal from router"  device_id:"61b0b02e95fd466888055ca4" metadata:"{"wifi-rssi":-45}"
    [2022-02-22T18:45:09Z] level:DEBUG  module:"wired"  message:"Signal from router"  device_id:"61b0b02e95fd466888055ca4" metadata:"{"wifi-rssi":-49}"
    [2022-02-22T18:45:14Z] level:DEBUG  module:"wired"  message:"Signal from router"  device_id:"61b0b02e95fd466888055ca4" metadata:"{"wifi-rssi":-41}"
    ```

* json object selected by passing the `--json` flag

    Example:

    ```json
    {"timestamp":"2022-02-22T18:44:54.805529122Z", "level":"DEBUG", "module":"wired", "message":"Signal from router", "metadata":{"wifi-rssi":-45}, "deviceId":"61b0b02e95fd466888055ca4"}
    {"timestamp":"2022-02-22T18:45:09.124560857Z", "level":"DEBUG", "module":"wired", "message":"Signal from router", "metadata":{"wifi-rssi":-49}, "deviceId":"61b0b02e95fd466888055ca4"}
    {"timestamp":"2022-02-22T18:45:14.438156089Z", "level":"DEBUG", "module":"wired", "message":"Signal from router", "metadata":{"wifi-rssi":-41}, "deviceId":"61b0b02e95fd466888055ca4"}
    ```

### Examples

```bash
# Listen to log messages from all devices of the project
> goliothctl logs listen

# Listen to log messages from a specific device 
> goliothctl logs listen <device name>
> goliothctl logs listen --id <device id> --json
> goliothctl logs listen --hwid <hardware id>

# Listen to log messages of a specific log level
> goliothctl logs listen --level <log level>

# Listen to log messages of a specific module
> goliothctl logs listen --module <module name>

# Combine different filters to obtain more refined logs
> goliothctl logs listen <device name> --level <log level> 
> goliothctl logs listen <device name> --module <module name> --json
> goliothctl logs listen <device name> --level <log level> --module <module name>
> goliothctl logs listen --id <device id> --level <log level> --module <module name>
> goliothctl logs listen --hwid <hardware id> --level <log level> --module <module name> --json
```

### Options

```bash
  -h, --help            help for logs listen
      --hwId string     hardware id
      --id string       device id
      --json            format output as json
      --level string    log level
      --module string   module name
```

### Options inherited from parent commands

```bash
      --apiUrl string      golioth api server url (default "https://api.golioth.io")
  -c, --config string      config file (default is $HOME/.golioth/.goliothctl.yaml)
      --projectId string   golioth project id
```

### SEE ALSO

* [goliothctl logs](/reference/command-line-tools/goliothctl/goliothctl_logs/) - Manage Golioth platform resources and developer workflow.
