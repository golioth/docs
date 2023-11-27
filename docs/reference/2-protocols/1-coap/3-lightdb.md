---
id: lightdb
title: LightDB
---

[LightDB Device Service](/data-handling/stored-data/lightdb-state) definitions over CoAP.

How to use guides:

- [Read Write Data](/data-handling/stored-data/lightdb-state/read-write-data)

### Interface

| Method      | Description         | Path              | Content Format |
| ----------- | ------------------- | ----------------- | -------------- |
| GET/Observe | Read persisted data | `/.d/{path=\*\*}` | JSON/CBOR      |
| POST/PUT    | Create/Update data  | `/.d/{path=\*\*}` | JSON/CBOR      |
| DELETE      | Delete Data         | `/.d/{path=\*\*}` | JSON/CBOR      |

> `path` can be any valid URI sub path. Ex:
>
> /.d/temp/state
>
> /.d/temp/active

The body can be a JSON/CBOR object or a single value in the following formats:

- `boolean`
- `float`
- `integer`
- `string`
