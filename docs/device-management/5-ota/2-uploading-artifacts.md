---
id: uploading-artifacts
title: Uploading Artifacts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

On the device side, the [Golioth Firmware
SDK](https://github.com/golioth/golioth-firmware-sdk) relies on MCUboot, an open
source bootloader. Valid MCUboot compatible images will be identified as such
when uploaded to Golioth.

:::note

You can find more information about MCUboot in the [MCUboot Github
Repository](https://github.com/mcu-tools/mcuboot).

:::

We provide a [firmware update sample
application](https://github.com/golioth/golioth-firmware-sdk/tree/main/examples/zephyr/fw_update)
that can be used to test our OTA service. The sample listens for new release
notifications from our backend and automatically downloads and installs them
with MCUboot.

Follow [the Firmware OTA Upgrade
guide](/firmware/golioth-firmware-sdk/firmware-upgrade/firmware-upgrade) to
build the sample application for your target board.

## Uploading an Artifact to the Golioth server


<Tabs
groupId="web_or_cli"
defaultValue="web"
values={[
{label: 'Web Console', value: 'web'},
{label: 'CLI', value: 'cli'},
]}>

<TabItem value="web">

1. Navigate to [the Artifacts section](https://console.golioth.io/artifacts) of
   the Golioth Web Console
2. Click the `Create Artifact` button
3. Fill in the relevant information
    - Optional: select a device Blueprint.
    - Choose a Package ID (use the default of `main` for firmware updates)
    - Input your Artifact Version (eg: `1.2.3`)
    - Choose the binary you want to upload

    ![Creating an Artifact](./assets/web-console-create-artifact.png)

4. Click the `Upload Artifact` button and the new artifact will appear in the
   artifacts list:

    ![Artifacts list](./assets/web-console-artifact-list.png)

</TabItem>

<TabItem value="cli">

Then you can upload to our backend using the following command:

```
# assuming you have a blueprint name nrf91
$ goliothctl dfu artifact create ./build/zephyr/app_update.bin --version 1.0.1 --blueprint nrf91
# Withouth a blueprint
$ goliothctl dfu artifact create ./build/zephyr/app_update.bin --version 1.0.1
```

Now you can see version `1.0.0` in the artifacts list using the `goliothctl dfu
artifact list` command:

```
$ goliothctl dfu artifact list
id:"616880956c69662e1083286f" version:"1.0.1" package:"main" size:283446 blueprint:"nrf91" binaryInfo:map[digests:map[sha256:map[digest:b4a32a41a2f61221e9f1148e778f8d6406beea3ab9b854e929e4b34945fff578 size:32 type:sha256]] headerSize:512 imageSize:282784 tlvTotalSize:150 type:mcuboot version:1.0.1]
id:"6168783e6c69662e1083286a" version:"1.0.1" package:"main" size:217724 binaryInfo:map[digests:map[sha256:map[digest:e1eefc0f4ccf30635bad2079f154f662f80b294c3be03ca7605edcf13bc9e9f4 size:32 type:sha256]] headerSize:512 imageSize:216876 tlvTotalSize:336 type:mcuboot version:1.0.1]
```

</TabItem>
</Tabs>
