---
title: Bluetooth
---

:::note Beta
Bluetooth connectivity is currently in `beta` support and may undergo changes
prior to general availability.
:::

Bluetooth is a wireless personal area network (PAN) protocol used for
short-range low power communication. Unlike other protocols, devices cannot
directly connect to the Golioth platform over Bluetooth, but must instead
leverage a [gateway device](/connectivity/networks/gateways) to bridge to
another connectivity protocol. Golioth Connectivity simplifies this process
dramatically with [`pouch`](https://github.com/golioth/pouch), our custom
end-to-end encrypted transport that allows for customers to write Bluetooth Low
Energy (LE) applications that work across a wide range of gateways, from
microcontroller-based devices to end-user smartphones. Golioth Connectivity
enables Bluetooth devices to roam across networks, making it possible to remain
connected to the cloud while devices are in motion.

## Managed Connectivity

Customers that use `pouch` for their Bluetooth LE devices are leveraging Golioth
Connectivity's managed Bluetooth connectivity. While customers are welcome to
develop their own gateway solutions to bridge Bluetooth devices to Golioth,
managed connectivity is strongly recommended due to the network management,
visibility, and security benefits it offers.

All communication over `pouch` is encrypted end-to-end, meaning that any gateway
devices that sit in between Bluetooth devices and Golioth are unable to
introspect data traveling to and from the platform. In order to start using
`pouch` in a project on Golioth, customers must complete the following steps.

1. Ensure that `Gateway Proxying` is enabled under [`Project
   Settings`](https://console.golioth.io/project-settings).
2. Upload any CA certificates used for issuing device certificates under
   `Certificates` (read more about [PKI](/connectivity/credentials/pki)).

At least two devices will be required to connect to Golioth.

1. A gateway device that is capable of acting as a Bluetooth LE
   _central_ and is equipped with at least one other connectivity channel (e.g.
   cellular, Wi-Fi, etc.).
2. A device that is capable of acting as a Bluetooth LE _peripheral_.

### Gateway Setup

While customers are welcome to implement their own gateway firmware, Golioth
provides a [reference
implementation](https://github.com/golioth/bluetooth-gateway) that leverages the
[Golioth Firmware SDK](https://github.com/golioth/golioth-firmware-sdk) for
communication with the Golioth platform, and
[`pouch`](https://github.com/golioth/pouch) for communication with Bluetooth LE
peripherals. [pre-compiled
binaries](https://github.com/golioth/bluetooth-gateway/releases/latest) are
available for the following hardware.

- [NXP
  FRDM-RW612](https://www.nxp.com/design/design-center/development-boards-and-designs/FRDM-RW612)
  - Wi-Fi / Ethernet and Bluetooth LE in a development kit form factor.
- [Nordic Thingy:91
  X](https://www.nordicsemi.com/Products/Development-hardware/Nordic-Thingy-91-X)
  - Cellular and Bluetooth LE in a compact prototyping platform form factor.
- [Nordic nRF9160
  DK](https://www.nordicsemi.com/Products/Development-hardware/nRF9160-DK)
  - Cellular and Bluetooth LE in a development kit form factor.
- [Ezurio Sentrius
  MG100](https://www.ezurio.com/iot-devices/bluetooth-iot-devices/sentrius-mg100-gateway-lte-mnb-iot-and-bluetooth-5)
  - Off-the-shelf cellular and Bluetooth LE platform, deployment-ready and
    customizable for a wide range of applications.

Follow the instructions in the
[README.md](https://github.com/golioth/bluetooth-gateway/blob/main/README.md) to
setup the gateway hardware of your choosing and connect to Golioth.

### Bluetooth Low Energy Peripheral Setup

Bluetooth LE peripherals use [`pouch`](https://github.com/golioth/pouch)
to communicate with the Golioth platform via one or more gateways. Devices
leveraging `pouch` must use certificates to authenticate with the platform.
After generating a private key and issuing a certificate for the device, follow
the instructions in the [`pouch` BLE GATT
example](https://github.com/golioth/pouch/tree/main/examples/ble_gatt) to get
started.

The example application will periodically request that the gateway proxy data on
its behalf. Upon the first successful delivery of data to the Golioth platform,
the device will be automatically created via [zero-touch
provisioning](/connectivity/credentials/pki#zero-touch-provisioning).

### Network Inspection

Because Bluetooth connectivity is enabled by Golioth Connectivity, the Golioth
platform is aware of relationships between gateways and peripherals. These
relationships, and other network insights, can be found under
[`Networks`](https://console.golioth.io/networks) in the Golioth console.
Network relationships are also visible on the individual device pages for both
gateways and peripherals. Currently, a network for Bluetooth devices is
synonymous with a gateway and its peripheral devices. However, networks may
evolve to encompass multiple gateways in the future. Learn more about networks
on Golioth in the [documentation](/connectivity/networks).
