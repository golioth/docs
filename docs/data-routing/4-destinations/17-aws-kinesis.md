---
title: aws-kinesis
---

|   |   |
|---|:---:|
|__Latest Version__| `v1.0.0` |
|__Input Content Type__| Any |

:::usage
Sending data to Kinesis incurs usage costs after exceeding the free tier. See
[Golioth pricing](https://golioth.io/pricing) for more information.
:::

The `aws-kinesis` destination sends data to an [Amazon Web Services
Kinesis](https://aws.amazon.com/kinesis/) Data Stream.

### Parameters

|Parameter|Type|Description|Required|
|---|---|---|:---:|
|`stream_arn`|`string`| The [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) of the Kinesis Data Stream. |✅|
|`access_key`|`string`| The access key for authentication. |✅|
|`access_secret`|`string`| The access secret for authentication. |✅|
|`region`|`string`| The AWS region for the Kinesis Data Stream. |✅|

The device ID is used as the data stream [partition
key](https://docs.aws.amazon.com/streams/latest/dev/key-concepts.html#partition-key).

### Example Secrets

`AWS_ACCESS_SECRET`
```
wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
```

### Example Usage

```yaml
    destination:
      type: aws-kinesis
      version: v1
      parameters:
        stream_arn: my-bucket
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

Output data will match input data exactly, regardless of content type. Because
message metadata is not automatically injected into the payload, it is common to
use a transformer such as
[`inject-metadata`](/data-routing/transformers/inject-metadata) with the
`aws-kinesis` data destination.

```json
{
  "temp": 32
}
```

