---
title: azure-event-hubs
---

|   |   |
|---|:---:|
|__Latest Version__| `v1.0.0` |
|__Input Content Type__| Any |

:::usage
Sending data to Azure Event Hubs incurs usage costs after exceeding the free
tier. See [Golioth pricing](https://golioth.io/pricing) for more information.
:::

The `azure-event-hubs` destination sends data to an [Azure Event
Hubs](https://azure.microsoft.com/products/event-hubs) event hub or topic.

### Parameters

|Parameter|Type|Description|Required|
|---|---|---|:---:|
|`conn_str`|`string`| The connection string for an Azure Event Hubs instance. |✅|
|`topic`|`string`| The topic name. |✅|

### Example Secrets

`EVENT_HUB_CONN_STR`
```
Endpoint=sb://<NamespaceName>.servicebus.windows.net/;SharedAccessKeyName=<KeyName>;SharedAccessKey=<KeyValue>
```

### Example Usage

```yaml
    destination:
      type: azure-event-hubs
      version: v1
      parameters:
        conn_str: $EVENT_HUB_CONN_STR
        topic: myehub
```

### Example Input

```json
{
  "temp": 32
}
```

### Example Output

Data messages delivered to Azure Event Hubs are in the form of a JSON encoded
[CloudEvent](https://cloudevents.io/). If the device data payload is
`application/json`, it will be included as a nested JSON object under the `data`
key.

```json
{
  "specversion": "1.0",
  "id": "aa12dc4c-c5ed-4b46-92e5-5a726f4daa81",
  "source": "12345678987654321",
  "type": "io.golioth.data.v1/.s/sensor",
  "subject": "my-first-project",
  "datacontenttype": "application/json",
  "time": "2022-01-27T16:17:06.458868Z",
  "data": {"temp": 32}
}
```

Payloads with non-JSON content will be base64 encoded and present in the
`data_base64` field of the JSON object.

```yaml
{
  "specversion": "1.0",
  "id": "aa12dc4c-c5ed-4b46-92e5-5a726f4daa81",
  "source": "12345678987654321",
  "type": "io.golioth.data.v1/.s/sensor",
  "subject": "my-first-project",
  "datacontenttype": "application/octet-stream",
  "time": "2022-01-27T16:17:06.458868Z",
  "data_base64": "aHR0cHM6Ly9nb2xpb3RoLmlvL2NhcmVlcnMK"
}
```
