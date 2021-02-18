---
id: goliothctl_config
title: "goliothctl config"
slug: goliothctl_config
sidebar_label: goliothctl config
url: /docs/reference/goliothctl/goliothctl_config/
hide_title: true
---
## goliothctl config

Set global goliothctl config

```
goliothctl config [flags]
```

### Examples

```
Point to a different instance of golioth server:
$ goliothctl config set apiUrl http://localhost:9090
To get the current access token:
$ goliothctl config get accessToken
```

### Options

```
  -h, --help   help for config
```

### Options inherited from parent commands

```
      --apiUrl string      golioth api server url (default "https://api.golioth.dev")
      --projectId string   golioth project id
```

### SEE ALSO

* [goliothctl](/docs/reference/goliothctl/goliothctl/)	 - Manage Golioth platform resources and developer workflow.
* [goliothctl config get](/docs/reference/goliothctl/goliothctl_config_get/)	 - Show a given config
* [goliothctl config set](/docs/reference/goliothctl/goliothctl_config_set/)	 - Sets a given config

