---
title: Network-Based Positioning
---

:::usage
Network-based positioning with Golioth Location incures usage costs. See
[Golioth pricing](https://golioth.io/pricing) for more information.
:::

Devices can obtain their position by streaming information about cell towers,
Wi-Fi access points, or both, to a [Golioth Pipeline](../../data-routing) that
makes use of the [`location`
transformer](../../data-routing/3-transformers/10-location.md). Typically, the
more information that a device can provide, the more accurate the location data
returned will be.

See the
[example](https://github.com/golioth/golioth-firmware-sdk/tree/main/examples/zephyr/location)
in the [Golioth Firmware
SDK](https://docs.golioth.io/firmware/golioth-firmware-sdk) for a demonstration
of how to use network information to obtain device position.

### Use Cases

Network-based positioning is particularly relevant in the following scenarios.

#### Devices without GNSS Capabilities

Adding GNSS support to a device increases BOM cost, and powering GNSS radios can
have a significant negative impact on battery life. For devices that do not
require the most precise location resolution, opting to forego GNSS
capabilities, or opting to use it sparingly, may be optimal. In these cases,
devices can leverage network-based positioning, which is still able to provide
location data with accuracy on the order of tens to hundreds of meters.

#### Indoor Devices and Devices in Urban Locations

Some environments make leveraging GNSS challenging or impossible. Devices that
are typically indoors or in dense urban areas will frequently struggle to
receive signals from GNSS satellites. Network-based positioning is a reliable
alternative, providing highly accurate results in environments where information
about multiple Wi-Fi access points or cell towers can be submitted.

#### Devices Requiring Rapid Location Resolution

Obtaining position via GNSS can take up to 15 minutes in cold start scenarios.
Network-based positioning can resolve location instantly when a connection to
the Golioth cloud platform is already established. Devices with low latency
positioning requirements may opt to use network-based positioning instead of, or
in addition to GNSS capabilities.

