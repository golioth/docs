---
title: Signed URLs
---

:::note
The use of signed URLs requires access to a project on the Teams tier or higher.
See [Golioth pricing](https://golioth.io/pricing) for more information.
:::

Signed URLs are credentials that grant time-limited access to a specific
resource. They are frequently used on the web to grant clients access to private
media assets hosted on a [Content Delivery Network
(CDN)](https://en.wikipedia.org/wiki/Content_delivery_network) server that is
geographically near to them. In this scenario, the origin server and the CDN
server either both have access to a shared secret, or the origin server has
access to a private key and the CDN server has been configured with a public key
that can be used to verify the private key's signature using asymmetric
cryptography.

In projects where signed URL support is enabled, Golioth allows devices to
generate signed URLs using the private key that was generated during
provisioning and the certificate that was issued using the customer's [Public
Key Infrastructure (PKI)](/connectivity/credentials/pki). Golioth is able to
verify the authenticity of the signed URL using the Certificate Authority (CA)
certificates that the customer has configured in their Golioth project. In this
context, the device is acting in a similar role to the origin server, with
Golioth verifying the issued signed URL in a similar manner to a CDN server.

In the context of embedded devices, signed URLs may be used to enable an
external system, or another component in the same system, to access a specific
resource. For example, a device may generate a signed URL and pass it to a more
capable system to allow it to download the resource on its behalf.

## Using Signed URLs

In order to use signed URLs, they must first be enabled in [project
settings](https://console.golioth.io/project-settings). The project must also
have any Certificate Authority (CA) certificates used in device authentication
uploaded as described in the [PKI
documentation](/connectivity/credentials/pki#integrating-with-golioth).

:::tip
Signed URLs can only be used with `GET` requests.
:::

While customers may use any firmware that generates valid signed URLs, it is
recommended to leverage the [`signy` library](https://github.com/golioth/signy),
which integrates with the [Platform Security Architecture (PSA) Crypto
API](https://arm-software.github.io/psa-api/crypto) and generates signed URLs
that are compatible with the Golioth platform. See the [`signy`
examples](https://github.com/golioth/signy/tree/main/examples) for more
information on how to interface with the library.
