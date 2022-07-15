---
id: goliothctl_apikeys_list
title: "goliothctl apikeys list"
slug: goliothctl_apikeys_list
sidebar_label: goliothctl apikeys list
url: /reference/command-line-tools/goliothctl/goliothctl_apikeys_list/
hide_title: true
---
## goliothctl apikeys list

Show all existing API keys.

```
goliothctl apikeys list [flags]
```

### Examples

```
# Assuming that you've created an API key previously:
> goliothctl apikeys list
id:"5df88b8e-e208-41d4-b7e2-29192ab5de83"  key:"dLEtQLItz9eSHZYwuZGE5UlcgL2GOmHW" type:API_KEY
```

### Options

```
  -h, --help   help for list
```

### Options inherited from parent commands

```
      --apiUrl string      golioth api server url (default "https://api.golioth.io")
  -c, --config string      config file (default is $HOME/.golioth/.goliothctl.yaml)
      --projectId string   golioth project id
```

### SEE ALSO

* [goliothctl apikeys](/reference/command-line-tools/goliothctl/goliothctl_apikeys/)	 - Access API Keys information.

