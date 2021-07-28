
While the official documentation for Zephyr suggests jumping right into
installing `west`, we suggest creating a `python3` virtual environment
first, to avoid running into tooling incompatibilities.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
groupId="west-installation"
defaultValue="global"
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

If you'd like to exit out of the virtualenv at the end of the tutorial,
run `deactivate`.

Now, use `pip` to install `west`:


Because we're in a `python3` `virtualenv`, we don't need to specify `pip3` and can just use `pip` (because virtual env knows the best version to use)

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