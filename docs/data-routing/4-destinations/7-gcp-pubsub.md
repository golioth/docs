---
title: gcp-pubsub
---

|   |   |
|---|:---:|
|__Latest Version__| `v1.0.0` |
|__Input Content Type__| Any |

The `gcp-pubsub` destination sends data to a [Google Cloud Platform PubSub](https://cloud.google.com/pubsub) topic.

### Parameters

|Parameter|Type|Description|Required|
|---|---|---|:---:|
|`service_account`|`string`| The GCP Service Account key used for authentication. |✅|
|`topic`|`string`| The name of the GCP PubSub topic. |✅|

### Example Secrets

`GCP_SERVICE_ACCOUNT`
```
{
  "type": "service_account",
  "project_id": "my-gcp-project",
  "private_key_id": "87984ikjddkpda896fa8932jk2",
  "private_key": "-----BEGIN RSA PRIVATE KEY-----.....",
  "client_email": "test-account@my-gcp-project.iam.gserviceaccount.com",
  "client_id": "75091285748954182",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/test-account%40my-gcp-projec.iam.gserviceaccount.com"
}
```

### Example Usage

```yaml
    destination:
      type: gcp-pubsub
      version: v1
      parameters:
        service_account: $GCP_SERVICE_ACCOUNT
        topic: projects/my-project/topics/my-topic
```

### Example Input

```json
{
  "temp": 32
}
```

### Example Output

Data messages delivered to GCP PubSub are in the form of a JSON encoded
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
