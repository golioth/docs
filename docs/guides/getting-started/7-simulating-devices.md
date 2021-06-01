---
id: simulating-devices
title: Simulating Devices with coap CLI
---

#### Prerequisites

- `goliothctl` CLI installed
- Authenticated with Golioth - see [Authentication](./authentication)
- Have a project - see [Create a Project](./create-project)
- Have a provisioned device and credential for it - see [Authorizing Devices](./authorize-devices)

With the a properly provisioned device, you can test if the connection with the platform is working by using our `coap` tool.

Here are some examples:

### Send a PING request

```
coap ping --psk-id deadbeef-id --psk supersecret --host coap.golioth.dev
```

### Send a GET request to `/hello`

```
coap --path /hello -m GET --psk-id deadbeef-id --psk supersecret --host coap.golioth.dev
```

The `/hello` endpoint identifies the device by it's credentials and returns `Hello <device-name>`.

```
Params
method: GET
path: /hello

url: coap.golioth.dev:5684
pre shared key: deadbeef-id:supersecret

Response
payload: Type: Acknowledgement, MID: 19602, Code: Valid, Token: 913572292474c677, ContentFormat: text/plain;charset=utf-8
body: Hello My First Device%
```

### Send a POST request to `/echo`

The `/echo` endpoint identifies just returns the body sent by the device.

#### With body as string (-b)

```
coap --path /echo -m POST --psk-id deadbeef-id --psk supersecret --host coap.golioth.dev -b "Hello"
```

Output:

```
Params
method: POST
path: /echo
file read correctly: ./README.md

url: coap.golioth.dev:5684
pre shared key: deadbeef-id:supersecret

Response
payload: Type: Acknowledgement, MID: 47734, Code: Valid, Token: 31638c831239e704, ContentFormat: application/octet-stream
body: Hello
```

#### With body from file (-f)

```
coap --path /echo -m POST --psk-id deadbeef-id --psk supersecret --host coap.golioth.dev -f ./test.txt
```

Output:

```
Params
method: POST
path: /echo
file read correctly: ./test.txt

url: coap.golioth.dev:5684
pre shared key: deadbeef-id:supersecret

Response
payload: Type: Acknowledgement, MID: 47734, Code: Valid, Token: 31638c831239e704, ContentFormat: application/octet-stream
body: File Content
```
