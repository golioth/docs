import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::note

[The nRF Connect For Desktop](https://www.nordicsemi.com/Products/Development-tools/nRF-Connect-for-desktop) installer includes a Toolchain Manager section that handles many of the same functions described in the Ubuntu tab. This can be used in conjunction with [the VS Code extension for nRF Connect SDK (NCS)](https://www.nordicsemi.com/Products/Development-tools/nRF-Connect-for-VS-Code). This is the recommended path for Windows users with the nRF9160. 

:::

#### Package Manager: Chocolatey

The [chocolatey](https://chocolatey.org/) package manager needs to be installed to fetch software packages required by Zephyr.

These instructions must be run in a `cmd.exe` command prompt. The required commands differ on PowerShell.

1. [Install chocolatey](https://chocolatey.org/install)

1. Open an Administrator `cmd.exe` window: press the Windows key, type “cmd.exe”, right-click the result, and choose “Run as Administrator”.

3. Disable global confirmation to avoid having to confirm the installation of individual programs:
    ```
    choco feature enable -n allowGlobalConfirmation
    ```

4. Use `choco` to install the required dependencies: 
    ```
    choco install cmake --installargs 'ADD_CMAKE_TO_PATH=System'
    choco install ninja gperf python git dtc-msys2 wget 7zip
    ```

5. Close the window and open a new `cmd.exe` window **as a regular user** to continue

### Install West

`west` is the Zephyr "meta tool" that will allow you to build firmware, install packages, and flash firmware. There are various dependencies required, depending upon your operating system (OS), because `west` is Python based.

<Tabs
groupId="west-installation"
defaultValue="virtualenv"
values={[
{label: 'Install within a virtualenv', value: 'virtualenv'},
{label: 'Install globally', value: 'global'},
]}>


<TabItem value="virtualenv">

1. Create a new virtual environment:
    ```
    cd %HOMEPATH%
    python -m venv golioth-ncs-workspace\.venv
    ```

2. Activate the virtual environment:
    ```
    :: cmd.exe
    golioth-ncs-workspace\.venv\Scripts\activate.bat

    :: PowerShell
    golioth-ncs-workspace\.venv\Scripts\Activate.ps1

    ```

Once activated your shell will be prefixed with `(.venv)`. The virtual environment can be deactivated at any time by running `deactivate`.

:::note
Remember to activate the virtual environment every time you start working.
:::

3. Install west:
    ```
    pip install west
    ```

</TabItem>
<TabItem value="global">

1. Install west:

    ```
    pip3 install -U west
    ```

</TabItem>
</Tabs>


:::note

Using the VS Code extension in conjuction with the nRF Connect for Desktop tools may move you outside many of the other recommended methods of compiling your firmware, described on this docs page and elsewhere on Golioth. If you're having problems with your Windows install, please contact us on our [Community Discord](https://golioth.io/discord)

:::
