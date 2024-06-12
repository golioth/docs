---
id: goliothctl_logs_listen
title: "goliothctl logs listen"
slug: goliothctl_logs_listen
sidebar_label: goliothctl logs listen
url: /reference/command-line-tools/goliothctl/goliothctl_logs_listen/
hide_title: true
---
## goliothctl logs listen

Listen to logs messages

### Synopsis

Logs stores logs messages from the device. You can listen to logs messages from all devices of the project or filter them by:
  * device: passing the device name id, the device id or the hardware id
  * log level: passing the log level name ("NONE", "INFO", "WARN", "ERROR", "DEBUG"). Not passing the level flag is like passing --level NONE. It will not filter logs by level.
  * log module: passing the module name registered as part of the Zephyr logging specification


```
goliothctl logs listen [device name] [flags]
```

### Examples

```
# Listen to logs messages from all devices of the project
> goliothctl logs listen

# Listen to logs messages from a specific device
> goliothctl logs listen <device name>
> goliothctl logs listen --id <device id>
> goliothctl logs listen --hwid <hardware id>

# Listen to logs messages of a specific log level
> goliothctl logs listen --level <log level>

# Listen to logs messages of a specific module
> goliothctl logs listen --module <module name>

# Combine different filters to obtain more refined logs
> goliothctl logs listen <device name> --level <log level>
> goliothctl logs listen <device name> --module <module name>
> goliothctl logs listen <device name> --level <log level> --module <module name>
> goliothctl logs listen --id <device id> --level <log level> --module <module name>
> goliothctl logs listen --hwid <hardware id> --level <log level> --module <module name>

```

### Options

```
  -h, --help            help for listen
      --hwId string     hardware id
      --id string       device id
      --json            format output as json
      --level string    log level
      --module string   module name
```

### Options inherited from parent commands

```
      --apiUrl string      golioth api server url (default "https://api.golioth.io")
  -c, --config string      config file (default is $HOME/.golioth/.goliothctl.yaml)
      --projectId string   golioth project id
```

### SEE ALSO

* [goliothctl logs](/reference/command-line-tools/goliothctl/goliothctl_logs/)	 - Show device logs (from the last 4h by default)

