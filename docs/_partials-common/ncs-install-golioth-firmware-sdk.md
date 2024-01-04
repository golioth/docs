import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

With `west` installed, grab the Golioth NCS SDK:

<Tabs
groupId="os"
defaultValue="linux"
values={[
{label: 'Linux', value: 'linux'},
{label: 'MacOS', value: 'macos'},
{label: 'Windows', value: 'windows'},
]}>

import InstallNRFSDKUnix from '/docs/_partials-common/ncs-install-golioth-firmware-sdk-for-unix.md'
import InstallNRFSDKWindows from '/docs/_partials-common/ncs-install-golioth-firmware-sdk-for-windows.md'

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



