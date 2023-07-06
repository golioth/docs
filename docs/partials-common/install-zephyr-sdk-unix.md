import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

With `west` installed, grab the Zephyr SDK:

:::info
Depending on your internet and I/O speed, `west update` can take upwards of 5 or 10 minutes.
:::

```
cd ~
west init -m https://github.com/golioth/golioth-zephyr-sdk.git --mf west-zephyr.yml ~/golioth-zephyr-workspace
cd golioth-zephyr-workspace
west update
```

Tell `west` to automatically configure CMake:

```
west zephyr-export
```

Install the remaining dependencies:

<Tabs
groupId="west-installation"
defaultValue="virtualenv"
values={[
{label: 'Install within a virtualenv', value: 'virtualenv'},
{label: 'Install globally', value: 'global'},
]}>
<TabItem value="virtualenv">

```
pip install -r ~/golioth-zephyr-workspace/zephyr/scripts/requirements.txt
```

</TabItem>
<TabItem value="global">

```
pip3 install -r ~/golioth-zephyr-workspace/zephyr/scripts/requirements.txt
```

</TabItem>
</Tabs>
