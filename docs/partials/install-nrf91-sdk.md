
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::note
These directions are mirroring [the Zephyr and Python dependency install instructions](https://docs.zephyrproject.org/latest/getting_started/index.html#get-zephyr-and-install-python-dependencies). Some directions may be slightly modified to fit your nRF91 / Golioth install.
:::

With `west` installed, grab the Golioth NCS SDK:

```
cd ~
west init -m https://github.com/golioth/golioth-zephyr-sdk.git --mf west-ncs.yml ~/golioth-ncs-workspace
cd golioth-ncs-workspace
west update
```

Tell `west` to automatically configure CMake:

```
west zephyr-export
```

Lastly, install the remaining dependencies:

<Tabs
groupId="west-installation"
defaultValue="global"
values={[
{label: 'Install within a virtualenv', value: 'virtualenv'},
{label: 'Install globally', value: 'global'},
]}>
<TabItem value="virtualenv">

```
pip install -r ~/golioth-ncs-workspace/zephyr/scripts/requirements.txt
```

</TabItem>
<TabItem value="global">

```
pip3 install -r ~/golioth-ncs-workspace/zephyr/scripts/requirements.txt
```

</TabItem>
</Tabs>
