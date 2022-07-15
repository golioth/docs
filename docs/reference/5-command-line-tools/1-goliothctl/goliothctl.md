---
id: goliothctl
title: "goliothctl"
slug: goliothctl
sidebar_label: goliothctl
url: /reference/command-line-tools/goliothctl/goliothctl/
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
      --apiUrl string      golioth api server url (default "https://api.golioth.io")
  -c, --config string      config file (default is $HOME/.golioth/.goliothctl.yaml)
  -h, --help               help for goliothctl
      --projectId string   golioth project id
```

### SEE ALSO

* [goliothctl apikeys](/reference/command-line-tools/goliothctl/goliothctl_apikeys/)	 - Access API Keys information.
* [goliothctl blueprint](/reference/command-line-tools/goliothctl/goliothctl_blueprint/)	 - Create, update, and delete blueprint.
* [goliothctl config](/reference/command-line-tools/goliothctl/goliothctl_config/)	 - The `goliothctl config` subcommands are used to get and set values in the current local goliothctl config.
* [goliothctl device](/reference/command-line-tools/goliothctl/goliothctl_device/)	 - Use the `goliothctl device` subcommands to add, remove, list, and update data associated with devices.
* [goliothctl dfu](/reference/command-line-tools/goliothctl/goliothctl_dfu/)	 - Firmware management command.
* [goliothctl lightdb](/reference/command-line-tools/goliothctl/goliothctl_lightdb/)	 - Access data on Light DB
* [goliothctl login](/reference/command-line-tools/goliothctl/goliothctl_login/)	 - Authenticate with Golioth.
* [goliothctl logout](/reference/command-line-tools/goliothctl/goliothctl_logout/)	 - Log out of Golioth manually.
* [goliothctl logs](/reference/command-line-tools/goliothctl/goliothctl_logs/)	 - Show device logs (from the last 4h by default)
* [goliothctl project](/reference/command-line-tools/goliothctl/goliothctl_project/)	 - Access and manage project information.
* [goliothctl provision](/reference/command-line-tools/goliothctl/goliothctl_provision/)	 - Create a device and provision it with credentials.
* [goliothctl stream](/reference/command-line-tools/goliothctl/goliothctl_stream/)	 - Access the data in a LightDB Stream.
* [goliothctl tag](/reference/command-line-tools/goliothctl/goliothctl_tag/)	 - Create, update, and delete tags.
* [goliothctl updates](/reference/command-line-tools/goliothctl/goliothctl_updates/)	 - Trigger device updates.
* [goliothctl version](/reference/command-line-tools/goliothctl/goliothctl_version/)	 - Show CLI Version

