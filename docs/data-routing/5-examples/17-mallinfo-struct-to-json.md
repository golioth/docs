---
title: mallinfo to LightDB Stream
---
import Pipeline from '@site/src/components/usethispipeline'

The [Struct-to-JSON transformer](/data-routing/transformers/struct-to-json) can
be used to convert structured binary data, such as that created by packed C
structs, into JSON, according to a user provided schema. Sending structured
binary data from the device is particularly suited to cases where bandwidth is
severely constrained, the data is in a well-defined standard format, or the
structure of the data is unlikely to change.

This example demonstrates converting data returned by a call to [`mallinfo2()`
](https://man7.org/linux/man-pages/man3/mallinfo.3.html) on a 64-bit Linux
system into JSON for ingestion into LightDB Stream, where the data can be
analyzed to assess dynamic memory usage of the program. As the data returned by
`mallinfo2()` is both well-defined and unlikely to change structure, this data
is a good candidate for sending as structured binary data, saving bandwidth and
CPU cycles on the embedded device.

<Pipeline link='https://console.golioth.io/pipeline?name=mallinfo&pipeline=ZmlsdGVyOgogIHBhdGg6ICIvbWFsbGluZm8iCiAgY29udGVudF90eXBlOiBhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0Kc3RlcHM6CiAgLSBuYW1lOiBzdGVwMAogICAgdHJhbnNmb3JtZXI6CiAgICAgIHR5cGU6IHN0cnVjdC10by1qc29uCiAgICAgIHZlcnNpb246IHYxCiAgICAgIHBhcmFtZXRlcnM6CiAgICAgICAgbWVtYmVyczoKICAgICAgICAgIC0gbmFtZTogYXJlbmEKICAgICAgICAgICAgdHlwZTogdTY0CiAgICAgICAgICAtIG5hbWU6IG9yZGJsa3MKICAgICAgICAgICAgdHlwZTogdTY0CiAgICAgICAgICAtIG5hbWU6IHNtYmxrcwogICAgICAgICAgICB0eXBlOiB1NjQKICAgICAgICAgIC0gbmFtZTogaGJsa3MKICAgICAgICAgICAgdHlwZTogdTY0CiAgICAgICAgICAtIG5hbWU6IGhibGtoZAogICAgICAgICAgICB0eXBlOiB1NjQKICAgICAgICAgIC0gbmFtZTogdXNtYmxrcwogICAgICAgICAgICB0eXBlOiB1NjQKICAgICAgICAgIC0gbmFtZTogZnNtYmxrcwogICAgICAgICAgICB0eXBlOiB1NjQKICAgICAgICAgIC0gbmFtZTogdW9yZGJsa3MKICAgICAgICAgICAgdHlwZTogdTY0CiAgICAgICAgICAtIG5hbWU6IGZvcmRibGtzCiAgICAgICAgICAgIHR5cGU6IHU2NAogICAgICAgICAgLSBuYW1lOiBrZWVwY29zdAogICAgICAgICAgICB0eXBlOiB1NjQKICAgIGRlc3RpbmF0aW9uOgogICAgICB0eXBlOiBsaWdodGRiLXN0cmVhbQogICAgICB2ZXJzaW9uOiB2MQ==' />
