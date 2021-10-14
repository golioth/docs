---
id: goliothctl_dfu_release_update
title: "goliothctl dfu release update"
slug: goliothctl_dfu_release_update
sidebar_label: goliothctl dfu release update
url: /reference/command-line-tools/goliothctl/goliothctl_dfu_release_update/
hide_title: true
---
## goliothctl dfu release update

Update a given release.

```
goliothctl dfu release update <version> [flags]
```

### Examples

```
> goliothctl dfu release update --release-tags v1.1.0 --addDeviceTag production --rmDeviceTag development
```

### Options

```
      --addDeviceTag stringArray    add device tag
      --addReleaseTag stringArray   add release tag
  -h, --help                        help for update
      --id string                   release id
      --release-tags stringArray    release tags
      --rmDeviceTag stringArray     remove device tag
      --rmReleaseTag stringArray    remove release tag
      --rollout string              make release available to devices
```

### Options inherited from parent commands

```
      --apiUrl string      golioth api server url (default "https://api.golioth.io")
  -c, --config string      config file (default is $HOME/.golioth/.goliothctl.yaml)
      --projectId string   golioth project id
```

### SEE ALSO

* [goliothctl dfu release](/reference/command-line-tools/goliothctl/goliothctl_dfu_release)	 - Release management command.

