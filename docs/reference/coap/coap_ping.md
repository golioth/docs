---
id: coap_ping
title: "coap ping"
slug: coap_ping
sidebar_label: coap ping
url: /docs/reference/coap/coap_ping/
hide_title: true
---
## coap ping

CoAP ping to test golioth coap gateway

```
coap ping [flags]
```

### Options

```
  -h, --help   help for ping
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

