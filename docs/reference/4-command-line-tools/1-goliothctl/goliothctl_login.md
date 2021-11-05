---
id: goliothctl_login
title: "goliothctl login"
slug: goliothctl_login
sidebar_label: goliothctl login
url: /reference/command-line-tools/goliothctl/goliothctl_login/
hide_title: true
---
## goliothctl login

Authenticate with Golioth.

### Synopsis

Use `goliothctl login` subcommand for either manual login through the browser or authentication through an API Key.

The login information will be stored in a local secure keystore if available. Otherwise, the data will be stored in `~/.golioth.`

```
goliothctl login [flags]
```

### Examples

```
# Login manually through the browser
> goliothctl login

# Login through API Key without opening the browser
> goliothctl login --apiKey Qdn59uyHDMJWw0qKIHEDsMjID9gA85Gp

In this case the API Key must be generated before through goliothctl or web console.

```

### Options

```
      --apiKey string   api key
  -h, --help            help for login
```

### Options inherited from parent commands

```
      --apiUrl string      golioth api server url (default "https://api.golioth.io")
  -c, --config string      config file (default is $HOME/.golioth/.goliothctl.yaml)
      --projectId string   golioth project id
```

### SEE ALSO

* [goliothctl](/reference/command-line-tools/goliothctl/goliothctl/)	 - Manage Golioth platform resources and developer workflow.

