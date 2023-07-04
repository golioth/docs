import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::note
These directions are mirroring [the Zephyr and Python dependency install instructions](https://docs.zephyrproject.org/latest/getting_started/index.html#get-zephyr-and-install-python-dependencies). Some directions may be slightly modified to fit your nRF91 / Golioth install.
:::

With `west` installed, grab the Golioth NCS SDK:

<Tabs
groupId="os"
defaultValue="linux"
values={[
{label: 'Linux', value: 'linux'},
{label: 'MacOS', value: 'macos'},
{label: 'Windows', value: 'windows'},
]}>

import InstallNRFSDKUnix from './install-nrf91-sdk-unix.md'
import InstallNRFSDKWindows from './install-nrf91-sdk-windows.md'

<TabItem value="linux">
<InstallNRFSDKUnix/>
</TabItem>

<TabItem value="macos">
<InstallNRFSDKUnix/>
</TabItem>

<TabItem value="windows">
<InstallNRFSDKWindows/>
</TabItem>
</Tabs>



