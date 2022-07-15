---
id: goliothctl_stream_listen
title: "goliothctl stream listen"
slug: goliothctl_stream_listen
sidebar_label: goliothctl stream listen
url: /reference/command-line-tools/goliothctl/goliothctl_stream_listen/
hide_title: true
---
## goliothctl stream listen

Listen to stream messages from all devices of the project or filter them by device using the device name, device id or the hardware id.

```bash
goliothctl stream listen [device name] [flags]
```

### Examples

```bash
# Listen to stream messages from all devices of the project
> goliothctl stream listen

# Listen to stream messages from a specific device 
> goliothctl stream listen <device name>
> goliothctl stream listen --id <device id>
> goliothctl stream listen --hwId <hardware id>
```

### Options

```bash
  -h, --help               help for stream listen
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

* [goliothctl stream](/reference/command-line-tools/goliothctl/goliothctl_stream/) - Access the data in a LightDB Stream.
