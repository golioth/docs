import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Installing West

Use `pip3` to install `west`:

```
pip3 install west
```

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

:::note
We suggest creating a `python3` virtual environment when installing the following dependencies
to avoid running into incompatibilities between different versions of the same package, particularly
if you're working on multiple Zephyr implementations at once.
:::

<Tabs
groupId="west-installation"
defaultValue="virtualenv"
values={[
{label: 'Install within a virtualenv', value: 'virtualenv'},
{label: 'Install globally', value: 'global'},
]}>
<TabItem value="virtualenv">

1. Create a new version environment:

```
python3 -m venv ~/zephyrproject/.venv
```

2. Activate the virtual environment

```
source ~/zephyr-env/bin/activate
# OR, if you're using the fish shell, run
source ~/zephyr-env/bin/activate.fish
```

Whenever the virtual environment is activated, your shell will be prefixed with `(.venv)`. Deactivate the virtual environment when you're finished
by running `deactivate`.

:::note
Activate the virtial environment every time you need to use zephyr.
:::

3. Install Zephyr's python dependencies:

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
