---
id: goliothctl_stream
title: "goliothctl stream"
slug: goliothctl_stream
sidebar_label: goliothctl stream
url: /reference/command-line-tools/goliothctl/goliothctl_stream/
hide_title: true
---
## goliothctl stream

Access the data in a LightDB Stream.

```
goliothctl stream [flags]
```

### Examples

```
> cat query.json
{
	"fields": [
		{"path": "time"},
		{"path": "deviceId"},
		{"path": "env.temperature","type": "float","agg": "avg"}
	],
	"time_bucket": "10m",
	"filters": [
		{ "path": "env.temperature", "op": ">=", "value": 30 }
		{ "path": "env.humidity", "op": "<", "value": 50 }
	]
}}%
# Query timeseries data on a project from a query file
> cat query.json | goliothctl stream query --interval 24h--in
[{"deviceId":"<device uuid>","env.humidity":40,"env.temperature":23.333333333333332,"time":"2021-05-03T14:40:00+00:00"},{"deviceId":"<device uuid>","env.humidity":80,"env.temperature":32,"time":"2021-05-03T17:10:00+00:00"}]

# Query timeseries data on a project with inline fields and filtering by tag
> goliothctl stream query --interval 8h --field time --field "env.temperature" --field "env.humidity" --field "deviceId" --tag development
[{"deviceId":"<device uuid>","env.temperature":20,"time":"2021-05-03T14:45:16.333369+00:00"},{"deviceId":"<device uuid>","env.temperature":30,"time":"2021-05-03T14:45:22.315853+00:00"},{"deviceId":"<device uuid>","env.temperature":20,"time":"2021-05-03T14:46:24.938491+00:00"},{"deviceId":"<device uuid>","env.temperature":40,"time":"2021-05-03T17:18:03.69016+00:00"},{"deviceId":"<device uuid>","env.temperature":40,"time":"2021-05-03T17:18:57.801929+00:00"},{"deviceId":"<device uuid>","env.temperature":40,"time":"2021-05-03T17:18:59.897766+00:00"}

# Read latest device state
# [device name] should be replace by your device name and wrapped in quotes if spaces are used.
> goliothctl stream get [device name] /test
{"env":{"temperature": 30, "humidity": 80}}

# Listen to all lightdb stream messages of the project
$ goliothctl stream listen

# Listen to lightdb stream messages from a device
$ goliothctl stream listen [device name]

```

### Options

```
  -h, --help   help for stream
```

### Options inherited from parent commands

```
      --apiUrl string      golioth api server url (default "https://api.golioth.io")
  -c, --config string      config file (default is $HOME/.golioth/.goliothctl.yaml)
      --projectId string   golioth project id
```

### SEE ALSO

* [goliothctl](/reference/command-line-tools/goliothctl/goliothctl/)	 - Manage Golioth platform resources and developer workflow.
* [goliothctl stream get](/reference/command-line-tools/goliothctl/goliothctl_stream_get/)	 - Get latest stream data at given path.
* [goliothctl stream listen](/reference/command-line-tools/goliothctl/goliothctl_stream_listen/)	 - Listen to lightdb stream messages
* [goliothctl stream query](/reference/command-line-tools/goliothctl/goliothctl_stream_query/)	 - Run a query against all data stored in a LightDB stream in the supplied path.

