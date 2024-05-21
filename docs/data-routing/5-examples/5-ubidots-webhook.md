---
title: Ubidots Webhook
---

[Ubidots](https://ubidots.com/) makes it easy to white-label visualizations to
produce a branded version of your service for end customers. You can also create
end-users who have access to their own custom dashboards. This example
demonstrates accepting a CBOR data payload, translating it to JSON, then
delivering it to Ubidots via the [Webhook](/data-routing/destinations/webhook)
data destination.

:::info Reminder
Make sure to replace the `url` with the correct Ubidots URL for your
integration, and create a [secret](/data-routing/secrets) named
`UBIDOTS_API_TOKEN` with your Ubidots API token.
:::

<a href="https://console.golioth.io/pipeline?name=Ubidots%20Webhook&pipeline=ZmlsdGVyOgogIHBhdGg6ICIqIgogIGNvbnRlbnRfdHlwZTogYXBwbGljYXRpb24vY2JvcgpzdGVwczoKICAtIG5hbWU6IHN0ZXAtMAogICAgdHJhbnNmb3JtZXI6CiAgICAgIHR5cGU6IGNib3ItdG8tanNvbgogICAgICB2ZXJzaW9uOiB2MQogICAgZGVzdGluYXRpb246CiAgICAgIHR5cGU6IHdlYmhvb2sKICAgICAgdmVyc2lvbjogdjEKICAgICAgcGFyYW1ldGVyczoKICAgICAgICB1cmw6IGh0dHBzOi8vZGF0YXBsdWdpbi51Ymlkb3RzLmNvbS9hcGkvd2ViLWhvb2svQ3lyVWlKckNXOGJfZ09hbkN5VWZSU2hLcEswPQogICAgICAgIGhlYWRlcnM6CiAgICAgICAgICBYLUF1dGgtVG9rZW46ICRVQklET1RTX0FQSV9UT0tFTg==" target='_blank'>Use this Pipeline</a>

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
        url: https://dataplugin.ubidots.com/api/web-hook/CyrUiJrCW8b_gOanCyUfRShKpK0=
        headers:
          X-Auth-Token: $UBIDOTS_API_TOKEN
```
