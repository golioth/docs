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
# [device name] should be replace by your device name and wrapped in quotes if spaces are used.
$ goliothctl lightdb get [device name] /test
{"state":0}

# Update state with data from a file
$ cat data.json | goliothctl lightdb set [device name] /test --in
or
$ goliothctl lightdb set [device name] /test -f data.json
{"state":1}

$ goliothctl lightdb get --hwId <hardware id> /test
{"state":1}

# Update a specific path with a primitive value
$ goliothctl lightdb set --hwId <hardware id> /test/state -b "0"
1

$ goliothctl lightdb get --id <device id> /test
{"state":0}

# Update a specific path with a nested value
$ goliothctl lightdb set --id <device id> /test -b "{\"state\":1}" --format json
{"state":1}

# Update a data on multiple devices
$ goliothctl lightdb set --tag [tag name] /test -b "{\"state\":1}" --format json
{"state":1}
```

### Options

```
  -h, --help   help for lightdb
```

### Options inherited from parent commands

```
      --apiUrl string      golioth api server url (default "https://api.golioth.io")
  -c, --config string      config file (default is $HOME/.golioth/.goliothctl.yaml)
      --projectId string   golioth project id
```

### SEE ALSO

* [goliothctl](/reference/command-line-tools/goliothctl)	 - Manage Golioth platform resources and developer workflow.
* [goliothctl lightdb delete](/docs/reference/goliothctl/goliothctl_lightdb_delete/)	 - Delete data at given path
* [goliothctl lightdb get](/docs/reference/goliothctl/goliothctl_lightdb_get/)	 - Get data at given path
* [goliothctl lightdb set](/docs/reference/goliothctl/goliothctl_lightdb_set/)	 - Set data at given path

