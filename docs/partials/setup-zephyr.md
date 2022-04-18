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

:::caution
Please follow the [*Windows Addendum: Set up Zephyr for ESP32*](hardware/3-esp32/2-quickstart/5-windows.md) page for instructions on installing the toolchain on Windows machines.
:::

</TabItem>
</Tabs>

---
