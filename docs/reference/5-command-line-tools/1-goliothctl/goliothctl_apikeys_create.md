---
id: goliothctl_apikeys_create
title: "goliothctl apikeys create"
slug: goliothctl_apikeys_create
sidebar_label: goliothctl apikeys create
url: /reference/command-line-tools/goliothctl/goliothctl_apikeys_create/
hide_title: true
---
## goliothctl apikeys create

Create an API key or JSON Web Token (JWT) that can be used to connect to the Golioth REST API.

### Synopsis


```
goliothctl apikeys create [flags]
```

### Examples

```
# Create an API KEY
> golioth apikeys create
id:"5df88b8e-e208-41d4-b7e2-29192ab5de83"  key:"dLEtQLItz9eSHZYwuZGE5UlcgL2GOmHW" type:API_KEY

# Create JWT
> golioth apikeys create --type JWT_KEY
id:"fe71a35c-0cb9-4643-9761-e95c332c2b1c"  key:"LQBgNB0LldJ4tyIDDzQd4tY7G060o8bV"  type:JWT_KEY  secret:"BpYxx835pZ1A8KUpfhWMNiGd1V0e0JB7"

# Create Keys with tag(s)
> golioth apikeys create --keyTag ktag-1
> golioth apikeys create --keyTag ktag-1 --keyTag ktag-2
> golioth apikeys create --type JWT_KEY --keyTag ktag-1 --keyTag ktag-2
```

### Options

```
  -h, --help                 help for create
      --keyTag stringArray   optionally assign one or more tags to the key being created
  -t, --type string          api key type [API_KEY JWT_KEY] (default "API_KEY")

```

### Options inherited from parent commands

```
      --apiUrl string      golioth api server url (default "https://api.golioth.io")
  -c, --config string      config file (default is $HOME/.golioth/.goliothctl.yaml)
      --projectId string   golioth project id
```

### SEE ALSO

* [goliothctl apikeys](/reference/command-line-tools/goliothctl/goliothctl_apikeys/)	 - Access API Keys information.

