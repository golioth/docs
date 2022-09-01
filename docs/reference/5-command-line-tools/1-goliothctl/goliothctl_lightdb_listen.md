---
id: goliothctl_lightdb_listen
title: "goliothctl lightdb listen"
slug: goliothctl_lightdb_listen
sidebar_label: goliothctl lightdb listen
url: /reference/command-line-tools/goliothctl/goliothctl_lightdb_listen/
hide_title: true
---
## goliothctl lightdb listen

Listen for device state changes on the LightDB root path or a specific path.
Use the device name, device id or hardware id of the device to select the device.

```bash
goliothctl lightdb listen [device name] <path>
goliothctl lightdb listen [flags] <path>
```

### Examples

```bash
# Listen to all lightdb messages from a device
> goliothctl lightdb listen <device name>
> goliothctl lightdb listen --id <device id>
> goliothctl lightdb listen --hwid <hardware id>

# Listen to a specific path for lightdb messages from a device
> goliothctl lightdb listen <device name> <path>
> goliothctl lightdb listen --id <device id> <path>
> goliothctl lightdb listen --hwid <hardware id> <path>
```

### Options

```bash
  -h, --help               help for lightdb listen
      --hwId stringArray   hardware id
      --id string          device id
```

### Options inherited from parent commands

```bash
      --apiUrl string      golioth api server url (default "https://api.golioth.io")
  -c, --config string      config file (default is $HOME/.golioth/.goliothctl.yaml)
      --projectId string   golioth project id
```

### SEE ALSO

* [goliothctl lightdb](/reference/command-line-tools/goliothctl/goliothctl_lightdb/) - Access data on LightDB
