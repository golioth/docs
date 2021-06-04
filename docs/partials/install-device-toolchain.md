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

import SetupNrf9160 from './setup-nrf9160.md'

<SetupNrf9160 />

</TabItem>
<TabItem value="arm">

#### Install ARM Toolchain

You can also follow the [Getting started Guide](https://docs.zephyrproject.org/latest/getting_started/toolchain_3rd_party_x_compilers.html#gnu-arm-embedded) from Zephyr docs website and install the required tools.
</TabItem>
<TabItem value="qemu">

import InstallQemuSdk from './install-qemu-sdk.md'

<InstallQemuSdk />

</TabItem>
<TabItem value="others">

Follow more specific instructions for each supported board architecture on [Zephyr Website](https://docs.zephyrproject.org/latest/guides/beyond-GSG.html#gs-toolchain).
</TabItem>
</Tabs>