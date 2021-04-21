---
id: goliothctl_lightdb_set
title: "goliothctl lightdb set"
slug: goliothctl_lightdb_set
sidebar_label: goliothctl lightdb set
url: /docs/reference/goliothctl/goliothctl_lightdb_set/
hide_title: true
---
## goliothctl lightdb set

Set data at given path

```
goliothctl lightdb set [device name] <path> [flags]
```

### Options

```
  -b, --body string        request body
  -f, --file string        file to be sent on the request body
      --format string      input body format [json,cbor] (default "json")
  -h, --help               help for set
      --hwId stringArray   hardware id
      --id string          device id
      --in                 read request body from stdin
      --tag string         tag name
```

### Options inherited from parent commands

```
      --apiUrl string      golioth api server url (default "https://api.golioth.dev")
  -c, --config string      config file (default is $HOME/.goliothctl.yaml)
      --projectId string   golioth project id
```

### SEE ALSO

* [goliothctl lightdb](/docs/reference/goliothctl/goliothctl_lightdb/)	 - Access data on Light DB

