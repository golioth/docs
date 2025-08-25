---
title: Gateway-Based Positioning
---

:::usage
Gateway-based positioning with Golioth Location incures usage costs. See
[Golioth pricing](https://golioth.io/pricing) for more information.
:::

Devices that connect to Golioth via a gateway can obtain their position based on
the last known position of the gateway. When using the [`location`
transformer](/data-routing/transformers/location) in a [Golioth
Pipeline](/data-routing), devices connecting via a
[gateway](/connectivity/networks/gateways) will automatically have their gateway
information forwarded to the transformer. Gateway information will be used for
location resolution as a fallback if no network information is provided. The
gateway location must have been stored on Golioth Location using the [`location`
data destination](/data-routing/destinations/location) to be considered for
resolution.

### Use Cases

Gateway-based positioning is particularly relevant in the following scenarios.

#### Devices without GNSS or Cellular / Wi-Fi Capabilities

Devices with GNSS capabilities can obtain their own position, whereas those with
cellular or Wi-Fi support can leverage Golioth Location [network-based
positioning](/application-services/location/network-based-positioning). For
devices without any of these options, such as [Bluetooth Low Energy
devices](/connectivity/protocols/bluetooth), leveraging a gateway for
communication with Golioth will typically be required. In almost all cases,
gateways will support one or more of the aforementioned capabilities, allowing
location resolution and storage via Golioth Location. Devices connecting through
the gateway are then able to use that information to obtain their position,
which would not be possible otherwise.

#### Devices that Intermittently Connect via Gateways

Some devices do not _require_ use of a gateway, but will use one to lower costs
and maximize efficiency when available. This use case is especially common for
devices that may be able to connect directly to Golioth using cellular, but will
instead leverage a mobile application on a user's smartphone as a gateway when
availale. In this scenario, the device has the option of scanning local cellular
networks and streaming the network information through the gateway for
[network-based
positioning](/application-services/location/network-based-positioning), using
gateway-based positioning, or using a combination of both.
