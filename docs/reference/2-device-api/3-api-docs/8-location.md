---
id: location
title: Location
---

[Golioth Location](/application-services/location) API definitions.

## Interface

| Method      | Description                                       | Path              | Content Format |
| ----------- | ------------------------------------------------- | ----------------- | -------------- |
| POST        | Resolve location using network-based positioning. | `/.l/v1/net`      | JSON/CBOR      |


## Network Positioning Request Format

Network-based positioning requests may include both cell tower and Wi-Fi access
point information. At least one cell tower or Wi-Fi access point is required for
successful resolution.

| Attribute | Description                                                  |
| --------- | ------------------------------------------------------------ |
| `cell`      | Array of cell tower objects. |
| `wifi`  | Array of Wi-Fi access point objects.                  |


An example request with both cellular and Wi-Fi network data is provided below.

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

### Cell Tower Format

| Attribute  | Description                                                                        | Required |
|------------|------------------------------------------------------------------------------------|----------|
| `type`     | String indicating type of cellular network (`ltecatm` or `nbiot`                   | X        |
| `mcc`      | Integer indicating Mobile Country Code.                                            | X        |
| `mnc`      | Integer indicating Mobile Network Code.                                            | X        |
| `id`       | Integer indicating EUCID (LTE Cat-M) or Cell ID (NB-Iot).                          | X        |
| `strength` | Integer indicating RSRP (LTE Cat-M) or NRSRP (NB-Iot). (dBm)                            |          |
| `lac`      | Integer indicating Tracking Area Code (TAC)                                        |          |
| `age`      | Integer indicating age of measurement. (ms)                                             |          |
| `channel`  | Integer indicating EARFCN.                                                         |          |
| `serving`  | Boolean indicate whether device is currently served by the cell. (default: `false`) |          |
| `lid`      | Integer indicating PCI (LTE Cat-M) or NCID (NB-Iot)                                |          |

### Wi-Fi Access Point Format

| Attribute   | Description                                                                                      | Required |
|-------------|--------------------------------------------------------------------------------------------------|----------|
| `mac`       | String indicating access point MAC address.                                                      | X        |
| `ssid`      | String indicating access point Service Set Identifier.                                           |          |
| `strength`  | Integer indicating signal strength of access point (dBm).                                        |          |
| `age`       | Integer indicating age of measurement. (ms)                                                      |          |
| `frequency` | Integer indicating frequency of access point. (MHz)                                              |          |
| `channel`   | Integer indicating channel number of access point.                                               |          |
| `Connected` | Boolean indicating whether device is currently connected to the access point. (default: `false`) |          |

## Network Positioning Response Format

| Attribute | Description                                             |
|-----------|---------------------------------------------------------|
| `lat`     | Integer indicating latitude of device. (nanodegrees)    |
| `lon`     | Integer indicating longitude of device. (nanodegrees)   |
| `acc`     | Integer horizontal positioning accuracy (HPE). (meters) |

An example response is provided below.

```json
{
  "lat": 50664189000,
  "lon": 17942112000,
  "acc": 65
}
```
