# Certificate Authentication

Golioth uses the X.509 standard with the Elliptic Curve Digital Signature
Algorithm (ECDSA) for certificate authentication. This delivers much more
robust security compared to Pre-Shared Key (PSK) authentication.

Certificate authentication also eases the provisioning process. Devices do not
need to be registered with Golioth prior to making the first connection. In
manufacturing, units are granted individual device certificates signed using a
trusted chain of root certificates and intermediate certificates. When the first
connection is authenticated, Golioth will create a unique record of that device
and it will appear as a member of your IoT fleet in your Golioth Project.

## Generate Certificates

Generating certificates starts by creating a root certificate which is then used
to create and sign device certificates.

:::note How to generate certificates

The [Golioth Firmware SDK: Device
Authentication](/firmware/golioth-firmware-sdk/authentication/certificate-auth)
section includes a guide on how to use OpenSSL to create a self-signed root
certificate, as well as creating device certificates and placing them on a
device.

:::

### Uploading public root certificate

Upload your signed root certificate (the public key in `pem` format) to your
Golioth project. This will be used to authenticate each device.

1. Log into the [Golioth Web Console](https://console.golioth.io) and select
   your project
2. Use the left sidebar to navigate to `Credentials` &rarr; `Certificates`
3. Click `Add CA Certificate` and upload your public certificate (eg:
   `golioth.crt.pem`) file.

![Uploading the public root
certificate](./assets/cert-auth-upload-public-key.jpg)

:::caution

Do not upload the key file (eg: `golioth.key.pem`). This is your private key
used to sign new device credentials and you are the only one who should have
access to it.

:::

## Devices connect using zero-touch provisioning

Each of your devices needs a certificate/key signed using the private root key.
With the public root certificate uploaded to Golioth, your devices with will
automatically connect and authenticate to your project. No prior configuration
(beyond uploading the public root certificate) are necessary for Golioth to
recognize and add each device.

### Device Name (mutable)

Look in the [Golioth Web Console](https://console.golioth.io) to verify a device
has been added with a name that matches the `CERTIFICATE_ID` provided when you
created the device credential:

![New device added using Certificate
Authentication](./assets/cert-auth-new-device-added.jpg)

The `Device Name` attribute is mutable and you can change it to another name at
any time.

:::tip Device name collision

In the event that a device already exists on the Golioth server that has a name
matching the `CERTIFICATE_ID`, the certificate will be added to the existing
device entry on the Golioth server. This may be used in cases where you wish to
add device entries to your Golioth project in advance of the first time the
physical devices connect to the server using certificate authentication.

:::

### Certificate ID (immutable)

The field that associates your device with a certificate is the **immutable**
`Certificate ID` field shown in the Summary Page of the device. Click on the
device name link to see the summary page as follows:

![Device Certificate ID on summary
page](./assets/device-summary-certificate-id.jpg)

This `Certificate ID` field is unique across an entire project and is used to
associate a device with a certificate during authentication.
