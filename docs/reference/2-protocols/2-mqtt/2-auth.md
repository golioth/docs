---
id: auth
title: Authentication
---

Our MQTT Gateway uses TLS by default and Username/Password for authentication. The MQTT Client ID should be the same as the MQTT Username.

See [Device Authentication](/reference/protocols/device-auth) page for creating device credentials

### Authentication Methods

| Method                      | Description                                                                                                      | Credential Type               | Status              |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------- | ----------------------------- | ------------------- |
| Username/Password           | This method uses MQTT user/password authentication method. The Client ID should be filled with the PSK Identity  | Per Device PSK/Pre Shared Key | Supported ✅        |
| MTLS Certificate based Auth | This method uses a shared root cert between devices and each device have a certificate that was derived from it. | Per Project Certificate       | Work In Progress 🚧 |
