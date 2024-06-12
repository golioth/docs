---
id: goliothctl_dfu_release_create
title: "goliothctl dfu release create"
slug: goliothctl_dfu_release_create
sidebar_label: goliothctl dfu release create
url: /reference/command-line-tools/goliothctl/goliothctl_dfu_release_create/
hide_title: true
---
## goliothctl dfu release create

Upload a device firmware release.

```
goliothctl dfu release create [flags]
```

### Examples

```
# Upload a device firmware release
> goliothctl dfu release create --release-tags 1.0.0 --components main@1.0.0 --components modem@1.2.0 --rollout true
```

### Options

```
      --blueprint string           blueprint name
      --components stringArray     components/artifacts with the format {pkg}@{version}
  -h, --help                       help for create
      --release-tags stringArray   release tags
      --rollout string             make release available to devices
      --tags stringArray           device tag names
```

### Options inherited from parent commands

```
      --apiUrl string      golioth api server url (default "https://api.golioth.io")
  -c, --config string      config file (default is $HOME/.golioth/.goliothctl.yaml)
      --projectId string   golioth project id
```

### SEE ALSO

* [goliothctl dfu release](/reference/command-line-tools/goliothctl/goliothctl_dfu_release/)	 - Release management command.

