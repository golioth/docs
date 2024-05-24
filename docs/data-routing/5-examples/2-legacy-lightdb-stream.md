---
title: Legacy LightDB Stream
---
import Pipeline from '@site/src/components/usethispipeline'

This example demonstrates using two pipelines to support legacy [LightDB
Stream](/application-services/lightdb-stream) behavior. These pipelines match on
all CBOR and JSON data respectively. Both utilize the
[`batch`](/data-routing/destinations/batch) destination to support splitting a
single message into multiple. For the CBOR pipeline, if data is split in
`step-1`, the resulting messages will be delivered to the JSON pipeline as their
`content_type` is set to `application/json` via the
[`cbor-to-json`](/data-routing/transformers/cbor-to-json) transformer in
`step-0`. In the JSON pipeline, if data is split in `step-0`, the resulting
messages will be delivered to the same JSON pipeline.

The [`extract-timestamp`](/data-routing/transformers/extract-timestamp) and
[`inject-path`](/data-routing/transformers/inject-path) transformers are used in
both pipelines to alter the data message prior to delivery to LightDB Stream.

<Pipeline link='https://console.golioth.io/pipeline?name=Legacy%20LightDB%20Stream%20CBOR&pipeline=ZmlsdGVyOgogIHBhdGg6ICIqIgogIGNvbnRlbnRfdHlwZTogYXBwbGljYXRpb24vY2JvcgpzdGVwczoKICAtIG5hbWU6IHN0ZXAtMAogICAgdHJhbnNmb3JtZXI6CiAgICAgIHR5cGU6IGNib3ItdG8tanNvbgogICAgICB2ZXJzaW9uOiB2MQogIC0gbmFtZTogc3RlcC0xCiAgICBkZXN0aW5hdGlvbjoKICAgICAgdHlwZTogYmF0Y2gKICAgICAgdmVyc2lvbjogdjEKICAtIG5hbWU6IHN0ZXAtMgogICAgdHJhbnNmb3JtZXI6CiAgICAgIHR5cGU6IGV4dHJhY3QtdGltZXN0YW1wCiAgICAgIHZlcnNpb246IHYxCiAgLSBuYW1lOiBzdGVwLTMKICAgIHRyYW5zZm9ybWVyOgogICAgICB0eXBlOiBpbmplY3QtcGF0aAogICAgICB2ZXJzaW9uOiB2MQogICAgZGVzdGluYXRpb246CiAgICAgIHR5cGU6IGxpZ2h0ZGItc3RyZWFtCiAgICAgIHZlcnNpb246IHYx' />

<Pipeline link='https://console.golioth.io/pipeline?name=Legacy%20LightDB%20Stream%20JSON&pipeline=ZmlsdGVyOgogIHBhdGg6ICIqIgogIGNvbnRlbnRfdHlwZTogYXBwbGljYXRpb24vanNvbgpzdGVwczoKICAtIG5hbWU6IHN0ZXAtMAogICAgZGVzdGluYXRpb246CiAgICAgIHR5cGU6IGJhdGNoCiAgICAgIHZlcnNpb246IHYxCiAgLSBuYW1lOiBzdGVwLTEKICAgIHRyYW5zZm9ybWVyOgogICAgICB0eXBlOiBleHRyYWN0LXRpbWVzdGFtcAogICAgICB2ZXJzaW9uOiB2MQogIC0gbmFtZTogc3RlcC0yCiAgICB0cmFuc2Zvcm1lcjoKICAgICAgdHlwZTogaW5qZWN0LXBhdGgKICAgICAgdmVyc2lvbjogdjEKICAgIGRlc3RpbmF0aW9uOgogICAgICB0eXBlOiBsaWdodGRiLXN0cmVhbQogICAgICB2ZXJzaW9uOiB2MQ==' />
