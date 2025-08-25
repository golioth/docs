---
title: content_type
---

:::info
Common content types include `application/cbor`, `application/json`, and
`application/octet-stream`. For a full list of content types, see [IANA media
types](https://www.iana.org/assignments/media-types/media-types.xhtml).
:::

The `content_type` filter is used to specify which data messages, indicated by
the format of their content, should be routed to a given pipeline. When
provided, the `content_type` filter must match exactly. For example, the
following `content_type` filter would only match data messages with content type
`application/cbor` exactly.

```yaml
filter:
  content_type: "application/cbor"
```
