---
title: Device Authentication
sidebar_position: 1
---

TLS & DTLS are the basis for our device authentication service as well as how the device authenticates a Golioth instance. The diagram below illustrates how the device's PSK keypair, managed by Golioth Auth client, maps to MbedTLS.

![Device Authentication & Identity](../firmware-client-auth.drawio.svg)

At runtime, the Golioth Auth client retrieves the device credentials and provides them to the DTLS client. Currently the client and server support PSK based authentication. Implementation of asymmetric certificate based authentication is underway.

If you have already worked through the [Getting Started Guide](/getting-started/1-overview.md) to create device credentials, there is more information regarding device authentication available in the [Authorizing Devices](/getting-started/3-commandline/6-authorize-devices.md) section.  After credentials are entered into the configuration file, there is no further direct interaction with the credentials.  Credentials will be handled by the Golioth System Client in the background.

* Related material: [*Yes, even your IoT prototype should be secure*](https://blog.golioth.io/yes-even-your-iot-prototype-should-be-secure/)
