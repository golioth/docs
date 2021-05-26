---
id: goliothctl_device
title: "goliothctl device"
slug: goliothctl_device
sidebar_label: goliothctl device
url: /docs/reference/goliothctl/goliothctl_device/
hide_title: true
---
## goliothctl device

Use the `goliothctl device` subcommands to add, remove, list, and update data associated with devices.

```
goliothctl device [flags]
```

### Examples

```
# Add a device with multiple hardware IDs
> goliothctl device create --name foobar --hwId AA:AA:AA:AA --hwId BB:BB:BB:BB

# Update the name of a device from "foobar" to "my-device"
> goliothctl device update foobar --name my-device

# Add two hardware IDs to device and delete one old one
> goliothctl device update my-device --rmHwId AA:AA:AA:AA --addHwId BB:BB:BB:BB --addHwId CC:CC:CC:CC

# Add a tag to a device that's referred to by hardware ID
> goliothctl device update --hwId DD:DD:DD:DD --addTag something-or-other

# List all devices
> goliothctl device list
id:"60ad5f25ad0772e87bb232cd"  hardware_ids:"CC:CC:CC:CC"  hardware_ids:"BB:BB:BB:BB"  name:"foobar"
```

### Options

```
  -h, --help   help for device
```

### Options inherited from parent commands

```
      --apiUrl string      golioth api server url (default "https://api.golioth.dev")
  -c, --config string      config file (default is $HOME/.goliothctl.yaml)
      --projectId string   golioth project id
```

### SEE ALSO

* [goliothctl](/docs/reference/goliothctl/goliothctl/)	 - Manage Golioth platform resources and developer workflow.
* [goliothctl device create](/docs/reference/goliothctl/goliothctl_device_create/)	 - Add a device to Golioth.
* [goliothctl device delete](/docs/reference/goliothctl/goliothctl_device_delete/)	 - Delete a device from Golioth.
* [goliothctl device list](/docs/reference/goliothctl/goliothctl_device_list/)	 - List all devices that have been registered with Golioth
* [goliothctl device update](/docs/reference/goliothctl/goliothctl_device_update/)	 - Update the name, hardware IDs, and tags associated with a device.

