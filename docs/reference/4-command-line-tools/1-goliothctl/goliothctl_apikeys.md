---
id: goliothctl_apikeys
title: "goliothctl apikeys"
slug: goliothctl_apikeys
sidebar_label: goliothctl apikeys
url: /reference/command-line-tools/goliothctl/goliothctl_apikeys/
hide_title: true
---
## goliothctl apikeys

Access API Keys information.

### Synopsis

The `goliothctl apikeys` subcommands are used to create, delete, list API keys that can be used to connect to the Golioth REST APIs.

```
goliothctl apikeys [flags]
```

### Examples

```
# Create an API key
> goliothctl apikeys create
id:"5df88b8e-e208-41d4-b7e2-29192ab5de83"  key:"dLEtQLItz9eSHZYwuZGE5UlcgL2GOmHW" type:API_KEY

# List all API Keys
> goliothctl apikeys list
id:"5df88b8e-e208-41d4-b7e2-29192ab5de83"  key:"dLEtQLItz9eSHZYwuZGE5UlcgL2GOmHW" type:API_KEY

# Delete an API Key
> goliothctl apikeys delete 5df88b8e-e208-41d4-b7e2-29192ab5de83
API key deleted
```

### Options

```
  -h, --help   help for apikeys
```

### Options inherited from parent commands

```
      --apiUrl string      golioth api server url (default "https://api.golioth.io")
  -c, --config string      config file (default is $HOME/.golioth/.goliothctl.yaml)
      --projectId string   golioth project id
```

### SEE ALSO

* [goliothctl](/reference/command-line-tools/goliothctl)	 - Manage Golioth platform resources and developer workflow.
* [goliothctl apikeys create](/reference/command-line-tools/goliothctl/goliothctl_apikeys_create/)	 - Create an API key.
* [goliothctl apikeys delete](/reference/command-line-tools/goliothctl/goliothctl_apikeys_delete/)	 - Delete an API key with an ID.
* [goliothctl apikeys list](/reference/command-line-tools/goliothctl/goliothctl_apikeys_list/)	 - Show all existing API keys.

