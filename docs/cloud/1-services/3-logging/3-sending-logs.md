---
id: sending-logs
title: Sending Logs
---

import Prerequisites from '/docs/partials/prerequisites-platform-setup.md'

<Prerequisites />

Our platform provides functionality for tracking your devices logs, so you can have a better sense of things that are happening out in the field.

An endpoint is provided on our gateways on the `/logs` path where the device can send log data. Right now only the CoAP gateway is available to use this service.

Data can be sent using query parameters and also on the message body. The message body can be send in CBOR or JSON format and is going to be parsed and we will try to identify the known attributes as presented bellow. If the body is sent as plain text, it will be saved as the log entry message.

### Parameters and attributes that are known and indexed:

| Attribute             | Description                                                                         | Default |
| --------------------- | ----------------------------------------------------------------------------------- | ------- |
| `time` or `timestamp` | Timestamp of the log entry                                                          | now()   |
| level                 | Log Level - Can be info/warn/error/debug                                            | info    |
| module                | Internal module that is generating logs                                             |         |
| `msg` or `message`    | Free form string with the log message                                               |         |
|                       | Any other attribute sent over this endpoint is bundled into a `metadata` attribute. |         |

### Simulating device logs using `coap`

You can simulate sending logs by using `coap` and POSTing data to the `/logs` endpoint.

In the example bellow, we are sending the parameters `module`, `level` and `network` as query parameters and also a message in JSON format in the body containing the log `msg`.

```
$ coap --path /logs -m POST deadbeef-id --psk supersecret -q module=hello -q level=info -q network=wifi -b "{ \"msg\": \"Hello logs\" } --format json --host coap.golioth.io
Params
method: POST
path: /logs
query params: network=wifi module=hello level=info msg="Hello logs"

url: coap.golioth.io:5684
pre shared key: deadbeef-id:supersecret

Response
payload: Type: Acknowledgement, MID: 49203, Code: Valid, Token: cbd46230e64c42e7, ContentFormat: text/plain;charset=utf-8
body: OK%
```

After sending a log entry you can search logs using `goliothctl`. Check the [next page](./searching-logs) for more details on how to do that.
