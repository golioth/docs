---
id: gurl_coap
date: 2021-02-05T11:04:45-04:00
title: "gurl coap"
slug: gurl_coap
sidebar_label: gurl coap
url: /docs/gurl/gurl_coap/
hide_title: true
---
## gurl coap

CoAP client to test golioth coap gateway

```
gurl coap [flags]
```

### Options

```
  -b, --body string            coap body
  -f, --file string            file to be sent on the request body
  -h, --help                   help for coap
      --host string            golioth coap host (default "localhost")
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

* [gurl](/docs/gurl/gurl/)	 - gurl is a golioth test cli
* [gurl coap ping](/docs/gurl/gurl_coap_ping/)	 - CoAP ping to test golioth coap gateway

