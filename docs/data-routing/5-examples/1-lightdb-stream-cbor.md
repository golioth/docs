---
title: LightDB Stream CBOR
---

This simple example matches on any CBOR data message, transforms the payload to
JSON, then delivers it to [LightDB
Stream](/application-services/lightdb-stream).

<a href="https://console.golioth.io/pipeline?name=LightDB%20Stream%20CBOR&pipeline=ZmlsdGVyOgogIHBhdGg6ICIqIgogIGNvbnRlbnRfdHlwZTogYXBwbGljYXRpb24vY2JvcgpzdGVwczoKICAtIG5hbWU6IHN0ZXAtMAogICAgdHJhbnNmb3JtZXI6CiAgICAgIHR5cGU6IGNib3ItdG8tanNvbgogICAgICB2ZXJzaW9uOiB2MQogICAgZGVzdGluYXRpb246CiAgICAgIHR5cGU6IGxpZ2h0ZGItc3RyZWFtCiAgICAgIHZlcnNpb246IHYx" target='_blank'>Use this Pipeline</a>

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
      type: lightdb-stream
      version: v1
```
