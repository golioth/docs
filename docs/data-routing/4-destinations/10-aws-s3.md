---
title: aws-s3
---

|   |   |
|---|:---:|
|__Latest Version__| `v1.0.0` |
|__Input Content Type__| Any |

:::usage
Sending data to S3 incurs usage costs after exceeding the free tier. See
[Golioth pricing](https://golioth.io/pricing) for more information.
:::

The `aws-s3` destination sends data to an [Amazon Web Services
S3](https://aws.amazon.com/s3/) bucket.

### Parameters

|Parameter|Type|Description|Required|
|---|---|---|:---:|
|`name`|`string`| The name of the AWS S3 bucket. |✅|
|`access_key`|`string`| The access key for authentication. |✅|
|`access_secret`|`string`| The access secret for authentication. |✅|
|`region`|`string`| The AWS region for the AWS S3 bucket. |✅|

### Example Secrets

`AWS_ACCESS_SECRET`
```
wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
```

### Example Usage

```yaml
    destination:
      type: aws-s3
      version: v1
      parameters:
        name: my-bucket
        access_key: AKIAIOSFODNN7EXAMPLE
        access_secret: $AWS_ACCESS_SECRET
        region: us-east-1
```

### Example Input

> Binary data displayed as hex encoded for documentation purposes only.

```
00000000: 5249 4646 ffff ffff 5741 5645 666d 7420  RIFF....WAVEfmt
00000010: 1000 0000 0100 0100 c05d 0000 80bb 0000  .........]......
00000020: 0200 1000 6461 7461 ffff ffff eaff edff  ....data........
00000030: f0ff f5ff f9ff feff 0100 0300 0800 0b00  ................
00000040: 0b00 0c00 0a00 0800 0500 0100 fbff f8ff  ................
```

### Example Output

Input data is uploaded to the AWS S3 bucket as an
[object](https://docs.aws.amazon.com/AmazonS3/latest/userguide/uploading-downloading-objects.html)
with content unmodified.

> Binary data displayed as hex encoded for documentation purposes only.

```
00000000: 5249 4646 ffff ffff 5741 5645 666d 7420  RIFF....WAVEfmt
00000010: 1000 0000 0100 0100 c05d 0000 80bb 0000  .........]......
00000020: 0200 1000 6461 7461 ffff ffff eaff edff  ....data........
00000030: f0ff f5ff f9ff feff 0100 0300 0800 0b00  ................
00000040: 0b00 0c00 0a00 0800 0500 0100 fbff f8ff  ................
```

Objects are created with name matching the event ID in a directory with
name matching the device ID. An example directory structure is shown below.

```
/
├─ 664b9e889a9590ccfcf822b3/
│  ├─ 28ebd981-80ae-467f-b700-ba00e7c1e3ee
│  ├─ e47e5b46-d4e3-4bf1-a413-9fc71ec9f6b0
│  ├─ ...
├─ 66632a45658c93af0895a70e/
├─ .../
```
