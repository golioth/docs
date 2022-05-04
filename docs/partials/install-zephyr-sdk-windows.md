import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

1. With `west` installed, download the Zephyr SDK:

    ```shell
    cd c:\
    west init -m https://github.com/golioth/golioth-zephyr-sdk.git --mr main zephyrproject
    cd zephyrproject
    west update
    ```

    :::info
    Depending on your internet and I/O speed, `west update` can take upwards of 5 or 10 minutes.
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
    pip install -r C:\zephyrproject\zephyr\scripts\requirements.txt
    ```

    </TabItem>
    <TabItem value="global">

    ```
    pip3 install -r C:\zephyrproject\zephyr\scripts\requirements.txt
    ```

    </TabItem>
    </Tabs>
