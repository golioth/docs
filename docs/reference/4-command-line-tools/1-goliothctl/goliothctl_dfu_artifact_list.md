---
id: goliothctl_dfu_artifact_list
title: "goliothctl dfu artifact list"
slug: goliothctl_dfu_artifact_list
sidebar_label: goliothctl dfu artifact list
url: /reference/command-line-tools/goliothctl/goliothctl_dfu_artifact_list/
hide_title: true
---
## goliothctl dfu artifact list

List all firmware artifacts that have been registered with Golioth

```
goliothctl dfu artifact list [flags]
```

### Examples

```
# List all firmware artifacts
> goliothctl dfu artifact list
id:"60d20814b53ccd324f1e9fa1" version:"1.5.0" package:"espat"
id:"60d234b3d270946726e284a4" version:"1.4.2" package:"main"
id:"60d234ddd270946726e284a5" version:"1.4.3" package:"main"
```

### Options

```
      --blueprint string   blueprint name
  -h, --help               help for list
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

* [goliothctl dfu artifact](/reference/command-line-tools/goliothctl/goliothctl_dfu_artifact)	 - Artifact management command.

