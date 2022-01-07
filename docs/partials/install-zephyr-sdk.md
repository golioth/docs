import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

With `west` installed, grab the Zephyr SDK:

:::info
Depending on your internet and I/O speed, `west update` can take upwards of 5 or 10 minutes.
:::

```
cd ~
west init -m https://github.com/golioth/zephyr-sdk.git --mr main ~/zephyrproject
cd zephyrproject/
west update
west patch
```

:::note
The patch step is temporary until the Github repo is made public
:::

Tell `west` to automatically configure CMake:

```
west zephyr-export
```

Lastly, install the remaining dependencies:

<Tabs
groupId="west-installation"
defaultValue="virtualenv"
values={[
{label: 'Install within a virtualenv', value: 'virtualenv'},
{label: 'Install globally', value: 'global'},
]}>
<TabItem value="virtualenv">

```
pip install -r ~/zephyrproject/zephyr/scripts/requirements.txt
```

</TabItem>
<TabItem value="global">

```
pip3 install -r ~/zephyrproject/zephyr/scripts/requirements.txt
```

</TabItem>
</Tabs>
