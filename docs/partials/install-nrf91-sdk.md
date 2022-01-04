
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

With `west` installed, grab the Device SDK:


```
cd ~
west init -m https://github.com/nrfconnect/sdk-nrf --mr v1.7.0-rc2 ~/zephyr-nrf
cd zephyr-nrf/
```
Locate the west.yml file under the nrf folder.
Add the following to west.yml file in the manifest/projects subtree to add the Golioth SDK and dependencies to the NRF Connect SDK:
```
# Golioth repository.
- name: golioth
  path: modules/lib/golioth
  revision: main
  url: https://github.com/golioth/zephyr-sdk.git

# Golioth dependencies.
- name: qcbor
  revision: 17b5607b8c49b835d22dec3effa97b25c89267b3
  url: https://github.com/golioth/QCBOR.git
  path: modules/lib/qcbor

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
pip install -r ~/zephyr-nrf/zephyr/scripts/requirements.txt
```

</TabItem>
<TabItem value="global">

```
pip3 install -r ~/zephyr-nrf/zephyr/scripts/requirements.txt
```

</TabItem>
</Tabs>
