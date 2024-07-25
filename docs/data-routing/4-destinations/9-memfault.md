---
title: memfault
---

|   |   |
|---|:---:|
|__Latest Version__| `v1.0.0` |
|__Input Content Type__| `application/octet-stream` |

:::usage
Sending data to Memfault incurs usage costs after exceeding the free tier. See
[Golioth pricing](https://golioth.io/pricing) for more information.
:::

The `memfault` destination uploads [chunk
data](https://docs.memfault.com/docs/mcu/data-from-firmware-to-the-cloud/) to
[Memfault](https://memfault.com/).

:::info
The Golioth device ID will be used as its serial number on Memfault.
:::

### Parameters

|Parameter|Type|Description|Required|
|---|---|---|:---:|
|`project_key`|`string`| The Memfault [project key](https://docs.memfault.com/docs/platform/data-routes/) for chunk uploads. |✅|

### Example Secrets

`MEMFAULT_PROJECT_KEY`
```
FOQnIsDwjLasMuOfTRhtwLLPLEuJC2aM
```

### Example Usage

```yaml
    destination:
      type: memfault
      version: v1
      parameters:
        project_key: $MEMFAULT_PROJECT_KEY
```

### Example Input

> Binary data displayed as hex encoded for documentation purposes only.

```
00000000: a702 0103 0107 6944 3132 3334 3536 3738  ......iD12345678
00000010: 0a65 6e72 6635 3209 6531 2e30 2e33 0663  .enrf52.e1.0.3.c
00000020: 6576 7404 a101 8d1a 0036 ee80 0019 4e20  evt......6....N
00000030: 1a00 0927 c018 c803 190b b800 0a04 0038  ...'...........8
00000040: 3519 03e8
```

### Example Output

Input data is sent to Memfault unmodified.

> Binary data displayed as hex encoded for documentation purposes only.

```
00000000: a702 0103 0107 6944 3132 3334 3536 3738  ......iD12345678
00000010: 0a65 6e72 6635 3209 6531 2e30 2e33 0663  .enrf52.e1.0.3.c
00000020: 6576 7404 a101 8d1a 0036 ee80 0019 4e20  evt......6....N
00000030: 1a00 0927 c018 c803 190b b800 0a04 0038  ...'...........8
00000040: 3519 03e8
```
