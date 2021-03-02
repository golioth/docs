---
id: goliothctl_lightdb
title: "goliothctl lightdb"
slug: goliothctl_lightdb
sidebar_label: goliothctl lightdb
url: /docs/reference/goliothctl/goliothctl_lightdb/
hide_title: true
---
## goliothctl lightdb

Access data on Light DB

```
goliothctl lightdb [flags]
```

### Examples

```
$ cat data.json
{
	"state": 1
}%

# Read current device state
$ goliothctl lightdb get <device-id> /test
{"state":0}

# Update state with data from a file
$ cat data.json | goliothctl lightdb set <device-id> /test --in
or
$ goliothctl lightdb set <device-id> /test -f data.json
{"state":1}

$ goliothctl lightdb get <device-id> /test
{"state":1}

# Update a specific path with a primitive value
$ goliothctl lightdb set <device-id> /test/state -b "0"
1

$ goliothctl lightdb get <device-id> /test
{"state":0}

# # Update a specific path with a nested value
$ goliothctl lightdb set <device-id> /test -b "{\"state\":1}" --format json
{"state":1}
```

### Options

```
  -h, --help   help for lightdb
```

### Options inherited from parent commands

```
      --apiUrl string      golioth api server url (default "https://api.golioth.dev")
      --projectId string   golioth project id
```

### SEE ALSO

* [goliothctl](/docs/reference/goliothctl/goliothctl/)	 - Manage Golioth platform resources and developer workflow.
* [goliothctl lightdb delete](/docs/reference/goliothctl/goliothctl_lightdb_delete/)	 - Delete data at given path
* [goliothctl lightdb get](/docs/reference/goliothctl/goliothctl_lightdb_get/)	 - Get data at given path
* [goliothctl lightdb set](/docs/reference/goliothctl/goliothctl_lightdb_set/)	 - Set data at given path

