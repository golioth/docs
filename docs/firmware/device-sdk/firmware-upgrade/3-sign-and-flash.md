---
title: Sign and Flash an Image
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Signing the sample image

A key feature of MCUboot is that images must be signed before they can be successfully uploaded and run on a target. To sign images, the MCUboot tool imgtool can be used.

:::note
This guide only applies to targets other than Nordic. Images for Nordic targets are automatically signed during the build process and do not require an extra manual step for signing.
:::

To sign the sample image built previously:

```west sign -t imgtool -- --key WEST_ROOT/bootloader/mcuboot/root-rsa-2048.pem```

The image files `zephyr.signed.bin` and `zephyr.signed.hex` will be created in the build directory.

### Flashing the sample image

Upload the `zephyr.signed.bin` (or `zephyr.signed.hex`) file from the previous step to first application image slot of your board (see Flash map for details on flash partitioning). Specify signed image file using the `--bin-file` option, otherwise the non-signed version will be used and image won't be runnable:

```west flash --bin-file build/zephyr/zephyr.signed.bin --hex-file build/zephyr/zephyr.signed.hex```
