---
title: Location
---

import Pipeline from '@site/src/components/usethispipeline'

[Golioth Location](/application-services/location) is a comprehensive device
positioning service, making it possible to determine and track device location
via a variety of sources, including GNSS and network information. The following
examples demonstrate the flexibility of leveraging Golioth Location in
Pipelines.

## Network-Based Positioning

[Network-based
positioning](/application-services/location/network-based-positioning) resolves
device location from delivered network information, such as cell tower and Wi-Fi
access point data. In the following example, the `location` transformer is used
to obtain position, which is then used to update the device location via the
`location` destination, before being recorded to [LightDB
Stream](/application-services/lightdb-stream).

<Pipeline link='https://console.golioth.io/pipeline?name=Network-Based%20Positioning&pipeline=ZmlsdGVyOgogIHBhdGg6ICIqIgogIGNvbnRlbnRfdHlwZTogYXBwbGljYXRpb24vY2JvcgpzdGVwczoKICAtIG5hbWU6IGNvbnZlcnQtdG8tanNvbgogICAgdHJhbnNmb3JtZXI6CiAgICAgIHR5cGU6IGNib3ItdG8tanNvbgogICAgICB2ZXJzaW9uOiB2MQogIC0gbmFtZTogcmVzb2x2ZS1wb3NpdGlvbgogICAgdHJhbnNmb3JtZXI6CiAgICAgIHR5cGU6IGxvY2F0aW9uCiAgICAgIHZlcnNpb246IHYxCiAgLSBuYW1lOiBzdG9yZS1sb2NhdGlvbgogICAgZGVzdGluYXRpb246CiAgICAgIHR5cGU6IGxvY2F0aW9uCiAgICAgIHZlcnNpb246IHYxCiAgLSBuYW1lOiBzdHJlYW0tbG9jYXRpb24KICAgIGRlc3RpbmF0aW9uOgogICAgICB0eXBlOiBsaWdodGRiLXN0cmVhbQogICAgICB2ZXJzaW9uOiB2MQ==&enabled=1' />

## Returning Location to Devices

When using [network-based
positioning](/application-services/location/network-based-positioning), devices
are not made aware of their position because it is calculated in Pipelines. The
following example builds on the previous one, adding a step to update [LightDB
State](/application-services/lightdb-state), which allows a device to fetch its
own current position using the [Golioth Firmware
SDK](/reference/device-api/api-docs/lightdb).

<Pipeline link='https://console.golioth.io/pipeline?name=Network-Based%20Positioning%20with%20State&pipeline=ZmlsdGVyOgogIHBhdGg6ICIqIgogIGNvbnRlbnRfdHlwZTogYXBwbGljYXRpb24vY2JvcgpzdGVwczoKICAtIG5hbWU6IGNvbnZlcnQtdG8tanNvbgogICAgdHJhbnNmb3JtZXI6CiAgICAgIHR5cGU6IGNib3ItdG8tanNvbgogICAgICB2ZXJzaW9uOiB2MQogIC0gbmFtZTogcmVzb2x2ZS1wb3NpdGlvbgogICAgdHJhbnNmb3JtZXI6CiAgICAgIHR5cGU6IGxvY2F0aW9uCiAgICAgIHZlcnNpb246IHYxCiAgLSBuYW1lOiBzdG9yZS1sb2NhdGlvbgogICAgZGVzdGluYXRpb246CiAgICAgIHR5cGU6IGxvY2F0aW9uCiAgICAgIHZlcnNpb246IHYxCiAgLSBuYW1lOiBzdHJlYW0tbG9jYXRpb24KICAgIGRlc3RpbmF0aW9uOgogICAgICB0eXBlOiBsaWdodGRiLXN0cmVhbQogICAgICB2ZXJzaW9uOiB2MQogIC0gbmFtZTogc2V0LXN0YXRlCiAgICBkZXN0aW5hdGlvbjoKICAgICAgdHlwZTogbGlnaHRkYi1zdGF0ZQogICAgICB2ZXJzaW9uOiB2MQ==&enabled=1' />


## Traditional (GNSS) Positioning

In the following example, a device with GNSS capabilities streams its position
to Golioth without requiring a resolution step. The location information is
still delivered to Golioth Location via the `location` destination, and is
recorded in LightDB Stream. Pairing this pipeline with one of the preceding
examples demonstrates how devices can seamlessly transition between GNSS and
network-based positioning while presenting location data in a consistent manner.

<Pipeline link='https://console.golioth.io/pipeline?name=GNSS%20Location&pipeline=ZmlsdGVyOgogIHBhdGg6ICIqIgogIGNvbnRlbnRfdHlwZTogYXBwbGljYXRpb24vY2JvcgpzdGVwczoKICAtIG5hbWU6IGNvbnZlcnQtdG8tanNvbgogICAgdHJhbnNmb3JtZXI6CiAgICAgIHR5cGU6IGNib3ItdG8tanNvbgogICAgICB2ZXJzaW9uOiB2MQogIC0gbmFtZTogc3RvcmUtbG9jYXRpb24KICAgIGRlc3RpbmF0aW9uOgogICAgICB0eXBlOiBsb2NhdGlvbgogICAgICB2ZXJzaW9uOiB2MQogIC0gbmFtZTogc3RyZWFtLWxvY2F0aW9uCiAgICBkZXN0aW5hdGlvbjoKICAgICAgdHlwZTogbGlnaHRkYi1zdHJlYW0KICAgICAgdmVyc2lvbjogdjE=&enabled=1' />

