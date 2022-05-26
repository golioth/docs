---
id: device-connectivity
title: Device Connectivity
---

Device connected to Golioth platform through one of our IoT Gateway, by default, have information about it's connectivity status against our platform.

We have 3 main attributes and timestamps for a given device in our system, using those to derive the latest status of that device.

| Field             | Description                                                                                                    |
| ----------------- | -------------------------------------------------------------------------------------------------------------- |
| Last Report       | On every report of the device on a given service (LightDB State/Stream, Device Logs and other services).       |
| Last Time Online  | When the device finishes sucessfully handshake and authentication with a given gateway, this field is updated. |
| Last Time Offline | When the gateway of a given protocol, consider that device to offline/disconnected (more on the next topic).   |

### Online and Offline meaning on each protocol

Depending on the protocol, the meaning for a device to online/offline.

**MQTT** for example is based on TCP, so we have a persistent connection between the device and our IoT Gateways, so the notion of online/offline is more precise in some sense. During the whole lifetime of the MQTT/TCP connection with our system after the TLS Handshake and Authentication, we know that that device is online/connected. When that connection is broken, or the device is not keeping the connection alive using a Keep-Alive mechanism, we consider the connection broken and that the device is offline/disconnected.

| Related configuration | Default Value                                                      |
| --------------------- | ------------------------------------------------------------------ |
| Keep Alive Setting    | Can be negotiated with the device, but by default is `60 seconds`. |
| Keep Alive Timeout    | Follows this formula `=(KeepAlive) + (KeepAlive/2)`.               |

**CoAP** is based on UDP, which makes things a more complicated, as UDP is a connectionless and stateless protocol. Although, as we only allow secure communication over that protocol by using DTLS, we have a notion of a device session, which is started after the device and the server finishes the Handshake and Authentication. As CoAP is more used in low power and low data usage scenarios, we try to keep that session open for a while, currently set for 3 hours, so the device doesn't need to restart a session to send data in a given interval, saving some time on that. If the device doesn't send any information after that period or it sends a explicity disconnection, we consider that device to be offline/disconnected.

| Related configuration | Default Value                                              |
| --------------------- | ---------------------------------------------------------- |
| Session Timeout       | Default is `3 hours`. Can't be negotiated with the device. |

- More on authentication over each protocol:
  - [Using Pre Shared Keys on CoAP Gateway](/reference/protocols/coap/auth)
  - [Using Pre Shared Keys on MQTT Gateway](/reference/protocols/mqtt/auth)
