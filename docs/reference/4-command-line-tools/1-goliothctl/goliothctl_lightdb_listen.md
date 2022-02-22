---
id: goliothctl_lightdb_listen
title: "goliothctl lightdb listen"
slug: goliothctl_lightdb_listen
sidebar_label: goliothctl lightdb listen
url: /reference/command-line-tools/goliothctl/goliothctl_lightdb_listen/
hide_title: true
---
## goliothctl lightdb listen

Listen to changes on the device state at some specific path or root path.
Use the device name, device id or hardware id of the device to specify the device to be listened.

```
goliothctl lightdb listen [device name] <path>
goliothctl lightdb listen [flags] <path>
```

### Examples

```
# Listen to all lightdb messages from a device
> goliothctl lightdb listen <device name>
> goliothctl lightdb listen --id <device id>
> goliothctl lightdb listen --hwid <hardware id>

# Listen to lightdb messages at a path from a device
> goliothctl lightdb listen <device name> <path>
> goliothctl lightdb listen --id <device id> <path>
> goliothctl lightdb listen --hwid <hardware id> <path>
```

### Options

```
  -h, --help               help for delete
      --hwId stringArray   hardware id
      --id string          device id
```

### Options inherited from parent commands

```
      --apiUrl string      golioth api server url (default "https://api.golioth.io")
  -c, --config string      config file (default is $HOME/.golioth/.goliothctl.yaml)
      --projectId string   golioth project id
```

### SEE ALSO

* [goliothctl lightdb](/reference/command-line-tools/goliothctl/goliothctl_lightdb/)	 - Access data on Light DB

