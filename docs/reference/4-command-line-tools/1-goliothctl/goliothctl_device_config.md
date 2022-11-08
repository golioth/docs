---
id: goliothctl_device_config
title: "goliothctl device config"
slug: goliothctl_device_config
sidebar_label: goliothctl device config
url: /reference/command-line-tools/goliothctl/goliothctl_device_config/
hide_title: true
---
## goliothctl device config

Write a setting to the device.

### Synopsis

Use the `golioth device config` command to write a setting to the device.

This command will use the `serial` port so it's required your device be connected to the USB before you run the command.

```
goliothctl device config [flags]
```

### Examples

```
# Add a device with multiple hardware IDs
> goliothctl device create --name foobar --hwId AA:AA:AA:AA --hwId BB:BB:BB:BB
```

### Options

```
      --blueprint string   blueprint name
  -h, --help               help for create
      --hwId stringArray   device hardware id
      --name string        device name
      --tags stringArray   tag names
```

### Options inherited from parent commands

```
      --apiUrl string      golioth api server url (default "https://api.golioth.io")
  -c, --config string      config file (default is $HOME/.golioth/.goliothctl.yaml)
      --projectId string   golioth project id
```

### SEE ALSO

* [goliothctl device](/reference/command-line-tools/goliothctl/goliothctl_device/)	 - Use the `goliothctl device` subcommands to add, remove, list, and update data associated with devices.

