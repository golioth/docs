---
id: coap
title: "coap"
slug: coap
sidebar_label: coap
url: /docs/reference/coap/coap/
hide_title: true
---
## coap

CoAP client to test golioth coap gateway

```
coap [flags]
```

### Examples

```
# Send a GET request to /hello
coap --path /hello -m GET --psk-id deadbeef-id --psk supersecret --host coap.golioth.dev

# Send a POST request to /echo
# With body as string (-b)
coap --path /echo -m POST --psk-id deadbeef-id --psk supersecret --host coap.golioth.dev -b "Hello"
# With body from file (-f)
coap --path /echo -m POST --psk-id deadbeef-id --psk supersecret --host coap.golioth.dev -f ./test.txt

# Send a POST request to /logs
coap --path /logs -m POST --psk-id deadbeef-id --psk supersecret -q module=wifi -q msg="Signal from router" -q level=info -b "{ \"wifi-rssi\": -45 }" --format json --host coap.golioth.dev
```

### Options

```
      --accept string          coap accept format
  -b, --body string            coap body
  -f, --file string            file to be sent on the request body
      --format string          coap body format
  -h, --help                   help for coap
      --host string            golioth coap host (default "localhost")
      --in                     read request body from stdin
  -m, --method string          coap method - GET,POST (default "GET")
  -o, --observe stringArray    coap observation paths
      --out string             file to save response body
  -p, --path string            coap url path (default "/echo")
      --port int               golioth coap port (default 5684)
      --psk string             coap pre shared key
      --psk-id string          coap psk identity
  -q, --query stringToString   coap query params (default [])
      --timeout uint           coap request timeout in seconds (default 5)
  -w, --wait                   wait for replies
```

### SEE ALSO

* [coap observe](/docs/reference/coap/coap_observe/)	 - CoAP observe a given path
* [coap ping](/docs/reference/coap/coap_ping/)	 - CoAP ping to test golioth coap gateway
* [coap version](/docs/reference/coap/coap_version/)	 - Show CLI Version

