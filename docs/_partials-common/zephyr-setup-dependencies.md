import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Install Dependencies

<Tabs
groupId="os"
defaultValue="linux"
values={[
{label: 'Linux', value: 'linux'},
{label: 'MacOS', value: 'macos'},
{label: 'Windows', value: 'windows'},
]}>

import SetupWestUnix from './zephyr-setup-west-unix.md'
import SetupWestWindows from './zephyr-setup-west-windows.md'


<TabItem value="linux">

1. Install dependencies with `apt`:

    ```
    sudo apt update
    sudo apt install --no-install-recommends git cmake ninja-build gperf \
    ccache dfu-util device-tree-compiler wget python3-dev python3-pip \
    python3-setuptools python3-tk python3-venv python3-wheel xz-utils file \
    make gcc gcc-multilib g++-multilib libsdl2-dev libmagic1
    ```

2. Zephyr supports Ubuntu 22.04 LTS and later and needs at least
   CMake 3.20.5, Python 3.10 and devicetree compiler 1.4.6. Check the
   installed versions:

    ```
    cmake --version
    python3 --version
    dtc --version
    ```

    If any of them is older, see [Zephyr's dependency
    instructions](https://docs.zephyrproject.org/4.3.0/develop/getting_started/index.html#install-dependencies).

### Install West

<SetupWestUnix workspace_directory={props.workspace_directory} />

</TabItem>
<TabItem value="macos">

1. Start by installing dependencies with `brew`:

    ```
    brew install cmake ninja gperf python3 python-tk ccache dtc libmagic wget
    ```

### Install West

<SetupWestUnix workspace_directory={props.workspace_directory} />

</TabItem>
<TabItem value="windows">

### Package Manager: Chocolatey

:::tip Using Chocolatey and cmd.exe

The [chocolatey](https://chocolatey.org/) package manager needs to be installed
to fetch software packages required by Zephyr. These instructions must be run in
a `cmd.exe` command prompt. The required commands differ on PowerShell.

:::

1. [Install chocolatey](https://chocolatey.org/install)

2. Open an Administrator `cmd.exe` window:

    * press the Windows key
    * type `cmd.exe`
    * right-click the result, and choose `Run as Administrator`

3. Disable global confirmation to avoid having to confirm the installation of
   individual programs:

    ```shell
    choco feature enable -n allowGlobalConfirmation
    ```

4. Use `choco` to install the required dependencies:

    ```shell
    choco install cmake --installargs 'ADD_CMAKE_TO_PATH=System'
    choco install ninja gperf python git dtc-msys2 wget 7zip
    ```

5. Close the window and open a new `cmd.exe` window **as a regular user** to
   continue

### Install West

<SetupWestWindows workspace_directory={props.workspace_directory} />

</TabItem>
</Tabs>
