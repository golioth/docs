import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import FirmwareSdkVer from '!!raw-loader!/docs/_versions/golioth-firmware-sdk.md';

<Tabs
groupId="os"
defaultValue="linux"
values={[
{label: 'Linux', value: 'linux'},
{label: 'MacOS', value: 'macos'},
{label: 'Windows', value: 'windows'},
]}>

<TabItem value="linux">

#### Clone the Golioth Firmware SDK repository and update submodules recursively

<CodeBlock language="console">
{
`cd ~
git clone --recursive https://github.com/golioth/golioth-firmware-sdk.git -b ${FirmwareSdkVer.replace(/(\n)/gm, "")}`
}
</CodeBlock>

</TabItem>

<TabItem value="macos">

#### Clone the Golioth Firmware SDK repository and update submodules

<CodeBlock language="console">
{
`cd ~
git clone --recursive https://github.com/golioth/golioth-firmware-sdk.git -b ${FirmwareSdkVer.replace(/(\n)/gm, "")}`
}
</CodeBlock>

</TabItem>

<TabItem value="windows">

#### Clone the Golioth Firmware SDK repository and update submodules


<CodeBlock language="console">
{
`cd %HOMEPATH%
git clone --recursive https://github.com/golioth/golioth-firmware-sdk.git -b ${FirmwareSdkVer.replace(/(\n)/gm, "")}`
}
</CodeBlock>

</TabItem>
</Tabs>
