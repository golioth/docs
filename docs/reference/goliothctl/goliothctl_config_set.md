---
id: goliothctl_config_set
title: "goliothctl config set"
slug: goliothctl_config_set
sidebar_label: goliothctl config set
url: /docs/reference/goliothctl/goliothctl_config_set/
hide_title: true
---
## goliothctl config set

Set the value associated with a key in the local goliothctl config

```
goliothctl config set <key> <value> [flags]
```

### Examples

```
# Set the Golioth server URL to localhost
> goliothctl config set apiUrl http://localhost:9090
```

### Options

```
  -h, --help   help for set
```

### Options inherited from parent commands

```
      --apiUrl string      golioth api server url (default "https://api.golioth.io")
  -c, --config string      config file (default is $HOME/.golioth/.goliothctl.yaml)
      --projectId string   golioth project id
```

### SEE ALSO

* [goliothctl config](/docs/reference/goliothctl/goliothctl_config/)	 - The `goliothctl config` subcommands are used to get and set values in the current local goliothctl config.

