---
title: Build Sample Application
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The next steps will vary slightly based on the target hardware. The final command line argument in the build commands is the directory in which the sample project lives.  This specification will depend upon where the command was executed from in the terminal.  The project is located in `<ProjectRoot\>/modules/lib/golioth/samples/dfu`.

<Tabs
groupId="targets"
defaultValue="nrf9160-feather"
values=
{[
  {label: 'nRF9160 Feather', value: 'nrf9160-feather'},
  {label: 'nRF9160 DK', value: 'nrf9160-dk'},
]}>

<TabItem value="nrf9160-feather">

Build the sample application:

```west build -b circuitdojo_feather_nrf9160_ns samples/dfu -p```

Enter bootloader and use mcumgr to flash firmware (see [mcumgr guide](https://docs.zephyrproject.org/latest/guides/device_mgmt/mcumgr.html#command-line-tool) for installation):

```mcumgr --conntype serial --connstring /dev/ttyUSB,baudrate=1000000 build/zephyr/app_update.bin```

Next the application will be built a second time. The parameter -DCONFIG_MCUBOOT_IMAGE_VERSION will be used to alter the version number assigned to the firmware and will ultimately serve to trigger a firmware download.

```west build -p -b circuitdojo_feather_nrf9160_ns samples/dfu -- -DCONFIG_MCUBOOT_IMAGE_VERSION=\"1.2.3\"```

</TabItem>

<TabItem value="nrf9160-dk">

Build the sample application:

```west build -b nrf9160dk_nrf9160_ns samples/dfu -p```

Flash the firmware with the following command:

```west flash```

Next the application will be built a second time. The parameter -DCONFIG_MCUBOOT_IMAGE_VERSION will be used to alter the version number assigned to the firmware and will ultimately serve to trigger a firmware download.

```west build -p -b nrf9160dk_nrf9160_ns samples/dfu -- -DCONFIG_MCUBOOT_IMAGE_VERSION=\"1.2.3\"```

</TabItem>

</Tabs>

The new binary is located at `build/zephyr/app_update.bin` and can now be used to generate an artifact for the Golioth Cloud.
Follow the [Over-The-Air (OTA) Updates](https://docs.golioth.io/cloud/services/ota) guide using `goliothctl` to complete this step and activate a release campaign.

After the device establishes an active connection with the Golioth Cloud, it will download a firmware update if the version of the firmware release candidate is different from that currently flashed to the device.
