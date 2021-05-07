---
id: querying-data
title: Querying Data
---

To allow users to query data on a flexible way, we need to define some structures that can be used for building a query so we can shape the data and filter accordingly to that. For doing so, we defined 2 basic primitives: Fields and Filters. Here are the attributes that can be define on each one of those primitives:

- Field - Users can define multiple fields that they want to be returned on their query. `time` and `deviceId` are special fields that represents the data point time and device that sent the data. All other fields represents a path inside the data blob that is stored.
  - `path` : Path inside the json blob, separated by `.`.
  - `alias`: Rename variable. By default it just uses the path name.
  - `agg` : Aggregation to be applied on the field. Can be `avg`, `count`, `max`, `min` and `sum`.
  - `type`: Type conversion to apply to data point on path. Important for aggregations.

Example of Fields on a query.

```
{ "path": "time" },
{ "path": "deviceId" },
{ "path": "env.temp", "alias": "temperature", "agg": "avg", "type": "float" },
{ "path": "env.hum", "alias": "humidity", "agg": "avg", "type": "float" }
```

- Filter - Users can define a way to filter their data. We have 3 types currently.
  - Equality filters will check if a value is equal, not equal, IN and not IN if a list is used.
    - Operators: `=`, `<>`
  - Number Comparison filters will force a conversion to a float value. \
    - Operators: `<=`, `<`, `>=`, `>`
  - Conditional filter allows for composing queries using AND and OR.
    - Operators: `and`, `or`

Example of filters.

```
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

### Example of querying data on Light DB Stream

Let's consider an environment sensing application were each device tracks temperature over time and we want to plot the collected data. A device can have multiple temperature sensors, like `inside` and `outside` sensors. Also we want to calculate average temperature every 15 minutes.

The device can post data to the `/env` path so we can put together environment data under a group. An example of posting that kind of data using `gurl` can be seen bellow:

```
$ gurl coap --path /.s/env -m POST --psk-id deadbeef-id --psk supersecret --host coap.golioth.dev -b "{\"temperature\": 30, \"type\" : \"inside\" }" --format json
$ gurl coap --path /.s/env -m POST --psk-id deadbeef-id --psk supersecret --host coap.golioth.dev -b "{\"temperature\": 32, \"type\" : \"inside\" }" --format json
$ gurl coap --path /.s/env -m POST --psk-id deadbeef-id --psk supersecret --host coap.golioth.dev -b "{\"temperature\": 20, \"type\" : \"outside\" }" --format json
$ gurl coap --path /.s/env -m POST --psk-id deadbeef-id --psk supersecret --host coap.golioth.dev -b "{\"temperature\": 18, \"type\" : \"outside\" }" --format json
```

Let's define our first query to get just the raw data on the last 8h and where the field `env` is not null.

```
{
  "fields" : [
    { "path": "time" },
    { "path": "deviceId" },
    { "path": "env" },
    { "path": "env.temperature", "alias" : "temperature" }
    { "path": "env.type", "alias" : "sensorType" }
  ],
  "filters": [
    { "path": "env", "op" : "<>", "value" : null },
  ]
}
```

Let's save that into a `query.json` file and are gonna be using `goliothctl` to run that queries. But a more powerful and useful way of integrating with Light DB Stream is using our REST API. But here is an example with `goliothctl`:

```
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

As you can see, we can query more specific fields on a given path like on `env.temperature`, or just return the whole object on a parent path like `env`. Now let's do some aggregations on the data. We can calculate the average temperature value, calculate on 15 minutes window and also, any field that is not being aggregated will be used as a grouping variable. In this case we can group by `time` and `sensorType` for example. Here is our modified `query.json` file:

```
{
  "fields" : [
    { "path": "time" },
    { "path": "env.type", "alias" : "sensorType" }
    { "path": "env.temperature", "alias" : "temperature", "agg" : "avg", "type": "float" }
  ],
  "timeBucket": "15m",
  "filters": [
    { "path": "env", "op" : "<>", "value" : null }
  ]
}
```

Executing that new query will give us this result. Notice that the time was rounded on 15 minutes chunks.

```
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

Maybe now we just want to calculate the average daily temperature from `inside` temperature sensors. We can modify our `query.json` file to something like this:

```
{
  "fields" : [
    { "path": "time" },
    { "path": "env.temperature", "alias" : "temperature", "agg" : "avg", "type": "float" }
  ],
  "timeBucket": "24h",
  "filters": [
    { "op" : "and", "filters" : [
      { "path": "env", "op" : "<>", "value" : null },
      { "path": "env.type", "op" : "=", "value" : "inside" },
    ]}
  ]
}
```

Executing again our new query will give us this result:

```
[
  {
    "temperature": 31,
    "time": "2021-05-06T00:00:00+00:00"
  }
]
```

We are gonna be improving the query interface with time, but we believe that users will be able to build powerful queries with the current feature set.
