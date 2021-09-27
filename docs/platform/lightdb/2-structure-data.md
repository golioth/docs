---
id: structure-data
title: Structuring Data
---

All data on Light DB is stored as JSON like objects. You can think of it as a cloud-hosted JSON tree.

There are no concepts of tables or records. When you add data to the JSON tree, it becomes a node in the existing JSON structure with an associated key. You can set any arbitrary keys and values inside that tree.

### Example on how to structure data

Let's consider an Asset Tracking application: 
- Each device tracks the GPS position of an individual asset 
- There is an optional geofence set up on the device to trigger an alert.

The device will post data to the `gps` and `cell` paths. We will monitor its position and connectivity status. On the other side, an external party can set the geofence and the device can read that as a configuration. With the externally posted information, the device will calculate if it is `inside` or `outside` of the given geofence and report that data back to the network.

```
{
  "gps": { // Updated by the device
    "latitude": 12.34,
    "longitude": 12.34,
    "speed" : 5,
    "valid" true
  },
  "cell": { // Updated by the device
    "signal": -55
  },
  "geofence": { // Read by the device
    "latitude": 12.34,
    "longitude": 12.34,
    "radius" : 5
  },
  "geofenceStatus" : "inside"  // Calculated and set by the device
}
```
