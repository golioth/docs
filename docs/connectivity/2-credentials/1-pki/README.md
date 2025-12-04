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

When one of your devices connects to Golioth, it'll prove its identity by
presenting a signed certificate. The device certificate contains the device's
public key, as well as its project and certificate ID. Device certificates are
issued by a _certificate authority_ (CA), which validated the information in the
certificate and signed it.

The device certificate does not need to be registered ahead of time, and as
outlined in the [Zero-Touch Provisioning section](#zero-touch-provisioning)
below, the device will even be able to self-register when it first authenticates
with a valid certificate.

To verify the certificate the device presented, Golioth goes through a list of
known CAs for your project. If the device's certificate was signed by one of the
known CAs, Golioth can trust the information within it, and the device can
start sending and receiving data.

In order to start leveraging PKI for device certificates, it is necessary to
establish at least one CA, and register it with Golioth.

### PKI Providers

Golioth does not issue device certificates, and requires you to establish PKI
through an external service.

Golioth can [integrate directly with the AWS Private Certificate Authority
service](./1-aws.md). Other PKI providers can be integrated into your project by
[establishing offline PKI, then uploading the CA certificates to
Golioth](./2-offline-pki.md).

By integrating directly with an external PKI provider, Golioth automatically
keeps an up to date list of CAs, and is able to forward certificate signing
requests on behalf of your devices, allowing devices to perform certificate
rotation through Golioth's infrastructure.

## Certificate IDs

When issuing a device certificate, the certificate ID used in the common name
(`CN`) is a unique identifier within the Golioth project specified in the
organization (`O`) that is used to distinguish the physical device when using the
certificate. The sole purpose of this identifier is to associate the physical
device with a device on the Golioth platform. While a device's certificate ID may
match other device attributes, such as the device name, it does not specifically
connote any other meaning on the Golioth platform. Using a dedicated identifier
for this purpose enables [zero-touch provisioning](#zero-touch-provisioning) and
other flexible provisioning workflows.

When a physical device presents a valid certificate to Golioth and proves
possession of the associated private key, the physical device is associated with
a device on Golioth according to the following logic.

1. If a Golioth device already exists with the given certificate ID, the
   physical device is associated with it.
2. If a Golioth device exists with a name that matches the certificate ID, and
   it has no certificate ID set, then the certificate ID is set and the physical
   device is associated with it.
3. If no devices exist with either a matching certificate ID, or a matching name
   and no certificate ID, then a new device is created on Golioth with the
   certificate ID set, and the physical device is associated with it.

After a certificate ID is set on a Golioth device it is immutable. However, the
name of the device remains mutable. In the third case above, this can lead to a
scenario where a Golioth device exists with a name and certificate ID, and the
name matches the certificate ID presented by the physical device, but the
certificate IDs do not match. If this occurs, a new Golioth device is created
with certificate ID set to match the physical device's certificate ID, and with
name set to the same value of the certificate ID with a random suffix appended.
Otherwise, the name of the newly created Golioth device will be set to the same
value of the certificate ID.

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
manually provision devices prior to their first connection.
