---
title: InfluxDB CBOR
---
import Pipeline from '@site/src/components/usethispipeline'

[InfluxDB](https://www.influxdata.com/) records data points using [line
protocol](https://docs.influxdata.com/influxdb/v2/reference/syntax/line-protocol/).
However, the [InfluxDB data destination](/data-routing/destinations/influxdb) on
Golioth accepts `application/json` data and handles converting it to line
protocol before writing it to the specified InfluxDB bucket. In this example,
device data is sent as CBOR, then transformed into JSON, before being delivered
to the InfluxDB data destination.

:::info Reminder
Make sure to create a [secret](/data-routing/secrets) named `INFLUXDB_TOKEN`
that includes an [InfluxDB API
token](https://docs.influxdata.com/influxdb/v2/admin/tokens/).
:::

<Pipeline link='https://console.golioth.io/pipeline?name=InfluxDB%20CBOR&pipeline=ZmlsdGVyOgogIHBhdGg6ICIqIgogIGNvbnRlbnRfdHlwZTogYXBwbGljYXRpb24vY2JvcgpzdGVwczoKICAtIG5hbWU6IHN0ZXAtMAogICAgdHJhbnNmb3JtZXI6CiAgICAgIHR5cGU6IGNib3ItdG8tanNvbgogICAgICB2ZXJzaW9uOiB2MQogICAgZGVzdGluYXRpb246CiAgICAgIHR5cGU6IGluZmx1eGRiCiAgICAgIHZlcnNpb246IHYxCiAgICAgIHBhcmFtZXRlcnM6CiAgICAgICAgdXJsOiBodHRwczovL3VzLWVhc3QtMS0xLmF3cy5jbG91ZDIuaW5mbHV4ZGF0YS5jb20KICAgICAgICB0b2tlbjogJElORkxVWERCX1RPS0VOCiAgICAgICAgYnVja2V0OiBkZXZpY2VfZGF0YQogICAgICAgIG1lYXN1cmVtZW50OiB0ZW1w' />
