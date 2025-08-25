---
title: Public Key Infrastructure
---

A robust [Public Key Infrastructure
(PKI)](https://en.wikipedia.org/wiki/Public_key_infrastructure) is imperative
for ensuring secure cloud communication throughout the lifecycle of devices in a
fleet. PKI includes the creation, management, and distribution of keys and
certificates used in public-key cryptography.

A central tenet of public-key cryptography is the protection of private key
material. Establishing PKI allows for private keys to be generated in and never
leave secure storage on a device. This dramatically reduces the potential of
private key material being compromised.

## Establishing PKI

In order to start leveraging PKI for device certificates, it is necessary to
provision infrastructure and establish at least one certiciate authority (CA).

### Setting Up Infrastructure

Customers are in full control of their PKI when using Golioth. While it is
possible to establish your own infrastructure, doing so requires extreme care
and domain expertise. For most organizations, leveraging a PKI vendor is
recommended.

For demonstration purposes, local PKI can be established using tools such as
[`openssl`](https://github.com/openssl/openssl) or
[`cfssl`](https://github.com/cloudflare/cfssl).

### Establishing a Certificate Authority

Device certificates are issued by a certificate authority (CA). A CA is
typically comprised of a _root CA certificate_, and one or more _intermediate CA
certificates_, which are signed by the root and used to sign device
certificates.

To generate a root CA certificate using `openssl`, a private key must first be
generated.

```
openssl ecparam -name prime256v1 -genkey -noout -out "ca.key.pem"
```

Because the root CA certificate serves as the anchor in a chain of trust, it is
self-signed with the previously generated key.

```
openssl req -x509 -new -nodes \
    -key "ca.key.pem" \
    -sha256 -subj "/CN=Root CA" \
    -days 10 -out "ca.crt.pem"
```

In this example, the root CA certificate is being generated with a common name
of `Root CA` and an expiration in `10` days. In a production scenario, root CA
certificates typically have an expiration many years in the future in order to
minimize the churn of establishing a new chain of trust.

### Integrating with Golioth

In order for Golioth to establish a chain of trust with certificates presented
by devices connecting to the platform, the root CA certificate and any
intermediate CA certificates must be uploaded in the relevant Golioth project.
This allows Golioth to verify that the certificate presented by a devices was
signed using the configured CA. If the device is then able to prove possession
of the private key associated with their certificate, then you can be certain
that it is a valid device and should be allowed to communicate.

CA certificates can be uploaded in a Golioth project by navigating to the
`Certificates` section under `Credentials`.

## Generating Device Certificates

In a production provisioning flow, a private key should never leave the secure
region on the device where it is generated and stored. Instead, a _certificate
signing request (CSR)_ should be generated and exported. Some devices
incorporate a dedicated secure element IC for this purpose, while others
leverage integrated secure storage.

The CSR is signed by the device's private key and can be presented to a CA,
which can then issue a signed certificate that can then be returned to the
device. The signed certificate is only useful for a device that can prove
possession of the associated private key. If the private key never leaves the
secure region of the device, and the device has not been otherwise compromised,
then only it should be able to use the certificate to authenticate and establish
a secure communication channel with Golioth.

:::note Device Certificate Requirements
Device certificates used with the Golioth platform must set the subject
organization (`O`) to the slug for the appropriate project, and the common name
(`CN`) to a unique identifier for that device within the project. The unique
value used in the common name is referred to as the device's _certificate ID_.
:::

For demonstration purposes, the previously created local CA can be used to
issue device certificates with `openssl`. The first step is generating a private
key for the device.

```
openssl ecparam -name prime256v1 -genkey -noout -out "device.key.pem"
```

The device private key can then be used to create a CSR.

:::tip
Make sure to replace `PROJECT_SLUG` and `CERTIFICATE_ID` with appropriate
values for your Golioth project.
:::

```
openssl req -new \
    -key "device.key.pem" \
    -subj "/O=PROJECT_SLUG/CN=CERTIFICATE_ID" \
    -out "device.csr.pem"
```

Finally, the local CA can be used to issue a device certificate by signing the
certificate in the CSR.

```
openssl x509 -req \
    -in "device.csr.pem" \
    -CA "ca.crt.pem" \
    -CAkey "ca.key.pem" \
    -CAcreateserial \
    -out "device.crt.pem" \
    -days 7 -sha256
```

The resulting device certificate (`device.crt.pem`) will have parameters that
match the supplied CSR, and an expiration of `7` days. Similarly to the root CA
certificate, device certificates should be created with an expiration that is
appropriate for the lifecycle of the device.

## Verification of Golioth Server Certificate

Similarly to how Golioth must be able to establish a chain of trust rooted in
the CA certificates uploaded in a project, a device must also be able to verify
that it is communicating with Golioth. To accomplish this, one or more root CA
certificates must be stored on the device. Golioth will present a server
certificate, or a chain of certificates, that allow the device to establish a
chain of trust rooted in the stored CA certificates.

Firmware SDKs and libraries distributed by Golioth typically will include the
necessary root CA certificates to verify certificates presented by the platform.
For example, the [Golioth Firmware
SDK](https://github.com/golioth/golioth-firmware-sdk) embeds the ISRG Root X1
and Golioth Root X1 root CA certificates, whereas the
[`pouch`](https://github.com/golioth/pouch) only embeds the latter.

## Zero-Touch Provisioning

The use of certificates enables devices to be created on the Golioth platform
without a user needing to interact with the console or [management
API](/reference/management-api). This workflow is referred to as _zero-touch
provisioning_ and can alleviate operational overhead, particularly when
deploying large fleets of devices. However, customers are still welcome to
manually provision devices prior to their first connection. If a device already
exists on the Golioth platform with a name that matches the certificate ID of a
device connecting for the first time, the device will be automatically
associated.
