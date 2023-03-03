---
id: goliothctl_credentials
title: "goliothctl credentials"
slug: goliothctl_credentials
sidebar_label: goliothctl credentials
url: /reference/command-line-tools/goliothctl/goliothctl_credentials/
hide_title: true
---
## goliothctl credentials

Use the `goliothctl credentials` subcommands to list and delete devices credentials.

```
goliothctl credentials [flags]
```

### Examples

```
# List a device credentials
> goliothctl credentials list --name my-device

# Delete a device credentials
> goliothctl credentials delete <credential-id>
```

### Options

```
  -h, --help   help for credentials
```

### Options inherited from parent commands

```
      --apiUrl string      golioth api server url (default "https://api.golioth.io")
  -c, --config string      config file (default is $HOME/.golioth/.goliothctl.yaml)
      --projectId string   golioth project id
```

### SEE ALSO

* [goliothctl](/reference/command-line-tools/goliothctl/goliothctl/)	 - Manage Golioth platform resources and developer workflow.
* [goliothctl credentials delete](/reference/command-line-tools/goliothctl/goliothctl_credentials_delete/)	 - Delete a device credential.
* [goliothctl credentials list](/reference/command-line-tools/goliothctl/goliothctl_credentials_list/)	 - List credentials associated with a device.

