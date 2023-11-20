import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
groupId="os"
defaultValue="linux"
values={[
{label: 'Linux', value: 'linux'},
{label: 'MacOS', value: 'macos'},
{label: 'Windows', value: 'windows'},
]}>

import InstallEspressifToolchainUnix from '/docs/firmware/hardware/2-esp32/2-zephyr-quickstart/\_partials/install-espressif-toolchain-unix.md'
import InstallEspressifToolchainWindows from '/docs/firmware/hardware/2-esp32/2-zephyr-quickstart/\_partials/install-espressif-toolchain-windows.md'

<TabItem value="linux">
<InstallEspressifToolchainUnix />
</TabItem>

<TabItem value="macos">
<InstallEspressifToolchainUnix />
</TabItem>

<TabItem value="windows">
<InstallEspressifToolchainWindows />
</TabItem>
</Tabs>
