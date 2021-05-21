:::note
While the official documentation for Zephyr suggests jumping right into
installing `west`, we suggest creating a `python3` virtual environment
first, to avoid running into tooling incompatibilities.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
groupId="west-installation"
defaultValue="virtualenv"
values={[
{label: 'Install within a virtualenv', value: 'virtualenv'},
{label: 'Install globally', value: 'global'},
]}>
<TabItem value="virtualenv">

Install `virtualenv` and create a new environment:

```
sudo pip3 install virtualenv
virtualenv -p python3 ~/zephyr-env
```

Whenever you need to activate this virtual env, run:

```
source ~/zephyr-env/bin/activate
# OR, if you're using the fish shell, run
source ~/zephyr-env/bin/activate.fish
```

:::note
If you'd like to exit out of the virtualenv at the end of the tutorial,
run `deactivate`.
:::

Now, use `pip` to install `west`:

:::note
Because we're in a `python3` `virtualenv`, we don't need to specify `pip3`
and can just use `pip`.
:::

```
pip install west
```
</TabItem>
<TabItem value="global">

Use `pip3` to install `west`:

```
pip3 install west
```
</TabItem>
</Tabs>

---

### Installing the Device SDK

With `west` installed, grab the Device SDK:

:::info
Depending on your internet and I/O speed, `west update` can take upwards of 5 or 10 minutes.
:::

```
cd ~
west init -m git@github.com:golioth/zephyr.git --mr main ~/zephyrproject
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
