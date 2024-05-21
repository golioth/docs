---
title: path
---

:::info
The path for a data message is the portion of the path targeted by the device
with the `/.s` prefix removed.
:::

The `path` filter is used to specify the which data messages, indicated by their
path, should be routed to a given pipeline. `path` filters may match exactly, or
by using a wildcard (`*`), which indicates that the path must be prefixed by the
characters preceding the wildcard.

For example, the following `path` filter would match all paths.

```yaml
filter:
  path: "*"
```

Trailing slashes are automatically stripped from both the filter and the data
for exact comparison in matching `path` filters. For example, all of the
following `path` filters would match data with path `/temp` or `/temp/`.

```yaml
filter:
  path: "/temp"
```

```yaml
filter:
  path: "/temp/"
```

Trailing slashes are not stripped prior to a wildcard. The following filter
would match `/temp/` and `/temp/celsius`, but not `/temp`.

```yaml
filter:
  path: "/temp/*"
```

A wildcard (`*`) can only be supplied as the final element in a prefix matching
path.
