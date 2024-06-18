---
title: Memfault
---
import Pipeline from '@site/src/components/usethispipeline'

[Memfault](https://memfault.com/) is an embedded device observability platform
that automatically collects coredumps, logs, and metric data. Pipelines can be
used to deliver [chunk
data](https://docs.memfault.com/docs/mcu/data-from-firmware-to-the-cloud/)
supplied by the Memfault [firmware
SDK](https://github.com/memfault/memfault-firmware-sdk) to the Memfault platform
using a device's existing connection to Golioth.

The following example demonstrates forwarding chunk data sent to the `/mflt`
path to Memfault. No transformers are necessary as the binary data is uploaded
unmodified.

:::info Reminder
Make sure to create a [secret](/data-routing/secrets) named
`MEMFAULT_PROJECT_KEY` with a valid [Memfault project
key](https://docs.memfault.com/docs/platform/data-routes/).
:::

<Pipeline link='https://console.golioth.io/pipeline?name=Memfault&pipeline=ZmlsdGVyOgogIHBhdGg6ICIvbWZsdCIKICBjb250ZW50X3R5cGU6IGFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbQpzdGVwczoKICAtIG5hbWU6IHN0ZXAwCiAgICBkZXN0aW5hdGlvbjoKICAgICAgdHlwZTogbWVtZmF1bHQKICAgICAgdmVyc2lvbjogdjEKICAgICAgcGFyYW1ldGVyczoKICAgICAgICBwcm9qZWN0X2tleTogJE1FTUZBVUxUX1BST0pFQ1RfS0VZ' />
