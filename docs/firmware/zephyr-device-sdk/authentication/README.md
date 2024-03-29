---
title: Device Authentication
sidebar_position: 1
---

import Deprecated from '/docs/_partials-common/deprecation-warning-zephyr-sdk.md'

<Deprecated/>

TLS & DTLS are the basis for our device authentication service as well as how
the device authenticates a Golioth instance. The diagram below illustrates how
the device's credentials (either an X.509 Certificate or a Pre-Shared Key pair)
map to MbedTLS.

![Device Authentication & Identity](../../firmware-client-auth.drawio.svg)

At runtime, the device credentials are retrieved from non-volatile storage (or
other persistent storage) and provided to the DTLS client. The client and server
support both X.509 Certificates and PSK-based authentication.

:::tip Should I Use Certificate Authentication or PSK Authentication?

Generally speaking, certificate-based authentication is more secure and you
should use it for your production devices. However, slower devices will take a
relatively long time to establish a handshake when applying the Elliptic Curve
Digital Signature Algorithm (ECDSA) used by the certificate. For some
resource-constrained MCUs (eg: low clock speed), Pre-Shared Key authentication
may be a better option. If you have questions, please [reach out to our
Developer Relations staff](mailto:devrel@golioth.io).

Related Material:

* [*Why use certificates for Internet of Things authentication
  (DTLS)*](https://blog.golioth.io/why-use-certificates-for-internet-of-things-authentication-dtls/)
* [*Yes, even your IoT prototype should be
  secure*](https://blog.golioth.io/yes-even-your-iot-prototype-should-be-secure/)

:::

