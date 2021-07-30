:::note
More detailed (and specific to more systems) instructions for installing
QEMU can be found on the [Download QEMU](https://www.qemu.org/download/)
page on the QEMU website and for setting up networking on the
[Networking with QEMU](https://docs.zephyrproject.org/latest/guides/networking/qemu_setup.html#networking-with-qemu)
page on the Zephyr docs website.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
groupId="os"
defaultValue="linux"
values={[
{label: 'Linux', value: 'linux'},
{label: 'MacOS', value: 'macos'},
{label: 'Windows', value: 'windows'},
]}>
<TabItem value="linux">

#### Install QEMU

```
sudo apt install qemu
```

#### Setup Networking Support

Install the necessary tooling:

```
sudo apt install libpcap-dev autoconf automake libtool socat net-tools
```

Then, compile the zephyr fork of net-tools:

```
git clone https://github.com/zephyrproject-rtos/net-tools
cd net-tools
make
```

:::note
We're working hard to improve the user-experience here
:::

Now, open two additional terminals (three in total).
In terminals 2 and 3, `cd` to the `net-tools` directory that you just cloned.

In terminal 2, run:

```
./loop-socat.sh
```

In terminal 3, run:

```
sudo ./loop-slip-tap.sh
```

In terminal 1, run:

```
sudo iptables -t nat -A POSTROUTING -j MASQUERADE -s 192.0.2.1
sudo sysctl -w net.ipv4.ip_forward=1
```

</TabItem>
<TabItem value="macos">

#### Install QEMU

```
brew install qemu
```

#### Setup Networking Support

:::info
QEMU on MacOS does not current support the necessary networking features for simulating a
network-based Zephyr application.
See [this issue](https://github.com/zephyrproject-rtos/zephyr/issues/15738) for more information. 
:::

</TabItem>
<TabItem value="windows">

:::info
While Windows is supported by Zephyr and QEMU, Golioth does not yet have instructions for
Windows.
:::

</TabItem>
</Tabs>

---
