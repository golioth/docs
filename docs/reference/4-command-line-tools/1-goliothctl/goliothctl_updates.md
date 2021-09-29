---
id: goliothctl_updates
title: "goliothctl updates"
slug: goliothctl_updates
sidebar_label: goliothctl updates
url: /docs/reference/goliothctl/goliothctl_updates/
hide_title: true
---
## goliothctl updates

Trigger device updates.

```
goliothctl updates [flags]
```

### Examples

```
# Update a single device by name
> goliothctl updates send my-device firmware.bin
```

### Options

```
  -h, --help   help for updates
```

### Options inherited from parent commands

```
      --apiUrl string      golioth api server url (default "https://api.golioth.io")
  -c, --config string      config file (default is $HOME/.golioth/.goliothctl.yaml)
      --projectId string   golioth project id
```

### SEE ALSO

* [goliothctl](/docs/reference/goliothctl/goliothctl/)	 - Manage Golioth platform resources and developer workflow.
* [goliothctl updates send](/docs/reference/goliothctl/goliothctl_updates_send/)	 - Update a single device's firmware.

