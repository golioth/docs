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

[The nRF Connect For Desktop](https://www.nordicsemi.com/Products/Development-tools/nRF-Connect-for-desktop) installer includes a Toolchain Manager section that handles many of the same functions described in the Ubuntu tab. This can be used in conjunction with [the VS Code extension for nRF Connect SDK (NCS)](https://www.nordicsemi.com/Products/Development-tools/nRF-Connect-for-VS-Code). This is the recommended path for Windows users with the nRF9160. 

:::note

Using the VS Code extension in conjuction with the nRF Connect for Desktop tools may move you outside many of the other recommended methods of compiling your firmware, described on this docs page and elsewhere on Golioth. If you're having problems with your Windows install, please contact us on our [Community Discord](https://golioth.io/discord)

:::

</TabItem>
</Tabs>

---
