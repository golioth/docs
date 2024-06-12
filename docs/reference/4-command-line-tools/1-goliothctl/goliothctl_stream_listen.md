---
id: goliothctl_stream_listen
title: "goliothctl stream listen"
slug: goliothctl_stream_listen
sidebar_label: goliothctl stream listen
url: /reference/command-line-tools/goliothctl/goliothctl_stream_listen/
hide_title: true
---
## goliothctl stream listen

Listen to lightdb stream messages

### Synopsis

LightDB Stream stores time series data from the device. You can listen to stream messages from all devices of the project or filter them by device passing the device name, device id or the hardware id.


```
goliothctl stream listen [device name] [flags]
```

### Examples

```
# Listen to stream messages from all devices of the project
> goliothctl stream listen

# Listen to stream messages from a specific device 
> goliothctl stream listen <device name>
> goliothctl stream listen --id <device id>
> goliothctl stream listen --hwid <hardware id>

```

### Options

```
  -h, --help               help for listen
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

* [goliothctl stream](/reference/command-line-tools/goliothctl/goliothctl_stream/)	 - Access the data in a LightDB Stream.

