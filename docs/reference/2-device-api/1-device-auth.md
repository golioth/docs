---
id: device-auth
title: Device Authentication
---

To access Golioth Services from a device, the device needs to be properly created and provisioned.

You can manage device level and project credentials using the Web Console or through the Golioth CLI.

## CoAP Gateway address and port

Devices can connect to the Golioth CoAP Gateway at the following endpoint:

 - `coap.golioth.io` at UDP port `5684`, using DTLS

Devices that use URL can connect using `coaps://coap.golioth.io/`.

The CoAP gateway requires authentication.

## Authentication Methods

| Authentication Method         | Description                             |
| ----------------------------- | --------------------------------------- |
| DTLS PSK                      | Per-device pre-shared key               |
| DTLS Client Certificate       | Mutual certificate-based authentication |

## Pre-Shared Key (PSK) Authentication

For every device, a shared secret (key) needs to be established prior to first communication.

This can be as simple as generating a pre-shared key on the Golioth console, and loading it on your device. Alternatively, you can generate a key on the device, and upload it to Golioth.

See the getting started guide:

* Golioth Console: [authorize PSK
  devices](/getting-started/console/manage-devices).
* Command Line Tools: [authorize PSK devices](/reference/command-line-tools/tutorial/authorize-devices).

## Client Certificate Authentication

Certificate authentication is more complex to setup and use than PSK authentication, but it provides a superior level of security. It also enables you to perform zero-touch provisioning of devices.

The trusted root or intermediate certificates are first configured on your Golioth project. When a device connects to Golioth using a certificate signed by one of your trusted certificates, the device will be *automatically provisioned* in that project.

### Server authentication

Your device can validate it is connecting to an authentic Golioth CoAP gateway by verifying the server certificate authenticity and validity.

That typically consists of multiple steps:
* Verify that the certificate by the gateway is signed by a trusted authority
* Verify the *Valid From* and *Valid Until* timestamps of the certificate
* Verify the Common Name (CN) of the certificate against the URL you are connecting to
* Verify the Alternative Subject Name (ASN) of the certificate against the URL you are connecting to

To verify the server certificate is signed by a trusted authority, your device will need to be pre-provisioned with a set of trusted authority certificates, and need to maintain them over its lifetime.

To verify the *Valid From* and *Valid Until* timestamps, your device will need to have an accurate real-time clock.

### Client Authentication

Before you can use device authentication based on certificates, you will need to upload one or more trusted root or intermediate certificates to your Golioth project.

To successfully authenticate a device, your device will need to present a certificate signed by one of the root or intermediate certificates.

The device's client certificate will need to have the following values configured properly:

* Subject Organization (O) needs to match your Project ID (project slug).
* Subject Common Name (CN) needs to be a unique string identifying the device, and will be used as a Device Certificate ID property.

If the prerequisites above are met, when your device first connects to Golioth it will either be authenticated and authorized to interact with the platform, or automatically provisioned if it does not exist yet in the Project.
