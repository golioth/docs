---
title: influxdb
---

|   |   |
|---|:---:|
|__Latest Version__| `v1.0.0` |
|__Input Content Type__| `application/json` |

:::usage
Sending data to InfluxDB incurs usage costs after exceeding the free tier. See
[Golioth pricing](https://golioth.io/pricing) for more information.
:::

The `influxdb` destination sends data to an
[InfluxDB](https://www.influxdata.com/) bucket. Data must be supplied as JSON,
which will be transformed to [line
protocol](https://docs.influxdata.com/influxdb/cloud/reference/syntax/line-protocol/)
after metadata is injected.

### Parameters

|Parameter|Type|Description|Required|
|---|---|---|:---:|
|`url`|`string`| The URL for an InfluxDB instance. |✅|
|`token`|`string`| The API token for authentication. |✅|
|`bucket`|`string`| The bucket for the streaming data. |✅|
|`measurement`|`string`| The measurement for the streaming data. |✅|

### Example Secrets

`INFLUXDB_TOKEN`
```
SX89obl51o0pS7TausD4BwWrwxiuXEMOQFYBucJd8U2kXmFIj-nbgC3GzDTsGZZUgiDKoEpAa8MEFj9mXO2uog==
```

### Example Usage

```yaml
    destination:
      type: influxdb
      version: v1
      parameters:
        url: https://us-east-1-1.aws.cloud2.influxdata.com
        token: $INFLUXDB_TOKEN
        bucket: device-data
        measurement: temp
```

### Example Input

```json
{
  "temp": 32,
  "sensor": {
    "counter": 2,
  }
}
```

### Example Output

```json
temp,device_id=12345678987654321,project_id=my-first-rpoject temp=32,sensor.counter=2 1556813561098000000
```

