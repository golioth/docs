---
title: Edge Impulse
---
import Pipeline from '@site/src/components/usethispipeline'

[Edge Impulse](https://edgeimpulse.com/) streamlines the creation of AI and
machine learning models for edge hardware, allowing devices to make decisions
and offer insight where data is gathered.

As part of the partnership between Golioth and Edge Impulse, [the Golioth Edge
Impulse Demo](https://github.com/golioth/example-edge-impulse) details how the
two platforms work well together to stream classification results to the cloud,
and collect raw sensor readings for future model training.

## Sending Classification Results to LightDB Stream

The following example demonstrates sending classification readings to [LightDB
Stream](/application-services/lightdb-stream) as a CBOR payload using `class` as
the path.

Example classification data:

> CBOR data displayed as JSON for documentation purposes only.

```json
{
  "idle": 0.28515625,
  "snake": 0.16796875,
  "updown": 0.21875,
  "wave": 0.328125
}
```

<Pipeline link='https://console.golioth.io/pipeline?name=Class%20LightDB%20Stream&pipeline=ZmlsdGVyOgogIHBhdGg6ICIvY2xhc3MiCiAgY29udGVudF90eXBlOiBhcHBsaWNhdGlvbi9jYm9yCnN0ZXBzOgogIC0gbmFtZTogY29udmVydC1zZW5kCiAgICB0cmFuc2Zvcm1lcjoKICAgICAgdHlwZTogY2Jvci10by1qc29uCiAgICAgIHZlcnNpb246IHYxCiAgICBkZXN0aW5hdGlvbjoKICAgICAgdHlwZTogbGlnaHRkYi1zdHJlYW0KICAgICAgdmVyc2lvbjogdjE=' />

## Sending Raw Accelerometer Readings to Amazon S3

The example demonstrates sending raw accelerometer readings as binary
(octet-stream) data to an [Amazon Web Services S3](https://aws.amazon.com/s3/)
bucket.

Details on how the device sends raw data to Golioth are available in the
firmware example, specifically:

- [function call to start data
  upload](https://github.com/golioth/example-edge-impulse/blob/adc12f747e4c7f31b837d1d8243918943d4bfb18/src/main.cpp#L231-L240)
- [asynchronous callback used during block
  upload](https://github.com/golioth/example-edge-impulse/blob/adc12f747e4c7f31b837d1d8243918943d4bfb18/src/main.cpp#L97-L114)

:::info

Make sure to create [secrets](/data-routing/secrets) named `AWS_ACCESS_KEY` and
`AWS_SECRET_KEY` with the appropriate credentials. Replace `<my-bucket-name>`
and `<my-bucket-region>` with values that match your S3 bucket.

:::

<Pipeline link='https://console.golioth.io/pipeline?name=Accel%20S3&pipeline=ZmlsdGVyOgogIHBhdGg6ICIvYWNjZWwiCnN0ZXBzOgogIC0gbmFtZTogc2VuZC1zMwogICAgZGVzdGluYXRpb246CiAgICAgIHR5cGU6IGF3cy1zMwogICAgICB2ZXJzaW9uOiB2MQogICAgICBwYXJhbWV0ZXJzOgogICAgICAgIG5hbWU6IDxteS1idWNrZXQtbmFtZT4KICAgICAgICBhY2Nlc3Nfa2V5OiAkQVdTX0FDQ0VTU19LRVkKICAgICAgICBhY2Nlc3Nfc2VjcmV0OiAkQVdTX1NFQ1JFVF9LRVkKICAgICAgICByZWdpb246IDxteS1idWNrZXQtcmVnaW9uPg==' />
