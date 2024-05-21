---
title: cbor-to-json
---

|   |   |
|---|:---:|
|__Latest Version__| `v1.0.0` |
|__Input Content Type__| `application/cbor` |
|__Output Content Type__| `application/json` |

The `cbor-to-json` transformer converts data in the Concise Binary Object
Representation (CBOR) to JSON. If the content type of the input data is not
CBOR, or the content itself is not valid CBOR, the message will be dropped.

### Example Usage

```yaml
    transformer:
      type: cbor-to-json
      version: v1
```

### Example Input

_CBOR data shown as hex encoded for visualiztion purposes only._

```
A1             # map(1)
   64          # text(4)
      74656D70 # "temp"
   18 20       # unsigned(32)
```

### Example Output

```json
{
  "temp": 32
}
```
