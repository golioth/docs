---
title: Certificate Authentication
sidebar_position: 1
---

# Certificate Authentication

Golioth integrates with customer Public Key Infrastructure (PKI) to allow
devices to securely connect with the platform using public-key cryptography. To
learn more about the benefits of certificate-based authentication, and how to
setup PKI and issue device certificates, see the [PKI
documentation](/connectivity/credentials/pki).

## Configuring Certificate-Based Authentication

While private keys should always remain in a secure storage location on a
device, the following example demonstrates one way in which a server CA
certificate (`ca_cert`), device certificate (`public_cert`), and private key
(`private_key`) can be passed to the Golioth client.

All data is expected to be provided as DER encoded. To convert PEM files to DER,
the following `openssl` commands can be used.

```
openssl x509 -in device.crt.pem -outform DER -out device.crt.der
```

```
openssl ec -in device.key.pem -outform DER -out device.key.der
```

```c
/* Get the Golioth CA Certificate from the Golioth SDK */
static const uint8_t tls_ca_crt[] = {
#include "golioth-systemclient-ca_crt.inc"
};

int main(void) {
    uint8_t* device_crt = pointer_to_your_crt_der_byte_array;
    uint8_t* device_key = pointer_to_your_key_der_byte_array;
    size_t device_crt_len = sizeof_your_crt_der_byte_array;
    size_t device_key_len = sizeof_your_key_der_byte_array;

    struct golioth_client_config client_config = {
        .credentials = {
            .auth_type = GOLIOTH_TLS_AUTH_TYPE_PKI,
            .pki = {
                .ca_cert = server_ca_crt,
                .ca_cert_len = sizeof(server_ca_crt),
                .public_cert = device_crt,
                .public_cert_len = device_crt_len,
                .private_key = device_key,
                .private_key_len = device_key_len,
            }}};

    golioth_client_t client = golioth_client_create(&client_config);

    /* Continue program flow */
}
```

Golioth does not specify the means of provisioning certificates onto a device;
you are free to use whichever method bests fits your device architecture and
manufacturing process. We provide an example of one way to provision
certificates in [the Zephyr-based `certificate_provisioning`
sample](https://github.com/golioth/golioth-firmware-sdk/tree/main/examples/zephyr/certificate_provisioning).
