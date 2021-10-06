---
id: goliothctl_updates_send
title: "goliothctl updates send"
slug: goliothctl_updates_send
sidebar_label: goliothctl updates send
url: /reference/command-line-tools/goliothctl/goliothctl_updates_send/
hide_title: true
---
## goliothctl updates send

Update a single device's firmware.

```
goliothctl updates send [device name] <file> [flags]
```

### Examples

```
# Update a device by name
> goliothctl updates send my-device firmware.bin

# Update a device by hardware ID
> goliothctl updates send firmware.bin --hwId AA:AA:AA:AA

# Update a device by the device's ID
> goliothctl updates send firmware.bin --id 60ad6ad0ad0772e87bb232ce
```

### Options

```
  -h, --help               help for send
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

* [goliothctl updates](/reference/command-line-tools/goliothctl/goliothctl_updates)	 - Trigger device updates.

