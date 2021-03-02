---
id: gurl_coap_observe
title: "gurl coap observe"
slug: gurl_coap_observe
sidebar_label: gurl coap observe
url: /docs/reference/gurl/gurl_coap_observe/
hide_title: true
---
## gurl coap observe

CoAP observe a given path

```
gurl coap observe <path> [flags]
```

### Options

```
  -h, --help   help for observe
```

### Options inherited from parent commands

```
      --accept string         coap accept format
      --format string         coap body format
      --host string           golioth coap host (default "localhost")
  -o, --observe stringArray   coap observation paths
      --port int              golioth coap port (default 5684)
      --psk string            coap pre shared key
      --psk-id string         coap psk identity
  -w, --wait                  wait for replies
```

### SEE ALSO

* [gurl coap](/docs/reference/gurl/gurl_coap/)	 - CoAP client to test golioth coap gateway

