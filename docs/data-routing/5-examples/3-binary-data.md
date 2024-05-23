---
title: Binary Data
---
import UseThisPipeline from '/docs/_partials-common/usethispipeline.mdx'

While sending in a semi-structured format, whether text-based with JSON or
binary with CBOR, can allow for parsing and transformation without any
pre-communicated structure, it also incurs additional overhead. Structured data
formats, such as [Protocol Buffers](https://protobuf.dev/), [packed C
structures](https://www.gnu.org/software/c-intro-and-ref/manual/html_node/Packed-Structures.html),
or custom binary encoding, can be useful in constrained environments and can
lead to significant bandwidth savings, especially in high volume scenarios.

Many [destinations](/data-routing/destinations) support arbitrary data content
types, making it possible to deliver raw structured data from devices to the
external service. This example inlcudes a minimal pipeline that ingests binary
data (`application/octet-stream`) from devices and delivers it to a custom
[Webhook](/data-routing/destinations/webhook) data destination that requires
authentication via an API token.

:::info Reminder
Make sure to create a [secret](/data-routing/secrets) named `EXAMPLE_API_TOKEN`
to use this example, or replace with the appropriate authentication mechanism
for your webhook target.
:::

<UseThisPipeline name="Simple Binary Webhook" pipeline="ZmlsdGVyOgogIHBhdGg6ICIqIgogIGNvbnRlbnRfdHlwZTogYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtCnN0ZXBzOgogIC0gbmFtZTogc3RlcC0wCiAgICBkZXN0aW5hdGlvbjoKICAgICAgdHlwZTogd2ViaG9vawogICAgICB2ZXJzaW9uOiB2MQogICAgICBwYXJhbWV0ZXJzOgogICAgICAgIHVybDogaHR0cHM6Ly93ZWJob29rLmV4YW1wbGUuY29tCiAgICAgICAgaGVhZGVyczoKICAgICAgICAgIHgtYXBpLXRva2VuOiAkRVhBTVBMRV9BUElfVE9LRU4="/>

```yaml
filter:
  path: "*"
  content_type: application/octet-stream
steps:
  - name: step-0
    destination:
      type: webhook
      version: v1
      parameters:
        url: https://webhook.example.com
        headers:
          x-api-token: $EXAMPLE_API_TOKEN
```
