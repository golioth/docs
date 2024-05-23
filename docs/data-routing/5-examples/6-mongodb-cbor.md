---
title: MongoDB CBOR
---

[MongoDB](https://www.mongodb.com/) stores data as [BSON](https://bsonspec.org/)
documents. However, the [MongoDB data
destination](/data-routing/destinations/mongodb) on Golioth accepts
`application/json` data and handles converting it to BSON before writing it to
the specified MongoDB collection. In this example, device data is sent as CBOR,
then transformed into JSON, before being delivered to the MongoDB data
destination.

:::info Reminder
Make sure to create a [secret](/data-routing/secrets) named `MONGODB_CONN_STR`
that includes a MongoDB connection string with credentials.
:::

<a href="https://console.golioth.io/pipeline?name=MongoDB%20CBOR&pipeline=ZmlsdGVyOgogIHBhdGg6ICIqIgogIGNvbnRlbnRfdHlwZTogYXBwbGljYXRpb24vY2JvcgpzdGVwczoKICAtIG5hbWU6IHN0ZXAtMAogICAgdHJhbnNmb3JtZXI6CiAgICAgIHR5cGU6IGNib3ItdG8tanNvbgogICAgICB2ZXJzaW9uOiB2MQogICAgZGVzdGluYXRpb246CiAgICAgIHR5cGU6IG1vbmdvZGIKICAgICAgdmVyc2lvbjogdjEKICAgICAgcGFyYW1ldGVyczoKICAgICAgICBjb25uX3N0cjogJE1PTkdPREJfQ09OTl9TVFIKICAgICAgICBkYXRhYmFzZTogdGltZXNlcmllcy1kYXRhCiAgICAgICAgY29sbGVjdGlvbjogZGV2aWNlLWRhdGEKICAgICAgICB0aW1lX2ZpZWxkOiB0aW1lc3RhbXAKICAgICAgICBtZXRhX2ZpZWxkOiBtZXRhZGF0YQ==" target='_blank'>Use this Pipeline</a>

```yaml
filter:
  path: "*"
  content_type: application/cbor
steps:
  - name: step-0
    transformer:
      type: cbor-to-json
      version: v1
    destination:
      type: mongodb
      version: v1
      parameters:
        conn_str: $MONGODB_CONN_STR
        database: timeseries-data
        collection: device-data
        time_field: timestamp
        meta_field: metadata
```
