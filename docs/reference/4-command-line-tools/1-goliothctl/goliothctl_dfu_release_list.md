---
id: goliothctl_dfu_release_list
title: "goliothctl dfu release list"
slug: goliothctl_dfu_release_list
sidebar_label: goliothctl dfu release list
url: /reference/command-line-tools/goliothctl/goliothctl_dfu_release_list/
hide_title: true
---
## goliothctl dfu release list

List all releases that have been registered with Golioth

```
goliothctl dfu release list [flags]
```

### Examples

```
# List all releases
> goliothctl dfu release list
id:"60d20814b53ccd324f1e9fa1" release_tag:"1.5.0" device_tags:"development"
id:"60d234b3d270946726e284a4" release_tag:"1.4.2" device_tags:"stage"
id:"60d234ddd270946726e284a5" release_tag:"1.4.3"
```

### Options

```
      --blueprint string           blueprint name
  -h, --help                       help for list
      --release-tags stringArray   release tags
      --rollout string             list releases with rollout flag true/false
      --tags stringArray           tag names
```

### Options inherited from parent commands

```
      --apiUrl string      golioth api server url (default "https://api.golioth.io")
  -c, --config string      config file (default is $HOME/.golioth/.goliothctl.yaml)
      --projectId string   golioth project id
```

### SEE ALSO

* [goliothctl dfu release](/reference/command-line-tools/goliothctl/goliothctl_dfu_release/)	 - Release management command.

