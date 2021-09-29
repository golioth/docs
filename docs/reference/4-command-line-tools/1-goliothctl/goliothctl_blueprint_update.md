---
id: goliothctl_blueprint_update
title: "goliothctl blueprint update"
slug: goliothctl_blueprint_update
sidebar_label: goliothctl blueprint update
url: /docs/reference/goliothctl/goliothctl_blueprint_update/
hide_title: true
---
## goliothctl blueprint update

Update the name of an existing blueprint.

```
goliothctl blueprint update [blueprint name] [flags]
```

### Examples

```
> goliothctl blueprint update my-blueprint --name formally-known-as-my-blueprint
```

### Options

```
  -h, --help          help for update
      --name string   new blueprint name
```

### Options inherited from parent commands

```
      --apiUrl string      golioth api server url (default "https://api.golioth.io")
  -c, --config string      config file (default is $HOME/.golioth/.goliothctl.yaml)
      --projectId string   golioth project id
```

### SEE ALSO

* [goliothctl blueprint](/reference/command-line-tools/goliothctl/goliothctl_blueprint)	 - Create, update, and delete blueprint.

