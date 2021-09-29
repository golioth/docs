---
id: goliothctl_blueprint
title: "goliothctl blueprint"
slug: goliothctl_blueprint
sidebar_label: goliothctl blueprint
url: /docs/reference/goliothctl/goliothctl_blueprint/
hide_title: true
---
## goliothctl blueprint

Create, update, and delete blueprint.

### Synopsis

Use the `goliothctl blueprint` subcommands to create, delete, and update blueprint. Blueprints can exist independently from devices.

```
goliothctl blueprint [flags]
```

### Examples

```
# Create a blueprint
> goliothctl blueprint create --name my-blueprint

# Update it
> goliothctl blueprint update my-blueprint --name formally-known-as-my-blueprint

# Delete it
> goliothctl blueprint delete formally-known-as-my-blueprint
```

### Options

```
  -h, --help   help for blueprint
```

### Options inherited from parent commands

```
      --apiUrl string      golioth api server url (default "https://api.golioth.io")
  -c, --config string      config file (default is $HOME/.golioth/.goliothctl.yaml)
      --projectId string   golioth project id
```

### SEE ALSO

* [goliothctl](/docs/reference/goliothctl/goliothctl/)	 - Manage Golioth platform resources and developer workflow.
* [goliothctl blueprint create](/docs/reference/goliothctl/goliothctl_blueprint_create/)	 - Create a blueprint.
* [goliothctl blueprint delete](/docs/reference/goliothctl/goliothctl_blueprint_delete/)	 - Delete a blueprint.
* [goliothctl blueprint list](/docs/reference/goliothctl/goliothctl_blueprint_list/)	 - Show all blueprints.
* [goliothctl blueprint update](/docs/reference/goliothctl/goliothctl_blueprint_update/)	 - Update the name of an existing blueprint.

