---
title: Datacake Webhook
---
import UseThisPipeline from '/docs/_partials-common/usethispipeline.mdx'

[Datacake](https://datacake.co/) is a multi-purpose, low-code IoT platform that
requires no programming skills and minimal time to create custom IoT
applications that can be brought into a white label IoT solution at the push of
a button. This example demonstrates accepting a CBOR data payload, translating
it to JSON, then delivering it to Datacake via the
[Webhook](/data-routing/destinations/webhook) data destination.

:::info Reminder
Make sure to replace the `url` with the correct Datacake URL for your product.
:::

<UseThisPipeline name="Datacake Webhook" pipeline="ZmlsdGVyOgogIHBhdGg6ICIqIgogIGNvbnRlbnRfdHlwZTogYXBwbGljYXRpb24vY2JvcgpzdGVwczoKICAtIG5hbWU6IHN0ZXAtMAogICAgdHJhbnNmb3JtZXI6CiAgICAgIHR5cGU6IGNib3ItdG8tanNvbgogICAgICB2ZXJzaW9uOiB2MQogICAgZGVzdGluYXRpb246CiAgICAgIHR5cGU6IHdlYmhvb2sKICAgICAgdmVyc2lvbjogdjEKICAgICAgcGFyYW1ldGVyczoKICAgICAgICB1cmw6IGh0dHBzOi8vYXBpLmRhdGFjYWtlLmNvL2ludGVncmF0aW9ucy9hcGkvODVjODY3ZDctOWFkYy00NjEzLTk0NmMtYzY0ZmNlYmExZTdmLw=="/>

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
      type: webhook
      version: v1
      parameters:
        url: https://api.datacake.co/integrations/api/85c867d7-9adc-4613-946c-c64fceba1e7f/
```
