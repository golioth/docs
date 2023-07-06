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

import InstallZephyrSDKUnix from './install-zephyr-sdk-unix.md'
import InstallZephyrSDKWindows from './install-zephyr-sdk-windows.md'

<TabItem value="linux">
<InstallZephyrSDKUnix/>
</TabItem>

<TabItem value="macos">
<InstallZephyrSDKUnix/>
</TabItem>

<TabItem value="windows">
<InstallZephyrSDKWindows/>
</TabItem>
</Tabs>
