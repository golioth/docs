---
title: gcp-cloud-storage
---

|   |   |
|---|:---:|
|__Latest Version__| `v1.0.0` |
|__Input Content Type__| Any |

:::usage
Sending data to GCP Cloud Storage incurs usage costs after exceeding the free
tier. See [Golioth pricing](https://golioth.io/pricing) for more information.
:::

The `gcp-cloud-storage` destination sends data to a [Google Cloud Platform Cloud
Storage](https://cloud.google.com/cloud-storage) bucket.

### Parameters

|Parameter|Type|Description|Required|
|---|---|---|:---:|
|`service_account`|`string`| The GCP Service Account key used for authentication. |✅|
|`name`|`string`| The name of the GCP Cloud Storage bucket. |✅|

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
      type: gcp-cloud-storage
      version: v1
      parameters:
        service_account: $GCP_SERVICE_ACCOUNT
        name: my-bucket
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

Input data is uploaded to the Google Cloud Storage bucket as an
[object](https://cloud.google.com/storage/docs/objects) with content unmodified.

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
