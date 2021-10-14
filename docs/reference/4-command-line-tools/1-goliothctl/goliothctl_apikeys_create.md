---
id: goliothctl_apikeys_create
title: "goliothctl apikeys create"
slug: goliothctl_apikeys_create
sidebar_label: goliothctl apikeys create
url: /reference/command-line-tools/goliothctl/goliothctl_apikeys_create/
hide_title: true
---
## goliothctl apikeys create

Create an API key.

### Synopsis

Create an API key that can be used to connect to the Golioth REST API.

```
goliothctl apikeys create [flags]
```

### Examples

```
> golioth apikeys create
id:"5df88b8e-e208-41d4-b7e2-29192ab5de83"  key:"dLEtQLItz9eSHZYwuZGE5UlcgL2GOmHW" type:API_KEY
```

### Options

```
  -h, --help          help for create
  -t, --type string   api key type [API_KEY JWT_KEY] (default "API_KEY")
```

### Options inherited from parent commands

```
      --apiUrl string      golioth api server url (default "https://api.golioth.io")
  -c, --config string      config file (default is $HOME/.golioth/.goliothctl.yaml)
      --projectId string   golioth project id
```

### SEE ALSO

* [goliothctl apikeys](/reference/command-line-tools/goliothctl/goliothctl_apikeys)	 - Access API Keys information.

