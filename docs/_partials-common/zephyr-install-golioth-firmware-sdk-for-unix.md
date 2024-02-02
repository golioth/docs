import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import FirmwareSdkVer from '!!raw-loader!/docs/_versions/golioth-firmware-sdk.md';

1. With `west` installed, grab the Zephyr SDK:

    <CodeBlock language="console">
        { `cd ~` + "\n" }
        { `west init -m https://github.com/golioth/golioth-firmware-sdk.git --mr ${FirmwareSdkVer.replace(/(\n)/gm, "")} --mf west-zephyr.yml ~/golioth-zephyr-workspace` + "\n" }
        { `cd golioth-zephyr-workspace` + "\n" }
        { `west update` }
    </CodeBlock>

    :::info

    Depending on your internet and I/O speed, `west update` can take upwards of
    5 or 10 minutes.

    :::

2. Tell `west` to automatically configure CMake:

    ```
    west zephyr-export
    ```

3. Install the remaining dependencies:

    <Tabs
    groupId="west-installation"
    defaultValue="virtualenv"
    values={[
    {label: 'Install within a virtualenv', value: 'virtualenv'},
    {label: 'Install globally', value: 'global'},
    ]}>
    <TabItem value="virtualenv">

    ```
    pip install -r ~/golioth-zephyr-workspace/zephyr/scripts/requirements.txt
    ```

    </TabItem>
    <TabItem value="global">

    ```
    pip3 install -r ~/golioth-zephyr-workspace/zephyr/scripts/requirements.txt
    ```

    </TabItem>
    </Tabs>
