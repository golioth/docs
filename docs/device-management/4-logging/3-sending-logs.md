---
id: sending-logs
title: Sending Logs
---

import Prerequisites from '/docs/_partials-common/prerequisites-platform-setup.md'
import { ProtocolPublishSample } from '/docs/_partials-common/protocol.mdx'

<Prerequisites />

Our platform provides functionality for tracking your devices logs, so you can have a better sense of things that are happening out in the field.

An endpoint is provided on our gateways on the `/logs` path where the device can send log data. Right now only the CoAP gateway is available to use this service.

Data can be sent using query parameters and also on the message body. The message body can be send in CBOR or JSON format and is going to be parsed and we will try to identify the known attributes as presented below. If the body is sent as plain text, it will be saved as the log entry message.

> See the [Device API documentation](/reference/device-api/api-docs/logging)

### Simulating device logs using `coap`

You can simulate sending logs by using `coap` and POSTing data to the `/logs` endpoint.

In the example bellow, we are sending the parameters `module`, `level` and `network` as query parameters and also a message in JSON format in the body containing the log `msg`.

<ProtocolPublishSample path="/logs" method="POST" query={{"module":"sensor", "level": "info", "network": "sensor"}} body={{"msg":"Hello World"}} response="OK"/>

After sending a log entry you can search logs using `goliothctl`. Check the [next page](./searching-logs) for more details on how to do that.
