---
title: LightDB Stream CBOR
---
import UseThisPipeline from '/docs/_partials-common/usethispipeline.mdx'

This simple example matches on any CBOR data message, transforms the payload to
JSON, then delivers it to [LightDB
Stream](/application-services/lightdb-stream).

<UseThisPipeline name="LightDB Stream CBOR" pipeline="ZmlsdGVyOgogIHBhdGg6ICIqIgogIGNvbnRlbnRfdHlwZTogYXBwbGljYXRpb24vY2JvcgpzdGVwczoKICAtIG5hbWU6IHN0ZXAtMAogICAgdHJhbnNmb3JtZXI6CiAgICAgIHR5cGU6IGNib3ItdG8tanNvbgogICAgICB2ZXJzaW9uOiB2MQogICAgZGVzdGluYXRpb246CiAgICAgIHR5cGU6IGxpZ2h0ZGItc3RyZWFtCiAgICAgIHZlcnNpb246IHYx"/>

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
