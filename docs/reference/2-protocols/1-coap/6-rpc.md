---
id: rpc
title: RPC
---

[Remote Procedure Call (RPC) Service](/device-management/rpc) definitions over
CoAP.

How to use guides:

- [RPC Overview](/device-management/rpc)

## Interface

| Method      | Description                        | Path              | Content Format |
| ----------- | ---------------------------------- | ----------------- | -------------- |
| GET/Observe | Listen for RPCs sent to a device.  | `/.rpc`           | JSON/CBOR      |
| POST        | Report RPC status and return data. | `/.rpc/status`    | JSON/CBOR      |

## RPC Parameters and attributes:

Here is an example of an RPC payload sent to a device by the Golioth server:

```json
{
  "id": "multiply/74e4",
  "method": "multiply",
  "params": [ 7, 191 ]
}
```

| Attribute | Description                                                  |
| --------- | ------------------------------------------------------------ |
| `id`      | String representation of a unique id assigned by the server. |
| `method`  | String indicating the function name called.                  |
| `params`  | Array of input parameters to pass to method.                 |

The `params` may be empty, or contain any combination of values in the following
formats:

- `boolean`
- `float`
- `integer`
- `string`

## RPC Status Parameters and attributes:

The device returns a payload to the Golioth server that includes the status of
the RPC and any data returned by the function:

```json
{
  "id": "multiply/74e4",
  "status": 0,
  "detail": {
    "value": 1337
  }
}
```

| Attribute | Description                                                      |
| --------- | ---------------------------------------------------------------- |
| `id`      | String representation of the unique id received from the server. |
| `status`  | Integer indicating the outcome of the RPC.                       |
| `detail`  | Array of output parameters.                                      |

- For a full list of `status` codes, please see the
  [golioth_rpc_status](https://firmware-sdk-docs.golioth.io/group__golioth__rpc.html)
  enum on the Golioth Firmware SDK doxygen reference.

- The `detail` object may be empty, or contain any combination of key/value
  pairs in the following formats:
    - `boolean`
    - `float`
    - `integer`
    - `string`

