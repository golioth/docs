---
title: Google Geolocation
---
import Pipeline from '@site/src/components/usethispipeline'

[Google's Geolocation
API](https://developers.google.com/maps/documentation/geolocation/overview) uses
cell tower and Wi-Fi access point data to determine the latitude and longitude
of a device. The API can easily be accessed via Pipelines using the [`webhook`
transformer](/data-routing/transformers/webhook).

The following example demonstrates using the Google Geolocation API to translate
CBOR Wi-Fi access point data from a device network scan into a position for the
device. The resolved position is delivered to [LightDB
Stream](/application-services/lightdb-stream) as a JSON payload. The
[`json-patch` transformer](/data-routing/transformers/json-patch) is leveraged
to allow for using the same device payload as the [HERE Positioning
example](/data-routing/examples/HERE-positioning) to produce the same JSON
output.

Example network scan data:

> CBOR data displayed as JSON for documentation purposes only.

```json
{
  "wlan": [
    {
      "mac": "3c:37:86:5d:75:d4",
      "rss": -35
    },
    {
      "mac": "30:86:2d:c4:29:d0",
      "rss": -35
    },
    {
      "mac": "30:22:96:6B:9A:11",
      "rss": -22
    }
  ]
}
```

Example position result:
```json
{
  "location": {
    "accuracy": 20,
    "lat": 37.4241224,
    "lng": -122.0915874
  }
}
```

:::info Reminder
Make sure to create a [secret](/data-routing/secrets) named `GOOGLE_GEO_API_URL`
with the appropriate API key credentials.
:::

<Pipeline link='https://console.golioth.io/pipeline?name=Google%20Geolocation&pipeline=ZmlsdGVyOgogIHBhdGg6ICIvbmV0aW5mbyIKICBjb250ZW50X3R5cGU6IGFwcGxpY2F0aW9uL2Nib3IKc3RlcHM6CiAgLSBuYW1lOiBjb252ZXJ0CiAgICB0cmFuc2Zvcm1lcjoKICAgICAgdHlwZTogY2Jvci10by1qc29uCiAgLSBuYW1lOiB0cmFuc2Zvcm0tZ29vZ2xlLWdlbwogICAgdHJhbnNmb3JtZXI6CiAgICAgIHR5cGU6IGpzb24tcGF0Y2gKICAgICAgcGFyYW1ldGVyczoKICAgICAgICBwYXRjaDogfAogICAgICAgICAgWwogICAgICAgICAgICB7Im9wIjogImFkZCIsICJwYXRoIjogIi93aWZpQWNjZXNzUG9pbnRzIiwgInZhbHVlIjogW3sibWFjQWRkcmVzcyI6ICIiLCAic2lnbmFsU3RyZW5ndGgiOiAwfSwgeyJtYWNBZGRyZXNzIjogIiIsICJzaWduYWxTdHJlbmd0aCI6IDB9LCB7Im1hY0FkZHJlc3MiOiAiIiwgInNpZ25hbFN0cmVuZ3RoIjogMH1dfSwKICAgICAgICAgICAgeyJvcCI6ICJtb3ZlIiwgImZyb20iOiAiL3dsYW4vMC9tYWMiLCAicGF0aCI6ICIvd2lmaUFjY2Vzc1BvaW50cy8wL21hY0FkZHJlc3MifSwKICAgICAgICAgICAgeyJvcCI6ICJtb3ZlIiwgImZyb20iOiAiL3dsYW4vMC9yc3MiLCAicGF0aCI6ICIvd2lmaUFjY2Vzc1BvaW50cy8wL3NpZ25hbFN0cmVuZ3RoIn0sCiAgICAgICAgICAgIHsib3AiOiAibW92ZSIsICJmcm9tIjogIi93bGFuLzEvbWFjIiwgInBhdGgiOiAiL3dpZmlBY2Nlc3NQb2ludHMvMS9tYWNBZGRyZXNzIn0sCiAgICAgICAgICAgIHsib3AiOiAibW92ZSIsICJmcm9tIjogIi93bGFuLzEvcnNzIiwgInBhdGgiOiAiL3dpZmlBY2Nlc3NQb2ludHMvMS9zaWduYWxTdHJlbmd0aCJ9LAogICAgICAgICAgICB7Im9wIjogIm1vdmUiLCAiZnJvbSI6ICIvd2xhbi8yL21hYyIsICJwYXRoIjogIi93aWZpQWNjZXNzUG9pbnRzLzIvbWFjQWRkcmVzcyJ9LAogICAgICAgICAgICB7Im9wIjogIm1vdmUiLCAiZnJvbSI6ICIvd2xhbi8yL3JzcyIsICJwYXRoIjogIi93aWZpQWNjZXNzUG9pbnRzLzIvc2lnbmFsU3RyZW5ndGgifSwKICAgICAgICAgICAgeyJvcCI6ICJyZW1vdmUiLCAicGF0aCI6ICIvd2xhbiJ9CiAgICAgICAgICBdCiAgLSBuYW1lOiBnZXQtbG9jYXRpb24KICAgIHRyYW5zZm9ybWVyOgogICAgICB0eXBlOiB3ZWJob29rCiAgICAgIHBhcmFtZXRlcnM6CiAgICAgICAgdXJsOiAkR09PR0xFX0dFT19BUElfVVJMCiAgLSBuYW1lOiB0cmFuc2Zvcm0tc3RhbmRhcmQtbG9jCiAgICB0cmFuc2Zvcm1lcjoKICAgICAgdHlwZToganNvbi1wYXRjaAogICAgICBwYXJhbWV0ZXJzOgogICAgICAgIHBhdGNoOiB8CiAgICAgICAgICBbCiAgICAgICAgICAgIHsib3AiOiAiYWRkIiwgInBhdGgiOiAiL2xvY2F0aW9uL2FjY3VyYWN5IiwgInZhbHVlIjogMH0sCiAgICAgICAgICAgIHsib3AiOiAibW92ZSIsICJmcm9tIjogIi9hY2N1cmFjeSIsICJwYXRoIjogIi9sb2NhdGlvbi9hY2N1cmFjeSJ9CiAgICAgICAgICBdCiAgLSBuYW1lOiBzZW5kLWxpZ2h0ZGIKICAgIGRlc3RpbmF0aW9uOgogICAgICB0eXBlOiBsaWdodGRiLXN0cmVhbQogICAgICB2ZXJzaW9uOiB2MQ==' />
