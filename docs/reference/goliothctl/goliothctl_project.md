---
id: goliothctl_project
title: "goliothctl project"
slug: goliothctl_project
sidebar_label: goliothctl project
url: /docs/reference/goliothctl/goliothctl_project/
hide_title: true
---
## goliothctl project

Access and manage project information.

### Synopsis

Use the `goliothctl project` subcommands to access and update projects. Projects contains things like devices and LightDB instances.

```
goliothctl project [flags]
```

### Examples

```
# Create a new project
> goliothctl project create my-project

# Update the project's name
> goliothctl project update formally-known-as-my-project

# Delete the current project
> goliothctl project delete

# Set the current project to something else (project ID is not the same as project name)
> goliothctl config set projectId <project-id>
```

### Options

```
  -h, --help   help for project
```

### Options inherited from parent commands

```
      --apiUrl string      golioth api server url (default "https://api.golioth.io")
  -c, --config string      config file (default is $HOME/.golioth/.goliothctl.yaml)
      --projectId string   golioth project id
```

### SEE ALSO

* [goliothctl](/docs/reference/goliothctl/goliothctl/)	 - Manage Golioth platform resources and developer workflow.
* [goliothctl project create](/docs/reference/goliothctl/goliothctl_project_create/)	 - Create a project.
* [goliothctl project delete](/docs/reference/goliothctl/goliothctl_project_delete/)	 - Delete the current project.
* [goliothctl project list](/docs/reference/goliothctl/goliothctl_project_list/)	 - List all projects associated with your Golioth account.
* [goliothctl project update](/docs/reference/goliothctl/goliothctl_project_update/)	 - Change the name associated with the current project.

