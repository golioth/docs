---
title: aws-sqs
---

|   |   |
|---|:---:|
|__Latest Version__| `v1.0.0` |
|__Input Content Type__| Any |

:::usage
Sending data to AWS SQS incurs usage costs after exceeding the free tier. See
[Golioth pricing](https://golioth.io/pricing) for more information.
:::

The `aws-sqs` destination sends data to an [Amazon Web Services Simple Queue
Service](https://aws.amazon.com/sqs/) queue.

### Parameters

|Parameter|Type|Description|Required|
|---|---|---|:---:|
|`url`|`string`| The URL for the AWS SQS queue. |✅|
|`access_key`|`string`| The access key for authentication. |✅|
|`access_secret`|`string`| The access secret for authentication. |✅|
|`region`|`string`| The AWS region for the SQS queue. |✅|

### Example Secrets

`AWS_ACCESS_SECRET`
```
wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
```

### Example Usage

```yaml
    destination:
      type: aws-sqs
      version: v1
      parameters:
        url: https://sqs.us-east-1.amazonaws.com/177715257436/MyQueue
        access_key: AKIAIOSFODNN7EXAMPLE
        access_secret: $AWS_ACCESS_SECRET
        region: us-east-1
```

### Example Input

```json
{
  "temp": 32
}
```

### Example Output

Data messages delivered to AWS SQS are in the form of a JSON encoded
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
