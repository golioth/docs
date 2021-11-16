---
id: auth
title: Authentication
---

Our CoAP Gateway uses DTLS for authentication.

This protocol can be accessed via the following endpoints:

- **coap.golioth.io** at port **5684**

See [Device Authentication](/reference/protocols/device-auth) page for creating device credentials

### Authentication Methods

| Method                      | Description                                                                                                      | Credential Type               | Status              |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------- | ----------------------------- | ------------------- |
| DTLS PSK                    | This method creates a secure channel and we can identify the device via Pre Shared Keys                          | Per Device PSK/Pre Shared Key | Supported ✅        |
| DTLS Certificate based Auth | This method uses a shared root cert between devices and each device have a certificate that was derived from it. | Per Project Certificate       | Work In Progress 🚧 |

### Endpoint

- coap.golioth.io
