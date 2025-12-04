---
title: "Offline PKI"
---

If your Public Key Infrastructure is not supported as an integrated PKI provider,
you can manage your PKI offline, then upload your CA certificates to Golioth. For
production environments, establishing offline PKI using a secure PKI provider is
just as secure as using an integrated PKI provider, but it does not allow Golioth
to issue new device certificates on behalf of your devices.

CA certificates can be uploaded to a Golioth project by navigating to the
`Certificates` section under `Credentials`.

## Testing certificate based authentication with local PKI

For demonstration and testing purposes, local PKI can be established using tools
such as [`openssl`](https://github.com/openssl/openssl) or
[`cfssl`](https://github.com/cloudflare/cfssl).

:::warning
Building your PKI locally is not recommended for production environments, but
can be an easy way to get started with using certificate authentication.
:::

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

Upload your CA certificates to your Golioth project by navigating to the
`Certificates` section under `Credentials`, then click **Add CA Certificate** and select your `ca.crt.pem` file.

### Generating Device Certificates

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
organization (`O`) to the slug for the appropriate project, which can be found
under [`Project Settings`](https://console.golioth.io/project-settings). The
common name (`CN`) must be set to a unique identifier for the device within the
project. The unique value used in the common name is referred to as the device's
_certificate ID_. See the [Certificate IDs](#certificate-ids) section below for
more information.
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

:::tip
Keys and certificates may be encoded in different formats for distribution. The
`openssl` commands above produce text-based PEM (`.pem`) encoded files. Devices
will frequently use the more compact binary DER (`.der`) encoding. The following
commands can be used to convert PEM encoded keys and certificates to DER.
```
openssl ec -in device.key.pem -outform DER -out device.key.der
```
```
openssl x509 -in device.crt.pem -outform DER -out device.crt.der
```
:::
