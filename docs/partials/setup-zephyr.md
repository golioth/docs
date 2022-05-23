import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`west` is the Zephyr "meta tool" that will allow you to build firmware, install packages, and flash firmware. There are various dependencies required, depending upon your operating system (OS), because `west` is Python based.

*Choose your OS from the tabs below*

<Tabs
groupId="os"
defaultValue="linux"
values={[
{label: 'Linux', value: 'linux'},
{label: 'MacOS', value: 'macos'},
{label: 'Windows', value: 'windows'},
]}>

import SetupZephyrUnix from './setup-zephyr-unix.md'

<TabItem value="linux">

Install dependencies with `apt`:

```
sudo apt update
sudo apt install --no-install-recommends git cmake ninja-build gperf \
  ccache dfu-util device-tree-compiler wget \
  python3-dev python3-pip python3-setuptools python3-tk python3-wheel xz-utils file \
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

<SetupZephyrUnix />

</TabItem>
<TabItem value="macos">

Start by installing dependencies with `brew`:

```
brew install cmake ninja gperf python3 ccache qemu dtc
```

<SetupZephyrUnix />

</TabItem>
<TabItem value="windows">

### Install Dependencies

#### Python3

1. Open the command line by hitting the Windows key, typing `cmd.exe` and pressing enter.
2. Type `python3`
3. If python3 is installed, the interpreter will open and display the version. Type `exit()` to exit.
4. If python3 is not installed, the Windows Store will automatically open and offer to install it.
    * Test it: Go back to to the command line, type `python3` to launch then interpreter, `exit()` to exit. 
    * Alternatively you can [download Python3 directly](https://www.python.org/downloads/windows/) and install it manually.

#### Package Manager: Chocolatey

The [chocolatey](https://chocolatey.org/) package manager needs to be installed to fetch software packages required by Zephyr.

1. Open the command line as an Administrator:
    1. Press the windows key and type `cmd.exe` (do not press enter)
    2. Use the mouse to click on "Run as administrator"
2. Run Powershell and [install Chocolately](https://chocolatey.org/install):

    ```console
    powershell.exe
    ```

    ```console
    > Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
    > exit
    ```

    This command may take a few minutes to complete.

3. Disable global confirmation and use `choco` to install remaining dependencies:

    ```console
    choco feature enable -n allowGlobalConfirmation
    choco install cmake --installargs 'ADD_CMAKE_TO_PATH=System'
    choco install ninja gperf python git dtc-msys2 wget unzip
    ```

4. Type `exit` to close the console window, we no longer need administrator privileges.

### Install West

`west` is the Zephyr "meta tool" that will allow you to build firmware, install packages, and flash firmware. There are various dependencies required, depending upon your operating system (OS), because `west` is Python based.

import SetupZephyrWindows from './setup-zephyr-windows.md'

<SetupZephyrWindows />

</TabItem>
</Tabs>
