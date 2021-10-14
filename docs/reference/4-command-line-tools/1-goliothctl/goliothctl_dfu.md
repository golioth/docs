---
id: goliothctl_dfu
title: "goliothctl dfu"
slug: goliothctl_dfu
sidebar_label: goliothctl dfu
url: /reference/command-line-tools/goliothctl/goliothctl_dfu/
hide_title: true
---
## goliothctl dfu

Firmware management command.

```
goliothctl dfu [flags]
```

### Examples

```
# Upload a firmware artifact
> goliothctl dfu create firmware.bin --version 1.0.0
```

### Options

```
  -h, --help   help for dfu
```

### Options inherited from parent commands

```
      --apiUrl string      golioth api server url (default "https://api.golioth.io")
  -c, --config string      config file (default is $HOME/.golioth/.goliothctl.yaml)
      --projectId string   golioth project id
```

### SEE ALSO

* [goliothctl](/reference/command-line-tools/goliothctl)	 - Manage Golioth platform resources and developer workflow.
* [goliothctl dfu artifact](/reference/command-line-tools/goliothctl/goliothctl_dfu_artifact)	 - Artifact management command.
* [goliothctl dfu logs](/reference/command-line-tools/goliothctl/goliothctl_dfu_logs)	 - List logs related to firmware status of a device
* [goliothctl dfu release](/reference/command-line-tools/goliothctl/goliothctl_dfu_release)	 - Release management command.

