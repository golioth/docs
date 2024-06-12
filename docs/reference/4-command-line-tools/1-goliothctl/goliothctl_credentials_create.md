---
id: goliothctl_credentials_create
title: "goliothctl credentials create"
slug: goliothctl_credentials_create
sidebar_label: goliothctl credentials create
url: /reference/command-line-tools/goliothctl/goliothctl_credentials_create/
hide_title: true
---
## goliothctl credentials create

Create credentials for existing device.

```
goliothctl credentials create [flags]
```

### Examples

```
# Create credentials for existing device using device name
	> goliothctl credentials create my-device --pskId my-psk-id --psk my-psk
	
	# Create credentials for a device using hardware id
	> goliothctl credentials create --hwId AA:AA:AA:AA --pskId my-psk-id
	
	# Create credentials for existing device using device id
	> goliothctl credentials create --id aAbBcCDdEeFf --pskId my-psk-id
```

### Options

```
      --credId string      credential id
      --credType string    credential type [ASYMMETRIC_KEY_PAIR PRE_SHARED_KEY] (default "PRE_SHARED_KEY")
  -h, --help               help for create
      --hwId stringArray   device hardware id
      --id string          device id
      --name string        device name
      --psk string         pre shared key
      --pskId string       credential id
```

### Options inherited from parent commands

```
      --apiUrl string      golioth api server url (default "https://api.golioth.io")
  -c, --config string      config file (default is $HOME/.golioth/.goliothctl.yaml)
      --projectId string   golioth project id
```

### SEE ALSO

* [goliothctl credentials](/reference/command-line-tools/goliothctl/goliothctl_credentials/)	 - Use the `goliothctl credentials` subcommands to list and delete devices credentials.

