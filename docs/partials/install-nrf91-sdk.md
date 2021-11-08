
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

With `west` installed, grab the Device SDK:


```
cd ~
west init -m https://github.com/nrfconnect/sdk-nrf --mr v1.7.1 ~/zephyr-nrf
cd zephyr-nrf/
west update
west patch
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
pip install -r ~/zephyr-nrf/zephyr/scripts/requirements.txt
```

</TabItem>
<TabItem value="global">

```
pip3 install -r ~/zephyr-nrf/zephyr/scripts/requirements.txt
```

</TabItem>
</Tabs>
