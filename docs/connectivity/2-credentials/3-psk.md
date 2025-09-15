---
title: Pre-Shared Keys
---

:::warning
Use of pre-shared keys is not recommended outside the context of demonstrations.
Possession of a pre-shared key allows an entity to act on behalf of the
associated device.
:::

A pre-shared key (PSK) is a secret value that is known by both a device and the
Golioth platform, and is used to establish a secure channel between the two. In
contrast to leveraging [public-key cryptography](/connectivity/credentials/pki),
the use of PSKs necessitates that private key material exists outside of just a
single secure location on a device, making it an inherently less secure option.

PSKs can be created and managed in the Golioth console under the `Credentials`
tab on the device page for an individual device.
