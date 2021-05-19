import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
groupId="arch"
defaultValue="esp32"
values={[
{label: 'Espressif SDK', value: 'esp32'},
{label: 'Nordic SDK', value: 'nrf'},
{label: 'QEMU', value: 'qemu'},
{label: 'Other Boards', value: 'others'},
]}>
<TabItem value="esp32">

import SetupEsp from './setup-esp.md'

<SetupEsp/>

</TabItem>
<TabItem value="nrf">

#### Install ARM Toolchain

You can also follow the Getting started Guide from Zephyr docs website and install the required tools.
</TabItem>
<TabItem value="arm">

#### Install ARM Toolchain

You can also follow the [Getting started Guide](https://docs.zephyrproject.org/latest/getting_started/toolchain_3rd_party_x_compilers.html#gnu-arm-embedded) from Zephyr docs website and install the required tools.
</TabItem>
<TabItem value="qemu">

#### Install QEMU

You can follow the [Install QEMU](https://www.qemu.org/download/) instructions from QEMU website.

### Setup QEMU Networking

See [Networking with QEMU](https://docs.zephyrproject.org/latest/guides/networking/qemu_setup.html#networking-with-qemu) on how to setup networking on host and configure NAT/masquerading to access Internet.

</TabItem>
<TabItem value="others">

Follow more specific instructions for each supported board architecture on [Zephyr Website](https://docs.zephyrproject.org/latest/guides/beyond-GSG.html#gs-toolchain).
</TabItem>
</Tabs>