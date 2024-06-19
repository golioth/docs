---
id: querying-data
title: Querying Stream Data
---

LightDB Stream queries are composed using Fields and Filters.

## Using Fields

**Fields:** Users may define multiple fields to be returned by the query. The
special fields `time` and `deviceId` represent the data point time and device
that sent the data. All other fields represents a path inside the data blob that
is stored.

- `path` : Path inside the JSON blob, separated by `.`.
- `alias`: Rename variable. By default the path name is used.
- `agg` : Aggregation to be applied on the field. Valid values include `avg`,
  `count`, `max`, `min` and `sum`.
- `type`: Type conversion to apply to data point on path. Important for
  aggregations.

```json
{ "path": "time" },
{ "path": "deviceId" },
{ "path": "env.temp", "alias": "temperature", "agg": "avg", "type": "float" },
{ "path": "env.hum", "alias": "humidity", "agg": "avg", "type": "float" }
```

## Using Filters

**Filters:** Users may define a set of rules to filter their data.

- Equality filters will check if a value is equal, not equal, IN and not IN
  (when a list is used).
    - Operators: `=`, `<>`
- Number Comparison filters will force a conversion to a float value. \
    - Operators: `<=`, `<`, `>=`, `>`
- Conditional filters allow for composing queries using AND and OR.
    - Operators: `and`, `or`

```json
// Equality Filters
{ "path": "light", "op" : "<>", "value" : null }
or
{ "path": "light.state", "op" : "=", "value" : 1 }
or
{ "path": "light.state", "op" : "=", "value" : [1,0] } // In query

// Number Comparison Filters
{ "path": "env.temp", "op" : ">=" | ">", "value" : 20 }
{ "path": "env.hum", "op" : "<" | "<=", "value" : 20 }

// Conditional filters
{
"op" : "or" | "and",
"filters" : [<More filters...>]
}
```

## Example of querying data on LightDB Stream

Let's consider an application in which we want to plot temperature data that has
been recorded by a device over time. In this case, the device has two sensors,
one inside and one outside. We also want to calculate the 15 minute average
temperature.

The device can post data to the `/env` path so we can put together environment
data under a group. An example of posting that kind of data using `coap` CLI can
be seen bellow:

import { ProtocolPublishSample } from '/docs/_partials-common/protocol.mdx'

<ProtocolPublishSample path="/.s/env" method="POST" body={{"temperature": 30, "type" : "inside" }}/>
<ProtocolPublishSample path="/.s/env" method="POST" body={{"temperature": 32, "type" : "inside" }}/>
<ProtocolPublishSample path="/.s/env" method="POST" body={{"temperature": 20, "type" : "outside" }}/>
<ProtocolPublishSample path="/.s/env" method="POST" body={{"temperature": 18, "type" : "outside" }}/>

Let's define our first query to get just the raw data on the last 8h and where
the field `env` is not null.

```json
{
  "fields" : [
    { "path": "time" },
    { "path": "deviceId" },
    { "path": "env" },
    { "path": "env.temperature", "alias" : "temperature" },
    { "path": "env.type", "alias" : "sensorType" }
  ],
  "filters": [
    { "path": "env", "op" : "<>", "value" : null }
  ]
}
```

Let's save that into a file called query.json and use that to query the LightDB
Stream. You can use the REST API, which is more configurable, but goliothctl
works great for simple cases like this.

```json
❯ cat query.json | goliothctl stream query --interval 8h --in | jq .
[
  {
    "deviceId": "<device uuid>",
    "env": {
      "temperature": 30,
      "type": "inside"
    },
    "sensorType": "inside",
    "temperature": 30,
    "time": "2021-05-06T14:48:35.687416+00:00"
  },
  {
    "deviceId": "<device uuid>",
    "env": {
      "temperature": 32,
      "type": "inside"
    },
    "sensorType": "inside",
    "temperature": 32,
    "time": "2021-05-06T14:49:36.884276+00:00"
  },
  {
    "deviceId": "<device uuid>",
    "env": {
      "temperature": 20,
      "type": "outside"
    },
    "sensorType": "outside",
    "temperature": 20,
    "time": "2021-05-06T14:49:48.199823+00:00"
  },
  {
    "deviceId": "602a9dd5b99719d8c569fa1d",
    "env": {
      "temperature": 18,
      "type": "outside"
    },
    "sensorType": "outside",
    "temperature": 18,
    "time": "2021-05-06T14:51:43.226537+00:00"
  }
]
```

As you can see, we can query more specific fields on a given path like on
`env.temperature`, or just return the whole object on a parent path like `env`.
Now let's do some aggregations on the data. We can calculate the average
temperature value, calculate on 15 minutes window and also, any field that is
not being aggregated will be used as a grouping variable. In this case we can
group by `time` and `sensorType` for example. Here is our modified `query.json`
file:

```json
{
  "fields" : [
    { "path": "time" },
    { "path": "env.type", "alias" : "sensorType" },
    { "path": "env.temperature", "alias" : "temperature", "agg" : "avg", "type": "float" }
  ],
  "timeBucket": "15m",
  "filters": [
    { "path": "env", "op" : "<>", "value" : null }
  ]
}
```

Executing that new query will give us this result. Notice that the time was
rounded on 15 minutes chunks.

```json
$ cat query.json | goliothctl stream query --interval 8h --in | jq .
[
  {
    "sensorType": "inside",
    "temperature": 31,
    "time": "2021-05-06T14:45:00+00:00"
  },
  {
    "sensorType": "outside",
    "temperature": 19,
    "time": "2021-05-06T14:45:00+00:00"
  }
]
```

Maybe now we just want to calculate the average daily temperature from `inside`
temperature sensors. We can modify our `query.json` file to something like this:

```json
{
  "fields" : [
    { "path": "time" },
    { "path": "env.temperature", "alias" : "temperature", "agg" : "avg", "type": "float" }
  ],
  "timeBucket": "24h",
  "filters": [
    { "op" : "and", "filters" : [
      { "path": "env", "op" : "<>", "value" : null },
      { "path": "env.type", "op" : "=", "value" : "inside" }
    ]}
  ]
}
```

Executing again our new query will give us this result:

```json
[
  {
    "temperature": 31,
    "time": "2021-05-06T00:00:00+00:00"
  }
]
```
