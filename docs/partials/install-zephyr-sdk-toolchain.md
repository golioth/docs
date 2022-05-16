import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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
wget https://github.com/zephyrproject-rtos/sdk-ng/releases/download/v0.14.2/zephyr-sdk-0.14.2_linux-x86_64.tar.gz
```

Unpack the archive and run the installer. The SDK will be placed in the `~/zephyr-sdk-0.14.2` directory:

```console
tar -xvf zephyr-sdk-0.14.2_linux-x86_64.tar.gz
cd zephyr-sdk-0.14.2
./setup.sh
```

Answer `y` to both of the questions asked during the setup process.

Install udev rules, which allow you to flash most Zephyr boards as a regular user:

```console
sudo cp ~/zephyr-sdk-0.14.2/sysroots/x86_64-pokysdk-linux/usr/share/openocd/contrib/60-openocd.rules /etc/udev/rules.d/
sudo udevadm control --reload
```

</TabItem>
<TabItem value="macos">

```console
cd ~
wget https://github.com/zephyrproject-rtos/sdk-ng/releases/download/v0.14.2/zephyr-sdk-0.14.2_macos-x86_64.tar.gz
```

Unpack the archive and run the installer. The SDK will be placed in the `~/zephyr-sdk-0.14.2` directory:

```console
tar -xvf zephyr-sdk-0.14.2_macos-x86_64.tar.gz
cd zephyr-sdk-0.14.2
./setup.sh
```

</TabItem>
<TabItem value="windows">

Unpack the archive and run the installer. The SDK will be placed in the `%HOMEPATH%\zephyr-sdk-0.14.2` directory:

```console
cd %HOMEPATH%
wget https://github.com/zephyrproject-rtos/sdk-ng/releases/download/v0.14.2/zephyr-sdk-0.14.2_windows-x86_64.zip
unzip zephyr-sdk-0.14.2_windows-x86_64.zip
cd zephyr-sdk-0.14.2
setup.cmd
```

Answer `y` to both of the questions asked during the setup process.

:::

</TabItem>
</Tabs>
