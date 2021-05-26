---
id: goliothctl_device_list
title: "goliothctl device list"
slug: goliothctl_device_list
sidebar_label: goliothctl device list
url: /docs/reference/goliothctl/goliothctl_device_list/
hide_title: true
---
## goliothctl device list

List all devices that have been registered with Golioth

```
goliothctl device list [flags]
```

### Examples

```
# List all devices
> goliothctl device list
id:"60abc24dad0772e87bb232c9"  hardware_ids:"AA:AA:AA:AA"  name:"Test Device 1"
id:"60ad5f25ad0772e87bb232cd"  hardware_ids:"CC:CC:CC:CC"  hardware_ids:"BB:BB:BB:BB"  name:"foobar"
```

### Options

```
  -h, --help               help for list
      --hwId stringArray   device hardware id
      --name string        device name
      --tags stringArray   tag names
```

### Options inherited from parent commands

```
      --apiUrl string      golioth api server url (default "https://api.golioth.dev")
  -c, --config string      config file (default is $HOME/.goliothctl.yaml)
      --projectId string   golioth project id
```

### SEE ALSO

* [goliothctl device](/docs/reference/goliothctl/goliothctl_device/)	 - Use the `goliothctl device` subcommands to add, remove, list, and update data associated with devices.

