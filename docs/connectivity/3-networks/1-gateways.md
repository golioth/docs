---
title: Gateways
---

A gateway is a device that connects to Golioth and delivers data on behalf of
one or more other devices. The peripheral devices must be able to send and
receive valid [`pouch`](https://github.com/golioth/pouch) data, which the
gateway proxies to and from the Golioth platform. Outside of acting as a proxy
for other devices, gateway devices are identical to any other device on the
Golioth platform and are able to make use of all device management, data
streaming, and application services.

In order for a device to be able to act as a gateway, the `Gateway Proxying`
setting must be enabled under [`Project
Settings`](https://console.golioth.io/project-settings) in the same project as
the gateway device. This authorizes gateways to proxy data on behalf of other
devices in the project, but does not allow the gateway to introspect the data
content. All data that passes through gateways is encrypted end-to-end by
default.

Gateways may connect to the Golioth platform using any [supported
protocol](/connectivity/protocols). Golioth currently offers a Bluetooth gateway
[reference implementation](https://github.com/golioth/bluetooth-gateway) that
includes examples for cellular and Wi-Fi / Ethernet connected gateway devices.
