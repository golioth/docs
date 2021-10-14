---
id: goliothctl_dfu_logs
title: "goliothctl dfu logs"
slug: goliothctl_dfu_logs
sidebar_label: goliothctl dfu logs
url: /reference/command-line-tools/goliothctl/goliothctl_dfu_logs/
hide_title: true
---
## goliothctl dfu logs

List logs related to firmware status of a device

```
goliothctl dfu logs [flags]
```

### Examples

```
# List all logs
> goliothctl dfu logs
[2021-09-14T21:38:57Z] version:"0.0.1"  stateCode:"0"  state:"IDLE"  reasonCode:"0"  reason:"ready state"  device_id:"612d3cecf3ee17d321adbec6"  package:"main"
[2021-09-14T21:38:57Z] version:"0.0.1"  stateCode:"0"  state:"IDLE"  reasonCode:"1"  reason:"firmware updated successfully"  device_id:"612d3cecf3ee17d321adbec6"  package:"main"
[2021-09-14T21:38:57Z] version:"0.0.1"  stateCode:"0"  state:"IDLE"  reasonCode:"7"  reason:"invalid URI"  device_id:"612d3cecf3ee17d321adbec6"  package:"main"
[2021-09-14T18:55:31Z] version:"0.0.1"  stateCode:"0"  state:"IDLE"  reasonCode:"0"  reason:"ready state"  device_id:"612d3cecf3ee17d321adbec6"  package:"main"
```

### Options

```
  -h, --help                help for logs
      --interval duration   return entries not older than this value (ex: 15m,8h,1d) (default 4h0m0s)
      --reason int          reason code - [0-9] (default -1)
      --state string        state code - [idle,downloading,dowloaded,updating]
      --version string      version name
```

### Options inherited from parent commands

```
      --apiUrl string      golioth api server url (default "https://api.golioth.io")
  -c, --config string      config file (default is $HOME/.golioth/.goliothctl.yaml)
      --projectId string   golioth project id
```

### SEE ALSO

* [goliothctl dfu](/reference/command-line-tools/goliothctl/goliothctl_dfu)	 - Firmware management command.

