---
title: "Examples: Zephyr"
sidebar_position: 4
---

# Examples: Zephyr

## Provisioning Certificates sample

[The `certificate_provisioning`
sample](https://github.com/golioth/golioth-firmware-sdk/tree/main/examples/zephyr/certificate_provisioning)
is one example of how to provision credentials on devices. It illustrates how to
store device certificates on non-volatile flash memory. This way, each device
has its own unique certificates, and future firmware updates will not overwrite
these stored credentials.

The [`certificate_rotation`
sample](https://github.com/golioth/golioth-firmware-sdk/tree/main/examples/zephyr/certificate_rotation)
starts from certificates provisioned the same way and then uses Golioth PKI to
request a new certificate from Golioth.

The following steps are covered in the code example:

1. Generate a set of root and device certificates [using the Golioth Docs as a
   guide](/connectivity/credentials/pki/offline-pki#generating-device-certificates).
2. Compile and flash the firmware example onto the device.
3. Use `mcumgr` to copy the device certificate and key (DER) to
   `/lfs1/credentials/crt.der` and `/lfs1/credentials/key.der` on the device
   filesystem.
4. Upload the root certificate to Golioth.

The project-id for your Golioth project is supplied as part of the device
credentials creation. This will be matched with any root certificates uploaded
to that project in order to authenticate.

:::info No reservations needed

If this is the first time the device has connected to Golioth, a new device
entry is automatically added to your Golioth project. There is no need for
Golioth to have advanced knowledge about your newly manufactured devices (beyond
having a copy of the public root certificate).

:::

