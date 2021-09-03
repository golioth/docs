---
id: goliothctl_login
title: "goliothctl login"
slug: goliothctl_login
sidebar_label: goliothctl login
url: /docs/reference/goliothctl/goliothctl_login/
hide_title: true
---
## goliothctl login

Authenticate with Golioth manually.

### Synopsis

Running `goliothctl login` will open a browser window and ask you to securely log into or create an account with Golioth.

The login information will be stored in a local secure keystore if available. Otherwise, the data will be stored in `~/.golioth.`

```
goliothctl login [flags]
```

### Options

```
  -h, --help   help for login
```

### Options inherited from parent commands

```
      --apiUrl string      golioth api server url (default "https://api.golioth.dev")
  -c, --config string      config file (default is $HOME/.golioth/.goliothctl.yaml)
      --projectId string   golioth project id
```

### SEE ALSO

* [goliothctl](/docs/reference/goliothctl/goliothctl/)	 - Manage Golioth platform resources and developer workflow.

