---
id: goliothctl_apikeys_delete
title: "goliothctl apikeys delete"
slug: goliothctl_apikeys_delete
sidebar_label: goliothctl apikeys delete
url: /reference/command-line-tools/goliothctl/goliothctl_apikeys_delete/
hide_title: true
---
## goliothctl apikeys delete

Delete an API key with an ID.

```
goliothctl apikeys delete <id> [flags]
```

### Examples

```
# Assuming that this API key was created previously
> goliothctl apikeys delete 5df88b8e-e208-41d4-b7e2-29192ab5de83
API key deleted
```

### Options

```
  -h, --help   help for delete
```

### Options inherited from parent commands

```
      --apiUrl string      golioth api server url (default "https://api.golioth.io")
  -c, --config string      config file (default is $HOME/.golioth/.goliothctl.yaml)
      --projectId string   golioth project id
```

### SEE ALSO

* [goliothctl apikeys](/reference/command-line-tools/goliothctl/goliothctl_apikeys)	 - Access API Keys information.

