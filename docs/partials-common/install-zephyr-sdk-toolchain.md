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
wget https://github.com/zephyrproject-rtos/sdk-ng/releases/download/v0.16.3/zephyr-sdk-0.16.3_linux-x86_64.tar.xz
```

Unpack the archive and run the installer. The SDK will be placed in the `~/zephyr-sdk-0.16.3` directory:

```console
tar -xvf zephyr-sdk-0.16.3_linux-x86_64.tar.xz
cd zephyr-sdk-0.16.3
./setup.sh
```

Answer `y` to both of the questions asked during the setup process.

Install udev rules, which allow you to flash most Zephyr boards as a regular user:

```console
sudo cp ~/zephyr-sdk-0.16.3/sysroots/x86_64-pokysdk-linux/usr/share/openocd/contrib/60-openocd.rules /etc/udev/rules.d
sudo udevadm control --reload
```

</TabItem>
<TabItem value="macos">

```console
cd ~
wget https://github.com/zephyrproject-rtos/sdk-ng/releases/download/v0.16.3/zephyr-sdk-0.16.3_macos-x86_64.tar.xz
```

Unpack the archive and run the installer. The SDK will be placed in the `~/zephyr-sdk-0.15.2` directory:

```console
tar xvf zephyr-sdk-0.16.3_macos-x86_64.tar.xz
cd zephyr-sdk-0.16.3
./setup.sh
```

</TabItem>
<TabItem value="windows">

Unpack the archive and run the installer. The SDK will be placed in the `%HOMEPATH%\zephyr-sdk-0.15.2` directory:

```console
cd %HOMEPATH%
wget https://github.com/zephyrproject-rtos/sdk-ng/releases/download/v0.16.3/zephyr-sdk-0.16.3_windows-x86_64.7z
7z x zephyr-sdk-0.16.3_windows-x86_64.7z
cd zephyr-sdk-0.16.3
setup.cmd
```

Answer `y` to both of the questions asked during the setup process.

</TabItem>
</Tabs>
