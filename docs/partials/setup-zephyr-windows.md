
While the official documentation for Zephyr suggests jumping right into
installing `west`, we suggest creating a `python3` virtual environment
first, to avoid running into tooling incompatibilities.

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

1. Create a new virtual environment:

    ```shell
    cd c:\
    python3 -m venv zephyrproject\.venv
    ```

2. Activate the virtual environment:

    ```shell
    :: cmd.exe
    zephyrproject\.venv\Scripts\activate.bat
    :: PowerShell
    zephyrproject\.venv\Scripts\Activate.ps1
    ```

    Once activated your shell will be prefixed with `(.venv)`. The virtual environment can be deactivated at any time by running `deactivate`.

    :::note
    Remember to activate the virtual environment whenever you need to use the `west` command.
    :::

3. Install west:

    Now, use `pip` to install `west`. Because we're in a `python3` `virtualenv`, we don't need to specify `pip3` and can just use `pip` (because virtual env knows the best version to use)

    ```shell
    pip install west
    ```


</TabItem>
<TabItem value="global">

1. Use `pip3` to install `west`:

```
pip3 install -U west
```
</TabItem>
</Tabs>
