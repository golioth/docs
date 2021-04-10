---
id: goliothctl
title: "goliothctl"
slug: goliothctl
sidebar_label: goliothctl
url: /docs/reference/goliothctl/goliothctl/
hide_title: true
---
## goliothctl

Manage Golioth platform resources and developer workflow.

### Synopsis

The goliothctl CLI manages authentication, developer workflow, interactions with the platform, local configuration and more.

```
goliothctl [flags]
```

### Examples

```
# List Projects
goliothctl project list

# Set current project
goliothctl config set projectId my-first-project

# List devices
goliothctl device list

# Provision device and credentials
goliothctl provision --hwId "DE:AD:BE:EF" --name "My first device" --credId "deadbeef-id"  --psk "supersecret"
```

### Options

```
      --apiUrl string      golioth api server url (default "https://api.golioth.dev")
  -c, --config string      config file (default is $HOME/.goliothctl.yaml)
  -h, --help               help for goliothctl
      --projectId string   golioth project id
```

### SEE ALSO

* [goliothctl apikeys](/docs/reference/goliothctl/goliothctl_apikeys/)	 - Access API Keys information
* [goliothctl config](/docs/reference/goliothctl/goliothctl_config/)	 - Set global goliothctl config
* [goliothctl device](/docs/reference/goliothctl/goliothctl_device/)	 - Access device information
* [goliothctl lightdb](/docs/reference/goliothctl/goliothctl_lightdb/)	 - Access data on Light DB
* [goliothctl login](/docs/reference/goliothctl/goliothctl_login/)	 - Authenticate with golioth system
* [goliothctl logout](/docs/reference/goliothctl/goliothctl_logout/)	 - Remove credentials from local config
* [goliothctl logs](/docs/reference/goliothctl/goliothctl_logs/)	 - Show device logs (from the last 4h by default)
* [goliothctl project](/docs/reference/goliothctl/goliothctl_project/)	 - Access and manage project information
* [goliothctl provision](/docs/reference/goliothctl/goliothctl_provision/)	 - Provision devices and credentials
* [goliothctl updates](/docs/reference/goliothctl/goliothctl_updates/)	 - Send/Trigger device updates

