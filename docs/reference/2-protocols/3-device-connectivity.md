---
id: device-connectivity
title: Device Connectivity
---

Anytime a devices connects to a Golioth IoT Gateway (CoAP), the Gateway will track and report the status of the connection.

Rather than tracking just online / offline information, we keep a set of three timestamps for each device which can be used to dynamically compute the online or offline status:

| Timestamp         | Update event
| ----------------- | --------------------------------------------------------------------------------------------- |
| Last Report       | Device interacts with a given service (LightDB State/Stream, Device Logs and other services). |
| Last Time Online  | Device performs a successful handshake and authentication with a Golioth IoT Gateway          |
| Last Time Offline | Depends on which protocol the device uses, see below.                                         |

### Online and Offline meaning on each protocol

The online / offline indication varies by protocol.

**CoAP** is based on UDP, a connectionless and stateless protocol which doesn't have a concept of online or offline. But since we are mandating the use of DTLS for all CoAP connections,
we use the DTLS handshake and authentication as indication of a device going online. Since CoAP is frequently used in low power scenarios with infrequent communication, we don't send keepalives to devices. We keep every DTLS session stored for 3 hours, during which a device can resume it. If the device doesn't send any information for 3 hours or if it actively disconnects, we consider the device offline.

| Related configuration | Default Value                                              |
| --------------------- | ---------------------------------------------------------- |
| Session Timeout       | Default is `3 hours`. Can't be negotiated with the device. |

- More on authentication over each protocol:
  - [Using Pre Shared Keys on CoAP Gateway](/reference/protocols/device-auth)
