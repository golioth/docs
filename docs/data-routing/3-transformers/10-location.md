---
title: location
---

|   |   |
|---|:---:|
|__Latest Version__| `v1.0.0` |
|__Input Content Type__| `application/json` |
|__Output Content Type__| `application/json` |

The `location` transformer uses [Golioth
Location](/application-services/location) to resolve device position using
network information provided in the data message payload. Network-based
positioning requires information about zero or more cell towers and Wi-Fi access
points. Data must be formatted as described below, and at least one cell tower
or Wi-Fi access point must be provided for successful resolution.

:::info Tip
The `net_info` support in the [Golioth Firmware
SDK](https://github.com/golioth/golioth-firmware-sdk) can be used to structure a
valid payload. See the [location
example](https://github.com/golioth/golioth-firmware-sdk/tree/main/examples/zephyr/location)
for more information.
:::

| Attribute | Description                                                  |
| --------- | ------------------------------------------------------------ |
| `cell`    | Array of cell tower objects.                                 |
| `wifi`    | Array of Wi-Fi access point objects.                         |

#### Cell Tower Format

| Attribute  | Description                                                                        | Required |
|------------|------------------------------------------------------------------------------------|----------|
| `type`     | String indicating type of cellular network (`ltecatm` or `nbiot`                   | ✅       |
| `mcc`      | Integer indicating Mobile Country Code.                                            | ✅       |
| `mnc`      | Integer indicating Mobile Network Code.                                            | ✅       |
| `id`       | Integer indicating EUCID (LTE Cat-M) or Cell ID (NB-Iot).                          | ✅       |
| `strength` | Integer indicating RSRP (LTE Cat-M) or NRSRP (NB-Iot). (dBm)                       |          |
| `lac`      | Integer indicating Tracking Area Code (TAC)                                        |          |
| `age`      | Integer indicating time elapsed since measurement. (ms)                            |          |
| `channel`  | Integer indicating EARFCN.                                                         |          |
| `serving`  | Boolean indicate whether device is currently served by the cell. (default: `false`)|          |
| `lid`      | Integer indicating PCI (LTE Cat-M) or NCID (NB-Iot)                                |          |

#### Wi-Fi Access Point Format

| Attribute   | Description                                                                                      | Required |
|-------------|--------------------------------------------------------------------------------------------------|----------|
| `mac`       | String indicating access point MAC address.                                                      | ✅       |
| `ssid`      | String indicating access point Service Set Identifier.                                           |          |
| `strength`  | Integer indicating signal strength of access point (dBm).                                        |          |
| `age`       | Integer indicating time elapsed since measurement. (ms)                                          |          |
| `frequency` | Integer indicating frequency of access point. (MHz)                                              |          |
| `channel`   | Integer indicating channel number of access point.                                               |          |
| `Connected` | Boolean indicating whether device is currently connected to the access point. (default: `false`) |          |


### Example Usage

```yaml
    transformer:
      type: location
      version: v1
```

### Example Input

```json
{
  "cell": [
    {
      "type": "ltecatm",
      "mcc": 260,
      "mnc": 3,
      "id": 25115045,
      "strength": -113
    },
    {
      "type": "ltecatm",
      "mcc": 260,
      "mnc": 3,
      "id": 25115046,
      "strength": -89
    }
  ],
  "wifi": [
    {
      "mac": "b0:5b:99:d8:0f:f4",
      "rssi": -83
    },
    {
      "mac": "ac:f8:cc:09:b3:16",
      "rssi": -90
    }
  ]
}
```

### Example Output

While output from the `location` transformer can be transformed further and
routed to any number of destinations, the format of the data returned can be
delivered to the [`location` destination](../4-destinations/15-location.md)
without any modification.

```json
{
  "latitude": 50.664189000,
  "longitude": 17.942112000,
  "accuracy": 65
}
```
