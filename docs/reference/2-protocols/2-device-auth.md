---
id: device-auth
title: Device Authentication
---

To access Golioth Service from a device, the device need to be properly created and provisioned.

You can manage device and project credentials using the Web Console or through the CLI.

### Credential Types

| Credential Type               | Description               | Supported Gateways    |
| ----------------------------- | ------------------------- | --------------------- |
| Per Device PSK/Pre Shared Key | Pre Shared Keys           | CoAP ✅ <br/> MQTT ✅ |
| Per Project Certificate       | Mutual TLS Authentication | CoAP 🚧 <br/> MQTT 🚧 |

### Creating an Pre Shared Key Credential

See the getting started guide to [authorize devices](/getting-started/3-commandline/6-authorize-devices.md).

- Guides on how to use:
  - [Using Pre Shared Keys on CoAP Gateway](/reference/protocols/coap/auth)
  - [Using Pre Shared Keys on MQTT Gateway](/reference/protocols/mqtt/auth)
