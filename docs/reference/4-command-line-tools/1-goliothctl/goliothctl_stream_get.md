---
id: goliothctl_stream_get
title: "goliothctl stream get"
slug: goliothctl_stream_get
sidebar_label: goliothctl stream get
url: /reference/command-line-tools/goliothctl/goliothctl_stream_get/
hide_title: true
---
## goliothctl stream get

Get latest stream data at given path.

```
goliothctl stream get [device name] <path> [flags]
```

### Examples

```
# Read latest device state
# [device name] should be replace by your device name and wrapped in quotes if spaces are used.
> goliothctl stream get [device name] /test
{"env":{"temperature": 30, "humidity": 80}}
```

### Options

```
  -h, --help               help for get
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

* [goliothctl stream](/reference/command-line-tools/goliothctl/goliothctl_stream)	 - Access the data in a LightDB Stream.

