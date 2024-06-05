---
id: create-project
title: Create a Project
---

#### Prerequisites

- `goliothctl` CLI installed
- Authenticated with Golioth - see [Authentication](./3-authentication.md)

To create a project, simply use `goliothctl project create` command with a `--name` parameter.

```
goliothctl project create --name "My first project"
```

:::note
Project names must be unique.
:::

Then list your projects with the command:

```
$ goliothctl project list
[ ] id:"my-first-project" name:"My first project"
```

Now that the project is created, set it as the default on the CLI:

```
goliothctl config set projectId my-first-project
```
Verify that the project is set correctly by running the command:
```
goliothctl project list
```
Observe that there is now an asterisk between the brackets for your project:
```
[*] id:"my-first-project" name:"My first project"
```

Now you're all set and can start creating devices. Check for more commands to manage projects [here](/reference/command-line-tools/goliothctl/goliothctl_project).
