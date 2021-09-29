---
id: goliothctl_config
title: "goliothctl config"
slug: goliothctl_config
sidebar_label: goliothctl config
url: /docs/reference/goliothctl/goliothctl_config/
hide_title: true
---
## goliothctl config

The `goliothctl config` subcommands are used to get and set values in the current local goliothctl config.

```
goliothctl config [flags]
```

### Examples

```
# Set the Golioth server URL to localhost
> goliothctl config set apiUrl http://localhost:9090

# Get the current access token used to authenticate with Golioth
> golioth config get accessToken
```

### Options

```
  -h, --help   help for config
```

### Options inherited from parent commands

```
      --apiUrl string      golioth api server url (default "https://api.golioth.io")
  -c, --config string      config file (default is $HOME/.golioth/.goliothctl.yaml)
      --projectId string   golioth project id
```

### SEE ALSO

* [goliothctl](/docs/reference/goliothctl/goliothctl/)	 - Manage Golioth platform resources and developer workflow.
* [goliothctl config get](/docs/reference/goliothctl/goliothctl_config_get/)	 - Get the value associated with a key in the local goliothctl config.
* [goliothctl config set](/docs/reference/goliothctl/goliothctl_config_set/)	 - Set the value associated with a key in the local goliothctl config

