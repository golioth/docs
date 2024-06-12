---
id: auth
title: Authentication
---

To access Golioth APIs over a REST interface, users need to be properly authenticated. By default, our web application and CLIs uses user authentication. But for machine to machine communication, it's better to have a more controlled way to authenticate and authorize the usage of our APIs, that's why we added a feature to create API Keys on our platform.

You can manage API Keys using the Web Console or through the CLI. Here we show how to create an API Key and use with our REST API.

#### Creating an API Key

By default, any API Key created is bounded and limited to the given project, so you don't need to worry on your API Key having access to other projects. We are also working on more ways to restrict or give more permissions to API Keys, but for now keys have permissions for doing the most common actions on the platform like accessing LightDB, LightDB Stream, listing devices and more.

To create a simple API Key, run the following command:

```
$ goliothctl apikeys create
id:"<api key uuid>"  key:"YOUR_API_KEY" type:API_KEY
```

To create a JWT Based API Key, run the following command:

```
$ goliothctl apikeys create --type JWT_KEY
id:"<api key uuid>"  key:"YOUR_JWT_KEY" type:JWT_KEY  secret:"YOUR_JWT_SECRET"
```

To list API Keys on the current project, use `apikeys list` sub command:

```
$ goliothctl apikeys list
id:"<api key uuid>"  key:"YOUR_API_KEY" type:API_KEY
id:"<api key uuid>"  key:"YOUR_JWT_KEY"  type:JWT_KEY  secret:"YOUR_JWT_SECRET"
```

#### Using a Basic API Key

Basic API Key, doesn't require any extra processing to be used and a `x-api-key` header can be used. Now let's list devices on a project using `curl`:

```
$ curl -H "x-api-key: YOUR_API_KEY" https://api.golioth.io/v1/projects/{project-id}/devices
{ "list": [ { "id":"<uuid>", "name": "My first device", "hardwareIds": ["DE:AD:BE:EF"], "createdAt":"<timestamp>", "updatedAt":"<timestamp>" }] }, "page":0, "perPage":100, "total":1 }
```

#### Using JWT based API Key

To access our platform API using a JWT based API Key, we need to create a JWT with a secret using HS256. The JWT should be crafted as follows (according to RFC 7519):

First, its header must be:

```
{
  "typ": "JWT",
  "alg": "HS256"
}
```

The second step is to add to the JWT claims, the `iss` (issuer field) with the `API_KEY` value.

```
{
  "iss": "YOUR_API_KEY"
}
```

Using the JWT debugger at https://jwt.io with the header (HS256), claims (iss), and secret associated with your API Key, you’ll end up with a valid JWT token that can be used like bellow:

```
$ curl -H "Authorization: JWT_TOKEN" https://api.golioth.io/v1/projects/{project-id}/devices
{ "list": [ { "id":"<uuid>", "name": "My first device", "hardwareIds": ["DE:AD:BE:EF"], "createdAt":"<timestamp>", "updatedAt":"<timestamp>" }] }, "page":0, "perPage":100, "total":1 }
```
