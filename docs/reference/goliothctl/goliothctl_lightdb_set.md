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
goliothctl lightdb set <device-id> <path> [flags]
```

### Options

```
  -b, --body string     request body
  -f, --file string     file to be sent on the request body
      --format string   input body format [json,cbor] (default "json")
  -h, --help            help for set
      --in              read request body from stdin
```

### Options inherited from parent commands

```
      --apiUrl string      golioth api server url (default "https://api.golioth.dev")
      --projectId string   golioth project id
```

### SEE ALSO

* [goliothctl lightdb](/docs/reference/goliothctl/goliothctl_lightdb/)	 - Access data on Light DB

