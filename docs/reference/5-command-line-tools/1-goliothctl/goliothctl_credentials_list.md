---
id: goliothctl_credentials_list
title: "goliothctl credentials list"
slug: goliothctl_credentials_list
sidebar_label: goliothctl credentials list
url: /reference/command-line-tools/goliothctl/goliothctl_credentials_list/
hide_title: true
---
## goliothctl credentials list

List credentials associated with a device.

```
goliothctl credentials list [device name] [flags]
```

### Examples

```
# List credentials finding device by name
> goliothctl credentials list my-device

# List credentials finding device by hardware id
> goliothctl credentials list --hwId AA:AA:AA:AA

# List credentials finding device by device id
> goliothctl credentials list --id aAbBcCDdEeFf
```

### Options

```
  -h, --help               help for list
      --hwId stringArray   device hardware id
      --id string          device id
```

### Options inherited from parent commands

```
      --apiUrl string      golioth api server url (default "https://api.golioth.io")
  -c, --config string      config file (default is $HOME/.golioth/.goliothctl.yaml)
      --projectId string   golioth project id
```

### SEE ALSO

* [goliothctl credentials](/reference/command-line-tools/goliothctl/goliothctl_credentials/)	 - Use the `goliothctl credentials` subcommands to list and delete devices credentials.

