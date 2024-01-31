import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import ZephyrSdkNgVer from '!!raw-loader!/docs/_versions/zephyr-project-sdk-ng.md';

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

<CodeBlock language="console">
{
`cd ~
wget https://github.com/zephyrproject-rtos/sdk-ng/releases/download/v${ZephyrSdkNgVer.replace(/(\n)/gm, "")}/zephyr-sdk-${ZephyrSdkNgVer.replace(/(\n)/gm, "")}_linux-x86_64.tar.xz`
}
</CodeBlock>

Unpack the archive and run the installer. The SDK will be placed in the <code>~/zephyr-sdk-{ZephyrSdkNgVer.replace(/(\n)/gm, "")}</code> directory:

<CodeBlock language="console">
{
`tar -xvf zephyr-sdk-${ZephyrSdkNgVer.replace(/(\n)/gm, "")}_linux-x86_64.tar.xz
cd zephyr-sdk-${ZephyrSdkNgVer.replace(/(\n)/gm, "")}
./setup.sh`
}
</CodeBlock>

Answer `y` to both of the questions asked during the setup process.

Install udev rules, which allow you to flash most Zephyr boards as a regular user:

<CodeBlock language="console">
{
`sudo cp ~/zephyr-sdk-${ZephyrSdkNgVer.replace(/(\n)/gm, "")}/sysroots/x86_64-pokysdk-linux/usr/share/openocd/contrib/60-openocd.rules /etc/udev/rules.d
sudo udevadm control --reload`
}
</CodeBlock>

</TabItem>
<TabItem value="macos">

<CodeBlock language="console">
{
`cd ~
wget https://github.com/zephyrproject-rtos/sdk-ng/releases/download/v${ZephyrSdkNgVer.replace(/(\n)/gm, "")}/zephyr-sdk-${ZephyrSdkNgVer.replace(/(\n)/gm, "")}_macos-x86_64.tar.xz`
}
</CodeBlock>

Unpack the archive and run the installer. The SDK will be placed in the <code>~/zephyr-sdk-{ZephyrSdkNgVer.replace(/(\n)/gm, "")}</code> directory:

<CodeBlock language="console">
{
`tar xvf zephyr-sdk-${ZephyrSdkNgVer.replace(/(\n)/gm, "")}_macos-x86_64.tar.xz
cd zephyr-sdk-${ZephyrSdkNgVer.replace(/(\n)/gm, "")}
./setup.sh`
}
</CodeBlock>

</TabItem>
<TabItem value="windows">

Unpack the archive and run the installer. The SDK will be placed in the <code>%HOMEPATH%\zephyr-sdk-{ZephyrSdkNgVer.replace(/(\n)/gm, "")}</code> directory:

<CodeBlock language="console">
{
`cd %HOMEPATH%
wget https://github.com/zephyrproject-rtos/sdk-ng/releases/download/v${ZephyrSdkNgVer.replace(/(\n)/gm, "")}/zephyr-sdk-${ZephyrSdkNgVer.replace(/(\n)/gm, "")}_windows-x86_64.7z
7z x zephyr-sdk-${ZephyrSdkNgVer.replace(/(\n)/gm, "")}_windows-x86_64.7z
cd zephyr-sdk-${ZephyrSdkNgVer.replace(/(\n)/gm, "")}
setup.cmd`
}
</CodeBlock>

Answer `y` to both of the questions asked during the setup process.

</TabItem>
</Tabs>
