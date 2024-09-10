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
<TabItem value="linux">

```console
cd ~/golioth-ncs-workspace/zephyr
west build -p auto -b  nrf9160dk/nrf9160/ns samples/basic/minimal
```

</TabItem>
<TabItem value="macos">

```console
cd ~/golioth-ncs-workspace/zephyr
west build -p auto -b  nrf9160dk/nrf9160/ns samples/basic/minimal
```

</TabItem>
<TabItem value="windows">

```console
cd %HOMEPATH%\golioth-ncs-workspace\zephyr
west build -p auto -b  nrf9160dk/nrf9160/ns samples\basic\minimal
```

</TabItem>
</Tabs>
