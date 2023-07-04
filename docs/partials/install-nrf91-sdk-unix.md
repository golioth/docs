import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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
