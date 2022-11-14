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

#### 1. Clone the Golioth Firmware SDK repository and update submodules

```console
cd ~
git clone --recursive https://github.com/golioth/golioth-firmware-sdk.git
cd golioth-firmware-sdk
git submodule update --init --recursive
```

</TabItem>

<TabItem value="macos">

#### 1. Clone the Golioth Firmware SDK repository and update submodules

```console
cd ~
git clone --recursive https://github.com/golioth/golioth-firmware-sdk.git
cd golioth-firmware-sdk
git submodule update --init --recursive
```

</TabItem>

<TabItem value="windows">

#### 1. Clone the Golioth Firmware SDK repository and update submodules

```console
cd %HOMEPATH%
git clone --recursive https://github.com/golioth/golioth-firmware-sdk.git
cd golioth-firmware-sdk
git submodule update --init --recursive
```

</TabItem>
</Tabs>
