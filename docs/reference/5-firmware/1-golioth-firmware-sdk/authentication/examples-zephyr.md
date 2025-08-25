---
title: "Examples: Zephyr"
sidebar_position: 4
---

# Examples: Zephyr

## Hardcoding Certificates for samples

All of our Firmware SDK samples for Zephyr can be compiled with hardcoded
certificate credentials. As an example, build [the Golioth `hello` sample
code](https://github.com/golioth/golioth-firmware-sdk/tree/main/examples/zephyr/hello).

:::note For prototyping only

Using a hardcoded certificate is an easy way to start using and test
certificate based authentication. It should not be used in production.

:::

1. Set the project to use Certificate Authentication

    As outlined in the [Certificate based auth
    section](https://github.com/golioth/golioth-firmware-sdk/tree/main/examples/zephyr/hello#certificate-based-auth)
    of that sample's README, a few Kconfig symbols need to be set in the
    `prj.conf` file:

    ```
    CONFIG_GOLIOTH_AUTH_METHOD_CERT=y
    CONFIG_GOLIOTH_SAMPLE_HARDCODED_CRT_PATH="keys/device.crt.der"
    CONFIG_GOLIOTH_SAMPLE_HARDCODED_KEY_PATH="keys/device.key.der"
    ```
2. Build and flash the firmware following the instructions in the [README](https://github.com/golioth/golioth-zephyr-sdk/tree/main/samples/hello).

## Provisioning Certificates sample

[The `certificate_provisioning`
sample](https://github.com/golioth/golioth-firmware-sdk/tree/main/examples/zephyr/certificate_provisioning)
is one example of how to provision credentials on devices. It illustrates how to
store device certificates on non-volatile flash memory. This way, each device
has its own unique certificates, and future firmware updates will not overwrite
these stored credentials.

The following steps are covered in the code example:

1. Generate a set of root and device certificates [using the Golioth Docs as a
   guide](/reference/firmware/golioth-firmware-sdk/authentication/certificate-auth#generate-certificates).
2. Compile and flash the firmware example onto the device.
3. Use `mcumgr` to copy the device certificates onto the device filesystem.
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


