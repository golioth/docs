---
id: goliothctl_device_update
title: "goliothctl device update"
slug: goliothctl_device_update
sidebar_label: goliothctl device update
url: /reference/command-line-tools/goliothctl/goliothctl_device_update/
hide_title: true
---
## goliothctl device update

Update the name, hardware IDs, and tags associated with a device.

```
goliothctl device update [device name] [flags]
```

### Examples

```
# Update the name of a device from "foobar" to "my-device"
> goliothctl device update foobar --name my-device

# Add two hardware IDs to a device and delete one old one
> goliothctl device update my-device --rmHwId AA:AA:AA:AA --addHwId BB:BB:BB:BB --addHwId CC:CC:CC:CC

# Add a tag to a device that's referred to by hardware ID
> goliothctl device update --hwId DD:DD:DD:DD --addTag something-or-other
```

### Options

```
      --addHwId stringArray   add hardware id
      --addTag stringArray    add tag
      --blueprint string      new device blueprint
      --disable               disable device
      --enable                enable device
  -h, --help                  help for update
      --id string             device id
      --name string           new device name
      --rmHwId stringArray    remove hardware id
      --rmTag stringArray     remove tag
```

### Options inherited from parent commands

```
      --apiUrl string      golioth api server url (default "https://api.golioth.io")
  -c, --config string      config file (default is $HOME/.golioth/.goliothctl.yaml)
      --projectId string   golioth project id
```

### SEE ALSO

* [goliothctl device](/reference/command-line-tools/goliothctl/goliothctl_device/)	 - Use the `goliothctl device` subcommands to add, remove, list, and update data associated with devices.

