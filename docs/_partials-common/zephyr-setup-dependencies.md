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

Install dependencies with `apt`:

```
sudo apt update
sudo apt install --no-install-recommends git cmake ninja-build gperf \
  ccache dfu-util device-tree-compiler wget python3-dev python3-pip \
  python3-setuptools python3-tk python3-venv python3-wheel xz-utils file \
  make gcc gcc-multilib g++-multilib libsdl2-dev
```

West requires CMake version 3.20.0 or higher. Check the version that your package manager installed:

```
$ cmake --version
cmake version 3.16.3
```

If you have an older version, Ubuntu 20.04 systems can add the Kitware repository which maintains the newest release:

```
wget -O - https://apt.kitware.com/keys/kitware-archive-latest.asc 2>/dev/null | sudo apt-key add -
sudo apt-add-repository 'deb https://apt.kitware.com/ubuntu/ focal main'
sudo apt update
sudo apt install cmake
cmake --version
```

If the Kitware repository doesn't work for you (ie: your system is not running Ubuntu 20.04), you can [build the stable version of CMake from source](https://cmake.org/install/).

### Install West

<SetupWestUnix workspace_directory={props.workspace_directory} />

</TabItem>
<TabItem value="macos">

Start by installing dependencies with `brew`:

```
brew install cmake ninja gperf python3 ccache qemu dtc
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
