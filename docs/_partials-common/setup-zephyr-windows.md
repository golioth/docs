:::note
Python3 should have been installed by chocolatey in the last step.
Verify you have version 3 (and not version 2):

1. Open the command line by hitting the Windows key, typing `cmd.exe` and
   pressing enter.
2. Type `python`
3. The interpreter will open and display the version. Type `exit()` to exit.

    ```python
    Python 3.10.4 (tags/v3.10.4:9d38120, Mar 23 2022, 23:13:41) [MSC v.1929 64 bit (AMD64)] on win32
    Type "help", "copyright", "credits" or "license" for more information.
    >>>
    ```

:::

We recommend creating a `python3` virtual environment to avoid running into
tooling incompatibilities.

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
    python -m venv {props.workspace_directory}\.venv
    ```

2. Activate the virtual environment:

    ```shell
    c:\{props.workspace_directory}\.venv\Scripts\activate.bat
    ```

    Once activated your shell will be prefixed with `(.venv)`. The virtual environment can be deactivated at any time by running `deactivate`.

    :::note
    Remember to activate the virtual environment whenever you need to use the `west` command.
    :::

3. Install west:

    Now, use `pip` to install `west`.

    ```shell
    pip install west
    ```


</TabItem>
<TabItem value="global">

1. Use `pip3` to install `west`:

    ```shell
    pip install -U west
    ```

</TabItem>
</Tabs>
