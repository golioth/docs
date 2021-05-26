---
id: goliothctl_config_get
title: "goliothctl config get"
slug: goliothctl_config_get
sidebar_label: goliothctl config get
url: /docs/reference/goliothctl/goliothctl_config_get/
hide_title: true
---
## goliothctl config get

Get the value associated with a key in the local goliothctl config.

```
goliothctl config get <key> [flags]
```

### Examples

```
# Get the current access token used to authenticate with Golioth
> golioth config get accessToken
```

### Options

```
  -h, --help   help for get
```

### Options inherited from parent commands

```
      --apiUrl string      golioth api server url (default "https://api.golioth.dev")
  -c, --config string      config file (default is $HOME/.goliothctl.yaml)
      --projectId string   golioth project id
```

### SEE ALSO

* [goliothctl config](/docs/reference/goliothctl/goliothctl_config/)	 - The `goliothctl config` subcommands are used to get and set values in the current local goliothctl config.

