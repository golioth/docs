---
title: Golioth Location Overview
---

## What is Golioth Location?

Golioth Location is a positioning service that enables connected devices to
retrieve their approximate location by submitting network information to the
Golioth cloud platform. The service currently supports resolving position based
on cell tower and Wi-Fi access point data.

:::note
Golioth Location is currently limited to members of the [private access
program](https://blog.golioth.io/golioth-location-private-access/).
:::

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
