# Authentication

Golioth believes that all IoT devices should be secure by default. We offer two
approaches to authenticate your devices with Golioth:

- Certificate Authentication
    - Golioth utilizes X.509 certificates using ECDSA
    - You maintain control of your root signing keys, uploading only the public
      key to Golioth.
    - Suitable for zero-touch provisioning.
- Pre-Shared Key (PSK) Authentication
    - Similar in concept to a username and password for each device.
    - Credentials must be added to the Golioth server for each device before its
      first connection may be established.

:::info What we mean when we say "credentials"

Whether you're using certificates or pre-share keys, we refer to these as
credentials, or device credentials.

:::
