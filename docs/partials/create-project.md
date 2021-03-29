To create a project, you can simply use `goliothctl project create` command with a `--name` parameter.

```
goliothctl project create --name "My first project"
```

:::note
Project names must be unique.
:::

Them you list your projects with the command:

```
$ goliothctl project list
[ ] id:"my-first-project" name:"My first project"
```

Now that you created the project, you need to set it as the default on the CLI:

```
goliothctl config set projectId my-first-project
```
