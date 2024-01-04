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

import InstallGoliothSDKUnix from './zephyr-install-golioth-firmware-sdk-for-unix.md'
import InstallGoliothSDKWindows from './zephyr-install-golioth-firmware-sdk-for-windows.md'

<TabItem value="linux">
<InstallGoliothSDKUnix/>
</TabItem>

<TabItem value="macos">
<InstallGoliothSDKUnix/>
</TabItem>

<TabItem value="windows">
<InstallGoliothSDKWindows/>
</TabItem>
</Tabs>
