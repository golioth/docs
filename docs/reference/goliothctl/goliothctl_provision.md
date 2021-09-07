---
id: goliothctl_provision
title: "goliothctl provision"
slug: goliothctl_provision
sidebar_label: goliothctl provision
url: /docs/reference/goliothctl/goliothctl_provision/
hide_title: true
---
## goliothctl provision

Create a device and provision it with credentials.

### Synopsis

Provisioning a device associates it with a pre-shared-key (PSK) and a PSK ID.

```
goliothctl provision [flags]
```

### Examples

```
> goliothctl provision --name my-device --hwId AA:AA:AA:AA --hwId BB:BB:BB:BB --credId my-psk-id --psk my-psk
```

### Options

```
      --blueprint string   blueprint name
      --credId string      credential id
      --credType string    credential type [PRE_SHARED_KEY ASYMMETRIC_KEY_PAIR] (default "PRE_SHARED_KEY")
  -h, --help               help for provision
      --hwId stringArray   device hardware id
      --id string          device id
      --name string        device name
      --psk string         pre shared key
      --tags stringArray   tag names
```

### Options inherited from parent commands

```
      --apiUrl string      golioth api server url (default "https://api.golioth.io")
  -c, --config string      config file (default is $HOME/.golioth/.goliothctl.yaml)
      --projectId string   golioth project id
```

### SEE ALSO

* [goliothctl](/docs/reference/goliothctl/goliothctl/)	 - Manage Golioth platform resources and developer workflow.

