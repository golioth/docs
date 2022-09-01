---
id: goliothctl_stream_query
title: "goliothctl stream query"
slug: goliothctl_stream_query
sidebar_label: goliothctl stream query
url: /reference/command-line-tools/goliothctl/goliothctl_stream_query/
hide_title: true
---
## goliothctl stream query

Run a query against all data stored in a LightDB Stream in the supplied path.

```
goliothctl stream query [flags]
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
```

### Options

```
  -f, --field stringArray   query fields
  -h, --help                help for query
      --in                  read json query from stdin
      --interval duration   return entries not older than this value (ex: 15m,8h,1d) (default 4h0m0s)
  -q, --query string        json query
      --tag stringArray     tag name
```

### Options inherited from parent commands

```
      --apiUrl string      golioth api server url (default "https://api.golioth.io")
  -c, --config string      config file (default is $HOME/.golioth/.goliothctl.yaml)
      --projectId string   golioth project id
```

### SEE ALSO

* [goliothctl stream](/reference/command-line-tools/goliothctl/goliothctl_stream/)	 - Access the data in a LightDB Stream.

