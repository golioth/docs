---
title: Over-the-Air (OTA) Upgrade Overview
sidebar_position: 1
slug: /firmware/device-sdk/firmware-upgrade
---

import Deprecated from '/docs/_partials-common/deprecation-warning-zephyr-sdk.md'

<Deprecated/>

This section will guide you through Over-The-Air (OTA) firmware updates for
embedded devices using the Golioth Device Firmware Update (DFU) service. The
Golioth Zephyr SDK includes DFU sample code which runs on all Continuously
Verified Boards. A walkthrough is included here to help you become familiar with
the process. You'll also find an in-depth code review that discusses how the DFU
sample works.

## OTA Overview

### OTA Service Architecture

The following diagram illustrates the architecture of the sample within the
Device SDK architecture. The DFU sample can be found in the [Golioth zephyr-sdk
repository](https://github.com/golioth/golioth-zephyr-sdk/tree/main/samples/dfu).

![Console](../assets/dfu-svg-a4.svg)

### Device Side

The firmware update process is based around the open source
[MCUboot](https://www.mcuboot.com/) project. MCUboot uses multiple flash memory
slots so a newly-downloaded firmware can exist alongside the currently running
firmware. After download the device reboots. The signature of the firmware
binary is verified and the device ensures the new firmware is running properly
(if not it will revert to the known-working copy in the other slot). The update
process completes when the device updates the Golioth servers with the version
number of the newly updated firmware.

### Cloud Side

The Golioth Cloud stores firmware as "artifacts" that can optionally include
tags and blueprints to filter which devices are targeted. For example, you might
tag a few devices as "dev" to test firmware rollouts, or categorize a hardware
blueprint for all of the "nRF9160_asset_tracker" devices in your IoT fleet. A
release is created using the artifact. Devices will automatically see the new
version and begin the update process. Golioth includes a one-click rollback
feature if you ever need to revert a rollout.
