---
id: lightdb
title: LightDB
---

[LightDB Device Service](/cloud/services/lightdb) definitions over CoAP.

How to use guides:

- [Read Write Data](/cloud/services/lightdb/read-write-data)

### Interface

| Method    | Description                  | Path            | Content Format |
| --------- | ---------------------------- | --------------- | -------------- |
| Subscribe | Read persisted data          | /.d/{path=\*\*} | JSON           |
| Publish   | Create/Update data           | /.d/{path=\*\*} | JSON           |
| Publish   | Delete Data if body is empty | /.d/{path=\*\*} | JSON           |

> `path` can be any valid URI sub path. Ex:
>
> /.d/temp/state
>
> /.d/temp/active

The body can be a JSON object or a single value in the following formats:

- `boolean`
- `float`
- `integer`
- `string`
