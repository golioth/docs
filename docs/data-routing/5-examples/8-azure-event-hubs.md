---
title: Azure Event Hubs
---
import UseThisPipeline from '/docs/_partials-common/usethispipeline.mdx'

[Azure Event Hubs](https://azure.microsoft.com/products/event-hubs) is a cloud
native data streaming service that can stream millions of events per second,
with low latency, from any source to any destination. The [Azure Event Hubs data
destination](/data-routing/destinations/azure-event-hubs) on Golioth accepts
data in any format and delivers it the specified `topic`.

> Azure Event Hubs supports event hubs and topics. Either may be used in the
> `topic` parameter for this example.

This example omits a `content_type` filter and accepts any data payload on any
path, then delivers it to Azure Event Hubs.

:::info Reminder
Make sure to create a [secret](/data-routing/secrets) named
`AZURE_CONNECTION_STRING` that includes a valid [Azure Event Hubs connection
string](https://learn.microsoft.com/azure/event-hubs/event-hubs-get-connection-string).
:::

<UseThisPipeline name="Azure Event Hubs" pipeline="ZmlsdGVyOgogIHBhdGg6ICIqIgpzdGVwczoKICAtIG5hbWU6IHN0ZXAtMAogICAgZGVzdGluYXRpb246CiAgICAgIHR5cGU6IGF6dXJlLWV2ZW50LWh1YnMKICAgICAgdmVyc2lvbjogdjEKICAgICAgcGFyYW1ldGVyczoKICAgICAgICBjb25uX3N0cjogJEFaVVJFX0NPTk5FQ1RJT05fU1RSSU5HCiAgICAgICAgdG9waWM6IGRldmljZS1kYXRh"/>

```yaml
filter:
  path: "*"
steps:
  - name: step-0
    destination:
      type: azure-event-hubs
      version: v1
      parameters:
        conn_str: $AZURE_CONNECTION_STRING
        topic: device-data
```
