---
id: goliothctl_device_delete
title: "goliothctl device delete"
slug: goliothctl_device_delete
sidebar_label: goliothctl device delete
url: /reference/command-line-tools/goliothctl/goliothctl_device_delete/
hide_title: true
---
## goliothctl device delete

Delete a device from Golioth.

```
goliothctl device delete [device name] [flags]
```

### Examples

```
# Delete a device with name "foobar"
> goliothctl device delete foobar

# Delete a device with a specified ID
> goliothctl device delete --id 60ad6ad0ad0772e87bb232ce

# Delete a device with a specified hardware ID
> goliothctl device delete --hwId BB:BB:BB:BB

```

### Options

```
  -h, --help               help for delete
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

* [goliothctl device](/reference/command-line-tools/goliothctl/goliothctl_device/)	 - Use the `goliothctl device` subcommands to add, remove, list, and update data associated with devices.

