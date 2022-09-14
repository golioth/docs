---
id: set-up-zephyr
title: Set up Zephyr for i.MX RT1060
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Golioth can be added to a device with _Device SDKs_ which are based on different embedded Operating Systems. Currently Golioth targets the [Zephyr Project](https://www.zephyrproject.org/) and builds upon the APIs & tools of Zephyr. As such, prior experience with Zephyr will be helpful when working with Golioth's Zephyr Device SDK. Refer to Zephyr's [detailed documentation](https://docs.zephyrproject.org/) when running into issues.

### Install West

import SetupZephyr from '/docs/partials/setup-zephyr.md'

<SetupZephyr/>

### Install Golioth Zephyr SDK

import InstallZephyrSDK from '/docs/partials/install-zephyr-sdk.md'

<InstallZephyrSDK/>

### Installing the Zephyr SDK Toolchain

import InstallZephyrSDKtoolchain from '/docs/partials/install-zephyr-sdk-toolchain.md'

<InstallZephyrSDKtoolchain/>

### Sample build

Your system is all set up and ready to start building & flashing with Zephyr. Verify by building a minimal sample:

<Tabs
groupId="os"
defaultValue="linux"
values={[
{label: 'Linux', value: 'linux'},
{label: 'MacOS', value: 'macos'},
{label: 'Windows', value: 'windows'},
]}>

<TabItem value="linux">

```shell
cd ~/golioth-zephyr-workspace/zephyr
west build -b esp32 samples/basic/minimal -p
```

</TabItem>
<TabItem value="macos">

```shell
cd ~/golioth-zephyr-workspace/zephyr
west build -b esp32 samples/basic/minimal -p
```

</TabItem>
<TabItem value="windows">

1. Verify by building a minimal sample:

    ```shell
    cd C:\golioth-zephyr-workspace\zephyr
    west build -b esp32 samples\basic\minimal -p
    ```

</TabItem>
</Tabs>
