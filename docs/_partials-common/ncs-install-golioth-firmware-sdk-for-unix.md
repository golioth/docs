import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import FirmwareSdkVer from '!!raw-loader!/docs/_versions/golioth-firmware-sdk.md';

1. With `west` installed, grab the Golioth NCS SDK:

    <CodeBlock language="console">
        { `cd ~` + "\n" }
        { `west init -m https://github.com/golioth/golioth-firmware-sdk.git --mr ${FirmwareSdkVer.replace(/(\n)/gm, "")} --mf west-ncs.yml ~/golioth-ncs-workspace` + "\n" }
        { `cd golioth-ncs-workspace/modules/lib/golioth-firmware-sdk` + "\n" }
        { `git submodule update --init --recursive` + "\n" }
        { `west update` }
    </CodeBlock>

2. Tell `west` to automatically configure CMake:

    ```
    west zephyr-export
    ```

3. Lastly, install the remaining dependencies:

    <Tabs
    groupId="west-installation"
    defaultValue="global"
    values={[
    {label: 'Install within a virtualenv', value: 'virtualenv'},
    {label: 'Install globally', value: 'global'},
    ]}>
    <TabItem value="virtualenv">

    ```
    pip install -r ~/golioth-ncs-workspace/zephyr/scripts/requirements.txt
    ```

    </TabItem>
    <TabItem value="global">

    ```
    pip3 install -r ~/golioth-ncs-workspace/zephyr/scripts/requirements.txt
    ```

    </TabItem>
    </Tabs>
