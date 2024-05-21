---
title: mongodb
---

|   |   |
|---|:---:|
|__Latest Version__| `v1.0.0` |
|__Input Content Type__| `application/json` |

The `mongodb` destination sends data to a [MongoDB Time
Series](https://www.mongodb.com/products/capabilities/time-series) collection.
Data must be supplied as JSON, which will be transformed to BSON after metadata
is injected.

### Parameters

|Parameter|Type|Description|Required|
|---|---|---|:---:|
|`conn_str`|`string`| The connection string for a MongoDB instance. |✅|
|`database`|`string`| The name of the MongoDB database. |✅|
|`collection`|`string`| The name of the MongoDB collection. |✅|
|`time_field`|`string`| The time field for the streaming data. |✅|
|`meta_field`|`string`| The metadata field for the streaming data. |✅|

### Example Secrets

`MONGODB_CONN_STR`
```
mongodb://myDatabaseUser:D1fficultP%40ssw0rd@mongodb0.example.com:27017
```

### Example Usage

```yaml
    destination:
      type: mongodb
      version: v1
      parameters:
        conn_str: $MONGODB_CONN_STR
        database: timeseries-data
        collection: device-data
        time_field: timestamp
        meta_field: metadata
```

### Example Input

```json
{
  "temp": 32
}
```

### Example Output

_BSON data shown as JSON for visualization purposes only._

```json
{
  "data": {
    "temp": 32
  },
  "timestamp": "2021-11-17T03:19:56.186Z",
  "metadata": {
    "device_id": "12345678987654321",
    "project_id": "my-first-project",
  }
}
```
