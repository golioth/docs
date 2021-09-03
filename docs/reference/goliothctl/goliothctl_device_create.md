---
id: goliothctl_device_create
title: "goliothctl device create"
slug: goliothctl_device_create
sidebar_label: goliothctl device create
url: /docs/reference/goliothctl/goliothctl_device_create/
hide_title: true
---
## goliothctl device create

Add a device to Golioth.

### Synopsis

Add a device to the Golioth cloud. It can have multiple hardware IDs.
The hardware IDs are not currently restricted to particular formats.

```
goliothctl device create [flags]
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
      --apiUrl string      golioth api server url (default "https://api.golioth.dev")
  -c, --config string      config file (default is $HOME/.golioth/.goliothctl.yaml)
      --projectId string   golioth project id
```

### SEE ALSO

* [goliothctl device](/docs/reference/goliothctl/goliothctl_device/)	 - Use the `goliothctl device` subcommands to add, remove, list, and update data associated with devices.

