---
id: goliothctl_dfu_artifact
title: "goliothctl dfu artifact"
slug: goliothctl_dfu_artifact
sidebar_label: goliothctl dfu artifact
url: /reference/command-line-tools/goliothctl/goliothctl_dfu_artifact/
hide_title: true
---
## goliothctl dfu artifact

Artifact management command.

```
goliothctl dfu artifact [flags]
```

### Examples

```
# Upload a firmware artifact
> goliothctl dfu artifact create firmware.bin --version 1.0.0
```

### Options

```
  -h, --help   help for artifact
```

### Options inherited from parent commands

```
      --apiUrl string      golioth api server url (default "https://api.golioth.io")
  -c, --config string      config file (default is $HOME/.golioth/.goliothctl.yaml)
      --projectId string   golioth project id
```

### SEE ALSO

* [goliothctl dfu](/reference/command-line-tools/goliothctl/goliothctl_dfu/)	 - Firmware management command.
* [goliothctl dfu artifact create](/reference/command-line-tools/goliothctl/goliothctl_dfu_artifact_create/)	 - Upload a device artifact artifact.
* [goliothctl dfu artifact delete](/reference/command-line-tools/goliothctl/goliothctl_dfu_artifact_delete/)	 - Delete an artifact from Golioth.
* [goliothctl dfu artifact list](/reference/command-line-tools/goliothctl/goliothctl_dfu_artifact_list/)	 - List all firmware artifacts that have been registered with Golioth

