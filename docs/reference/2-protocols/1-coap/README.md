---
id: overview
title: CoAP Gateway Overview
slug: /reference/protocols/coap
---

Devices can connect to the Golioth CoAP Gateway at the following endpoint:

 - **coap.golioth.io** at UDP port **5684**, using [DTLS](/reference/protocols/device-auth)

Devices that use URL can connect using `coaps://coap.golioth.io/`.

The CoAP gateway requires [client authentication](/reference/protocols/device-auth).
Plaintext connections are not supported.


## What is CoAP?

Constrained Application Protocol (CoAP) is a specialized Internet application protocol for constrained devices, as defined in RFC 7252. It enables those constrained devices called "nodes" to communicate with the wider Internet using similar protocols. CoAP is designed for use between devices on the same constrained network (e.g., low-power, lossy networks), between devices and general nodes on the Internet, and between devices on different constrained networks both joined by an internet. CoAP is also being used via other mechanisms, such as SMS on mobile communication networks.

:::note
See more about [CoAP](https://en.wikipedia.org/wiki/Constrained_Application_Protocol).
:::

### Use Cases for CoAP

Here are some ideas on which scenarios CoAP can be used:

- Low-power devices with limited battery life.
- Unreliable networks, like NB-IoT and CatM1.
- Constrained devices, UDP/CoAP stack is much more efficient than TCP/HTTP/MQTT.
