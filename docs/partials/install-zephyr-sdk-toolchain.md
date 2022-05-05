import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::note
These directions are mirroring [the Zephyr toolchain install instructions](https://docs.zephyrproject.org/latest/getting_started/index.html#install-a-toolchain). Some directions may be slightly modified to fit your nRF91 / Golioth install.
:::

Download the [latest SDK installer](https://github.com/zephyrproject-rtos/sdk-ng/releases):


<Tabs
groupId="os"
defaultValue="linux"
values={[
{label: 'Linux', value: 'linux'},
{label: 'MacOS', value: 'macos'},
{label: 'Windows', value: 'windows'},
]}>
<TabItem value="linux">

```console
cd ~
wget https://github.com/zephyrproject-rtos/sdk-ng/releases/download/v0.14.1/zephyr-sdk-0.14.1_linux-x86_64.tar.gz
```

Unpack the archive and run the installer. The SDK will be placed in the `~/zephyr-sdk-0.14.1` directory:

```console
tar -xvf zephyr-sdk-0.14.1_linux-x86_64.tar.gz
cd zephyr-sdk-0.14.1
./setup.sh
```

Answer `y` to both of the questions asked during the setup process.

Install udev rules, which allow you to flash most Zephyr boards as a regular user:

```console
sudo cp ~/zephyr-sdk-0.14.1/sysroots/x86_64-pokysdk-linux/usr/share/openocd/contrib/60-openocd.rules /etc/udev/rules.d/
sudo udevadm control --reload
```

</TabItem>
<TabItem value="macos">

```console
cd ~
wget https://github.com/zephyrproject-rtos/sdk-ng/releases/download/v0.14.1/zephyr-sdk-0.14.1_macos-x86_64.tar.gz
```

Unpack the archive and run the installer. The SDK will be placed in the `~/zephyr-sdk-0.14.1` directory:

```console
tar -xvf zephyr-sdk-0.14.1_macos-x86_64.tar.gz
cd zephyr-sdk-0.14.1
./setup.sh
```

</TabItem>
<TabItem value="windows">

[The nRF Connect For Desktop](https://www.nordicsemi.com/Products/Development-tools/nRF-Connect-for-desktop) installer includes a Toolchain Manager section that handles many of the same functions described in the Ubuntu tab. This can be used in conjunction with [the VS Code extension for nRF Connect SDK (NCS)](https://www.nordicsemi.com/Products/Development-tools/nRF-Connect-for-VS-Code). This is the recommended path for Windows users with the nRF9160. 

:::note

Using the VS Code extension in conjuction with the nRF Connect for Desktop tools may move you outside many of the other recommended methods of compiling your firmware, described on this docs page and elsewhere on Golioth. If you're having problems with your Windows install, please contact us on our [Community Discord](https://golioth.io/discord)

:::

</TabItem>
</Tabs>
