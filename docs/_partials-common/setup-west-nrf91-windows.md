import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::note

[The nRF Connect For Desktop](https://www.nordicsemi.com/Products/Development-tools/nRF-Connect-for-desktop) installer includes a Toolchain Manager section that handles many of the same functions described in the Linux tab. This can be used in conjunction with [the VS Code extension for nRF Connect SDK (NCS)](https://www.nordicsemi.com/Products/Development-tools/nRF-Connect-for-VS-Code). This is the recommended path for Windows users with the nRF9160. 

:::

#### Package Manager: Chocolatey

The [chocolatey](https://chocolatey.org/) package manager needs to be installed to fetch software packages required by Zephyr.

These instructions must be run in a `cmd.exe` command prompt. The required commands differ on PowerShell.

1. [Install chocolatey](https://chocolatey.org/install)

2. Open an Administrator `cmd.exe` window:

    * press the Windows key
    * type `cmd.exe`
    * right-click the result, and choose `Run as Administrator`

3. Disable global confirmation to avoid having to confirm the installation of individual programs:

    ```shell
    choco feature enable -n allowGlobalConfirmation
    ```

4. Use `choco` to install the required dependencies: 

    ```shell
    choco install cmake --installargs 'ADD_CMAKE_TO_PATH=System'
    choco install ninja gperf python git dtc-msys2 wget 7zip
    ```

5. Close the window and open a new `cmd.exe` window **as a regular user** to continue

### Install West

import SetupZephyrWindows from './setup-zephyr-windows.md'

<SetupZephyrWindows workspace_directory="golioth-ncs-workspace" />
