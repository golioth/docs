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

import SetupZephyrUnix from '/docs/partials-common/setup-zephyr-unix.md'

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

import SetupWestNRF91Windows from '/docs/hardware/4-nrf91/2-zephyr-quickstart/partials/setup-west-nrf91-windows.md'

<SetupWestNRF91Windows />

</TabItem>
</Tabs>

---
