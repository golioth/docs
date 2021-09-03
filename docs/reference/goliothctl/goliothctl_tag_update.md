---
id: goliothctl_tag_update
title: "goliothctl tag update"
slug: goliothctl_tag_update
sidebar_label: goliothctl tag update
url: /docs/reference/goliothctl/goliothctl_tag_update/
hide_title: true
---
## goliothctl tag update

Update the name of an existing tag.

```
goliothctl tag update [tag name] [flags]
```

### Examples

```
> goliothctl tag update my-tag --name formally-known-as-my-tag
```

### Options

```
  -h, --help          help for update
      --name string   new tag name
```

### Options inherited from parent commands

```
      --apiUrl string      golioth api server url (default "https://api.golioth.dev")
  -c, --config string      config file (default is $HOME/.golioth/.goliothctl.yaml)
      --projectId string   golioth project id
```

### SEE ALSO

* [goliothctl tag](/docs/reference/goliothctl/goliothctl_tag/)	 - Create, update, and delete tags.

