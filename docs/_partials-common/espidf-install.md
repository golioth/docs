import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import EspIdfVer from '!!raw-loader!/docs/_versions/esp-idf.md';

<Tabs
groupId="os"
defaultValue="linux"
values={[
{label: 'Linux', value: 'linux'},
{label: 'MacOS', value: 'macos'},
{label: 'Windows', value: 'windows'},
]}>

<TabItem value="linux">

#### 1. Install dependencies

```
sudo apt update
sudo apt-get install git wget flex bison gperf python3 python3-venv \
  python3-pip python3-setuptools cmake ninja-build ccache libffi-dev \
  libssl-dev dfu-util libusb-1.0-0
```

#### 2. Clone the ESP-IDF Repository and set up the tools

<CodeBlock language="console">
    { `mkdir -p ~/esp` + "\n" }
    { `cd ~/esp` + "\n" }
    { `git clone --recursive https://github.com/espressif/esp-idf.git -b ${EspIdfVer.replace(/(\n)/gm, "")}` + "\n" }
    { `cd esp-idf` + "\n" }
    { `./install.sh all` }
</CodeBlock>

</TabItem>
<TabItem value="macos">

#### 1. Install dependencies

```console
brew install cmake ninja dfu-util python3
```

```console
sudo easy_install pip
```

#### 2. Clone the ESP-IDF repository and set up the tools

<CodeBlock language="console">
    { `mkdir -p ~/esp` + "\n" }
    { `cd ~/esp` + "\n" }
    { `git clone --recursive https://github.com/espressif/esp-idf.git -b ${EspIdfVer.replace(/(\n)/gm, "")}` + "\n" }
    { `cd esp-idf` + "\n" }
    { `./install.sh all` }
</CodeBlock>

</TabItem>
<TabItem value="windows">

#### 1. Use the ESP-IDF Installer

:::note
Espressif provides [comprehensive instructions for installing ESP-IDF for
Windows](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/get-started/index.html#setting-up-development-environment).
It recommends [using the ESP-IDF Tools Installer](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/get-started/windows-setup.html#get-started-windows-tools-installer) which installs and configures all required ESP-IDF tools for Windows systems.
:::

</TabItem>
</Tabs>
