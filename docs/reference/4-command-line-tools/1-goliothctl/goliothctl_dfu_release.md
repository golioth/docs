---
id: goliothctl_dfu_release
title: "goliothctl dfu release"
slug: goliothctl_dfu_release
sidebar_label: goliothctl dfu release
url: /reference/command-line-tools/goliothctl/goliothctl_dfu_release/
hide_title: true
---
## goliothctl dfu release

Release management command.

```
goliothctl dfu release [flags]
```

### Examples

```
# Create a release with artifact main at version 1.0.0
> goliothctl dfu release create --release-tags 1.0.0 --components main@1.0.0
```

### Options

```
  -h, --help   help for release
```

### Options inherited from parent commands

```
      --apiUrl string      golioth api server url (default "https://api.golioth.io")
  -c, --config string      config file (default is $HOME/.golioth/.goliothctl.yaml)
      --projectId string   golioth project id
```

### SEE ALSO

* [goliothctl dfu](/reference/command-line-tools/goliothctl/goliothctl_dfu/)	 - Firmware management command.
* [goliothctl dfu release create](/reference/command-line-tools/goliothctl/goliothctl_dfu_release_create/)	 - Upload a device firmare release.
* [goliothctl dfu release delete](/reference/command-line-tools/goliothctl/goliothctl_dfu_release_delete/)	 - Delete a release from Golioth.
* [goliothctl dfu release list](/reference/command-line-tools/goliothctl/goliothctl_dfu_release_list/)	 - List all releases that have been registered with Golioth
* [goliothctl dfu release update](/reference/command-line-tools/goliothctl/goliothctl_dfu_release_update/)	 - Update a given release.

