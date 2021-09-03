---
id: goliothctl_logout
title: "goliothctl logout"
slug: goliothctl_logout
sidebar_label: goliothctl logout
url: /docs/reference/goliothctl/goliothctl_logout/
hide_title: true
---
## goliothctl logout

Log out of Golioth manually.

### Synopsis

Running `goliothctl logout` will open a browser window, log out of Golioth, and delete the locally stored authentication data.

```
goliothctl logout [flags]
```

### Options

```
  -h, --help   help for logout
```

### Options inherited from parent commands

```
      --apiUrl string      golioth api server url (default "https://api.golioth.dev")
  -c, --config string      config file (default is $HOME/.golioth/.goliothctl.yaml)
      --projectId string   golioth project id
```

### SEE ALSO

* [goliothctl](/docs/reference/goliothctl/goliothctl/)	 - Manage Golioth platform resources and developer workflow.

