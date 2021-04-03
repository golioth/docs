To create a project, use `goliothctl project create` command with a `--name` parameter.

```
goliothctl project create --name "My first project"
```

:::note
Project names must be globally unique.
:::

You can list your projects with the `list` command:

```
$ goliothctl project list
[ ] id:"my-first-project" name:"My first project"
```

With a newly-created the project you set the default project with the CLI:

```
goliothctl config set projectId my-first-project
```
