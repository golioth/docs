---
id: goliothctl_dfu_release_delete
title: "goliothctl dfu release delete"
slug: goliothctl_dfu_release_delete
sidebar_label: goliothctl dfu release delete
url: /reference/command-line-tools/goliothctl/goliothctl_dfu_release_delete/
hide_title: true
---
## goliothctl dfu release delete

Delete a release from Golioth.

```
goliothctl dfu release delete [flags]
```

### Examples

```
# Delete a release by release tag
> goliothctl dfu release delete --release-tags v1.4.0
```

### Options

```
  -h, --help                       help for delete
      --id string                  release id
      --release-tags stringArray   release tags
```

### Options inherited from parent commands

```
      --apiUrl string      golioth api server url (default "https://api.golioth.io")
  -c, --config string      config file (default is $HOME/.golioth/.goliothctl.yaml)
      --projectId string   golioth project id
```

### SEE ALSO

* [goliothctl dfu release](/reference/command-line-tools/goliothctl/goliothctl_dfu_release)	 - Release management command.

