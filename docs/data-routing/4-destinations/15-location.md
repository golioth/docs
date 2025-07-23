---
title: location
---

|   |   |
|---|:---:|
|__Latest Version__| `v1.0.0` |
|__Input Content Type__| `application/json` |

The `location` destination sends data to [Golioth
Location](/application-services/location). Data must arrive as or be transformed
into a JSON object with the following fields to be successfully delivered.

| Attribute       | Description                                             |
|-----------------|---------------------------------------------------------|
| `latitude`      | Float indicating latitude of device.                    |
| `longitude`     | Float indicating longitude of device.                   |
| `accuracy`      | Integer horizontal positioning accuracy (HPE). (meters) |

In some cases horizontal positioning error (HPE) is unknown or irrelevant and
may be omitted.

### Example Usage

Because Golioth Location is hosted by Golioth, no credentials are required to
deliver data to the service.

```yaml
    destination:
      type: location
      version: v1
```

### Example Input

```json
{
  "latitude": 50.664189000,
  "longitude": 17.942112000,
  "accuracy": 65
}
```

### Example Output

Devices that deliver data to the `location` destination can be displayed on a
map in the [Golioth
console](https://docs.golioth.io/getting-started/golioth-console).

```json
{
  "latitude": 50.664189000,
  "longitude": 17.942112000,
  "accuracy": 65
}
```
