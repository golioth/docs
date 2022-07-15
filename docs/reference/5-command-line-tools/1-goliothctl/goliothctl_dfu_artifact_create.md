---
id: goliothctl_dfu_artifact_create
title: "goliothctl dfu artifact create"
slug: goliothctl_dfu_artifact_create
sidebar_label: goliothctl dfu artifact create
url: /reference/command-line-tools/goliothctl/goliothctl_dfu_artifact_create/
hide_title: true
---
## goliothctl dfu artifact create

Upload a device artifact artifact.

```
goliothctl dfu artifact create <file> [flags]
```

### Examples

```
# Upload a device artifact artifact
> goliothctl dfu artifact create artifact.bin --version 1.0.0
```

### Options

```
      --blueprint string   blueprint name
  -h, --help               help for create
      --pkg string         artifact package
      --version string     artifact version
```

### Options inherited from parent commands

```
      --apiUrl string      golioth api server url (default "https://api.golioth.io")
  -c, --config string      config file (default is $HOME/.golioth/.goliothctl.yaml)
      --projectId string   golioth project id
```

### SEE ALSO

* [goliothctl dfu artifact](/reference/command-line-tools/goliothctl/goliothctl_dfu_artifact/)	 - Artifact management command.

