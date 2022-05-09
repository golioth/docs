
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

Create a new version environment:

Even though we haven't pulled down Zephyr yet, we can create the virtual environment in the place where we _will_ pull
down Zephyr.

```
python3 -m venv ~/golioth-zephyr-workspace/.venv
```

Activate the virtual environment:

```
source ~/golioth-zephyr-workspace/.venv/bin/activate
# OR, if you're using the fish shell, run
source ~/golioth-zephyr-workspace/.venv/bin/activate.fish
```

Whenever the virtual environment is active, your shell's prompt will be prefixed with `(.venv)`.

Deactivate the virtual environment when you're done by running `deactivate`.

:::note
Anytime you need to use west or Zephyr, remember to re-activate the virtual environment.
:::

Now, use `pip` to install `west` (beginning with the `wheel` dependency):

Because we're in a `python3` `virtualenv`, we don't need to specify `pip3` and can just use `pip` (because virtual env knows the best version to use)

```
pip install wheel
pip install west
```
</TabItem>
<TabItem value="global">

Use `pip3` to install `west` (beginning with the `wheel` dependency):

```
pip3 install wheel
pip3 install west
```
</TabItem>
</Tabs>
