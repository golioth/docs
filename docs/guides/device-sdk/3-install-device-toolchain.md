---
id: install-device-toolchain
title: Install Device Toolchain
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
groupId="arch"
defaultValue="esp32"
values={[
{label: 'Espressif SDK', value: 'esp32'},
{label: 'Nordic SDK', value: 'nrf'},
{label: 'QEMU', value: 'qemu'},
{label: 'Other Boards', value: 'others'},
]}>
<TabItem value="esp32">

#### Install Espressif SDK (ESP-IDF)

You can also follow the [Getting started Guide](https://docs.espressif.com/projects/esp-idf/en/v4.2/esp32/get-started/index.html#installation-step-by-step) from Espressif docs website and install their build tools and SDK.

After installing Espressif's tool, there is a [guide](https://docs.zephyrproject.org/latest/boards/xtensa/esp32/doc/index.html) on Zephyr's website for settings up the correct environment variables to be able to build project targeting an ESP32.
</TabItem>
<TabItem value="nrf">

#### Install ARM Toolchain

You can also follow the Getting started Guide from Zephyr docs website and install the required tools.
</TabItem>
<TabItem value="arm">

#### Install ARM Toolchain

You can also follow the [Getting started Guide](https://docs.zephyrproject.org/latest/getting_started/toolchain_3rd_party_x_compilers.html#gnu-arm-embedded) from Zephyr docs website and install the required tools.
</TabItem>
<TabItem value="qemu">

#### Install QEMU

You can follow the [Install QEMU](https://www.qemu.org/download/) instructions from QEMU website.

### Setup QEMU Networking

See [Networking with QEMU](https://docs.zephyrproject.org/latest/guides/networking/qemu_setup.html#networking-with-qemu) on how to setup networking on host and configure NAT/masquerading to access Internet.

</TabItem>
<TabItem value="others">

Follow more specific instructions for each supported board architecture on [Zephyr Website](https://docs.zephyrproject.org/latest/guides/beyond-GSG.html#gs-toolchain).
</TabItem>
</Tabs>
