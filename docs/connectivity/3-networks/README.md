---
title: Networks
---

:::note Beta
Golioth Connectivity networks are currently in `beta` support and may undergo
changes prior to general availability.
:::

Networks are comprised of groups of devices and communication links between
them. All devices that connect to the Golioth platform leverage some number of
networks for connectivity, though the nodes in the network may be managed by the
customer, Golioth, or a third-party. When using Golioth Connectivity, customers
are able to manage networks through services offered by the Golioth platform.

## Network Visualization

For customers leveragin Golioth Connectivity's managed cellular or Bluetooth
connectivity, all of the active networks in their fleet are viewable [in the
Golioth console](https://console.golioth.io/networks). All devices that are part
of a network will have additional network information displayed on their device
detail page, allowing quick navigation to peer and [gateway
devices](/connectivity/networks/gateways).

## Roaming

:::usage
While in `beta`, network roaming support does not incur additional costs.
Roaming may incur usage costs at general availability.
:::

Golioth Connectivity's roaming capabilities enables devices to seamlessly move
from one network to another. This is especially useful in the context of devices
that are not stationary, as it allows them to move from one location to another
while maintaining a connection to the cloud.

By default, devices can connect to Golioth via any gateway device in the same
project.
