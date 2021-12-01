---
title: Introduction
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This is a guide to implementing firmware updates for embedded devices using the Golioth Device Firmware Update (DFU) service. It is recommended but not necessary to become familiar with the individual components involved in the service which are described in the DFU overview document in detail. Working through the Getting Started Guide is also a prerequisite to ensure that the necessary tooling is place to build and implement this solution.

The steps to implementation are as follows:
* Create a device with credentials in the Golioth console
* Build and flash MCUBoot for the target board
  * If building firmware using the Nordic SDK, this step is integrated into the application build
  * If building firmware using stock Zephyr and/or custom targets, this step will be done separately.
* Build and flash the application utilizing the DFU API applying the device credentials created earlier to the appropriate 
* Build (but don't flash) the application specifying an alternative firmware image version from the previous. 
* Upload the alternative image version to Golioth Console and prepare it for release
* The active application running the DFU service will automatically download the release candidate and update the firmware.




