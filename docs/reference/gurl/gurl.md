---
id: gurl
title: "gurl"
slug: gurl
sidebar_label: gurl
url: /docs/reference/gurl/gurl/
hide_title: true
---
## gurl

gurl is a golioth test cli

### Synopsis

You can test golioth gateway interface over CoAP and more protocols in the future.

```
gurl [flags]
```

### Examples

```
# Ping request
gurl coap ping --psk-id my-identity --psk supersecret

# Get /hello
gurl coap --path /hello -m GET --psk-id my-identity --psk supersecret

# POST /echo with body as string (-b)
gurl coap --path /echo -m POST --psk-id my-identity --psk supersecret -b "Hello"

# POST /echo with body from file (-f)
gurl coap --path /echo -m POST --psk-id my-identity --psk supersecret -f ./path/to/a/file

# POST /echo from stdin
cat ./path/to/a/file | gurl coap --path /echo -m POST --psk-id my-identity --psk supersecret --in
```

### Options

```
  -h, --help   help for gurl
```

### SEE ALSO

* [gurl coap](/docs/reference/gurl/gurl_coap/)	 - CoAP client to test golioth coap gateway

