---
id: gurl_coap
title: "gurl coap"
slug: gurl_coap
sidebar_label: gurl coap
url: /docs/reference/gurl/gurl_coap/
hide_title: true
---
## gurl coap

CoAP client to test golioth coap gateway

```
gurl coap [flags]
```

### Examples

```
# Send a GET request to /hello
gurl coap --path /hello -m GET --psk-id deadbeef-id --psk supersecret --host coap.golioth.dev

# Send a POST request to /echo
# With body as string (-b)
gurl coap --path /echo -m POST --psk-id deadbeef-id --psk supersecret --host coap.golioth.dev -b "Hello"
# With body from file (-f)
gurl coap --path /echo -m POST --psk-id deadbeef-id --psk supersecret --host coap.golioth.dev -f ./test.txt

# Send a POST request to /logs
gurl coap --path /logs -m POST --psk-id deadbeef-id --psk supersecret -q module=wifi -q msg="Signal from router" -q level=info -b "{ \"wifi-rssi\": -45 }" --format json --host coap.golioth.dev
```

### Options

```
  -b, --body string            coap body
  -f, --file string            file to be sent on the request body
      --format string          coap body format
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

* [gurl](/docs/reference/gurl/gurl/)	 - gurl is a golioth test cli
* [gurl coap ping](/docs/reference/gurl/gurl_coap_ping/)	 - CoAP ping to test golioth coap gateway

