---
id: coap_observe
title: "coap observe"
slug: coap_observe
sidebar_label: coap observe
url: /docs/reference/coap/coap_observe/
hide_title: true
---
## coap observe

CoAP observe a given path

```
coap observe <path> [flags]
```

### Options

```
  -h, --help   help for observe
```

### Options inherited from parent commands

```
      --accept string          coap accept format
  -b, --body string            coap body
  -f, --file string            file to be sent on the request body
      --format string          coap body format
      --host string            golioth coap host (default "localhost")
      --in                     read request body from stdin
  -m, --method string          coap method - GET,POST (default "POST")
  -o, --observe stringArray    coap observation paths
  -p, --path string            coap url path (default "/echo")
      --port int               golioth coap port (default 5684)
      --psk string             coap pre shared key
      --psk-id string          coap psk identity
  -q, --query stringToString   coap query params (default [])
  -w, --wait                   wait for replies
```

### SEE ALSO

* [coap](/docs/reference/coap/coap/)	 - CoAP client to test golioth coap gateway

