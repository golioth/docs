---
id: goliothctl_provision
title: "goliothctl provision"
slug: goliothctl_provision
sidebar_label: goliothctl provision
url: /docs/reference/goliothctl/goliothctl_provision/
hide_title: true
---
## goliothctl provision

Provision devices and credentials

```
goliothctl provision [flags]
```

### Options

```
      --credId string      credential id
      --credType string    credential type [ASYMMETRIC_KEY_PAIR PRE_SHARED_KEY] (default "PRE_SHARED_KEY")
  -h, --help               help for provision
      --hwId stringArray   device hardware id
      --id string          device id
      --name string        device name
      --psk string         pre shared key
```

### Options inherited from parent commands

```
      --apiUrl string      golioth api server url (default "https://api.golioth.dev")
      --projectId string   golioth project id
```

### SEE ALSO

* [goliothctl](/docs/reference/goliothctl/goliothctl/)	 - Manage Golioth platform resources and developer workflow.

