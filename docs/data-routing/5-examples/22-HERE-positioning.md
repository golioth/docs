---
title: HERE Positioning
---
import Pipeline from '@site/src/components/usethispipeline'

[HERE](https://www.here.com/) builds mapping and data tools for enterprises.
HERE's [Positioning API](https://www.here.com/platform/positioning) brings
high-precision location awareness to apps and devices, even in challenging
outdoor environments. The API can easily be accessed via Pipelines using the
[`webhook` transformer](/data-routing/transformers/webhook).

The following example demonstrates using the HERE Positioning API to translate
CBOR Wi-Fi access point data from a device network scan into a position for the
device. The resolved position is delivered to [LightDB
Stream](/application-services/lightdb-stream) as a JSON payload.

Example network scan data:

> CBOR data displayed as JSON for documentation purposes only.

```json
{
  "wlan": [
    {
      "mac": "00:18:39:59:8C:53",
      "rss": -87
    },
    {
      "mac": "00:21:55:61:F3:0A",
      "rss": -86
    },
    {
      "mac": "00:11:5C:6B:9A:00",
      "rss": -71
    }
  ]
}
```

Example position result:
```json
{
    "location": {
        "accuracy": 13,
        "lat": 61.4469261,
        "lng": 23.86456411
    }
}
```

:::info Reminder
Make sure to create a [secret](/data-routing/secrets) named `HERE_URL` with the
appropriate API key credentials.
:::

<Pipeline link='https://console.golioth.io/pipeline?name=HERE%20Positioning&pipeline=ZmlsdGVyOgogIHBhdGg6ICIvbmV0aW5mbyIKICBjb250ZW50X3R5cGU6IGFwcGxpY2F0aW9uL2Nib3IKc3RlcHM6CiAgLSBuYW1lOiBjb252ZXJ0CiAgICB0cmFuc2Zvcm1lcjoKICAgICAgdHlwZTogY2Jvci10by1qc29uCiAgLSBuYW1lOiBnZXQtbG9jYXRpb24KICAgIHRyYW5zZm9ybWVyOgogICAgICB0eXBlOiB3ZWJob29rCiAgICAgIHBhcmFtZXRlcnM6CiAgICAgICAgdXJsOiAkSEVSRV9VUkwKICAtIG5hbWU6IHNlbmQtbGlnaHRkYgogICAgZGVzdGluYXRpb246CiAgICAgIHR5cGU6IGxpZ2h0ZGItc3RyZWFtCiAgICAgIHZlcnNpb246IHYx' />
