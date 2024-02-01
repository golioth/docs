import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

We recommend creating a `python3` virtual environment to avoid running into
tooling incompatibilities.

<Tabs
groupId="west-installation"
defaultValue="global"
values={[
{label: 'Install within a virtualenv', value: 'virtualenv'},
{label: 'Install globally', value: 'global'},
]}>
<TabItem value="virtualenv">

1. Create your workspace directory:

    <CodeBlock>
    {
    `mkdir ~/${props.workspace_directory}`
    }
    </CodeBlock>

2. Create a new virtual environment:

    Even though we haven't pulled down Zephyr yet, we can create the virtual environment in the place where we _will_ pull
    down Zephyr.

    <CodeBlock>
    {
    `python3 -m venv ~/${props.workspace_directory}/.venv`
    }
    </CodeBlock>

3. Activate the virtual environment:

    <CodeBlock>
    {
    `source ~/${props.workspace_directory}/.venv/bin/activate`
    }
    </CodeBlock>

    Whenever the virtual environment is active, your shell's prompt will be prefixed with `(.venv)`.

    Deactivate the virtual environment when you're done by running `deactivate`.

    :::note
    Anytime you need to use west or Zephyr, remember to re-activate the virtual environment.
    :::

4. Now, use `pip` to install `west` (beginning with the `wheel` dependency):

    Because we're in a `python3` `virtualenv`, we don't need to specify `pip3` and can just use `pip` (because virtual env knows the best version to use)

    ```
    pip install wheel
    pip install west
    ```
</TabItem>
<TabItem value="global">

1. Create your workspace directory:

    <CodeBlock>
    {
    `mkdir ~/${props.workspace_directory}`
    }
    </CodeBlock>

2. Use `pip3` to install `west` (beginning with the `wheel` dependency):

    ```
    pip3 install wheel
    pip3 install west
    ```

</TabItem>
</Tabs>
