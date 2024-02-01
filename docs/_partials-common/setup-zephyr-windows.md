import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`west` is the Zephyr "meta tool" that will allow you to build firmware, install
packages, and flash firmware. There are various dependencies required, depending
upon your operating system (OS), because `west` is Python based.

<Tabs
groupId="west-installation"
defaultValue="virtualenv"
values={[
{label: 'Install within a virtualenv', value: 'virtualenv'},
{label: 'Install globally', value: 'global'},
]}>
<TabItem value="virtualenv">

1. Create your workspace directory:

    <CodeBlock>
    { `cd %HOMEPATH%` + "\n" }
    { `mkdir ${props.workspace_directory}` }
    </CodeBlock>

2. Create a new virtual environment:

    <CodeBlock>
    { `cd %HOMEPATH%` + "\n" }
    { `python -m venv ${props.workspace_directory}\\.venv` }
    </CodeBlock>

3. Activate the virtual environment:

    <CodeBlock>
    { `## cmd.exe` + "\n" }
    { `${props.workspace_directory}\.venv\Scripts\activate.bat` + "\n" }
    { "\n" }
    { `## PowerShell` + "\n" }
    { `${props.workspace_directory}\.venv\Scripts\Activate.ps1` + "\n" }
    </CodeBlock>

    Once activated your shell will be prefixed with `(.venv)`. The virtual
    environment can be deactivated at any time by running `deactivate`.

    :::note

    Remember to activate the virtual environment whenever you need to use the
    `west` command.

    :::

4. Install west:

    Now, use `pip` to install `west`.

    ```shell
    pip install west
    ```

</TabItem>
<TabItem value="global">

1. Create your workspace directory:

    <CodeBlock>
    { `cd %HOMEPATH%` + "\n" }
    { `mkdir ${props.workspace_directory}` }
    </CodeBlock>

2. Use `pip3` to install `west`:

    ```shell
    pip install -U west
    ```

</TabItem>
</Tabs>

:::note

Using the VS Code extension in conjunction with the nRF Connect for Desktop
tools may move you outside many of the other recommended methods of compiling
your firmware, described on this docs page and elsewhere on Golioth. If you're
having problems with your Windows install, please contact us on [the Golioth
Forum](https://forum.golioth.io).

:::
