
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::note
These directions are mirroring [the Zephyr and Python dependency install instructions](https://docs.zephyrproject.org/latest/getting_started/index.html#get-zephyr-and-install-python-dependencies). Some directions may be slightly modified to fit your nRF91 / Golioth install.
:::


With `west` installed, grab the Device SDK:


```
cd ~
west init -m https://github.com/golioth/zephyr-sdk.git --mf west-ncs.yml ~/golioth-ncs-workspace
cd golioth-ncs-workspace
```
Locate the west.yml file under the `nrf` folder.
Add the following to west.yml file in the manifest/projects subtree to add the Golioth SDK and dependencies to the NRF Connect SDK:
```
# Golioth repository.
- name: golioth
  path: modules/lib/golioth
  revision: 309597316d6963832bb777f901e5c869f99daff3
  url: https://github.com/golioth/golioth-zephyr-sdk.git
  import:
    name-allowlist:
      - qcbor

```
Do the following to redeploy zephyr and add the Golioth SDK library.
```
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
