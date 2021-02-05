---
id: 4-create-project
title: Create a Project
---

### Prerequisites

- `goliothctl` CLI installed
- Authenticated with Golioth - see [Authentication](./3-authentication)

To create a project, you can simply use `goliothctl project create` command with a `--name` parameter.

```
$ goliothctl project create --name "My first project"
```

:::info
Project names must be unique.
:::
