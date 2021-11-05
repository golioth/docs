---
id: goliothctl_dfu_artifact_delete
title: "goliothctl dfu artifact delete"
slug: goliothctl_dfu_artifact_delete
sidebar_label: goliothctl dfu artifact delete
url: /reference/command-line-tools/goliothctl/goliothctl_dfu_artifact_delete/
hide_title: true
---
## goliothctl dfu artifact delete

Delete an artifact from Golioth.

```
goliothctl dfu artifact delete <version> [flags]
```

### Examples

```
# Delete an artifact by version
> goliothctl dfu artifact delete v1.4.0
```

### Options

```
      --blueprint string   blueprint name
  -h, --help               help for delete
      --pkg string         artifact package
      --version string     version name
```

### Options inherited from parent commands

```
      --apiUrl string      golioth api server url (default "https://api.golioth.io")
  -c, --config string      config file (default is $HOME/.golioth/.goliothctl.yaml)
      --projectId string   golioth project id
```

### SEE ALSO

* [goliothctl dfu artifact](/reference/command-line-tools/goliothctl/goliothctl_dfu_artifact/)	 - Artifact management command.

