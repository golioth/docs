---
id: auth
title: Authentication
---

Users interacting with the Management API via the Golioth console use a
short-lived access token that is issued after successful login. For programmatic
API access, longer-lived credentials are typically required. Golioth supports
creating project-scoped API keys. An API key can only use the Management API to
perform operations in the project in which it exists.

API keys are sensitive credentials that should be handled with care. In the
event that an API key is exposed, it should be deleted immediately. Deleting an
API key revokes all access and subsequent operations performed using it will
fail.

#### Creating an API Key

API keys can be created in the Golioth console or using the
[`goliothctl`](/reference/command-line-tools/goliothctl/goliothctl) CLI. To
create an API key with `goliothctl`, use the
[`create`](/reference/command-line-tools/goliothctl/goliothctl_apikeys_create)
command.

```
$ goliothctl apikeys create
id:"<api key id>"  key:"YOUR_API_KEY" type:API_KEY
```

`goliothctl` can also be used to list API keys in a project with
[`list`](/reference/command-line-tools/goliothctl/goliothctl_apikeys_list)
command.

```
$ goliothctl apikeys list
id:"<api key id>"  key:"YOUR_API_KEY" type:API_KEY
```

#### Using an API Key

API keys are included in requests using the `x-api-key` HTTP header.

```
$ curl -H "x-api-key: YOUR_API_KEY" https://api.golioth.io/v1/projects/{project-id}/devices
{ "list": [ { "id":"<uuid>", "name": "My first device", "hardwareIds": ["DE:AD:BE:EF"], "createdAt":"<timestamp>", "updatedAt":"<timestamp>" }] }, "page":0, "perPage":100, "total":1 }
```

#### Deleting an API Key

API keys can be deleted in the console or via the CLI. To delete an API key with
`goliothctl`, use the
[`delete`](/reference/command-line-tools/goliothctl/goliothctl_apikeys_delete)
command.

```
goliothctl apikeys delete <api key id>
```
