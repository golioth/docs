---
title: Sign and Flash an Image
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Signing the sample image
This guide only applies to targets other than Nordic. Nordic targets do not require the extra manual step of signing images. The images are automatically signed during the build process.

A key feature of MCUboot is that images must be signed before they can be successfully uploaded and run on a target. To sign images, the MCUboot tool imgtool can be used.

To sign the sample image built previously:

```$ west sign -t imgtool -- --key WEST_ROOT/bootloader/mcuboot/root-rsa-2048.pem```
The above command creates image files called zephyr.signed.bin and zephyr.signed.hex in the build directory.

### Flashing the sample image

Upload the zephyr.signed.bin (or zephyr.signed.hex) file from the previous step to first application image slot of your board (see Flash map for details on flash partitioning). Specify signed image file using --bin-file option, otherwise non-signed version will be used and image won't be runnable:

```$ west flash --bin-file build/zephyr/zephyr.signed.bin --hex-file build/zephyr/zephyr.signed.hex```


